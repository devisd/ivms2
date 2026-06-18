import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import { Button } from '@components/ui/Button'
import {
  CTA_DESCRIPTION,
  CTA_PRIMARY_LABEL,
  CTA_SECONDARY_LABEL,
  CTA_TITLE,
} from '@data/home/cta'
import { CtaBackground } from './CtaBackground'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.45 },
} as const

export function CtaSection() {
  return (
    <section data-header-theme="dark" className="relative overflow-hidden border-b-[1.5px] border-[#0a2e38] bg-navy">
      <CtaBackground />

      <Container className="relative z-10 flex flex-col items-center py-16 text-center min-[1280px]:py-20 min-[1440px]:py-24 min-[1920px]:py-[110px]">
        <div className="flex w-full max-w-[1091px] flex-col items-center gap-6 min-[1280px]:gap-7 min-[1920px]:gap-7">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full text-[clamp(2rem,5.2vw,6.25rem)] leading-[1.19] text-white"
          >
            {CTA_TITLE}
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="max-w-[1005px] text-base leading-normal text-white min-[1280px]:text-lg min-[1440px]:text-xl min-[1920px]:text-[40px]"
          >
            {CTA_DESCRIPTION}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex w-full flex-wrap items-center justify-center gap-4 pt-2 min-[1920px]:gap-5 min-[1920px]:pt-[52px]"
          >
            <Button
              variant="glass"
              className="min-w-[280px] text-white min-[1920px]:min-w-[382px] min-[1920px]:px-9 min-[1920px]:py-5"
            >
              {CTA_PRIMARY_LABEL}
            </Button>
            <Button
              variant="glass-outline"
              className="min-w-[260px] text-white min-[1920px]:min-w-[358px] min-[1920px]:px-9 min-[1920px]:py-5"
            >
              {CTA_SECONDARY_LABEL}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
