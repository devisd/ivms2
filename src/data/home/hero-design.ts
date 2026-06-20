/** Figma node 224:161 — hero @ 1920×1080 */
export const HERO_DESIGN = {
  width: 1920,
  height: 1080,
  contentLeft: 100,
  title: {
    top: 80,
    width: 1085,
    fontSize: 100,
    letterSpacing: -2,
    lineHeight: 1.2,
  },
  connector: {
    top: 461,
    width: 741.918,
    height: 215.529,
  },
  subtitle: {
    top: 493,
    width: 642,
    fontSize: 32,
    lineHeight: 1.2,
    lineCount: 2,
  },
  stats: {
    top: 659,
    width: 663,
    height: 58,
    fontSize: 24,
    dividerLeft: [160, 348] as const,
    itemLeft: [0, 202, 390] as const,
    itemWidth: [118, 104, 273] as const,
    dividerHeight: 56,
  },
  statsLine: {
    top: 769,
    width: 717.998,
    height: 41.056,
  },
  buttons: {
    top: 884,
    fontSize: 20,
    paddingX: 24,
    paddingY: 16,
    radius: 20,
    height: 56,
    width: 358,
    primaryCenterX: 279,
    secondaryCenterX: 657,
  },
  background: {
    gridLeft: 124,
    gridWidth: 1796,
    gridHeight: 1080,
    cityCenterX: 1544.5,
    cityTop: 196.37,
    cityWidth: 1385.412,
    cityHeight: 884,
  },
  scrollIndicator: {
    gapAfterSubtitle: 32,
    topOffset: 100,
  },
} as const

export function getHeroScrollIndicatorLeft() {
  const { contentLeft, subtitle } = HERO_DESIGN

  return contentLeft + subtitle.width / 2
}

export function getHeroScrollIndicatorTop() {
  const { subtitle, scrollIndicator } = HERO_DESIGN
  const subtitleHeight = subtitle.fontSize * subtitle.lineHeight * subtitle.lineCount

  return (
    subtitle.top +
    subtitleHeight +
    scrollIndicator.gapAfterSubtitle +
    scrollIndicator.topOffset
  )
}
