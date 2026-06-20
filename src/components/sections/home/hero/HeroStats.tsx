import { motion } from 'framer-motion'
import { HERO_STATS } from '@data/home/hero'
import { HERO_DESIGN } from '@data/home/hero-design'
import { useHeroIntro } from '@context/useHeroIntro'

const { stats: design, contentLeft } = HERO_DESIGN

export function HeroStats() {
  const { isHeroChromeVisible } = useHeroIntro()

  return (
    <motion.div
      className="absolute"
      style={{
        left: contentLeft,
        top: design.top,
        width: design.width,
        height: design.height,
      }}
      initial={false}
      animate={{
        opacity: isHeroChromeVisible ? 1 : 0,
        y: isHeroChromeVisible ? 0 : 24,
      }}
      transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {HERO_STATS.map((item, index) => (
        <motion.p
          key={item.label}
          className="absolute top-1/2 -translate-y-1/2 text-left leading-normal text-muted"
          style={{
            left: design.itemLeft[index],
            width: design.itemWidth[index],
            fontSize: design.fontSize,
          }}
          initial={false}
          animate={{
            opacity: isHeroChromeVisible ? 1 : 0,
            y: isHeroChromeVisible ? 0 : 16,
          }}
          transition={{
            duration: 0.45,
            delay: isHeroChromeVisible ? index * 0.06 : 0,
            ease: 'easeOut',
          }}
        >
          {item.label === 'sovereign anchor clients' ? (
            <>
              <span className="block text-teal">{item.value}</span>
              <span className="block">{item.label}</span>
            </>
          ) : (
            <>
              <span className="text-teal">{item.value}</span> {item.label}
            </>
          )}
        </motion.p>
      ))}

      {design.dividerLeft.map((left) => (
        <img
          key={left}
          src="/images/hero/stat-divider.svg"
          alt=""
          aria-hidden
          className="absolute top-px w-px"
          style={{ left, height: design.dividerHeight }}
        />
      ))}
    </motion.div>
  )
}
