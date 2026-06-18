export function InvestmentHighlightsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src="/images/investment-glow.png"
        alt=""
        className="absolute left-1/2 top-[52%] w-[min(114vw,2192px)] max-w-none -translate-x-1/2 min-[1920px]:top-[564px]"
      />
      <img
        src="/images/investment-waves.png"
        alt=""
        className="absolute bottom-0 left-1/2 w-[min(126vw,2425px)] max-w-none -translate-x-1/2 min-[1920px]:bottom-[-220px]"
      />
    </div>
  )
}
