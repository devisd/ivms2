import { INVESTMENT_HIGHLIGHTS } from '@data/home/investment-highlights'
import { InvestmentHighlightCard } from './InvestmentHighlightCard'

export function InvestmentHighlightsGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-10 min-[1024px]:grid-cols-2 min-[1024px]:gap-y-12 min-[1280px]:grid-cols-4 min-[1920px]:gap-y-[60px]">
      {INVESTMENT_HIGHLIGHTS.map((item) => (
        <InvestmentHighlightCard key={item.label} {...item} />
      ))}
    </div>
  )
}
