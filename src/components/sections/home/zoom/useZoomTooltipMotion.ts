import { clamp, easeOutCubic } from './useZoomLayout'

/** Enter / hold / exit within one scroll segment */
const ZOOM_TOOLTIP_PHASE = {
  enterEnd: 0.38,
  holdEnd: 0.62,
} as const

export type ZoomTooltipMotion = {
  opacity: number
  translateY: number
}

function getActiveTooltipIndex(scrollProgress: number, tooltipCount: number) {
  if (scrollProgress < 2) return -1

  const index = Math.floor(scrollProgress - 2)
  if (index >= tooltipCount) return -1

  return index
}

function getTooltipMotion(scrollProgress: number, index: number): ZoomTooltipMotion {
  const t = clamp(scrollProgress - (2 + index), 0, 1)
  const { enterEnd, holdEnd } = ZOOM_TOOLTIP_PHASE

  if (t <= 0) {
    return { opacity: 0, translateY: 24 }
  }

  if (t < enterEnd) {
    const eased = easeOutCubic(t / enterEnd)
    return {
      opacity: eased,
      translateY: (1 - eased) * 24,
    }
  }

  if (t < holdEnd) {
    return { opacity: 1, translateY: 0 }
  }

  const exitT = clamp((t - holdEnd) / (1 - holdEnd), 0, 1)
  const eased = easeOutCubic(exitT)

  return {
    opacity: 1 - eased,
    translateY: -eased * 20,
  }
}

export function getTooltipMotionForScroll(
  scrollProgress: number,
  tooltipCount: number,
): { index: number; motion: ZoomTooltipMotion } | null {
  const index = getActiveTooltipIndex(scrollProgress, tooltipCount)
  if (index < 0) return null

  const motion = getTooltipMotion(scrollProgress, index)
  if (motion.opacity <= 0.001) return null

  return { index, motion }
}
