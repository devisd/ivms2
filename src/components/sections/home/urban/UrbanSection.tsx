import { useCallback, useRef, useState } from 'react'
import { Container } from '@components/layout/Container'
import { URBAN_SLIDES, URBAN_TITLE } from '@data/home/urban'
import { UrbanBackground } from './UrbanBackground'
import { UrbanContent } from './UrbanContent'
import { UrbanWheel } from './UrbanWheel'
import { useUrbanOrbitScale } from './useUrbanOrbitScale'

export function UrbanSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scale = useUrbanOrbitScale(sectionRef)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = URBAN_SLIDES[activeIndex]

  const handleActiveIndexChange = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <section
      data-header-theme="light"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface py-16 min-[1920px]:h-[1080px] min-[1920px]:py-0"
    >
      <UrbanBackground scale={scale} />

      <UrbanWheel slides={URBAN_SLIDES} scale={scale} onActiveIndexChange={handleActiveIndexChange} />

      <Container className="relative z-[2] min-[1920px]:pt-[192px]">
        <h2 className="max-w-[976px] text-[clamp(2.75rem,5.2vw,6.25rem)] leading-[1.19] text-navy min-[1920px]:text-[100px]">
          {URBAN_TITLE}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 min-[1280px]:mt-8 min-[1280px]:grid-cols-[976px_1fr] min-[1280px]:items-end min-[1280px]:gap-8 min-[1920px]:mt-[100px] min-[1920px]:gap-16">
          <UrbanContent slide={activeSlide} className="order-2 min-[1280px]:order-1" />
          <div
            className="order-1 min-h-[min(320px,68vw)] min-[1920px]:hidden"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  )
}
