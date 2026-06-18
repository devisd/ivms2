import { useEffect, useState, useSyncExternalStore, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { USE_CASES_BUFFER_STEPS, USE_CASES_CARD_COUNT, USE_CASES_SCROLL_STEP_VH } from '@data/home/use-cases'

gsap.registerPlugin(ScrollTrigger)

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY)
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  )
}

type UseUseCasesScrollOptions = {
  sectionRef: RefObject<HTMLElement | null>
  pinRef: RefObject<HTMLElement | null>
  stepCount?: number
  bufferSteps?: number
}

export function useUseCasesScroll({
  sectionRef,
  pinRef,
  stepCount = USE_CASES_CARD_COUNT,
  bufferSteps = USE_CASES_BUFFER_STEPS,
}: UseUseCasesScrollOptions) {
  const reducedMotion = usePrefersReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)
  const deckProgress = reducedMotion ? stepCount : scrollProgress

  useEffect(() => {
    if (reducedMotion) return

    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return

    const totalStepCount = stepCount + bufferSteps

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${totalStepCount * window.innerHeight * USE_CASES_SCROLL_STEP_VH}`,
        pin,
        pinSpacing: true,
        anticipatePin: 0,
        scrub: 0.9,
        snap: {
          snapTo: (value) => Math.round(value * totalStepCount) / totalStepCount,
          directional: true,
          duration: { min: 0.4, max: 0.75 },
          delay: 0.06,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          const contentProgress = Math.min(stepCount, self.progress * totalStepCount)
          setScrollProgress(contentProgress)
        },
        invalidateOnRefresh: true,
      })
    }, section)

    return () => ctx.revert()
  }, [bufferSteps, pinRef, reducedMotion, sectionRef, stepCount])

  return { deckProgress }
}
