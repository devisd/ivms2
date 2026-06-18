export type HowItWorksStep = {
  number: number
  title: string
  description: string
  image: string
}

export const HOW_IT_WORKS_LABEL = 'How it works'

export const HOW_IT_WORKS_TITLE = 'Data to Action in Four Steps'

/** Figma frame 1:306 — 1920×1080 */
export const HOW_IT_WORKS_DESIGN = {
  width: 1920,
  height: 1080,
  glow: { x: -141, y: 514, width: 2192, height: 1219 },
} as const

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: 'Data Collection',
    description: 'Cameras, sensors, GPS, IoT devices, transactions',
    image: '/images/how-it-works/step-1.png',
  },
  {
    number: 2,
    title: 'Analytics & AI',
    description: 'Real-time processing, pattern recognition, predictions',
    image: '/images/how-it-works/step-2.png',
  },
  {
    number: 3,
    title: 'Actions',
    description: 'Automated enforcement, traffic signals, alerts',
    image: '/images/how-it-works/step-3.png',
  },
  {
    number: 4,
    title: 'Reporting',
    description: 'Dashboards, compliance reports, stakeholder insights',
    image: '/images/how-it-works/step-4.png',
  },
]

/** Extra pinned scroll steps after the last card is fully lit */
export const HOW_IT_WORKS_BUFFER_STEPS = 2
