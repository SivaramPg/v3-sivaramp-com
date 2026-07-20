// Status pill styling: a lucide icon and accent color per status label.
// Background tint works in both themes via color-mix against transparent.
interface StatusBadge {
  icon: string
  color: string
}

const badges: Record<string, StatusBadge> = {
  'In Stealth': { icon: 'lucide:eye-off', color: '#8b5cf6' },
  'Invite-only': { icon: 'lucide:lock', color: '#f59e0b' },
  'Case Study': { icon: 'lucide:book-open', color: '#0ea5e9' },
  'Client work': { icon: 'lucide:briefcase', color: '#10b981' },
  Redeploying: { icon: 'lucide:refresh-cw', color: '#f97316' },
  'Internal Tooling': { icon: 'lucide:wrench', color: '#64748b' },
  'Open Source': { icon: 'lucide:code', color: '#84cc16' },
  'Closed Source': { icon: 'lucide:shield', color: '#71717a' },
  Private: { icon: 'lucide:key-round', color: '#78716c' },
  Public: { icon: 'lucide:eye', color: '#38bdf8' },
  EVM: { icon: 'simple-icons:ethereum', color: '#627eea' },
  Solana: { icon: 'simple-icons:solana', color: '#9945ff' },
  Remote: { icon: 'lucide:globe', color: '#14b8a6' },
}

export function statusBadge(label: string): StatusBadge | undefined {
  return badges[label]
}

export function statusTint(label: string): string | undefined {
  const badge = badges[label]
  if (!badge) return undefined
  return `background-color: color-mix(in oklab, ${badge.color} 16%, transparent);`
}
