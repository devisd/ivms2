import { useLayoutEffect, useRef, useState } from 'react'

type HeroHotspotTooltipProps = {
  lines: readonly string[]
  boxWidth: number
}

type StemGeometry = {
  left: number
  top: number
  height: number
}

const STEM_WIDTH = 3

export function HeroHotspotTooltip({ lines, boxWidth }: HeroHotspotTooltipProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
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
        left: anchorCenterX - STEM_WIDTH / 2,
        top: boxBottom,
        height,
      })
    }

    updateStem()

    const observer = new ResizeObserver(updateStem)
    observer.observe(box)
    observer.observe(anchor)

    return () => observer.disconnect()
  }, [lines, boxWidth])

  return (
    <div ref={rootRef} className="pointer-events-none relative flex flex-col items-center">
      <div
        ref={boxRef}
        className="relative flex items-center justify-center rounded-[36px] p-6"
        style={{ width: boxWidth }}
      >
        <div
          className="glass-surface glass-surface--tooltip glass-surface--blur-16 pointer-events-none absolute inset-0 rounded-[inherit]"
          aria-hidden
        />
        <div className="relative z-10 text-center text-2xl text-white">
          {lines.map((line) => (
            <p key={line} className="leading-normal">
              {line}
            </p>
          ))}
        </div>
      </div>

      {stem ? (
        <div
          className="absolute z-[5] bg-[#abff02]"
          style={{
            left: stem.left,
            top: stem.top,
            width: STEM_WIDTH,
            height: stem.height,
          }}
        />
      ) : null}

      <div ref={anchorRef} className="h-px w-px shrink-0" aria-hidden />
    </div>
  )
}
