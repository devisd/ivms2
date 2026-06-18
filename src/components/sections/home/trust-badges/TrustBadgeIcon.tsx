import { motion, useReducedMotion } from 'framer-motion'
import type { TrustBadge } from '@data/home/trust-badges'

type TrustBadgeIconProps = {
  badge: TrustBadge
  index: number
}

export function TrustBadgeIcon({ badge, index }: TrustBadgeIconProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.04 }}
      className="relative flex h-[120px] w-full items-end justify-center min-[1920px]:h-[150px]"
    >
      <motion.img
        src={badge.icon}
        alt=""
        draggable={false}
        className="h-full w-auto max-w-full object-contain"
        style={{ maxWidth: badge.iconWidth }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />
    </motion.div>
  )
}
