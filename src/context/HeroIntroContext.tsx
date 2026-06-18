import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  getInitialPhase,
  HeroIntroContext,
  isScrollLockedPhase,
  type HeroIntroContextValue,
  type HeroIntroPhase,
} from './heroIntroState'
import { HERO_INTRO_BUFFER_MS, HERO_INTRO_SESSION_KEY } from '@data/home/hero-intro'

export function HeroIntroProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<HeroIntroPhase>(getInitialPhase)

  const completeIntroAnimation = useCallback(() => {
    setPhase((current) => (current === 'animating' ? 'awaiting-scroll' : current))
  }, [])

  const reveal = useCallback(() => {
    setPhase((current) => (current === 'awaiting-scroll' ? 'revealed' : current))
  }, [])

  useEffect(() => {
    if (phase === 'skipped') {
      sessionStorage.setItem(HERO_INTRO_SESSION_KEY, '1')
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'revealed') return

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(HERO_INTRO_SESSION_KEY, '1')
      setPhase('done')
    }, HERO_INTRO_BUFFER_MS)

    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    document.body.style.overflow = isScrollLockedPhase(phase) ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'awaiting-scroll') return

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 10) {
        event.preventDefault()
        reveal()
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        reveal()
      }
    }

    let touchStartY = 0
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    }
    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? touchStartY
      if (touchStartY - currentY > 24) {
        event.preventDefault()
        reveal()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [phase, reveal])

  useEffect(() => {
    if (phase !== 'revealed') return

    const preventScroll = (event: Event) => {
      event.preventDefault()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        event.key === ' ' ||
        event.key === 'ArrowUp'
      ) {
        event.preventDefault()
      }
    }

    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventScroll, { passive: false })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [phase])

  const value = useMemo<HeroIntroContextValue>(() => {
    const isChromeVisible = phase === 'revealed' || phase === 'done' || phase === 'skipped'

    return {
      phase,
      shouldAnimate: phase === 'animating',
      isHeaderVisible: isChromeVisible,
      isHeroChromeVisible: isChromeVisible,
      isScrollIndicatorVisible: phase === 'awaiting-scroll',
      completeIntroAnimation,
      reveal,
    }
  }, [completeIntroAnimation, phase, reveal])

  return <HeroIntroContext.Provider value={value}>{children}</HeroIntroContext.Provider>
}
