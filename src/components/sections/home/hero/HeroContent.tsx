import { motion } from 'framer-motion'
import { useHeroIntro } from '@context/useHeroIntro'
import { HERO_SUBTITLE, HERO_TITLE } from '@data/home/hero'
import { Button } from '@components/ui/Button'

export function HeroContent() {
  const { isHeroChromeVisible, phase } = useHeroIntro()
  const showContent = phase !== 'animating'

  return (
    <motion.div
      className="flex w-full flex-col items-center px-6 pt-[clamp(2rem,7.8125vw,150px)] text-center min-[1280px]:px-10 min-[1440px]:px-12 min-[1920px]:px-[68px]"
      initial={false}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex w-full max-w-[1784px] flex-col items-center gap-6 min-[1920px]:gap-6">
        <h1 className="w-full text-[clamp(2.75rem,8.85vw,10.625rem)] leading-none text-white">
          {HERO_TITLE}
        </h1>

        <p className="max-w-[1077px] text-lg leading-normal text-white min-[1280px]:text-2xl min-[1440px]:text-3xl min-[1920px]:text-[40px]">
          {HERO_SUBTITLE}
        </p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 pt-2 min-[1920px]:gap-6 min-[1920px]:pt-[28px]"
          initial={false}
          animate={{
            opacity: isHeroChromeVisible ? 1 : 0,
            y: isHeroChromeVisible ? 0 : 20,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant="glass"
            className={`min-w-[280px] text-white min-[1920px]:min-w-[358px] ${isHeroChromeVisible ? '' : 'pointer-events-none'}`}
          >
            Request investor materials
          </Button>
          <Button
            variant="glass-outline"
            className={`min-w-[240px] text-white min-[1920px]:min-w-[292px] ${isHeroChromeVisible ? '' : 'pointer-events-none'}`}
          >
            Explore the platform
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
