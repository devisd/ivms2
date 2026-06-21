import { motion } from 'framer-motion'
import { HERO_HOTSPOTS } from '@data/home/hero-hotspots'
import { useHeroIntro } from '@context/useHeroIntro'
import { HeroHotspot } from './HeroHotspot'

export function HeroHotspots() {
  const { isHeroChromeVisible } = useHeroIntro()

  if (!isHeroChromeVisible) return null

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20 overflow-visible [&_*]:pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {HERO_HOTSPOTS.map((hotspot, index) => (
        <HeroHotspot key={hotspot.id} hotspot={hotspot} pulseIndex={index} />
      ))}
    </motion.div>
  )
}
