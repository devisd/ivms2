import { useRef } from 'react'
import { ZOOM_DESIGN } from '@data/home/zoom'
import { clamp, lerp } from './useZoomLayout'
import { ZoomCityStage } from './ZoomCityStage'
import { ZoomScrollHint } from './ZoomScrollHint'
import { useZoomLayout } from './useZoomLayout'
import { useZoomScroll } from './useZoomScroll'

export function ZoomSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const layout = useZoomLayout()
  const { scrollProgress } = useZoomScroll({ sectionRef, pinRef })

  const zoomT = clamp(scrollProgress, 0, 1)
  const { initial, zoomed } = ZOOM_DESIGN.image
  const { scale, offsetY } = layout

  const stageHeight = lerp(initial.height, zoomed.height, zoomT) * scale
  const stageCenterY = offsetY + lerp(initial.centerY, zoomed.centerY, zoomT) * scale
  const hintTop = stageCenterY + stageHeight / 2 + ZOOM_DESIGN.hintGap * scale
  const hintOpacity = clamp(1 - zoomT * 2.5, 0, 1)

  return (
    <section ref={sectionRef} data-header-theme="dark" className="relative bg-navy">
      <div ref={pinRef} className="relative h-screen overflow-hidden">
        <ZoomCityStage scrollProgress={scrollProgress} layout={layout} />

        <ZoomScrollHint
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap will-change-[opacity,top]"
          style={{
            top: hintTop,
            opacity: hintOpacity,
          }}
        />
      </div>
    </section>
  )
}
