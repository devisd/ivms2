/** Figma intro frames 2:16 → 2:403 — 1920×1080 */
export const HERO_INTRO_DESIGN = {
  width: 1920,
  height: 1080,
  barCount: 4,
  barWidth: 480,
  /** Extra length hidden beyond top & bottom viewport edges (clips border-radius) */
  barEdgeOverflowVh: 16,
  barRadius: 12,
  logoSize: 128,
} as const

export const HERO_INTRO_ANIMATION = {
  /** Frame 1 hold — dark + IVMS */
  frame1Hold: 0.55,
  /** Frame 2 hold — full green + IVMS */
  frame2Hold: 0.6,
  barEnterDuration: 1.35,
  barEnterStagger: 0.13,
  barExitFlyDuration: 1.15,
  barExitFlyStagger: 0.13,
  logoFadeDuration: 0.35,
} as const

/** Hold hero pinned after chrome appears before unlocking page scroll */
export const HERO_INTRO_BUFFER_MS = 1400

export const HERO_INTRO_SESSION_KEY = 'ivms-hero-intro-seen'

export const HERO_SCROLL_INDICATOR = {
  label: 'Scroll to explore',
  tracking: '0.1em',
  lineWidth: 3,
  lineHeight: 42,
} as const
