# Hood100

One bag. A hundred seats. Robinhood Chain. LetsCash 5%.

- 0.3% LetsCash
- 0.7% team (`pullTeam`, teamBps 1489 if 4.7% inbound)
- 4.0% index (`indexWei` → up to 100 AMM hops → merkle claim)

Not a copy of a ten-name fund. Ranking is **off-chain**. Merkle, not a push.

Full loop: site `/docs`. Contract: `hood100/contracts/Hood100Vault.sol`.

## Deploy (4663, Remix 0.8.24, optimizer 200)

1. `team_`, `keeper_`, `teamBps_ = 1489` (or `0` if vault gets only 4%)
2. Verify · `setRouter(amm, true)`
3. LetsCash mint, fee recipient = **this vault**
4. `setHood(token)`
5. Crank: liquidity rank → `buy` × N ≤ 100 → snapshot ≥ 0.01% supply →
   leaf `keccak256(bytes.concat(keccak256(abi.encode(wallet, epoch, token, amount))))` → `settleEpoch(root)`
6. Holders `claim` ≤ 20 names / tx

Do not point LetsCash at an old vault.
