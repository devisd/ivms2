import { motion } from 'framer-motion'
import { useState } from 'react'
import type { HeroHotspot as HeroHotspotData } from '@data/home/hero-hotspots'
import { HeroHotspotTooltip } from './HeroHotspotTooltip'

const PULSE_DURATION = 2
const PULSE_PHASE_STEP = 0.38
const RIPPLE_EASE = [0.22, 1, 0.36, 1] as const

type HeroHotspotProps = {
  hotspot: HeroHotspotData
  pulseIndex: number
}

function getGlow(size: number, intensity: 'soft' | 'strong' | 'peak') {
  const soft = `0 0 ${size * 0.35}px rgba(0, 255, 204, 0.4)`
  const mid = `0 0 ${size * 0.55}px rgba(0, 255, 204, 0.75), 0 0 ${size * 1.1}px rgba(0, 255, 204, 0.35)`
  const peak = `0 0 ${size * 0.65}px rgba(0, 255, 204, 1), 0 0 ${size * 1.35}px rgba(0, 255, 204, 0.65), 0 0 ${size * 2.2}px rgba(171, 255, 2, 0.3)`

  if (intensity === 'soft') return soft
  if (intensity === 'peak') return peak
  return mid
}

export function HeroHotspot({ hotspot, pulseIndex }: HeroHotspotProps) {
  const [hovered, setHovered] = useState(false)
  const pulseDelay = pulseIndex * PULSE_PHASE_STEP

  return (
    <div
      className="absolute z-20 overflow-visible"
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

      <div className="relative h-full w-full overflow-visible">
        {!hovered ? (
          <>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 origin-center rounded-full border border-[#00FFCC]/75"
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{
                duration: PULSE_DURATION,
                repeat: Infinity,
                delay: pulseDelay,
                ease: RIPPLE_EASE,
              }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 origin-center rounded-full border border-[#00FFCC]/45"
              animate={{ scale: [1, 2.5], opacity: [0.45, 0] }}
              transition={{
                duration: PULSE_DURATION,
                repeat: Infinity,
                delay: pulseDelay + PULSE_DURATION / 2,
                ease: RIPPLE_EASE,
              }}
            />
          </>
        ) : null}

        <motion.button
          type="button"
          className="relative z-10 h-full w-full cursor-pointer rounded-full"
          aria-label={hotspot.lines[0]}
          animate={
            hovered
              ? {
                  scale: 1,
                  opacity: 1,
                  boxShadow: getGlow(hotspot.size, 'peak'),
                }
              : {
                  scale: [1, 1.14, 1],
                  opacity: [0.65, 1, 0.65],
                  boxShadow: [
                    getGlow(hotspot.size, 'soft'),
                    getGlow(hotspot.size, 'peak'),
                    getGlow(hotspot.size, 'soft'),
                  ],
                }
          }
          transition={
            hovered
              ? { duration: 0.2, ease: 'easeOut' }
              : {
                  duration: PULSE_DURATION,
                  repeat: Infinity,
                  delay: pulseDelay,
                  ease: 'easeInOut',
                }
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
    </div>
  )
}
