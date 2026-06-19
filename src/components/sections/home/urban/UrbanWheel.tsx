import { cn } from '@lib/cn'
import { useEffect, useRef, type RefObject } from 'react'
import { useAnimationFrame, useReducedMotion } from 'framer-motion'
import {
  URBAN_ORBIT_CENTER_X_OFFSET,
  URBAN_ORBIT_CENTER_Y,
  URBAN_ORBIT_FRONT_ANGLE,
  URBAN_ORBIT_RADIUS,
  URBAN_POD_SIZE,
  URBAN_ROTATION_PERIOD_MS,
} from '@data/home/urban-orbit'
import type { UrbanSlide } from '@data/home/urban'
import { UrbanWheelPod } from './UrbanWheelPod'

const POD_COUNT = 4
const STEP_ANGLE = 360 / POD_COUNT
const POD_VISIBLE_ARC = 48
const POD_FADE_ARC = 42

function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value))
  return t * t * (3 - 2 * t)
}

function getActiveIndex(rotation: number) {
  const step = Math.floor((rotation + STEP_ANGLE / 2) / STEP_ANGLE) % POD_COUNT
  return (POD_COUNT - step + POD_COUNT) % POD_COUNT
}

function getPodOpacity(rotation: number, index: number) {
  const worldAngle = URBAN_ORBIT_FRONT_ANGLE + index * STEP_ANGLE + rotation
  let diff = ((worldAngle - URBAN_ORBIT_FRONT_ANGLE) % 360 + 360) % 360
  if (diff > 180) diff = 360 - diff

  if (diff <= POD_VISIBLE_ARC) return 1
  if (diff >= POD_VISIBLE_ARC + POD_FADE_ARC) return 0

  return 1 - smoothstep((diff - POD_VISIBLE_ARC) / POD_FADE_ARC)
}

type UrbanWheelProps = {
  slides: UrbanSlide[]
  scale: number
  onActiveIndexChange: (index: number) => void
  className?: string
}

type PodItemProps = {
  slide: UrbanSlide
  index: number
  rotationRef: RefObject<number>
}

function PodItem({ slide, index, rotationRef }: PodItemProps) {
  const podRef = useRef<HTMLDivElement>(null)

  useAnimationFrame(() => {
    const pod = podRef.current
    if (!pod) return

    const rotation = rotationRef.current
    const worldAngleDeg = URBAN_ORBIT_FRONT_ANGLE + index * STEP_ANGLE + rotation
    const worldAngle = (worldAngleDeg * Math.PI) / 180
    const x = -Math.sin(worldAngle) * URBAN_ORBIT_RADIUS
    const y = -Math.cos(worldAngle) * URBAN_ORBIT_RADIUS
    const opacity = getPodOpacity(rotation, index)

    pod.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    pod.style.opacity = String(opacity)
    pod.style.zIndex = String(Math.round(y))
    pod.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none'
  })

  return (
    <div
      ref={podRef}
      data-urban-pod
      className="absolute left-0 top-0 will-change-[transform,opacity]"
      style={{ width: URBAN_POD_SIZE, height: URBAN_POD_SIZE }}
    >
      <UrbanWheelPod image={slide.image} />
    </div>
  )
}

export function UrbanWheel({ slides, scale, onActiveIndexChange, className }: UrbanWheelProps) {
  const shouldReduceMotion = useReducedMotion()
  const rotationRef = useRef(0)
  const activeIndexRef = useRef(0)

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return

    rotationRef.current += (360 / URBAN_ROTATION_PERIOD_MS) * delta

    const nextIndex = getActiveIndex(rotationRef.current)
    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex
      onActiveIndexChange(nextIndex)
    }
  })

  useEffect(() => {
    if (!shouldReduceMotion) return
    onActiveIndexChange(0)
  }, [onActiveIndexChange, shouldReduceMotion])

  const pivotX = URBAN_ORBIT_CENTER_X_OFFSET * scale
  const pivotY = URBAN_ORBIT_CENTER_Y * scale

  return (
    <div className={cn('pointer-events-none absolute inset-0 z-[1] overflow-visible', className)}>
      <div
        className="absolute"
        style={{
          left: `calc(50% + ${pivotX}px)`,
          top: pivotY,
          width: 0,
          height: 0,
        }}
      >
        <div className="origin-top-left" style={{ transform: `scale(${scale})` }}>
          {slides.map((slide, index) => (
            <PodItem key={slide.id} slide={slide} index={index} rotationRef={rotationRef} />
          ))}
        </div>
      </div>
    </div>
  )
}
