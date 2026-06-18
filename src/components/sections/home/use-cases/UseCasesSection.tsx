import { useRef } from 'react'
import { Container } from '@components/layout/Container'
import { SectionHeading } from '@components/ui/SectionHeading'
import { USE_CASES_LABEL, USE_CASES_TITLE } from '@data/home/use-cases'
import { UseCasesDeck } from './UseCasesDeck'
import { useUseCasesScroll } from './useUseCasesScroll'

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const { deckProgress } = useUseCasesScroll({ sectionRef, pinRef })

  return (
    <section ref={sectionRef} data-header-theme="dark" className="relative bg-navy">
      <div ref={pinRef} className="relative flex min-h-screen flex-col">
        <Container className="relative z-10 flex flex-1 flex-col overflow-x-clip pt-16 max-[1919px]:pb-0 min-[1280px]:pt-[calc(137/1920*100vw)] min-[1920px]:justify-start min-[1920px]:gap-0 min-[1920px]:pb-0 min-[1920px]:pt-[137px]">
          <SectionHeading
            label={USE_CASES_LABEL}
            title={USE_CASES_TITLE}
            className="min-[1920px]:gap-5"
          />

          <div className="max-[1919px]:mt-auto min-[1920px]:mt-[136px]">
            <UseCasesDeck deckProgress={deckProgress} />
          </div>
        </Container>
      </div>
    </section>
  )
}
