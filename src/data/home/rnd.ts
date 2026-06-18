export type RnDInnovation = {
  id: string
  title: string
  description: string
}

export const RND_HERO_TITLE = 'Proprietary IP'

export const RND_HERO_SUBTITLE = 'Hardware + software, co-engineered'

export const RND_FOOTER =
  'AI parts-life prediction · driver vital-signs & fatigue monitoring · Live Voice AI Driver Assistant.'

/** Figma frame 46:1320 — 1920×1080 */
export const RND_DESIGN = {
  width: 1920,
  height: 1080,
  waves: { x: -267.42, y: 32, width: 2459.84, height: 877.52 },
  heroCard: { x: 100, y: 415, width: 783, height: 251 },
  hub: { x: 911, y: 491, width: 98, height: 98 },
  /** Horizontal connector through hub — trimmed right, raised to hub center */
  diagramLine: { x: 998.73, y: 538, width: 340, height: 5 },
  /** Figma 47:14 / 47:12 — branch lines share x/width, tuned top % */
  branchOrigin: { x: 1092.89, width: 236.88 },
  branchTop: { top: 50.25, height: 287.41 },
  branchBottom: { top: 49.8, height: 303.17 },
  /** Downward nudge for hub + lines below 1920px (design px, scales with canvas) */
  connectorNudgeY: 32,
} as const

export const RND_INNOVATIONS: RnDInnovation[] = [
  {
    id: 'sleeper-tracker',
    title: 'Sleeper Tracker',
    description: 'The secondary tracker is activated only when the primary one is opened.',
  },
  {
    id: 'iguard',
    title: 'iGUARD',
    description:
      'hidden engine locker: starting the engine with a code sequence on standard OEM buttons (up to 20 clicks). There is no external fob, no visible aftermarket hardware, and the code is changing.',
  },
  {
    id: 'ai-liability',
    title: 'AI accident-liability determination',
    description:
      'Automatic fault detection at the time of an accident with timestamped video, GPS and sensor data suitable as evidence.',
  },
]
