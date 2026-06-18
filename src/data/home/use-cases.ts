export type UseCase = {
  id: string
  title: string
  image: string
  imageOffsetY?: number
  overlay?: string
}

export const USE_CASES_LABEL = 'Use Cases'

export const USE_CASES_TITLE = 'Solutions For Every Case'

export const USE_CASES_CARD_COUNT = 5

/** Extra scroll steps after the last card transition (hold final frame) */
export const USE_CASES_BUFFER_STEPS = 1

/** Viewport heights of scroll per card step (5 steps ≈ 2.75vh total vs 5vh before) */
export const USE_CASES_SCROLL_STEP_VH = 0.55

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
    image: '/images/use-cases/highways.png',
    imageOffsetY: -397.75,
    overlay: 'rgba(10,22,40,0.5)',
  },
  {
    id: 'safety',
    title: 'Safety & Enforcement',
    image: '/images/use-cases/safety-enforcement.png',
    overlay: '#0d2137',
  },
  {
    id: 'urban',
    title: 'Urban Mobility',
    image: '/images/use-cases/urban-mobility.png',
    overlay: 'rgba(10,22,40,0.55)',
  },
  {
    id: 'fleet',
    title: 'Fleet Operations',
    image: '/images/use-cases/fleet-operations.png',
    overlay: 'rgba(10,22,40,0.55)',
  },
  {
    id: 'transit',
    title: 'Public Transit',
    image: '/images/use-cases/public-transit.png',
    overlay: 'rgba(10,22,40,0.55)',
  },
]
