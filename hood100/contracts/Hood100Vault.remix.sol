// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Hood100Vault
/// @notice LetsCash fee recipient for $HOOD100 on Robinhood Chain (4663).
///         5% tax: 0.3% LetsCash, 0.7% team, 4% index.
///         Inbound 4.7% → teamBps 1489. Inbound 4% only → teamBps 0.
///         Ranking / snapshot / merkle tree: keeper, off-chain.
///         Claims: OpenZeppelin sorted merkle, 20 tokens per tx.

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
}

contract Hood100Vault {
    uint64 public constant EPOCH = 3 hours;
    uint16 public constant MAX_CLAIM = 20;

    address public owner;
    address public keeper;
    address public team;
    address public hood;
    uint16 public teamBps;
    uint64 public epoch;
    uint64 public epochEndsAt;
    uint256 public indexWei;
    uint256 public teamWei;

    uint256 private locked;

    mapping(address => bool) public router;
    mapping(uint64 => bytes32) public rootOf;
    mapping(uint64 => bool) public settled;
    mapping(uint64 => mapping(address => mapping(address => bool))) public claimed;

    event Ownership(address indexed who);
    event KeeperSet(address indexed who);
    event TeamSet(address indexed who);
    event HoodSet(address indexed token);
    event Router(address indexed who, bool ok);
    event Inbound(uint256 value, uint256 toTeam, uint256 toIndex);
    event TeamPaid(uint256 value);
    event Bought(address indexed to, uint256 ethIn, uint256 indexLeft);
    event EpochSettled(uint64 indexed e, bytes32 root, uint256 indexLeft);
    event Claimed(uint64 indexed e, address indexed who, address indexed token, uint256 amount);

    error Auth();
    error Early();
    error Settled();
    error Bad();
    error Proof();
    error Taken();

    modifier onlyOwner() {
        if (msg.sender != owner) revert Auth();
        _;
    }

    modifier onlyKeeper() {
        if (msg.sender != keeper) revert Auth();
        _;
    }

    constructor(address team_, address keeper_, uint16 teamBps_) {
        if (team_ == address(0) || keeper_ == address(0)) revert Bad();
        if (teamBps_ > 4_000) revert Bad();
        owner = msg.sender;
        team = team_;
        keeper = keeper_;
        teamBps = teamBps_;
        epoch = 1;
        epochEndsAt = uint64(block.timestamp) + EPOCH;
    }

    receive() external payable {
        if (locked == 1) {
            indexWei += msg.value;
            return;
        }
        _split(msg.value);
    }

    function _split(uint256 value) internal {
        if (value == 0) return;
        uint256 cut = (value * teamBps) / 10_000;
        teamWei += cut;
        indexWei += value - cut;
        emit Inbound(value, cut, value - cut);
    }

    function pullTeam() external {
        uint256 v = teamWei;
        if (v == 0) revert Bad();
        teamWei = 0;
        (bool ok, ) = team.call{value: v}("");
        if (!ok) revert Bad();
        emit TeamPaid(v);
    }

    function setOwner(address who) external onlyOwner {
        if (who == address(0)) revert Bad();
        owner = who;
        emit Ownership(who);
    }

    function setKeeper(address who) external onlyOwner {
        if (who == address(0)) revert Bad();
        keeper = who;
        emit KeeperSet(who);
    }

    function setTeam(address who) external onlyOwner {
        if (who == address(0)) revert Bad();
        team = who;
        emit TeamSet(who);
    }

    function setHood(address token) external onlyOwner {
        if (token == address(0)) revert Bad();
        hood = token;
        emit HoodSet(token);
    }

    function setTeamBps(uint16 bps) external onlyOwner {
        if (bps > 4_000) revert Bad();
        teamBps = bps;
    }

    function setRouter(address who, bool ok) external onlyOwner {
        router[who] = ok;
        emit Router(who, ok);
    }

    /// @notice One AMM hop. Swap recipient must be this vault.
    ///         Router refunds during the call go back to indexWei, not team.
    function buy(address to, bytes calldata data, uint256 value) external onlyKeeper {
        if (!router[to]) revert Auth();
        if (value == 0 || value > indexWei) revert Bad();
        indexWei -= value;
        locked = 1;
        (bool ok, ) = to.call{value: value}(data);
        locked = 0;
        if (!ok) revert Bad();
        emit Bought(to, value, indexWei);
    }

    function settleEpoch(bytes32 root) external onlyKeeper {
        if (block.timestamp < epochEndsAt) revert Early();
        uint64 e = epoch;
        if (settled[e]) revert Settled();
        if (root == bytes32(0)) revert Bad();
        settled[e] = true;
        rootOf[e] = root;
        emit EpochSettled(e, root, indexWei);
        epoch = e + 1;
        if (block.timestamp < epochEndsAt + EPOCH) {
            epochEndsAt = epochEndsAt + EPOCH;
        } else {
            epochEndsAt = uint64(block.timestamp) + EPOCH;
        }
    }

    /// @notice Leaf = keccak256(bytes.concat(keccak256(abi.encode(who, e, token, amount))))
    function claim(
        uint64 e,
        address[] calldata tokens,
        uint256[] calldata amounts,
        bytes32[][] calldata proofs
    ) external {
        if (!settled[e]) revert Early();
        uint256 n = tokens.length;
        if (n == 0 || n > MAX_CLAIM || n != amounts.length || n != proofs.length) revert Bad();
        bytes32 root = rootOf[e];
        address who = msg.sender;
        for (uint256 i; i < n; i++) {
            _claimOne(e, who, tokens[i], amounts[i], proofs[i], root);
        }
    }

    function _claimOne(
        uint64 e,
        address who,
        address t,
        uint256 a,
        bytes32[] calldata proof,
        bytes32 root
    ) internal {
        if (t == address(0)) revert Bad();
        if (claimed[e][who][t]) revert Taken();
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(who, e, t, a))));
        if (!_verify(proof, root, leaf)) revert Proof();
        claimed[e][who][t] = true;
        if (a == 0) {
            emit Claimed(e, who, t, 0);
            return;
        }
        _safeTransfer(t, who, a);
        emit Claimed(e, who, t, a);
    }

    function _verify(bytes32[] calldata proof, bytes32 root, bytes32 leaf) internal pure returns (bool) {
        bytes32 h = leaf;
        for (uint256 i; i < proof.length; i++) {
            bytes32 p = proof[i];
            h = h < p ? keccak256(abi.encodePacked(h, p)) : keccak256(abi.encodePacked(p, h));
        }
        return h == root;
    }

    function _safeTransfer(address token, address to, uint256 amount) internal {
        (bool ok, bytes memory data) = token.call(abi.encodeWithSelector(IERC20.transfer.selector, to, amount));
        if (!ok || (data.length != 0 && !abi.decode(data, (bool)))) revert Bad();
    }

    function rescue(address token, address to, uint256 amount) external onlyOwner {
        if (to == address(0)) revert Bad();
        if (token == address(0)) {
            uint256 liq = address(this).balance - teamWei;
            if (amount > liq) revert Bad();
            if (amount > indexWei) indexWei = 0;
            else indexWei -= amount;
            (bool ok, ) = to.call{value: amount}("");
            if (!ok) revert Bad();
        } else {
            _safeTransfer(token, to, amount);
        }
    }
}
