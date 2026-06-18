export type CoreEngineCapability = {
  id: string
  title: string
  description: string
  tags: string[]
  x: number
  y: number
  /** Figma text box width; defaults to layout descMaxWidth (432) */
  descMaxWidth?: number
}

export type CoreEngineLine = {
  id: string
  x: number
  y: number
  width: number
  height: number
  viewBox: string
  path: string
  className?: string
}

export const CORE_ENGINE_TITLE = 'The iVMS Core Engine'

export const CORE_ENGINE_CTA = '11 capability clusters — see the full platform'

export const CORE_ENGINE_CARD_SIZE = { width: 490, height: 306 } as const

/** Figma card frame 1:195 / 1:217 internal layout @ 490×306 */
export const CORE_ENGINE_CARD_LAYOUT = {
  paddingTop: 32,
  paddingRight: 26,
  paddingBottom: 32,
  paddingLeft: 32,
  borderWidth: 5,
  borderRadius: 32,
  titleSize: 32,
  titleLineHeight: 38,
  descSize: 24,
  descLineHeight: 29,
  /** 490 − paddingLeft − paddingRight */
  descMaxWidth: 432,
  titleToDesc: 12,
  descToTags: 20,
  tagHeight: 51,
  tagFontSize: 16,
  tagPaddingX: 20,
  tagRadius: 26,
  tagGap: 12,
} as const

/** Figma frame 1:170 — 1920×1590 */
export const CORE_ENGINE_DESIGN = {
  width: 1920,
  height: 1590,
  title: { y: 140, fontSize: 100, lineHeight: 1.19 },
  engine: {
    x: 749,
    y: 559,
    width: 391,
    height: 409,
    image: { width: '147.53%', height: '140.74%', left: '-24.71%', top: '-24.92%' },
  },
  cta: { x: 997, y: 1309, width: 680, height: 56 },
} as const

export const CORE_ENGINE_ANIMATION = {
  cardDuration: 0.7,
  cardStagger: 0.12,
  lineDelay: 0.15,
  lineDuration: 0.55,
  engineDuration: 0.55,
  ctaDelay: 0.85,
} as const

export const CORE_ENGINE_CAPABILITIES: CoreEngineCapability[] = [
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'AI traffic prediction, congestion modelling, incident probability scoring',
    tags: ['Predictive models', 'Pattern detection', 'Anomaly alerts', 'Trend analysis'],
    x: 132,
    y: 418,
    descMaxWidth: 426,
  },
  {
    id: 'telemetry',
    title: 'Telemetry',
    description: 'Real-time tracking, speed & behavioural analytics across fleets',
    tags: ['GPS tracking', 'OBD-II integration', 'Real-time streaming', 'Edge processing'],
    x: 1228,
    y: 418,
  },
  {
    id: 'enforcement',
    title: 'Enforcement',
    description: 'Automated violation detection, digital evidence, judicial integration',
    tags: ['Speed detection', 'Red-light cameras', 'License plate recognition', 'Evidence chain'],
    x: 100,
    y: 824,
  },
  {
    id: 'payments',
    title: 'Payments',
    description: 'Toll collection, fine processing, revenue reconciliation (iPAY)',
    tags: ['iPAY integration', 'Tap-to-pay', 'QR payments', 'Auto-reconciliation'],
    x: 1330,
    y: 824,
  },
  {
    id: 'reporting',
    title: 'Reporting',
    description: 'Customizable dashboards, compliance reports, real-time operational visibility',
    tags: ['Live dashboards', 'Scheduled reports', 'Data export', 'KPI tracking'],
    x: 387,
    y: 1184,
  },
]

export const CORE_ENGINE_LINES: CoreEngineLine[] = [
  {
    id: 'analytics',
    x: 619,
    y: 643,
    width: 221,
    height: 60,
    viewBox: '0 0 226.766 65.766',
    path: 'M2.88302 2.88302C67.3135 2.88302 162.123 62.883 223.883 62.883',
    className: '-scale-y-100 rotate-180',
  },
  {
    id: 'telemetry',
    x: 927,
    y: 508,
    width: 303,
    height: 194,
    viewBox: '0 0 308 199',
    path: 'M2.5 2.5C163.612 2.5 105.941 196.5 305.5 196.5',
    className: '-scale-y-100',
  },
  {
    id: 'enforcement',
    x: 588,
    y: 850,
    width: 253,
    height: 108,
    viewBox: '0 0 258 113',
    path: 'M2.5 2.5C137.026 2.5 148.491 110.5 255.5 110.5',
    className: '-scale-y-100 rotate-180',
  },
  {
    id: 'payments',
    x: 1074,
    y: 875,
    width: 256,
    height: 157,
    viewBox: '0 0 261 162',
    path: 'M2.5 2.5C138.621 2.5 89.8958 159.5 258.5 159.5',
  },
  {
    id: 'reporting',
    x: 761,
    y: 936,
    width: 184,
    height: 250,
    viewBox: '0 0 189 255',
    path: 'M2.5 2.5C100.337 2.5 108.675 252.5 186.5 252.5',
    className: '-scale-y-100 rotate-180',
  },
]

function getCoreEngineCenter() {
  const { engine } = CORE_ENGINE_DESIGN
  return {
    x: engine.x + engine.width / 2,
    y: engine.y + engine.height / 2,
  }
}

export function getCardOriginOffset(capability: CoreEngineCapability) {
  const center = getCoreEngineCenter()
  return {
    x: center.x - (capability.x + CORE_ENGINE_CARD_SIZE.width / 2),
    y: center.y - (capability.y + CORE_ENGINE_CARD_SIZE.height / 2),
  }
}

export function designLeft(value: number) {
  return `${(value / CORE_ENGINE_DESIGN.width) * 100}%`
}

export function designTop(value: number) {
  return `${(value / CORE_ENGINE_DESIGN.height) * 100}%`
}

export function designWidth(value: number) {
  return `${(value / CORE_ENGINE_DESIGN.width) * 100}%`
}

export function designHeight(value: number) {
  return `${(value / CORE_ENGINE_DESIGN.height) * 100}%`
}
