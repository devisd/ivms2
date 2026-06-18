import { motion } from 'framer-motion'
import { RND_HERO_SUBTITLE, RND_HERO_TITLE } from '@data/home/rnd'

export function RnDHeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-surface glass-surface--blur-6 glass-surface--blur-only relative flex min-h-[220px] flex-col justify-center rounded-[40px] px-8 py-8 min-[1920px]:h-[251px] min-[1920px]:px-8 min-[1920px]:py-8"
    >
      <h2 className="text-[clamp(2.75rem,5.2vw,6.25rem)] leading-[1.19] text-navy">{RND_HERO_TITLE}</h2>
      <p className="mt-5 text-xl text-navy min-[1920px]:mt-6 min-[1920px]:text-[40px]">{RND_HERO_SUBTITLE}</p>
    </motion.article>
  )
}
