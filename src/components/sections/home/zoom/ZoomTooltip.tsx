import { useLayoutEffect, useRef, useState } from 'react'
import type { ZoomTooltip as ZoomTooltipData } from '@data/home/zoom'
import type { ZoomTooltipMotion } from './useZoomTooltipMotion'

type ZoomTooltipProps = {
  tooltip: ZoomTooltipData
  scale: number
  motion: ZoomTooltipMotion
}

type StemGeometry = {
  left: number
  top: number
  height: number
}

const STEM_WIDTH = 3

export function ZoomTooltip({ tooltip, scale, motion }: ZoomTooltipProps) {
  const { opacity, translateY } = motion
  const rootRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<HTMLImageElement>(null)
  const [stem, setStem] = useState<StemGeometry | null>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const box = boxRef.current
    const anchor = anchorRef.current
    if (!root || !box || !anchor) return

    const updateStem = () => {
      const rootRect = root.getBoundingClientRect()
      const boxRect = box.getBoundingClientRect()
      const anchorRect = anchor.getBoundingClientRect()

      const anchorCenterX = anchorRect.left + anchorRect.width / 2 - rootRect.left
      const boxBottom = boxRect.bottom - rootRect.top
      const anchorTop = anchorRect.top - rootRect.top
      const height = anchorTop - boxBottom

      if (height <= 0) {
        setStem(null)
        return
      }

      setStem({
        left: anchorCenterX - (STEM_WIDTH * scale) / 2,
        top: boxBottom,
        height,
      })
    }

    updateStem()

    const observer = new ResizeObserver(updateStem)
    observer.observe(box)
    observer.observe(anchor)

    return () => observer.disconnect()
  }, [scale, tooltip.lines])

  if (opacity <= 0.001) return null

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute isolate will-change-transform"
      style={{
        left: tooltip.x * scale,
        top: tooltip.y * scale,
        transform: `translateY(${translateY * scale}px)`,
      }}
    >
      <img
        ref={anchorRef}
        src="/images/zoom-tooltip-anchor.svg"
        alt=""
        aria-hidden
        className="absolute z-[1]"
        style={{
          left: tooltip.anchor.x * scale,
          top: tooltip.anchor.y * scale,
          width: tooltip.anchor.size * scale,
          height: tooltip.anchor.size * scale,
          opacity,
        }}
        draggable={false}
      />

      {stem ? (
        <div
          className="absolute z-[5] bg-[#abff02]"
          style={{
            left: stem.left,
            top: stem.top,
            width: STEM_WIDTH * scale,
            height: stem.height,
            opacity,
          }}
        />
      ) : null}

      <div
        ref={boxRef}
        className="relative z-10 flex items-center justify-center rounded-[36px] p-6"
        style={{
          marginLeft: tooltip.box.x * scale,
          marginTop: tooltip.box.y * scale,
          width: tooltip.box.width * scale,
          opacity,
        }}
      >
        <div
          className="glass-surface glass-surface--tooltip glass-surface--blur-16 pointer-events-none absolute inset-0 rounded-[inherit]"
          aria-hidden
        />
        <div className="relative z-10 text-center text-sm text-white min-[1280px]:text-lg min-[1920px]:text-2xl">
          {tooltip.lines.map((line) => (
            <p key={line} className="leading-normal">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
