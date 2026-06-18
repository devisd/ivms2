import { motion } from 'framer-motion'
import { useHeroIntro } from '@context/useHeroIntro'
import { HERO_SCROLL_INDICATOR } from '@data/home/hero-intro'

export function HeroScrollIndicator() {
  const { reveal } = useHeroIntro()

  return (
    <button
      type="button"
      onClick={reveal}
      className="flex flex-col items-center gap-3 pb-2 min-[1920px]:gap-4 min-[1920px]:pb-0"
      aria-label={HERO_SCROLL_INDICATOR.label}
    >
        <p className="text-xs uppercase tracking-[0.1em] text-white/50 min-[1280px]:text-sm min-[1920px]:text-2xl min-[1920px]:tracking-[2.4px]">
          Scroll to explore
        </p>
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
