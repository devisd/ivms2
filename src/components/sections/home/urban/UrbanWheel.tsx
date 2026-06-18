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

type UrbanWheelProps = {
  slides: UrbanSlide[]
  scale: number
  onActiveIndexChange: (index: number) => void
  className?: string
}

function getActiveIndex(rotation: number) {
  const step = Math.floor((rotation + STEP_ANGLE / 2) / STEP_ANGLE) % POD_COUNT
  return (POD_COUNT - step + POD_COUNT) % POD_COUNT
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
    const visible = index === getActiveIndex(rotation)

    pod.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    pod.style.opacity = visible ? '1' : '0'
  })

  return (
    <div
      ref={podRef}
      data-urban-pod
      className="absolute left-0 top-0 will-change-transform"
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
  })

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = window.setInterval(() => {
      const nextIndex = getActiveIndex(rotationRef.current)
      if (nextIndex === activeIndexRef.current) return
      activeIndexRef.current = nextIndex
      onActiveIndexChange(nextIndex)
    }, 120)

    return () => window.clearInterval(interval)
  }, [onActiveIndexChange, shouldReduceMotion])

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
