import { CTA_DESIGN } from '@data/home/cta'
import { CtaGlowDesktop, CtaGlowResponsive } from './CtaGlow'
import { CtaWaves } from './CtaWaves'

type CtaBackgroundProps = {
  className?: string
}

function figmaBox(box: { x: number; y: number; width: number; height: number }) {
  const { width, height } = CTA_DESIGN

  return {
    left: `${(box.x / width) * 100}%`,
    top: `${(box.y / height) * 100}%`,
    width: `${(box.width / width) * 100}%`,
    height: `${(box.height / height) * 100}%`,
  }
}

/** Figma 1:383 Ellipse 19 + 1:385 Capa 1 — waves z-0, glow z-2 */
export function CtaBackground({ className }: CtaBackgroundProps) {
  const { height, waves, width } = CTA_DESIGN

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className ?? ''}`}
      aria-hidden
    >
      <div className="absolute inset-0 min-[1920px]:hidden">
        <div className="absolute z-0" style={figmaBox(waves)}>
          <CtaWaves />
        </div>
        <CtaGlowResponsive />
      </div>

      <div
        className="absolute top-0 left-1/2 hidden -translate-x-1/2 min-[1920px]:block"
        style={{ width, height: '100%', minHeight: height }}
      >
        <div
          className="absolute z-0"
          style={{ left: waves.x, top: waves.y, width: waves.width, height: waves.height }}
        >
          <CtaWaves />
        </div>
        <CtaGlowDesktop />
      </div>
    </div>
  )
}
