import { motion } from 'framer-motion'
import { useState } from 'react'
import type { HeroHotspot as HeroHotspotData } from '@data/home/hero-hotspots'
import { HeroHotspotTooltip } from './HeroHotspotTooltip'

type HeroHotspotProps = {
  hotspot: HeroHotspotData
}

export function HeroHotspot({ hotspot }: HeroHotspotProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="absolute z-20"
      style={{
        left: hotspot.x,
        top: hotspot.y,
        width: hotspot.size,
        height: hotspot.size,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="absolute bottom-full left-1/2 z-30 -translate-x-1/2 pb-1">
          <HeroHotspotTooltip lines={hotspot.lines} boxWidth={hotspot.boxWidth} />
        </div>
      ) : null}

      <motion.button
        type="button"
        className="relative h-full w-full cursor-pointer rounded-full"
        aria-label={hotspot.lines[0]}
        animate={
          hovered
            ? { scale: 1, opacity: 1 }
            : { scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }
        }
        transition={
          hovered
            ? { duration: 0.2, ease: 'easeOut' }
            : { duration: 1.6, ease: 'easeInOut', repeat: Infinity }
        }
      >
        <img
          src="/images/hero/hotspots/ellipse-40.svg"
          alt=""
          className="h-full w-full"
          draggable={false}
        />
      </motion.button>
    </div>
  )
}
