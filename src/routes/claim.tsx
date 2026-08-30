import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { CLAIM_BATCH, isAddress, TOKEN_CA, VAULT_CA } from "@/lib/catalog";

export const Route = createFileRoute("/claim")({ component: Claim });

function Claim() {
  const ready = isAddress(VAULT_CA) && isAddress(TOKEN_CA);

  return (
    <Shell>
      <p className="text-xs uppercase tracking-[0.28em] text-lime">claim</p>
      <h1 className="mt-2 font-display text-4xl font-extrabold">
        twenty names
        <span className="text-hot"> a click.</span>
      </h1>
      <p className="mt-3 max-w-lg text-sm text-muted">
        Merkle, not airdrop. {CLAIM_BATCH} constituents per transaction. Snapshot must exist. No fake APY.
      </p>
      <div className="mt-8 max-w-lg border border-line p-6">
        <img src="/h100.jpg" alt="" className="mb-5 size-20 object-cover" />
        {ready ? (
          <p className="text-sm">vault live. connect after crank posts a root.</p>
        ) : (
          <p className="text-sm text-muted">
            vault and token still empty. remix first. letscash fee recipient second. then this button does something.
          </p>
        )}
        <button
          type="button"
          disabled
          className="mt-5 w-full bg-line py-3 text-sm text-muted"
        >
          claim (epoch 0)
        </button>
      </div>
    </Shell>
  );
}
