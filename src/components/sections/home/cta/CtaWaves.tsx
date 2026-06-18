import { motion } from 'framer-motion'
import { CTA_DESIGN } from '@data/home/cta'
import { CTA_WAVE_PATHS } from '@data/home/cta-waves-paths'

const lineTransition = { duration: 1.1, ease: 'easeInOut' as const }

/** Figma 1:385 — animated Capa 1 wave lines */
export function CtaWaves() {
  return (
    <svg
      className="size-full overflow-visible"
      viewBox={CTA_DESIGN.wavesViewBox}
      fill="none"
      preserveAspectRatio="none"
    >
      {CTA_WAVE_PATHS.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          stroke="#00D4AA"
          strokeOpacity={0.12}
          strokeWidth={1.57632}
          strokeMiterlimit={10}
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...lineTransition, delay: 0.08 + index * 0.04 }}
        />
      ))}
    </svg>
  )
}
