import { motion } from 'framer-motion'
import {
  DEPLOYMENT_STEP_DESC_MAX_W,
  DEPLOYMENT_STEP_GAPS,
  DEPLOYMENT_STEP_LINE_EXTEND,
  type DeploymentStep as DeploymentStepData,
} from '@data/home/deployment'
import { cn } from '@lib/cn'

type DeploymentStepProps = {
  step: DeploymentStepData
  index: number
}

export function DeploymentStep({ step, index }: DeploymentStepProps) {
  return (
    <div className="relative h-full w-full">
      <span
        aria-hidden
        className={cn(
          'absolute top-0 left-0 z-[5] w-px bg-teal',
          index === 2 && 'max-[1919px]:hidden',
          DEPLOYMENT_STEP_LINE_EXTEND[index],
        )}
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
        className={cn(
          'relative z-20 min-w-0 pl-[29px]',
          index === 2 && 'max-[1919px]:mt-2 max-[1919px]:ml-3',
          'flex flex-col',
          DEPLOYMENT_STEP_GAPS[index],
        )}
      >
        <h3
          className={cn(
            'text-xl text-teal min-[1280px]:text-2xl min-[1920px]:text-[40px]',
            index < 2 && 'min-[1920px]:whitespace-nowrap',
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            'text-base leading-normal text-white min-[1280px]:text-lg min-[1920px]:text-2xl',
            DEPLOYMENT_STEP_DESC_MAX_W[index],
          )}
        >
          {step.description}
        </p>
      </motion.article>
    </div>
  )
}
