import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@lib/cn'
import type { CoreEngineLine } from '@data/home/core-engine'
import { CORE_ENGINE_ANIMATION, designHeight, designLeft, designTop, designWidth } from '@data/home/core-engine'

type CoreEngineConnectorProps = {
  line: CoreEngineLine
  animate: boolean
  delay: number
}

export function CoreEngineConnector({ line, animate, delay }: CoreEngineConnectorProps) {
  const reducedMotion = useReducedMotion()
  const duration = reducedMotion ? 0 : CORE_ENGINE_ANIMATION.lineDuration

  return (
    <div
      data-core-engine-line={line.id}
      className={cn('pointer-events-none absolute z-10 flex items-center justify-center', line.className)}
      style={{
        left: designLeft(line.x),
        top: designTop(line.y),
        width: designWidth(line.width),
        height: designHeight(line.height),
      }}
      aria-hidden
    >
      <svg viewBox={line.viewBox} fill="none" className="size-full overflow-visible">
        <motion.path
          d={line.path}
          stroke="#00D4AA"
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{
            duration,
            delay: reducedMotion ? 0 : delay,
            ease: 'easeOut',
          }}
        />
      </svg>
    </div>
  )
}
