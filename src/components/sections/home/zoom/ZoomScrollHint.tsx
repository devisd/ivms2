import { ZOOM_SCROLL_HINT } from '@data/home/zoom'
import { cn } from '@lib/cn'
import type { CSSProperties } from 'react'

type ZoomScrollHintProps = {
  className?: string
  style?: CSSProperties
}

export function ZoomScrollHint({ className, style }: ZoomScrollHintProps) {
  return (
    <p
      className={cn(
        'shrink-0 text-sm uppercase tracking-widest text-[rgba(255,255,255,0.5)] min-[1280px]:text-lg min-[1920px]:text-2xl min-[1920px]:tracking-[2.4px]',
        className,
      )}
      style={style}
    >
      {ZOOM_SCROLL_HINT}
    </p>
  )
}
