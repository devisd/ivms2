export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <img
        src="/images/hero-bg.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(10,22,40,0.56)]" />
    </div>
  )
}
