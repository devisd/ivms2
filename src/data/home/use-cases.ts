export type UseCase = {
  id: string
  title: string
  image: string
  imagePosition?: string
  overlay?: string
}

export const USE_CASES_LABEL = 'Use Cases'

export const USE_CASES_TITLE = 'Solutions For Every Case'

export const USE_CASES_CARD_COUNT = 5

/** Duration of one card rotation in the auto-slider (ms) */
export const USE_CASES_CYCLE_DURATION_MS = 5_000

export type DeckStackSlot = {
  top: number
  width: number
  height: number
  zIndex: number
  mode: 'front' | 'partial' | 'tab'
  background: string
  roundedBottom?: boolean
}

/** Front (0) to back (4) — Figma stack layers 1:441–1:446 */
export const USE_CASES_DECK_STACK: DeckStackSlot[] = [
  {
    top: 246 / 620,
    width: 1,
    height: 374,
    zIndex: 50,
    mode: 'front',
    background: '#0d2137',
  },
  {
    top: 183.64 / 620,
    width: 1591 / 1720,
    height: 197.98,
    zIndex: 40,
    mode: 'partial',
    background: '#0d2137',
    roundedBottom: true,
  },
  {
    top: 119.15 / 620,
    width: 1462 / 1720,
    height: 129,
    zIndex: 30,
    mode: 'tab',
    background: '#0c1c30',
    roundedBottom: true,
  },
  {
    top: 54.64 / 620,
    width: 1333 / 1720,
    height: 129,
    zIndex: 20,
    mode: 'tab',
    background: '#0b192c',
  },
  {
    top: 0,
    width: 1204 / 1720,
    height: 129,
    zIndex: 10,
    mode: 'tab',
    background: 'rgba(11,25,44,0.5)',
  },
]

export const USE_CASES: UseCase[] = [
  {
    id: 'highways',
    title: 'Highways',
    image: '/images/use-cases/highways.webp',
    imagePosition: '50% 75%',
    overlay: 'rgba(10,22,40,0.5)',
  },
  {
    id: 'safety',
    title: 'Safety & Enforcement',
    image: '/images/use-cases/safety-enforcement.webp',
    overlay: 'rgba(10,22,40,0.5)',
  },
  {
    id: 'urban',
    title: 'Urban Mobility',
    image: '/images/use-cases/urban-mobility.webp',
    overlay: 'rgba(10,22,40,0.55)',
  },
  {
    id: 'fleet',
    title: 'Fleet Operations',
    image: '/images/use-cases/fleet-operations.webp',
    overlay: 'rgba(10,22,40,0.55)',
  },
  {
    id: 'transit',
    title: 'Public Transit',
    image: '/images/use-cases/public-transit.webp',
    overlay: 'rgba(10,22,40,0.55)',
  },
]
