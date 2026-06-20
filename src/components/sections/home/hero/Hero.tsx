import { motion } from 'framer-motion'
import {
  HERO_DESIGN,
  getHeroScrollIndicatorLeft,
  getHeroScrollIndicatorTop,
} from '@data/home/hero-design'
import { useHeroIntro } from '@context/useHeroIntro'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroHotspots } from './HeroHotspots'
import { HeroIntroOverlay } from './HeroIntroOverlay'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { useHeroLayout } from './useHeroLayout'

export function Hero() {
  const { isScrollIndicatorVisible } = useHeroIntro()
  const { scale, offsetX, offsetY } = useHeroLayout()

  return (
    <>
      <HeroIntroOverlay />

      <section className="relative h-screen overflow-hidden bg-navy">
        <div
          className="absolute origin-top-left will-change-transform"
          style={{
            width: HERO_DESIGN.width,
            height: HERO_DESIGN.height,
            transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
          }}
        >
          <HeroBackground />
          <HeroContent />
          <HeroHotspots />

          {isScrollIndicatorVisible ? (
            <motion.div
              className="absolute z-10 -translate-x-1/2"
              style={{
                left: getHeroScrollIndicatorLeft(),
                top: getHeroScrollIndicatorTop(),
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <HeroScrollIndicator />
            </motion.div>
          ) : null}
        </div>
      </section>
    </>
  )
}
