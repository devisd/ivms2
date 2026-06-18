import { motion } from 'framer-motion'
import { DEPLOYMENT_FOOTER_LINES } from '@data/home/deployment'

/** Figma 58:201 — column-3 line at 1148px inside the 1720px content grid */
const COLUMN_3_OFFSET = '66.744%'

const bottomHeights =
  'h-[120px] min-[1280px]:h-[149px] min-[1440px]:h-[168px] min-[1920px]:h-[224px]'

const stripHeights =
  'h-6 min-[1280px]:h-8 min-[1440px]:h-10 min-[1920px]:h-12'

export function DeploymentBottom() {
  return (
    <div className={`absolute inset-x-0 bottom-0 z-[15] ${bottomHeights}`}>
      {/* 1920 — full Figma union */}
      <svg
        className={`absolute bottom-0 left-[-172px] z-[15] hidden w-[2850px] ${bottomHeights} min-[1920px]:block`}
        viewBox="0 0 2850 224"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <path
          d="M1352 0H2850V224H0V176H1288C1305.67 176 1320 161.67 1320 144V32C1320 14.33 1334.33 0 1352 0Z"
          fill="white"
        />
      </svg>

      {/* < 1920 — thin strip (cols 1–2) + thick callout aligned to column 3 */}
      <div className={`absolute inset-x-0 bottom-0 min-[1920px]:hidden ${bottomHeights}`}>
        <div
          className={`absolute bottom-0 left-0 z-[15] bg-white ${stripHeights}`}
          style={{ width: COLUMN_3_OFFSET }}
        />

        <div
          className={`absolute right-[calc(50%-50vw)] bottom-0 z-[15] ${bottomHeights}`}
          style={{ left: COLUMN_3_OFFSET }}
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 572 224"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <path
              d="M32 0H572V224H0V32C0 14.33 14.33 0 32 0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Callout text — centered in the thick block on all widths */}
      <motion.div
        className={`absolute right-[calc(50%-50vw)] bottom-0 left-[66.744%] z-20 flex justify-center ${bottomHeights}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <p className="w-full max-w-[500px] px-3 pt-5 text-center text-base leading-tight text-navy min-[1024px]:px-4 min-[1024px]:pt-5 min-[1024px]:text-lg min-[1280px]:pt-6 min-[1280px]:text-xl min-[1440px]:pt-7 min-[1440px]:text-2xl min-[1920px]:px-0 min-[1920px]:pt-[22px] min-[1920px]:text-[40px] min-[1920px]:leading-[48px]">
          {DEPLOYMENT_FOOTER_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </motion.div>
    </div>
  )
}
