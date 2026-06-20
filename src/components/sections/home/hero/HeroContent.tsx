import { motion } from 'framer-motion'
import { useHeroIntro } from '@context/useHeroIntro'
import { HERO_SUBTITLE_LINE_1, HERO_SUBTITLE_LINE_2, HERO_TITLE_ACCENT, HERO_TITLE_LINE_1 } from '@data/home/hero'
import { HERO_DESIGN } from '@data/home/hero-design'
import { Button } from '@components/ui/Button'
import { HeroStats } from './HeroStats'

const { contentLeft, title, connector, subtitle, statsLine, buttons } = HERO_DESIGN

const heroButtonClass =
  'h-[56px] w-[358px] rounded-[20px] px-6 py-4 text-[20px] uppercase leading-normal tracking-normal'

export function HeroContent() {
  const { isHeroChromeVisible, phase } = useHeroIntro()
  const showContent = phase !== 'animating'

  return (
    <motion.div
      className="relative h-full w-full"
      initial={false}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1
        className="absolute font-normal not-italic uppercase [word-break:break-word] text-white"
        style={{
          left: contentLeft,
          top: title.top,
          width: title.width,
          fontSize: title.fontSize,
          letterSpacing: `${title.letterSpacing}px`,
          lineHeight: title.lineHeight,
        }}
      >
        <span className="block">{HERO_TITLE_LINE_1}</span>
        <span className="block">
          System for <span className="text-teal">{HERO_TITLE_ACCENT}</span>
        </span>
      </h1>

      <img
        src="/images/hero/connector-line.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute max-w-none"
        style={{
          left: contentLeft,
          top: connector.top,
          width: connector.width,
          height: connector.height,
        }}
      />

      <p
        className="absolute text-left leading-normal text-white"
        style={{
          left: contentLeft,
          top: subtitle.top,
          width: subtitle.width,
          fontSize: subtitle.fontSize,
        }}
      >
        <span className="block">{HERO_SUBTITLE_LINE_1}</span>
        <span className="block">{HERO_SUBTITLE_LINE_2}</span>
      </p>

      <HeroStats />

      <motion.img
        src="/images/hero/stats-line.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute max-w-none"
        style={{
          left: contentLeft,
          top: statsLine.top,
          width: statsLine.width,
          height: statsLine.height,
        }}
        initial={false}
        animate={{
          opacity: isHeroChromeVisible ? 1 : 0,
          y: isHeroChromeVisible ? 0 : 24,
        }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute -translate-x-1/2"
        style={{ left: buttons.primaryCenterX, top: buttons.top }}
        initial={false}
        animate={{
          opacity: isHeroChromeVisible ? 1 : 0,
          y: isHeroChromeVisible ? 0 : 20,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button
          variant="glass"
          className={`${heroButtonClass} whitespace-nowrap ${isHeroChromeVisible ? '' : 'pointer-events-none'}`}
        >
          investor materials
        </Button>
      </motion.div>

      <motion.div
        className="absolute -translate-x-1/2"
        style={{ left: buttons.secondaryCenterX, top: buttons.top }}
        initial={false}
        animate={{
          opacity: isHeroChromeVisible ? 1 : 0,
          y: isHeroChromeVisible ? 0 : 20,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button
          variant="glass-outline"
          className={`${heroButtonClass} ${isHeroChromeVisible ? '' : 'pointer-events-none'}`}
        >
          Request a demo
        </Button>
      </motion.div>
    </motion.div>
  )
}
