import { useAnimationFrame, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { USE_CASES_CYCLE_DURATION_MS } from '@data/home/use-cases'

export function useUseCasesAutoSlider() {
  const reducedMotion = useReducedMotion()
  const [deckProgress, setDeckProgress] = useState(0)

  useAnimationFrame((_, delta) => {
    if (reducedMotion) return
    setDeckProgress((current) => current + delta / USE_CASES_CYCLE_DURATION_MS)
  })

  return { deckProgress: reducedMotion ? 0 : deckProgress }
}
