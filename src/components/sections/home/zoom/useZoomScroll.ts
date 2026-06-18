import { useEffect, useState, useSyncExternalStore, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ZOOM_SCROLL_STEP_VH, ZOOM_STEP_COUNT } from '@data/home/zoom'

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

type UseZoomScrollOptions = {
  sectionRef: RefObject<HTMLElement | null>
  pinRef: RefObject<HTMLElement | null>
  stepCount?: number
}

export function useZoomScroll({
  sectionRef,
  pinRef,
  stepCount = ZOOM_STEP_COUNT,
}: UseZoomScrollOptions) {
  const reducedMotion = usePrefersReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)
  const progress = reducedMotion ? stepCount : scrollProgress

  useEffect(() => {
    if (reducedMotion) return

    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${stepCount * window.innerHeight * ZOOM_SCROLL_STEP_VH}`,
        pin,
        pinSpacing: true,
        anticipatePin: 0,
        scrub: 0.65,
        snap: {
          snapTo: (value) => {
            const raw = value * stepCount
            const whole = Math.floor(raw)
            const fraction = raw - whole

            // Mid-segment snap for tooltip hold (enter → hold → exit per scroll step)
            if (whole >= 2 && whole <= stepCount - 1 && fraction >= 0.28 && fraction <= 0.72) {
              return (whole + 0.5) / stepCount
            }

            return Math.round(raw) / stepCount
          },
          directional: true,
          duration: { min: 0.35, max: 0.65 },
          delay: 0.05,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          setScrollProgress(self.progress * stepCount)
        },
        invalidateOnRefresh: true,
      })
    }, section)

    return () => ctx.revert()
  }, [pinRef, reducedMotion, sectionRef, stepCount])

  return { scrollProgress: progress }
}
