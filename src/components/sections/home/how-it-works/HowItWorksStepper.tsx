import { Fragment } from 'react'
import { cn } from '@lib/cn'
import type { HowItWorksStep } from '@data/home/how-it-works'

type HowItWorksProgressSegmentProps = {
  fill: number
}

function HowItWorksProgressSegment({ fill }: HowItWorksProgressSegmentProps) {
  return (
    <div className="relative mx-2 h-1 flex-1 overflow-hidden rounded-full bg-navy-deep min-[1920px]:mx-5" aria-hidden>
      <div
        className="absolute inset-y-0 left-0 bg-teal will-change-[width]"
        style={{ width: `${fill * 100}%` }}
      />
    </div>
  )
}

type HowItWorksStepNodeProps = {
  number: number
  isLit: boolean
  isCurrent: boolean
}

function HowItWorksStepNode({ number, isLit, isCurrent }: HowItWorksStepNodeProps) {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center min-[1920px]:h-[82px] min-[1920px]:w-[82px]">
      {isCurrent ? (
        <span
          className="absolute inset-[-4px] rounded-full border-2 border-teal/40 min-[1920px]:inset-[-8px]"
          aria-hidden
        />
      ) : null}
      <div
        className={cn(
          'relative flex size-full items-center justify-center rounded-full text-2xl leading-[1.2] tracking-tight text-white transition-colors duration-300 min-[1920px]:text-[40px]',
          isLit ? 'bg-teal' : 'bg-navy-deep',
        )}
      >
        {number}
      </div>
    </div>
  )
}

type HowItWorksStepperProps = {
  steps: HowItWorksStep[]
  completedSegments: number
  segmentFills: number[]
}

export function HowItWorksStepper({ steps, completedSegments, segmentFills }: HowItWorksStepperProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1396px] items-center">
      {steps.map((step, index) => (
        <Fragment key={step.number}>
          <HowItWorksStepNode
            number={step.number}
            isLit={index <= completedSegments}
            isCurrent={index === completedSegments}
          />
          {index < steps.length - 1 ? (
            <HowItWorksProgressSegment fill={segmentFills[index] ?? 0} />
          ) : null}
        </Fragment>
      ))}
    </div>
  )
}
