import { useContext } from 'react'
import { HeroIntroContext } from './heroIntroState'

export function useHeroIntro() {
  const context = useContext(HeroIntroContext)
  if (!context) {
    throw new Error('useHeroIntro must be used within HeroIntroProvider')
  }
  return context
}
