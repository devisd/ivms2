import { motion } from 'framer-motion'
import { useHeroIntro } from '@context/useHeroIntro'
import { HERO_SCROLL_INDICATOR } from '@data/home/hero-intro'

export function HeroScrollIndicator() {
  const { reveal } = useHeroIntro()

  return (
    <button
      type="button"
      onClick={reveal}
      className="flex flex-col items-center gap-4"
      aria-label={HERO_SCROLL_INDICATOR.label}
    >
      <span
        className="text-center uppercase text-white/50"
        style={{
          fontSize: 24,
          letterSpacing: 2.4,
        }}
      >
        Scroll to explore
      </span>
      <motion.div
        aria-hidden
        className="rounded-full"
        style={{
          width: HERO_SCROLL_INDICATOR.lineWidth,
          height: HERO_SCROLL_INDICATOR.lineHeight,
          background: 'linear-gradient(to bottom, #00d4aa 24.37%, #abff02 100%)',
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
      />
    </button>
  )
}
