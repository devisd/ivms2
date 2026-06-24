import { useEffect, useState, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export type HowItWorksScrollState = {
  completedSegments: number
  segmentProgress: number
  segmentFills: number[]
}

function buildSegmentFills(
  completedSegments: number,
  segmentProgress: number,
  stepCount: number,
): number[] {
  const segmentCount = stepCount - 1
  return Array.from({ length: segmentCount }, (_, index) => {
    if (index < completedSegments) return 1
    if (index === completedSegments) return segmentProgress
    return 0
  })
}

const PROGRESS_EPSILON = 1e-4

function deriveStateFromProgress(progress: number, stepCount: number): HowItWorksScrollState {
  const segmentCount = stepCount - 1
  if (segmentCount <= 0) {
    return { completedSegments: 0, segmentProgress: 0, segmentFills: [] }
  }

  const scaled = Math.min(segmentCount, Math.max(0, progress * segmentCount))
  const completedSegments = Math.min(segmentCount, Math.floor(scaled + PROGRESS_EPSILON))
  const segmentProgress = completedSegments >= segmentCount ? 1 : scaled - completedSegments

  return {
    completedSegments,
    segmentProgress,
    segmentFills: buildSegmentFills(completedSegments, segmentProgress, stepCount),
  }
}

function getLitStepCount(
  completedSegments: number,
  segmentProgress: number,
  stepCount: number,
): number {
  const segmentCount = stepCount - 1
  const baseCount = completedSegments + 1
  const previewNext =
    segmentProgress > PROGRESS_EPSILON && completedSegments < segmentCount ? 1 : 0

  return Math.min(stepCount, baseCount + previewNext)
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getInitialHowItWorksState(stepCount: number): HowItWorksScrollState {
  if (typeof window !== 'undefined' && prefersReducedMotion()) {
    return deriveStateFromProgress(1, stepCount)
  }
  return deriveStateFromProgress(0, stepCount)
}

type UseHowItWorksScrollOptions = {
  sectionRef: RefObject<HTMLElement | null>
  pinRef: RefObject<HTMLElement | null>
  stepCount: number
  bufferSteps?: number
}

export function useHowItWorksScroll({
  sectionRef,
  pinRef,
  stepCount,
  bufferSteps = 0,
}: UseHowItWorksScrollOptions) {
  const [state, setState] = useState<HowItWorksScrollState>(() =>
    getInitialHowItWorksState(stepCount),
  )

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return

    if (prefersReducedMotion()) {
      return
    }

    const segmentCount = stepCount - 1
    const totalStepCount = segmentCount + bufferSteps

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${totalStepCount * window.innerHeight}`,
        pin,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.45,
        snap: {
          snapTo: (value) => Math.round(value * totalStepCount) / totalStepCount,
          duration: { min: 0.18, max: 0.42 },
          delay: 0.04,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          const contentProgress =
            segmentCount > 0
              ? Math.min(1, (self.progress * totalStepCount) / segmentCount)
              : 1
          setState(deriveStateFromProgress(contentProgress, stepCount))
        },
        invalidateOnRefresh: true,
      })
    }, section)

    return () => ctx.revert()
  }, [bufferSteps, pinRef, sectionRef, stepCount])

  return {
    completedSegments: state.completedSegments,
    segmentFills: state.segmentFills,
    litStepCount: getLitStepCount(state.completedSegments, state.segmentProgress, stepCount),
  }
}
