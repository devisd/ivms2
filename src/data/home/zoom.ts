export const ZOOM_SCROLL_HINT = 'SCROLL TO zoom'

/** Figma frame 1:359 — initial; frames 1:2–1:137 — zoomed @ 1920×1080 */
export const ZOOM_DESIGN = {
  width: 1920,
  height: 1080,
  image: {
    initial: { width: 714, height: 455, centerX: 960, centerY: 540.5 },
    zoomed: { width: 1583, height: 1010, centerX: 990.5, centerY: 575 },
  },
  hintGap: 91,
} as const

/** 1 zoom + 6 tooltip segments + 1 buffer (tooltips at scroll 2–7) */
export const ZOOM_STEP_COUNT = 8

export const ZOOM_SCROLL_STEP_VH = 1

export type ZoomTooltip = {
  id: string
  lines: string[]
  /** Position relative to zoomed image top-left (1583×1010) */
  x: number
  y: number
  box: { x: number; y: number; width: number }
  line: { x: number; y: number; height: number }
  anchor: { x: number; y: number; size: number }
}

export const ZOOM_TOOLTIPS: ZoomTooltip[] = [
  {
    id: 'fatigue',
    lines: ['Fatigue detected → break advised', 'SOS one-tap', 'Biometric ignition only'],
    x: 585,
    y: 470,
    box: { x: 0, y: 0, width: 472 },
    line: { x: 232, y: 132, height: 94 },
    anchor: { x: 191, y: 224, size: 85 },
  },
  {
    id: 'student',
    lines: ['Student #4421 boarded ✓', 'Parent notified ✓', 'Cabin climate normal'],
    x: 320,
    y: 469,
    box: { x: 10, y: 0, width: 472 },
    line: { x: 242, y: 135, height: 91 },
    anchor: { x: 173, y: 226, size: 138 },
  },
  {
    id: 'driver',
    lines: ['Driver face matched', 'Unauthorized ignition: blocked', 'Fare auto-calculated by zone'],
    x: 379,
    y: 214,
    box: { x: 16, y: 12, width: 472 },
    line: { x: 248, y: 144, height: 94 },
    anchor: { x: 192, y: 238, size: 113 },
  },
  {
    id: 'cold-chain',
    lines: [
      'Cold chain: +4°C ✓',
      'Route −15% km optimized',
      'Predictive failure alert: brake pads, 18 days',
    ],
    x: 1287,
    y: 243,
    box: { x: 0, y: 0, width: 391 },
    line: { x: 210, y: 164, height: 94 },
    anchor: { x: 154, y: 258, size: 113 },
  },
  {
    id: 'fleet',
    lines: ['7,000+ vehicles live', 'Driver score: 92/100 — Green', 'Fuel −12% vs. baseline'],
    x: 43,
    y: 114,
    box: { x: 0, y: 0, width: 391 },
    line: { x: 194, y: 135, height: 94 },
    anchor: { x: 147, y: 229, size: 97 },
  },
  {
    id: 'speed',
    lines: [
      'Speed violation captured',
      'Fine deducted automatically',
      '73% fewer violations across fleet',
    ],
    x: -63,
    y: 281,
    box: { x: -12, y: 0, width: 415 },
    line: { x: 194, y: 135, height: 94 },
    anchor: { x: 147, y: 229, size: 97 },
  },
]
