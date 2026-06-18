import { motion } from 'framer-motion'
import { HERO_STATS } from '@data/home/hero'
import { useHeroIntro } from '@context/useHeroIntro'
import { HeroStatBadge } from './HeroStatBadge'

export function HeroStats() {
  const { isHeroChromeVisible } = useHeroIntro()

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 max-[1919px]:mt-8 min-[1280px]:gap-4 min-[1920px]:mt-0 min-[1920px]:gap-8"
      initial={false}
      animate={{
        opacity: isHeroChromeVisible ? 1 : 0,
        y: isHeroChromeVisible ? 0 : 24,
      }}
      transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {HERO_STATS.map((item, index) => (
        <motion.div
          key={item}
          initial={false}
          animate={{
            opacity: isHeroChromeVisible ? 1 : 0,
            y: isHeroChromeVisible ? 0 : 16,
          }}
          transition={{ duration: 0.45, delay: isHeroChromeVisible ? index * 0.06 : 0, ease: 'easeOut' }}
        >
          <HeroStatBadge label={item} />
        </motion.div>
      ))}
    </motion.div>
  )
}
