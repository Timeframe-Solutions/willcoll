// shared/types/service.ts
// Shared between app/ (client) and server/ (Nitro) — auto-imported on both sides.

export interface SubService {
  name: string
  description: string
}

export interface Service {
  id: string
  name: string
  subhead: string
  outcome: string
  description: string
  icon: string
  whoIsFor: string
  ctaText: string
  to: string
  subServices: SubService[]
}
