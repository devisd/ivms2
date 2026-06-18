import {
  INVESTMENT_HIGHLIGHTS_LABEL,
  INVESTMENT_HIGHLIGHTS_TITLE,
} from '@data/home/investment-highlights'
import { Container } from '@components/layout/Container'
import { InvestmentHighlightsBackground } from './InvestmentHighlightsBackground'
import { InvestmentHighlightsGrid } from './InvestmentHighlightsGrid'

export function InvestmentHighlights() {
  return (
    <section data-header-theme="dark" className="relative overflow-hidden bg-navy py-16 min-[1920px]:h-[1078px] min-[1920px]:py-0">
      <InvestmentHighlightsBackground />

      <Container className="relative z-10 flex flex-col gap-10 pt-8 min-[1920px]:gap-[81px] min-[1920px]:pt-[136px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-xl text-teal min-[1280px]:text-2xl min-[1440px]:text-3xl min-[1920px]:text-[40px]">
            {INVESTMENT_HIGHLIGHTS_LABEL}
          </p>
          <h2 className="max-w-[1325px] text-[clamp(2.5rem,5.2vw,6.25rem)] leading-[1.19] text-white">
            {INVESTMENT_HIGHLIGHTS_TITLE}
          </h2>
        </div>

        <InvestmentHighlightsGrid />
      </Container>
    </section>
  )
}
