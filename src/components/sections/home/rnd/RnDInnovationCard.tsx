import { motion } from 'framer-motion'
import type { RnDInnovation } from '@data/home/rnd'

type RnDInnovationCardProps = {
  innovation: RnDInnovation
  index: number
}

export function RnDInnovationCard({ innovation, index }: RnDInnovationCardProps) {
  const heightClass =
    index === 0
      ? 'min-[1920px]:h-[172px]'
      : index === 1
        ? 'min-[1920px]:h-[288px]'
        : 'min-[1920px]:h-[268px]'

  return (
    <motion.article
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`glass-surface glass-surface--blur-6 glass-surface--blur-only rounded-[32px] px-8 py-8 ${heightClass}`}
    >
      <h3 className="text-xl text-teal min-[1920px]:text-[32px]">{innovation.title}</h3>
      <p className="mt-4 max-w-[412px] text-base leading-normal text-navy min-[1920px]:mt-5 min-[1920px]:text-2xl">
        {innovation.description}
      </p>
    </motion.article>
  )
}
