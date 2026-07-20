// Maps tech chip labels to self-hosted favicon files in /public/icons/tech.
// Chips without an entry render as text-only (concepts like "RAG" or "Usage
// metering" have no canonical brand icon).
const slugByLabel: Record<string, string> = {
  Hono: 'hono',
  oRPC: 'orpc',
  Postgres: 'postgres',
  'pg-boss': 'postgres',
  'Cloudflare D1': 'cloudflare',
  Foundry: 'foundry',
  Rust: 'rust',
  Solana: 'solana',
  Solidity: 'solidity',
  Docker: 'docker',
  Stablecoins: 'usdc',
  Redis: 'redis',
  'Trigger.dev': 'trigger',
  Stripe: 'stripe',
  Cloudflare: 'cloudflare',
  'Cloudflare Workers': 'cloudflare',
  'Cloudflare Pages': 'cloudflare',
  'Durable Objects': 'cloudflare',
  'D1 / Drizzle': 'cloudflare',
  OpenRouter: 'openrouter',
  x402: 'x402',
  USDC: 'usdc',
  'USDC / Stablecoins': 'usdc',
  'AI SDK': 'vercel',
  'Vercel AI SDK': 'vercel',
  Vercel: 'vercel',
  'TanStack Start': 'tanstack',
  TanStack: 'tanstack',
  E2B: 'e2b',
  Bun: 'bun',
  'Node.js / Bun': 'nodejs',
  'Node.js': 'nodejs',
  TimescaleDB: 'timescale',
  Drizzle: 'drizzle',
  Railway: 'railway',
  'Docker / Railway': 'docker',
  Firecrawl: 'firecrawl',
  viem: 'viem',
  'viem / BNB Chain': 'viem',
  Privy: 'privy',
  DigitalOcean: 'digitalocean',
  'AWS KMS': 'aws',
  AWS: 'aws',
  'Solidity / Foundry': 'solidity',
  'Solidity / Polygon': 'solidity',
  'Rust / Solana': 'rust',
  'Rust / Anchor': 'rust',
  SPL: 'solana',
  tRPC: 'trpc',
  'Next.js': 'nextjs',
  'Next.js 16': 'nextjs',
  'React / Next.js': 'react',
  React: 'react',
  'React 19': 'react',
  TypeScript: 'typescript',
  Sharp: 'sharp',
  Cheerio: 'cheerio',
  'Tailwind 4': 'tailwind',
  'Fastly CDN': 'fastly',
  'onnxruntime-web': 'onnx',
  Flutter: 'flutter',
  Netlify: 'netlify',
  MySQL: 'mysql',
  Auth0: 'auth0',
  Angular: 'angular',
  'MS SQL Server': 'microsoft',
  'SAP B1': 'sap',
  Splunk: 'splunk',
  'Azure AD B2C': 'azure',
  Azure: 'azure',
  Astro: 'astro',
  Box: 'box',
  'Play Store': 'playstore',
  'App Store': 'appstore',
}

import { techColors } from './techColors'

export function techIcon(label: string): string | undefined {
  const slug = slugByLabel[label]
  return slug ? `/icons/tech/${slug}.png` : undefined
}

// Subtle chip tint derived from the icon's average color; renders identically
// in both themes via color-mix against transparent.
export function techTint(label: string): string | undefined {
  const color = techColors[slugByLabel[label] ?? '']
  if (!color) return undefined
  return `background-color: color-mix(in oklab, ${color} 16%, transparent);`
}
