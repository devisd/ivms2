import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import { TRUST_BADGES, TRUST_BADGES_FOOTER } from '@data/home/trust-badges'
import { TrustBadgeCard } from './TrustBadgeCard'

export function TrustBadges() {
  return (
    <section data-header-theme="light" className="bg-surface py-16 min-[1920px]:min-h-[542px] min-[1920px]:py-0">
      <Container className="flex flex-col min-[1920px]:pt-[88px] min-[1920px]:pb-[80px]">
        <div className="grid grid-cols-1 gap-12 min-[640px]:grid-cols-2 min-[1280px]:grid-cols-4 min-[1920px]:gap-8">
          {TRUST_BADGES.map((badge, index) => (
            <TrustBadgeCard key={badge.id} badge={badge} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="mt-12 text-center text-sm tracking-[2px] text-muted uppercase min-[1920px]:mt-[72px] min-[1920px]:text-xl"
        >
          {TRUST_BADGES_FOOTER}
        </motion.p>
      </Container>
    </section>
  )
}
