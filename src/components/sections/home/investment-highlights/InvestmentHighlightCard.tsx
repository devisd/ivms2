import type { InvestmentHighlight } from '@data/home/investment-highlights'

type InvestmentHighlightCardProps = InvestmentHighlight

export function InvestmentHighlightCard({ value, label }: InvestmentHighlightCardProps) {
  return (
    <article className="group relative flex min-h-[180px] flex-col min-[1920px]:min-h-[210px]">
      <span
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[rgba(0,212,170,0.1)] transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden
      />
      <span className="absolute bottom-0 left-0 top-0 w-px bg-teal" aria-hidden />

      <div className="relative z-10 flex flex-col gap-3 pl-7 pt-4 min-[1920px]:gap-3 min-[1920px]:pl-[29px] min-[1920px]:pt-4">
        <p className="text-2xl text-teal min-[1440px]:text-3xl min-[1920px]:text-[40px]">{value}</p>
        <p className="max-w-[355px] text-base leading-snug text-white min-[1920px]:text-2xl">{label}</p>
      </div>
    </article>
  )
}
