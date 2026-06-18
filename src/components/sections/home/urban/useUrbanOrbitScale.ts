import { useEffect, useState, type RefObject } from 'react'
import { URBAN_DESIGN_WIDTH } from '@data/home/urban-orbit'

export function useUrbanOrbitScale(sectionRef: RefObject<HTMLElement | null>) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const update = () => {
      setScale(Math.min(1, section.clientWidth / URBAN_DESIGN_WIDTH))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionRef])

  return scale
}
