import { ZOOM_DESIGN, ZOOM_TOOLTIPS } from '@data/home/zoom'
import { clamp, easeOutCubic, lerp, type ZoomLayout } from './useZoomLayout'
import { getTooltipMotionForScroll } from './useZoomTooltipMotion'
import { ZoomTooltip } from './ZoomTooltip'

type ZoomCityStageProps = {
  scrollProgress: number
  layout: ZoomLayout
}

export function ZoomCityStage({ scrollProgress, layout }: ZoomCityStageProps) {
  const zoomT = easeOutCubic(clamp(scrollProgress, 0, 1))
  const { scale, offsetX, offsetY } = layout
  const { initial, zoomed } = ZOOM_DESIGN.image

  const width = lerp(initial.width, zoomed.width, zoomT) * scale
  const height = lerp(initial.height, zoomed.height, zoomT) * scale
  const centerX = offsetX + lerp(initial.centerX, zoomed.centerX, zoomT) * scale
  const centerY = offsetY + lerp(initial.centerY, zoomed.centerY, zoomT) * scale

  const showZoomedCrop = zoomT > 0.15
  const cropMix = clamp((zoomT - 0.15) / 0.85, 0, 1)

  const activeTooltip = getTooltipMotionForScroll(scrollProgress, ZOOM_TOOLTIPS.length)

  return (
    <div
      className="absolute will-change-[width,height,transform]"
      style={{
        width,
        height,
        left: centerX - width / 2,
        top: centerY - height / 2,
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="/images/zoom-city.png"
          alt="Isometric smart city with connected mobility infrastructure"
          className="absolute max-w-none object-cover"
          style={
            showZoomedCrop
              ? {
                  width: `${lerp(100, 114.42, cropMix)}%`,
                  height: `${lerp(100, 100.09, cropMix)}%`,
                  left: `${lerp(0, -9.61, cropMix)}%`,
                  top: `${lerp(0, -0.04, cropMix)}%`,
                }
              : {
                  width: '100%',
                  height: '100%',
                  left: 0,
                  top: 0,
                }
          }
          draggable={false}
        />
      </div>

      {activeTooltip ? (
        <ZoomTooltip
          key={ZOOM_TOOLTIPS[activeTooltip.index].id}
          tooltip={ZOOM_TOOLTIPS[activeTooltip.index]}
          scale={scale}
          motion={activeTooltip.motion}
        />
      ) : null}
    </div>
  )
}
