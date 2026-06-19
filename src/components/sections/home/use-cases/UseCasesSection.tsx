import { Container } from '@components/layout/Container'
import { SectionHeading } from '@components/ui/SectionHeading'
import { USE_CASES_LABEL, USE_CASES_TITLE } from '@data/home/use-cases'
import { UseCasesDeck } from './UseCasesDeck'
import { useUseCasesAutoSlider } from './useUseCasesAutoSlider'

export function UseCasesSection() {
  const { deckProgress } = useUseCasesAutoSlider()

  return (
    <section
      data-header-theme="dark"
      className="relative flex flex-col bg-navy min-[1920px]:min-h-[1080px]"
    >
      <Container className="relative z-10 flex flex-1 flex-col overflow-x-clip pb-0 pt-16 min-[1280px]:pt-[calc(137/1920*100vw)] min-[1920px]:pt-[137px]">
        <SectionHeading
          label={USE_CASES_LABEL}
          title={USE_CASES_TITLE}
          className="min-[1920px]:gap-5"
        />

        <div className="mt-10 min-[1920px]:mt-[136px]">
          <UseCasesDeck deckProgress={deckProgress} />
        </div>
      </Container>
    </section>
  )
}
