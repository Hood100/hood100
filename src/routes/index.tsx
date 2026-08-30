import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import {
  CLAIM_BATCH,
  EPOCH_HOURS,
  isAddress,
  LOOP,
  SEATS,
  TOKEN_CA,
  TOKEN_TICKER,
  VAULT_CA,
} from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const live = isAddress(TOKEN_CA);

  return (
    <Shell>
      <div className="overflow-hidden border border-line bg-lime text-bg">
        <div className="tape flex w-max gap-10 whitespace-nowrap py-2 text-xs font-semibold uppercase tracking-[0.22em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>${TOKEN_TICKER} · {SEATS} seats · 4% buys the hundred · merkle claim · not a ten ·</span>
          ))}
        </div>
      </div>

      <section className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-lime">robinhood chain · letscash 5%</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-[0.9] sm:text-7xl">
            One bag.
            <br />
            A hundred
            <span className="text-hot"> seats.</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
            ${TOKEN_TICKER} is the index of a hundred names, not ten. Fees buy the bag. You claim in kind.
            Illiquid seats are skipped. We do not impersonate a ten-name fund.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/claim" className="bg-hot px-5 py-3 text-sm font-semibold text-bg">
              claim
            </Link>
            <Link to="/docs" className="border border-line px-5 py-3 text-sm text-fg">
              paper
            </Link>
          </div>
        </div>
        <div className="border border-line bg-bg p-3">
          <img src="/h100.jpg" alt="H100" className="h-auto w-full" />
        </div>
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-2">
        <article className="border border-line p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">token</p>
          <p className="mt-2 break-all font-mono text-sm">
            {live ? TOKEN_CA : "empty until letscash mints. no fake CA."}
          </p>
        </article>
        <article className="border border-line p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">vault</p>
          <p className="mt-2 break-all font-mono text-sm">
            {isAddress(VAULT_CA) ? VAULT_CA : "empty until remix. fee recipient goes here."}
          </p>
        </article>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LOOP.map((x) => (
          <article key={x.id} className="border border-line p-5">
            <p className="font-display text-2xl font-extrabold text-lime">{x.k}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{x.v}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">
            the hundred
          </h2>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {SEATS} seats · crank empty · {CLAIM_BATCH} per claim
          </p>
        </div>
        <div className="grid grid-cols-5 gap-1 sm:grid-cols-10">
          {Array.from({ length: SEATS }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border border-line bg-bg p-1 text-[10px] leading-none text-muted"
            >
              <span className="text-hot">{String(i + 1).padStart(3, "0")}</span>
              <span className="mt-1 block text-[9px]">open</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          Ranked by quote liquidity when the crank runs. Floor drops a name before a bad hop. Epoch {EPOCH_HOURS}h
          unless the pot cannot pay 100 hops — then it waits.
        </p>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-4">
        {[
          ["mcap", "—"],
          ["epochs", "0"],
          ["paid in kind", "$0"],
          ["eligible", "no snapshot"],
        ].map(([k, v]) => (
          <div key={k} className="border border-line p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{k}</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-lime">{v}</p>
          </div>
        ))}
      </section>
    </Shell>
  );
}
