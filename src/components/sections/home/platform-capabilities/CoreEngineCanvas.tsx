import { useRef, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { CORE_ENGINE_DESIGN } from '@data/home/core-engine'
import { CoreEngineLayoutContext } from './useCoreEngineLayoutScale'

type CoreEngineCanvasProps = {
  children: ReactNode
}

export function CoreEngineCanvas({ children }: CoreEngineCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [layoutScale, setLayoutScale] = useState(1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const update = () => {
      setLayoutScale(container.clientWidth / CORE_ENGINE_DESIGN.width)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[1920px] px-6 min-[1280px]:px-10 min-[1440px]:px-12 min-[1920px]:px-0"
      style={{
        aspectRatio: `${CORE_ENGINE_DESIGN.width} / ${CORE_ENGINE_DESIGN.height}`,
      }}
    >
      <CoreEngineLayoutContext.Provider value={layoutScale}>
        <div
          className="absolute inset-0"
          style={{ '--core-engine-scale': layoutScale } as CSSProperties}
        >
          {children}
        </div>
      </CoreEngineLayoutContext.Provider>
    </div>
  )
}
