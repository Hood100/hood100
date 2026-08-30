import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { CLAIM_BATCH, EPOCH_HOURS, SEATS, TOKEN_TICKER } from "@/lib/catalog";

export const Route = createFileRoute("/docs")({ component: Docs });

function Docs() {
  return (
    <Shell>
      <p className="text-xs uppercase tracking-[0.28em] text-lime">paper</p>
      <h1 className="mt-2 font-display text-4xl font-extrabold">
        not a ten.
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        ${TOKEN_TICKER} is an in-kind index of {SEATS} seats on Robinhood Chain. A ten-name product already exists.
        We do not copy it. We take the tax loop and scale the bag.
      </p>

      <div className="mt-8 space-y-4 text-sm leading-relaxed">
        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">tax</h2>
          <p className="mt-2 text-muted">
            LetsCash 5%, collected in ETH. 0.3% platform. 0.7% team. 4% vault. The vault never sells ${TOKEN_TICKER}
            to fund a buy.
          </p>
        </section>
        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">rank</h2>
          <p className="mt-2 text-muted">
            Quote liquidity, pools summed, one seat. Skip ${TOKEN_TICKER}, LP, burn. Skip below the floor. Equal
            weight across however many seats actually clear — up to {SEATS}.
          </p>
        </section>
        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold text-hot">epoch</h2>
          <p className="mt-2 text-muted">
            Check every {EPOCH_HOURS} hours. Close only if the pot covers {SEATS} hops plus merkle gas. Late crank
            fattens the pot. It does not skip ETH.
          </p>
        </section>
        <section className="border border-lime bg-lime/10 p-5">
          <h2 className="font-display text-xl font-extrabold text-lime">claim, not push</h2>
          <p className="mt-2 text-muted">
            A hundred transfers to every wallet will not settle. Merkle leaf per (wallet, epoch, token, amount).
            {CLAIM_BATCH} names per transaction. You pay gas. Dust of zero is marked claimed, not sent.
          </p>
        </section>
        <section className="border border-line p-5">
          <h2 className="font-display text-xl font-extrabold">deploy</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
            <li>Remix Hood100Vault — team, keeper, teamBps 1489</li>
            <li>setRouter on the AMM</li>
            <li>LetsCash mint, fee recipient = vault</li>
            <li>setHood(token)</li>
            <li>crank on the Mac / Railway</li>
          </ol>
        </section>
      </div>
    </Shell>
  );
}
