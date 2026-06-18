import { useEffect, useState, type ReactNode } from 'react'
import { RND_DESIGN } from '@data/home/rnd'

type RnDDesignCanvasProps = {
  children: ReactNode
}

/** Figma 46:1320 — scales 1920×1080 layout proportionally below 1920px viewport */
export function RnDDesignCanvas({ children }: RnDDesignCanvasProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      setScale(Math.min(document.documentElement.clientWidth, RND_DESIGN.width) / RND_DESIGN.width)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scaledWidth = RND_DESIGN.width * scale
  const scaledHeight = RND_DESIGN.height * scale

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-0 hidden -translate-x-1/2 min-[1280px]:block"
      style={{ width: scaledWidth, height: scaledHeight }}
      aria-hidden
    >
      <div
        className="relative"
        style={{
          width: RND_DESIGN.width,
          height: RND_DESIGN.height,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
