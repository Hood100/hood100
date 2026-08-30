import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { CLAIM_BATCH, EPOCH_HOURS, SEATS, TOKEN_TICKER } from "@/lib/catalog";

export const Route = createFileRoute("/docs")({ component: Docs });

function Docs() {
  return (
    <Shell>
      <p className="text-xs uppercase tracking-[0.28em] text-lime">paper</p>
      <h1 className="mt-2 font-display text-4xl font-extrabold">
        the loop.
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        ${TOKEN_TICKER}. {SEATS} seats. Merkle, not a push. Ranking is off-chain. Read that twice.
      </p>

      <div className="mt-8 space-y-4 text-sm leading-relaxed">
        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">1 · tax</h2>
          <p className="mt-2 text-muted">
            LetsCash takes <b className="text-fg">5%</b> of every buy and sell, in ETH. Never in ${TOKEN_TICKER}.
            The vault does not sell the index token to fund a hop.
          </p>
          <ul className="mt-3 space-y-1 text-muted">
            <li>0.3% — LetsCash, at the launchpad. Never hits this vault.</li>
            <li>0.7% — team. If LetsCash forwards 4.7% here, <span className="text-fg">teamBps = 1489</span> (0.7 / 4.7). Team pulls via <span className="text-fg">pullTeam()</span>.</li>
            <li>4.0% — index pot (<span className="text-fg">indexWei</span>). Buys the hundred.</li>
          </ul>
          <p className="mt-3 text-muted">
            Worked example. 10 ETH of volume. Cut 0.5 ETH. LetsCash keeps 0.03. Vault receives 0.47. Of that, ~0.07
            team, ~0.40 index. That 0.40 ETH is split across up to {SEATS} hops, equal wei, next epoch.
          </p>
        </section>

        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">2 · rank</h2>
          <p className="mt-2 text-muted">
            Off-chain. The crank lists Robinhood pairs by <b className="text-fg">quote liquidity</b> (pools summed, one
            seat per ticker). Skip ${TOKEN_TICKER}, skip LP tokens, skip burn. Skip below the floor — a name that cannot
            take a hop without wrecking the pot is not a seat.
          </p>
          <p className="mt-2 text-muted">
            Up to {SEATS}. If only 61 names clear the floor, the pot splits 61 ways. Equal weight. No curator overlay.
            The contract cannot see Dexscreener. <b className="text-fg">You trust the keeper, or you don’t sit.</b>
          </p>
        </section>

        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">3 · epoch</h2>
          <p className="mt-2 text-muted">
            Clock is {EPOCH_HOURS} hours, drift-resistant: on time → <span className="text-fg">endsAt + EPOCH</span>.
            Late → <span className="text-fg">now + EPOCH</span> (fat pot, no skipped ETH).
          </p>
          <p className="mt-2 text-muted">
            The crank should not <span className="text-fg">settleEpoch</span> if indexWei cannot pay the hops plus
            merkle gas. That rule is in the bot, not the bytecode. A rogue keeper can settle an empty root. That is
            why the keeper key is a separate EOA with no extra ETH to steal except the pot it already controls.
          </p>
        </section>

        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">4 · buy</h2>
          <p className="mt-2 text-muted">
            <span className="text-fg">buy(router, data, wei)</span> — one hop, only if router is allowlisted. Swap
            recipient MUST be the vault. Repeat ≤ {SEATS}. Tokens sit here until claim. Leftover ETH stays in indexWei
            for the next epoch.
          </p>
        </section>

        <section className="border border-lime bg-lime/10 p-5">
          <h2 className="font-display text-xl font-extrabold text-lime">5 · snapshot + merkle</h2>
          <p className="mt-2 text-muted">
            Eligible: wallets holding ≥ 0.01% of total supply at the close block. Pools, the vault, burn: out.
            <span className="text-fg"> share = balance / eligibleSupply</span>. Each seat pays{" "}
            <span className="text-fg">share × tokensBought[seat]</span>.
          </p>
          <p className="mt-2 text-muted">
            Leaf (OpenZeppelin):{" "}
            <span className="text-fg">keccak256(bytes.concat(keccak256(abi.encode(wallet, epoch, token, amount))))</span>
            . Sorted pairs. One leaf per token. Claim {CLAIM_BATCH} names per tx. Amount 0 is marked claimed, no
            transfer. Holder pays gas. No expiry — but the owner <span className="text-fg">rescue</span> can move
            leftover. That is written on purpose.
          </p>
        </section>

        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold">6 · deploy</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
            <li>Remix Hood100Vault — team, keeper, teamBps 1489, chain 4663, 0.8.24, optimizer 200</li>
            <li>Verify. setRouter(amm, true)</li>
            <li>LetsCash $HOOD100, 5%, fee recipient = vault</li>
            <li>setHood(token)</li>
            <li>Crank. Site paste TOKEN_CA + VAULT_CA</li>
          </ol>
        </section>

        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-muted">what this is not</h2>
          <p className="mt-2 text-muted">
            Not a ten. Not their slogan. Not a guaranteed APY. Not on-chain ranking. Not a push airdrop. Not
            LetsCash claim (that button is only the 4.7% stream into the vault).
          </p>
        </section>
      </div>
    </Shell>
  );
}
