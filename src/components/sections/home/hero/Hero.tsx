import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import { useHeroIntro } from '@context/useHeroIntro'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroIntroOverlay } from './HeroIntroOverlay'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { HeroStats } from './HeroStats'

export function Hero() {
  const { isScrollIndicatorVisible, isHeroChromeVisible } = useHeroIntro()

  return (
    <>
      <HeroIntroOverlay />

      <section
        data-header-theme="dark"
        className="relative flex min-h-screen flex-col overflow-hidden min-[1920px]:h-[1080px] min-[1920px]:min-h-0"
      >
        <HeroBackground />

        <div className="relative z-10 flex min-h-screen flex-col min-[1920px]:min-h-[1080px]">
          <HeroContent />

          <div className="flex-1" aria-hidden />

          <Container className="flex flex-col items-center gap-8 pb-16 min-[1920px]:gap-0 min-[1920px]:pb-[70px]">
            {isHeroChromeVisible ? <HeroStats /> : null}

            {isScrollIndicatorVisible ? (
              <motion.div
                className="-translate-y-8 min-[1920px]:-translate-y-[150px]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <HeroScrollIndicator />
              </motion.div>
            ) : null}
          </Container>
        </div>
      </section>
    </>
  )
}
