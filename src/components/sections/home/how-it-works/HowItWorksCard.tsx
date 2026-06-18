import { cn } from '@lib/cn'
import type { HowItWorksStep } from '@data/home/how-it-works'

type HowItWorksCardProps = {
  step: HowItWorksStep
  isActive: boolean
}

export function HowItWorksCard({ step, isActive }: HowItWorksCardProps) {
  return (
    <article
      className={cn(
        'glass-surface glass-surface--blur-4 flex min-h-[320px] flex-col rounded-[40px] p-6 transition-[border-color,color,opacity] duration-300 min-[1920px]:h-[427px] min-[1920px]:p-8',
        isActive && 'border-teal',
      )}
    >
      <div className="mb-6 flex flex-1 items-center justify-center">
        <img
          src={step.image}
          alt=""
          className={cn(
            'max-h-[165px] w-auto object-contain transition-opacity duration-300 min-[1920px]:max-h-[203px]',
            isActive ? 'opacity-100' : 'opacity-40',
          )}
          draggable={false}
        />
      </div>
      <h3
        className={cn(
          'text-xl transition-colors duration-300 min-[1920px]:text-[32px]',
          isActive ? 'text-white' : 'text-white/40',
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          'mt-2 text-base transition-colors duration-300 min-[1920px]:text-2xl',
          isActive ? 'text-white' : 'text-white/40',
        )}
      >
        {step.description}
      </p>
    </article>
  )
}
