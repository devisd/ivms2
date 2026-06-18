import { motion } from 'framer-motion'
import type { TrustBadge } from '@data/home/trust-badges'
import { TrustBadgeIcon } from './TrustBadgeIcon'

type TrustBadgeCardProps = {
  badge: TrustBadge
  index: number
}

export function TrustBadgeCard({ badge, index }: TrustBadgeCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col items-center text-center"
    >
      <TrustBadgeIcon badge={badge} index={index} />

      <div className="mt-6 flex flex-col gap-2 min-[1920px]:mt-6 min-[1920px]:gap-2">
        <h3 className="text-xl text-navy min-[1920px]:text-[32px]">{badge.title}</h3>

        {badge.descriptionLines ? (
          <p className="text-base leading-normal text-muted min-[1920px]:text-2xl">
            {badge.descriptionLines[0]}
            <br />
            {badge.descriptionLines[1]}
          </p>
        ) : (
          <p className="text-base leading-normal text-muted min-[1920px]:text-2xl">{badge.description}</p>
        )}
      </div>
    </motion.article>
  )
}
