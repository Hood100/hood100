import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { GITHUB_URL, LETSCASH_URL, SITE_URL, TOKEN_TICKER } from "@/lib/catalog";

const NAV = [
  { to: "/", label: "index" },
  { to: "/claim", label: "claim" },
  { to: "/docs", label: "paper" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="wm min-h-dvh bg-bg">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/h100.jpg" alt="H100" className="size-9 object-cover" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              H<span className="text-hot">100</span>
            </span>
            <span className="hidden text-xs text-muted sm:inline">${TOKEN_TICKER}</span>
          </Link>
          <nav className="ml-auto flex items-center gap-1 text-xs uppercase tracking-[0.18em]">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-muted hover:text-lime"
                activeProps={{ className: "px-3 py-2 text-hot" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-3 py-2 text-muted hover:text-fg">
              git
            </a>
            <a href={LETSCASH_URL} target="_blank" rel="noreferrer" className="bg-lime px-3 py-2 font-semibold text-bg">
              letscash
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">{children}</main>
      <footer className="border-t border-line px-4 py-8 text-center text-xs text-muted">
        {SITE_URL.replace("https://", "")} · one bag · a hundred seats · not a ten · merkle, not a push
      </footer>
    </div>
  );
}
