import { useRef } from 'react'
import { Container } from '@components/layout/Container'
import { SectionHeading } from '@components/ui/SectionHeading'
import {
  HOW_IT_WORKS_BUFFER_STEPS,
  HOW_IT_WORKS_LABEL,
  HOW_IT_WORKS_STEPS,
  HOW_IT_WORKS_TITLE,
} from '@data/home/how-it-works'
import { HowItWorksBackground } from './HowItWorksBackground'
import { HowItWorksCard } from './HowItWorksCard'
import { HowItWorksStepper } from './HowItWorksStepper'
import { useHowItWorksScroll } from './useHowItWorksScroll'

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const { completedSegments, segmentFills, litStepCount } = useHowItWorksScroll({
    sectionRef,
    pinRef,
    stepCount: HOW_IT_WORKS_STEPS.length,
    bufferSteps: HOW_IT_WORKS_BUFFER_STEPS,
  })

  return (
    <section ref={sectionRef} data-header-theme="dark" className="relative z-10 bg-navy">
      <div ref={pinRef} className="relative flex min-h-screen flex-col">
        <HowItWorksBackground className="z-0" />

        <Container className="relative z-10 flex flex-1 flex-col justify-center gap-10 overflow-x-clip py-16 min-[1920px]:gap-16 min-[1920px]:py-24">
          <SectionHeading label={HOW_IT_WORKS_LABEL} title={HOW_IT_WORKS_TITLE} />

          <div className="flex flex-col gap-8 min-[1920px]:gap-[50px]">
            <HowItWorksStepper
              steps={HOW_IT_WORKS_STEPS}
              completedSegments={completedSegments}
              segmentFills={segmentFills}
            />

            <div className="grid grid-cols-1 gap-4 min-[1024px]:grid-cols-2 min-[1280px]:grid-cols-4 min-[1920px]:gap-8">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <HowItWorksCard key={step.number} step={step} isActive={index < litStepCount} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
