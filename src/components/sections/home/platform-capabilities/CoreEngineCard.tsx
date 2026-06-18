import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@lib/cn'
import type { CoreEngineCapability } from '@data/home/core-engine'
import {
  CORE_ENGINE_ANIMATION,
  CORE_ENGINE_CARD_LAYOUT,
  CORE_ENGINE_CARD_SIZE,
  designHeight,
  designLeft,
  designTop,
  designWidth,
} from '@data/home/core-engine'
import { useCoreEngineLayoutScale } from './useCoreEngineLayoutScale'

type CoreEngineCardProps = {
  capability: CoreEngineCapability
  offsetX: number
  offsetY: number
  animate: boolean
  delay: number
  className?: string
}

function scale(value: number, layoutScale: number) {
  return value * layoutScale
}

export function CoreEngineCard({
  capability,
  offsetX,
  offsetY,
  animate,
  delay,
  className,
}: CoreEngineCardProps) {
  const reducedMotion = useReducedMotion()
  const layoutScale = useCoreEngineLayoutScale()
  const duration = reducedMotion ? 0 : CORE_ENGINE_ANIMATION.cardDuration
  const layout = CORE_ENGINE_CARD_LAYOUT
  const s = layoutScale
  const borderShadow = `inset 0 0 0 ${scale(layout.borderWidth, s)}px #00d4aa`

  return (
    <motion.article
      data-core-engine-card={capability.id}
      className={cn(
        'absolute z-[30] box-border flex flex-col overflow-hidden bg-[rgba(0,212,170,0.12)] opacity-[0.32] transition-[opacity,box-shadow] duration-300',
        className,
      )}
      style={{
        left: designLeft(capability.x),
        top: designTop(capability.y),
        width: designWidth(CORE_ENGINE_CARD_SIZE.width),
        height: designHeight(CORE_ENGINE_CARD_SIZE.height),
        padding: `${scale(layout.paddingTop, s)}px ${scale(layout.paddingRight, s)}px ${scale(layout.paddingBottom, s)}px ${scale(layout.paddingLeft, s)}px`,
        borderRadius: scale(layout.borderRadius, s),
        boxShadow: borderShadow,
      }}
      initial={{ opacity: 0, x: offsetX * layoutScale, y: offsetY * layoutScale, scale: 0.92 }}
      animate={
        animate
          ? { opacity: 0.32, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: offsetX * layoutScale, y: offsetY * layoutScale, scale: 0.92 }
      }
      whileHover={{
        opacity: 1,
        boxShadow: `${borderShadow}, 0 0 ${scale(40, s)}px rgba(0, 212, 170, 0.18)`,
      }}
      transition={{
        duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h3
        className="shrink-0 tracking-normal text-navy"
        style={{
          fontSize: scale(layout.titleSize, s),
          lineHeight: `${scale(layout.titleLineHeight, s)}px`,
        }}
      >
        {capability.title}
      </h3>

      <p
        className="shrink-0 tracking-normal text-navy"
        style={{
          marginTop: scale(layout.titleToDesc, s),
          width: '100%',
          maxWidth: scale(capability.descMaxWidth ?? layout.descMaxWidth, s),
          fontSize: scale(layout.descSize, s),
          lineHeight: `${scale(layout.descLineHeight, s)}px`,
        }}
      >
        {capability.description}
      </p>

      <div
        className="flex flex-wrap"
        style={{
          marginTop: scale(layout.descToTags, s),
          gap: scale(layout.tagGap, s),
        }}
      >
        {capability.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center justify-center bg-teal text-white"
            style={{
              height: scale(layout.tagHeight, s),
              paddingInline: scale(layout.tagPaddingX, s),
              borderRadius: scale(layout.tagRadius, s),
              fontSize: scale(layout.tagFontSize, s),
              lineHeight: 1,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
