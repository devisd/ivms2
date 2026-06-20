import { HERO_DESIGN } from '@data/home/hero-design'

const { background: bg } = HERO_DESIGN

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-navy" aria-hidden>
      <div
        className="absolute top-0 opacity-50"
        style={{
          left: bg.gridLeft,
          width: bg.gridWidth,
          height: bg.gridHeight,
        }}
      >
        <img
          src="/images/hero/bg.jpg"
          alt=""
          className="absolute top-[-20.74%] left-0 h-[156.23%] w-[140.92%] max-w-none object-cover"
        />
      </div>

      <div
        className="absolute -translate-x-1/2 overflow-visible"
        style={{
          left: bg.cityCenterX,
          top: bg.cityTop,
          width: bg.cityWidth,
          height: bg.cityHeight,
        }}
      >
        <div
          className="absolute overflow-visible"
          style={{
            left: '-9.61%',
            top: '-0.04%',
            width: '114.42%',
            height: '100.09%',
          }}
        >
          <img
            src="/images/hero/nano-city.png"
            alt=""
            className="h-full w-full max-w-none object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
