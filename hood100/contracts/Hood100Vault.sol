// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Hood100Vault
/// @notice LetsCash fee recipient. 5% on the token: 0.3% platform (kept by
///         LetsCash), 0.7% team, 4% index. If LetsCash forwards 4.7% ETH here,
///         teamBps (default 1489) skims 0.7/4.7 and the rest is the index pot.
///         Top-100 buys happen off this contract via the keeper + an allowlisted
///         router. Holders claim in-kind with a merkle proof (push of 100
///         tokens does not fit in one epoch). Original work — not a clone.

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Hood100Vault {
    uint64 public constant EPOCH = 3 hours;
    uint16 public constant MAX_CONSTITUENTS = 100;
    uint16 public constant MAX_CLAIM = 20;

    address public owner;
    address public keeper;
    address public team;
    address public hood; // HOOD100 token, set after LetsCash mint
    uint16 public teamBps; // of inbound ETH. 1489 ≈ 0.7/4.7. 0 if vault gets only 4%.
    uint64 public epoch;
    uint64 public epochEndsAt;
    uint256 public indexWei;

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
    event Bought(address indexed token, uint256 ethIn, uint256 dust);
    event EpochSettled(uint64 indexed e, bytes32 root, uint256 indexLeft);
    event Claimed(uint64 indexed e, address indexed who, address indexed token, uint256 amount);

    error Auth();
    error Early();
    error Settled();
    error Bad();
    error Proof();
    error Taken();
    error Zero();

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
        _split(msg.value);
    }

    function _split(uint256 value) internal {
        if (value == 0) return;
        uint256 cut = (value * teamBps) / 10_000;
        uint256 rest = value - cut;
        indexWei += rest;
        if (cut > 0) {
            (bool ok, ) = team.call{value: cut}("");
            if (!ok) revert Bad();
        }
        emit Inbound(value, cut, rest);
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

    /// @notice Keeper spends index ETH through an allowlisted router (one hop).
    ///         Repeat up to 100 times per epoch. Tokens stay in this vault.
    function buy(address to, bytes calldata data, uint256 value) external onlyKeeper {
        if (!router[to]) revert Auth();
        if (value == 0 || value > indexWei) revert Bad();
        indexWei -= value;
        (bool ok, ) = to.call{value: value}(data);
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

    /// @notice In-kind claim. One leaf per (wallet, epoch, token, amount).
    ///         Batch up to MAX_CLAIM tokens per call. Holder pays gas.
    function claim(
        uint64 e,
        address[] calldata tokens,
        uint256[] calldata amounts,
        bytes32[][] calldata proofs
    ) external {
        if (!settled[e]) revert Early();
        uint256 n = tokens.length;
        if (n == 0 || n > MAX_CLAIM || n != amounts.length || n != proofs.length) revert Bad();
        address who = msg.sender;
        for (uint256 i; i < n; i++) {
            address t = tokens[i];
            uint256 a = amounts[i];
            if (t == address(0)) revert Bad();
            if (claimed[e][who][t]) revert Taken();
            bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encodePacked(who, e, t, a))));
            if (!_verify(proofs[i], rootOf[e], leaf)) revert Proof();
            claimed[e][who][t] = true;
            if (a == 0) {
                emit Claimed(e, who, t, 0);
                continue;
            }
            if (!IERC20(t).transfer(who, a)) revert Bad();
            emit Claimed(e, who, t, a);
        }
    }

    function _verify(bytes32[] calldata proof, bytes32 root, bytes32 leaf) internal pure returns (bool) {
        bytes32 h = leaf;
        for (uint256 i; i < proof.length; i++) {
            bytes32 p = proof[i];
            if (h <= p) h = keccak256(abi.encodePacked(h, p));
            else h = keccak256(abi.encodePacked(p, h));
        }
        return h == root;
    }

    function rescue(address token, address to, uint256 amount) external onlyOwner {
        if (to == address(0)) revert Bad();
        if (token == address(0)) {
            (bool ok, ) = to.call{value: amount}("");
            if (!ok) revert Bad();
        } else if (!IERC20(token).transfer(to, amount)) revert Bad();
    }
}
