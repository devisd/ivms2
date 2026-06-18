import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import {
  VISION_2030_STATS,
  VISION_2030_SUBTITLE,
  VISION_2030_TITLE_ACCENT,
  VISION_2030_TITLE_PREFIX,
} from '@data/home/vision-2030'
import { Vision2030Background } from './Vision2030Background'
import { Vision2030StatCard } from './Vision2030StatCard'

export function Vision2030() {
  return (
    <section data-header-theme="dark" className="relative py-16 min-[1920px]:box-border min-[1920px]:h-[737px] min-[1920px]:py-0">
      <Vision2030Background />

      <Container className="relative z-10 flex flex-col min-[1920px]:box-border min-[1920px]:h-[737px] min-[1920px]:justify-start min-[1920px]:px-0 min-[1920px]:pt-[164px] min-[1920px]:pb-[103px]">
        <div className="mx-auto flex w-full max-w-[1135px] flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[clamp(2.5rem,5.2vw,6.25rem)] leading-[1.19] text-white min-[1920px]:h-[119px] min-[1920px]:shrink-0 min-[1920px]:whitespace-nowrap min-[1920px]:text-[100px] min-[1920px]:leading-[119px]"
          >
            {VISION_2030_TITLE_PREFIX}
            <span className="text-teal">{VISION_2030_TITLE_ACCENT}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 max-w-[894px] text-lg leading-normal text-white min-[1920px]:mt-[30px] min-[1920px]:max-w-[1100px] min-[1920px]:shrink-0 min-[1920px]:text-[32px] min-[1920px]:leading-[38px]"
          >
            {VISION_2030_SUBTITLE}
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1280px]:grid-cols-4 min-[1920px]:mt-[48px] min-[1920px]:w-full min-[1920px]:max-w-[1720px] min-[1920px]:shrink-0 min-[1920px]:grid-cols-4 min-[1920px]:gap-8">
          {VISION_2030_STATS.map((stat, index) => (
            <Vision2030StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
