import { useEffect, useState } from 'react'
import { ZOOM_DESIGN } from '@data/home/zoom'

export type ZoomLayout = {
  scale: number
  offsetX: number
  offsetY: number
  viewportWidth: number
  viewportHeight: number
}

function computeLayout(): ZoomLayout {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const scale = Math.min(viewportWidth / ZOOM_DESIGN.width, viewportHeight / ZOOM_DESIGN.height)

  return {
    scale,
    offsetX: (viewportWidth - ZOOM_DESIGN.width * scale) / 2,
    offsetY: (viewportHeight - ZOOM_DESIGN.height * scale) / 2,
    viewportWidth,
    viewportHeight,
  }
}

export function useZoomLayout() {
  const [layout, setLayout] = useState<ZoomLayout>(() =>
    typeof window === 'undefined'
      ? { scale: 1, offsetX: 0, offsetY: 0, viewportWidth: 1920, viewportHeight: 1080 }
      : computeLayout(),
  )

  useEffect(() => {
    const onResize = () => setLayout(computeLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return layout
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}
