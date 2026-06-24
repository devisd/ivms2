import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import {
  CORE_ENGINE_ANIMATION,
  CORE_ENGINE_CAPABILITIES,
  CORE_ENGINE_CTA,
  CORE_ENGINE_DESIGN,
  CORE_ENGINE_LINES,
  CORE_ENGINE_TITLE,
  designHeight,
  designLeft,
  designTop,
  designWidth,
  getCardOriginOffset,
} from '@data/home/core-engine'
import { CoreEngineCanvas } from './CoreEngineCanvas'
import { useCoreEngineLayoutScale } from './useCoreEngineLayoutScale'
import { CoreEngineCard } from './CoreEngineCard'
import { CoreEngineConnector } from './CoreEngineConnector'

function CoreEngineDiagramContent() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const layoutScale = useCoreEngineLayoutScale()
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const animate = reducedMotion || isInView

  const { engine, title, cta } = CORE_ENGINE_DESIGN

  return (
    <div ref={sectionRef} className="relative size-full">
      <motion.h2
        className="absolute left-1/2 w-full -translate-x-1/2 whitespace-nowrap text-center text-navy"
        style={{
          top: designTop(title.y),
          fontSize: title.fontSize * layoutScale,
          lineHeight: title.lineHeight,
        }}
        initial={{ opacity: 0, y: 24 * layoutScale }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 * layoutScale }}
        transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {CORE_ENGINE_TITLE}
      </motion.h2>

      {CORE_ENGINE_LINES.map((line, index) => (
        <CoreEngineConnector
          key={line.id}
          line={line}
          animate={animate}
          delay={CORE_ENGINE_ANIMATION.cardStagger * index + CORE_ENGINE_ANIMATION.lineDelay}
        />
      ))}

      <motion.div
        className="absolute z-20 overflow-hidden"
        style={{
          left: designLeft(engine.x),
          top: designTop(engine.y),
          width: designWidth(engine.width),
          height: designHeight(engine.height),
        }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
        transition={{
          duration: reducedMotion ? 0 : CORE_ENGINE_ANIMATION.engineDuration,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          data-core-engine-image
          src="/images/core-engine/engine.webp"
          alt=""
          className="absolute max-w-none"
          style={{
            width: engine.image.width,
            height: engine.image.height,
            left: engine.image.left,
            top: engine.image.top,
          }}
          draggable={false}
        />
      </motion.div>

      {CORE_ENGINE_CAPABILITIES.map((capability, index) => {
        const origin = getCardOriginOffset(capability)

        return (
          <CoreEngineCard
            key={capability.id}
            capability={capability}
            offsetX={origin.x}
            offsetY={origin.y}
            animate={animate}
            delay={CORE_ENGINE_ANIMATION.cardStagger * index}
          />
        )
      })}

      <motion.div
        className="absolute z-40"
        style={{
          left: designLeft(cta.x),
          top: designTop(cta.y),
          width: designWidth(cta.width),
          height: designHeight(cta.height),
        }}
        initial={{ opacity: 0, y: 16 * layoutScale }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 * layoutScale }}
        transition={{
          duration: reducedMotion ? 0 : 0.5,
          delay: reducedMotion ? 0 : CORE_ENGINE_ANIMATION.ctaDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Button
          variant="dark"
          className="size-full whitespace-nowrap uppercase"
          style={{ fontSize: 20 * layoutScale }}
        >
          {CORE_ENGINE_CTA}
        </Button>
      </motion.div>
    </div>
  )
}

export function CoreEngineDiagram() {
  return (
    <CoreEngineCanvas>
      <CoreEngineDiagramContent />
    </CoreEngineCanvas>
  )
}
