# Hood100

Robinhood Chain index. LetsCash 5%:

- 0.3% LetsCash
- 0.7% team
- 4.0% this vault (ETH in → top-100 in-kind)

Not a copy of anyone’s site. Merkle claim (100-token push will not settle).

## Deploy order (Remix, chain 4663)

1. `Hood100Vault.sol` — Solidity 0.8.24, optimizer 200.
   - `team_` = your Safe / EOA
   - `keeper_` = crank EOA
   - `teamBps_` = `1489` if LetsCash sends **4.7%** here (0.7/4.7).  
     `0` if LetsCash can send **only 4%** here and 0.7% already goes to team.
2. Verify on Blockscout.
3. `setRouter(uniswapRouter, true)` — only then can the keeper `buy`.
4. LetsCash: ticker `HOOD100`, 5% tax, **fee recipient = vault**.
5. Paste token CA → `setHood(token)`.
6. Crank (off-chain, your Mac / Railway):
   - every 3h UTC: if indexWei covers 100 hops + merkle gas
   - rank tokens by **quote liquidity**, one seat, skip HOOD100 / LP / burn
   - floor: skip names below your min liquidity
   - `buy` up to 100 hops (tokens land in the vault)
   - snapshot holders with ≥ 0.01% supply
   - leaf = `keccak256(abi.encodePacked(wallet, epoch, token, amount))` then standard OpenZeppelin double-hash
   - `settleEpoch(root)`
7. Site: claim up to 20 tokens per tx.

## Copy to the desktop repo

```
hood100/contracts/Hood100Vault.sol
hood100/README.md
```

GitHub Desktop → [github.com/Hood100](https://github.com/Hood100)  
Vercel team [vercel.com/hood100](https://vercel.com/hood100) · domain hood100.xyz

Do not point LetsCash at SIMIAN or any older vault.
