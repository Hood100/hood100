export const TOKEN_NAME = "HOOD100";
export const TOKEN_TICKER = "HOOD100";
export const SITE_URL = "https://hood100.xyz";
export const GITHUB_URL = "https://github.com/Hood100";
export const LETSCASH_URL = "https://www.letscash.fun";
export const CHAIN_ID = 4663;
export const CHAIN_NAME = "Robinhood Chain";
export const BLOCKSCOUT = "https://robinhoodchain.blockscout.com";

/** Empty until Remix + LetsCash. Never invent. */
export const TOKEN_CA = "";
export const VAULT_CA = "";

export const X_HANDLE = "";
export const X_URL = X_HANDLE ? `https://x.com/${X_HANDLE}` : "";

export const TEAM_BPS = 1489; // of inbound 4.7% → 0.7% team
export const INDEX_SHARE = 0.04;
export const EPOCH_HOURS = 3;
export const SEATS = 100;
export const MIN_HOLD_BPS = 1; // 0.01% supply
export const CLAIM_BATCH = 20;

export function isAddress(v: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(v.trim());
}

export function shortCa(ca: string) {
  const t = ca.trim();
  if (!isAddress(t)) return "";
  return `${t.slice(0, 6)}…${t.slice(-4)}`;
}

export const LOOP = [
  { id: "tax", k: "5%", v: "LetsCash cut on every trade. WETH/ETH in. Never HOOD100 sold to fund the bag." },
  { id: "split", k: "0.3 / 0.7 / 4", v: "Platform · team · index vault. Four percent buys the hundred." },
  { id: "rank", k: "100 seats", v: "Quote liquidity, one seat per ticker. Floor applied. Illiquid names skipped. We do not buy ourselves." },
  { id: "claim", k: "merkle", v: "No 100-token push. You claim up to 20 names per tx. Holder pays gas. Ranking is the keeper." },
] as const;
