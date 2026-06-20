import { useEffect, useState } from 'react'
import { HERO_DESIGN } from '@data/home/hero-design'

export type HeroLayout = {
  scale: number
  offsetX: number
  offsetY: number
}

function computeLayout(): HeroLayout {
  const viewportWidth = window.innerWidth
  const scale = Math.min(1, viewportWidth / HERO_DESIGN.width)

  return {
    scale,
    offsetX: (viewportWidth - HERO_DESIGN.width * scale) / 2,
    offsetY: 0,
  }
}

export function useHeroLayout() {
  const [layout, setLayout] = useState<HeroLayout>(() =>
    typeof window === 'undefined'
      ? { scale: 1, offsetX: 0, offsetY: 0 }
      : computeLayout(),
  )

  useEffect(() => {
    const onResize = () => setLayout(computeLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return layout
}
