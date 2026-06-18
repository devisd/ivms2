import { cn } from '@lib/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { URBAN_CONTENT_WIDTH } from '@data/home/urban-orbit'
import type { UrbanSlide } from '@data/home/urban'

type UrbanContentProps = {
  slide: UrbanSlide
  className?: string
}

export function UrbanContent({ slide, className }: UrbanContentProps) {
  return (
    <div
      className={cn('w-full', className)}
      style={{ maxWidth: URBAN_CONTENT_WIDTH }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col gap-8 min-[1920px]:gap-[40px]"
        >
          <div className="flex flex-col gap-4 min-[1920px]:gap-[20px]">
            <h3 className="text-[32px] leading-[1.2] text-navy min-[1920px]:text-[40px] min-[1920px]:leading-[48px]">
              <span>{slide.problem} → </span>
              <span className="text-teal">{slide.solution}</span>
            </h3>
            {slide.description ? (
              <p className="max-w-[664px] text-2xl leading-normal text-navy min-[1920px]:text-[32px]">
                {slide.description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 min-[1920px]:gap-[4px]">
            <p className="text-[32px] leading-[1.2] text-[#d40000] min-[1920px]:text-[40px] min-[1920px]:leading-[48px]">
              {slide.statValue}
            </p>
            <p className="text-2xl leading-normal text-navy min-[1920px]:text-[32px] min-[1920px]:leading-[38px]">
              {slide.statLabel}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
