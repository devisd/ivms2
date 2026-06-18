import type { ZoomTooltip as ZoomTooltipData } from '@data/home/zoom'
import type { ZoomTooltipMotion } from './useZoomTooltipMotion'

type ZoomTooltipProps = {
  tooltip: ZoomTooltipData
  scale: number
  motion: ZoomTooltipMotion
}

export function ZoomTooltip({ tooltip, scale, motion }: ZoomTooltipProps) {
  const { opacity, translateY } = motion

  if (opacity <= 0.001) return null

  return (
    <div
      className="pointer-events-none absolute will-change-transform"
      style={{
        left: tooltip.x * scale,
        top: tooltip.y * scale,
        transform: `translateY(${translateY * scale}px)`,
      }}
    >
      <div
        className="relative flex items-center justify-center rounded-[36px] p-6"
        style={{
          marginLeft: tooltip.box.x * scale,
          marginTop: tooltip.box.y * scale,
          width: tooltip.box.width * scale,
        }}
      >
        <div
          className="glass-surface glass-surface--tooltip glass-surface--blur-16 pointer-events-none absolute inset-0 rounded-[inherit]"
          aria-hidden
        />
        <div
          className="relative z-10 text-center text-sm text-white min-[1280px]:text-lg min-[1920px]:text-2xl"
          style={{ opacity }}
        >
          {tooltip.lines.map((line) => (
            <p key={line} className="leading-normal">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div
        className="absolute bg-[#abff02]"
        style={{
          left: tooltip.line.x * scale,
          top: tooltip.line.y * scale,
          width: 3 * scale,
          height: tooltip.line.height * scale,
          opacity,
        }}
      />

      <img
        src="/images/zoom-tooltip-anchor.svg"
        alt=""
        aria-hidden
        className="absolute"
        style={{
          left: tooltip.anchor.x * scale,
          top: tooltip.anchor.y * scale,
          width: tooltip.anchor.size * scale,
          height: tooltip.anchor.size * scale,
          opacity,
        }}
        draggable={false}
      />
    </div>
  )
}
