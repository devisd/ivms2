import { createContext } from 'react'
import { HERO_INTRO_SESSION_KEY } from '@data/home/hero-intro'

export type HeroIntroPhase = 'animating' | 'awaiting-scroll' | 'revealed' | 'done' | 'skipped'

export type HeroIntroContextValue = {
  phase: HeroIntroPhase
  shouldAnimate: boolean
  isHeaderVisible: boolean
  isHeroChromeVisible: boolean
  isScrollIndicatorVisible: boolean
  completeIntroAnimation: () => void
  reveal: () => void
}

export const HeroIntroContext = createContext<HeroIntroContextValue | null>(null)

export function getInitialPhase(): HeroIntroPhase {
  if (typeof window === 'undefined') return 'animating'

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'skipped'
  }

  if (sessionStorage.getItem(HERO_INTRO_SESSION_KEY) === '1') {
    return 'skipped'
  }

  return 'animating'
}

export function isScrollLockedPhase(phase: HeroIntroPhase) {
  return phase === 'animating' || phase === 'awaiting-scroll' || phase === 'revealed'
}
