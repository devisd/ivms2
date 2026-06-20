export type HeroHotspot = {
  id: string
  /** Top-left on hero canvas (1920×1080), Figma frame 224:161 */
  x: number
  y: number
  size: number
  boxWidth: number
  lines: readonly string[]
}

/** Figma ellipses 224:187–224:192 on hero; cold-chain tooltip (1:90) omitted */
export const HERO_HOTSPOTS: HeroHotspot[] = [
  {
    id: 'student',
    x: 1044,
    y: 523,
    size: 40,
    boxWidth: 472,
    lines: [
      'Student #4421 boarded ✓',
      'Parent notified ✓',
      'Cabin climate normal',
    ],
  },
  {
    id: 'fatigue',
    x: 1386,
    y: 618,
    size: 40,
    boxWidth: 472,
    lines: [
      'Fatigue detected → break advised',
      'SOS one-tap',
      'Biometric ignition only',
    ],
  },
  {
    id: 'driver',
    x: 1624,
    y: 356,
    size: 23,
    boxWidth: 472,
    lines: [
      'Driver face matched',
      'Unauthorized ignition: blocked',
      'Fare auto-calculated by zone',
    ],
  },
  {
    id: 'fleet',
    x: 1321,
    y: 842,
    size: 40,
    boxWidth: 391,
    lines: [
      '7,000+ vehicles live',
      'Driver score: 92/100 — Green',
      'Fuel −12% vs. baseline',
    ],
  },
  {
    id: 'speed',
    x: 1552,
    y: 822,
    size: 40,
    boxWidth: 415,
    lines: [
      'Speed violation captured',
      'Fine deducted automatically',
      '73% fewer violations across fleet',
    ],
  },
]
