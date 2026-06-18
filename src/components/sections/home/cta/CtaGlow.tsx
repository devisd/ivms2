import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { CTA_DESIGN } from '@data/home/cta'

type CtaGlowProps = {
  className?: string
  style?: CSSProperties
}

/** Figma 1:383 — inline SVG + negative inset like the Figma layer */
function CtaGlow({ className, style }: CtaGlowProps) {
  const { glow } = CTA_DESIGN

  return (
    <motion.div className={`relative ${className ?? ''}`} style={style}>
      <motion.div
        className="absolute max-w-none"
        style={{
          top: `-${glow.insetY}%`,
          right: `-${glow.insetX}%`,
          bottom: `-${glow.insetY}%`,
          left: `-${glow.insetX}%`,
        }}
        initial={{ opacity: 0.6, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <svg
          className="block size-full overflow-visible"
          viewBox="0 0 2372.6 1399.6"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <g filter="url(#cta-glow-blur)">
            <ellipse cx="1186.3" cy="699.8" rx="1096" ry="609.5" fill="#00D4AA" fillOpacity="0.1" />
          </g>
          <defs>
            <filter
              id="cta-glow-blur"
              x="0"
              y="0"
              width="2372.6"
              height="1399.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="45.15" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  )
}

function figmaGlowBox() {
  const { glow, height, width } = CTA_DESIGN

  return {
    left: `${(glow.x / width) * 100}%`,
    top: `${(glow.y / height) * 100}%`,
    width: `${(glow.width / width) * 100}%`,
    height: `${(glow.height / height) * 100}%`,
  }
}

export function CtaGlowResponsive() {
  return <CtaGlow className="absolute z-[2]" style={figmaGlowBox()} />
}

export function CtaGlowDesktop() {
  const { glow } = CTA_DESIGN

  return (
    <CtaGlow
      className="absolute z-[2]"
      style={{
        left: glow.x,
        top: glow.y,
        width: glow.width,
        height: glow.height,
      }}
    />
  )
}
