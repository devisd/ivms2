import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import {
  DEPLOYMENT_LABEL,
  DEPLOYMENT_STEPS,
  DEPLOYMENT_TITLE,
} from '@data/home/deployment'
import { DeploymentBottom } from './DeploymentBottom'
import { DeploymentStep } from './DeploymentStep'
import { cn } from '@lib/cn'

const stepGridCells = [
  'min-[1024px]:col-start-1 min-[1024px]:row-start-3',
  'min-[1024px]:col-start-2 min-[1024px]:row-start-2',
  'min-[1024px]:col-start-3 min-[1024px]:row-start-1',
] as const

export function DeploymentSection() {
  return (
    <section data-header-theme="dark" className="relative overflow-hidden bg-navy min-[1920px]:flex min-[1920px]:h-[1134px] min-[1920px]:flex-col">
      <Container className="relative z-20 flex shrink-0 flex-col pt-20 min-[1280px]:pt-24 min-[1440px]:pt-[136px] min-[1920px]:h-[450px] min-[1920px]:justify-end min-[1920px]:pt-[150px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xl whitespace-nowrap text-teal min-[1280px]:text-2xl min-[1920px]:text-[40px]"
        >
          {DEPLOYMENT_LABEL}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="mt-5 max-w-[847px] text-4xl leading-[1.19] text-white min-[1280px]:text-6xl min-[1440px]:text-7xl min-[1920px]:mt-7 min-[1920px]:text-[100px]"
        >
          {DEPLOYMENT_TITLE}
        </motion.h2>
      </Container>

      <Container className="relative z-20 grid h-auto shrink-0 grid-cols-1 gap-10 pt-10 min-[1024px]:h-[365px] min-[1024px]:grid-cols-[574fr_574fr_572fr] min-[1024px]:grid-rows-[258fr_210fr_216fr] min-[1024px]:gap-0 min-[1024px]:overflow-visible min-[1024px]:p-0 min-[1024px]:px-0 min-[1280px]:h-[456px] min-[1280px]:px-0 min-[1440px]:h-[513px] min-[1440px]:px-0 min-[1920px]:h-[684px] min-[1920px]:overflow-visible min-[1920px]:px-0 min-[1920px]:pt-0">
        {/* Col-3 line below 1920 — locked to white figure left edge */}
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-[66.744%] z-[5] hidden w-px bg-teal min-[1024px]:block min-[1920px]:hidden"
        />

        {DEPLOYMENT_STEPS.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              'relative flex h-full items-start',
              index === 0 && 'min-[1920px]:-translate-y-[180px]',
              index === 1 && 'min-[1920px]:-translate-y-[80px]',
              stepGridCells[index],
            )}
          >
            <DeploymentStep step={step} index={index} />
          </div>
        ))}

        <DeploymentBottom />
      </Container>
    </section>
  )
}
