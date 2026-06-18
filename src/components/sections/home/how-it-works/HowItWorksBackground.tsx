import { HOW_IT_WORKS_DESIGN } from '@data/home/how-it-works'

type HowItWorksBackgroundProps = {
  className?: string
}

/** Figma 1:307 — Ellipse 19 at left -141px, top 514px, 2192×1219 within 1920×1080 frame */
export function HowItWorksBackground({ className }: HowItWorksBackgroundProps) {
  const { glow, height, width } = HOW_IT_WORKS_DESIGN

  return (
    <div className={`pointer-events-none absolute inset-0 min-h-screen ${className ?? ''}`} aria-hidden>
      <div
        className="absolute max-w-none"
        style={{
          left: `${(glow.x / width) * 100}vw`,
          top: `${(glow.y / height) * 100}vh`,
          width: `${(glow.width / width) * 100}vw`,
          height: `${(glow.height / height) * 100}vh`,
        }}
      >
        <div className="absolute inset-[-7.41%_-4.12%]">
          <img
            src="/images/how-it-works/glow.svg"
            alt=""
            className="block size-full max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
