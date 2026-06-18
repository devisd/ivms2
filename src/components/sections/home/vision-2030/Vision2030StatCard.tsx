import { motion } from 'framer-motion'
import type { Vision2030Stat } from '@data/home/vision-2030'

type Vision2030StatCardProps = {
  stat: Vision2030Stat
  index: number
}

export function Vision2030StatCard({ stat, index }: Vision2030StatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="glass-surface glass-surface--blur-2 flex h-[180px] shrink-0 flex-col overflow-hidden rounded-[32px] bg-[rgba(13,33,55,0.2)] min-[1920px]:h-[197px] min-[1920px]:w-[406px]"
    >
      <p className="flex h-[104px] shrink-0 items-start justify-center pt-8 text-3xl leading-none text-[#ff2121] min-[1920px]:h-[104px] min-[1920px]:pt-8 min-[1920px]:text-[40px]">
        {stat.value}
      </p>

      <div className="relative flex h-[84px] shrink-0 items-center justify-center overflow-hidden rounded-t-[32px] px-4 min-[1920px]:h-[93px]">
        <div
          className="glass-surface glass-surface--blur-16 pointer-events-none absolute inset-0 rounded-[inherit] bg-white/5"
          aria-hidden
        />
        <p className="relative z-10 text-center text-base text-white min-[1920px]:text-2xl">{stat.label}</p>
      </div>
    </motion.article>
  )
}
