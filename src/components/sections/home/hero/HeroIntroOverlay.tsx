import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { HERO_INTRO_ANIMATION, HERO_INTRO_DESIGN } from '@data/home/hero-intro'
import { useHeroIntro } from '@context/useHeroIntro'

const { width, barCount, barEdgeOverflowVh } = HERO_INTRO_DESIGN
const {
  frame1Hold,
  frame2Hold,
  barEnterDuration,
  barEnterStagger,
  barExitFlyDuration,
  barExitFlyStagger,
  logoFadeDuration,
} = HERO_INTRO_ANIMATION

const enterStagger = { each: barEnterStagger, from: 'start' as const }
const exitStagger = { each: barExitFlyStagger, from: 'end' as const }

/**
 * Frame 1 — dark + IVMS
 * Frame 2 — green bars rise bottom→top, left→right, full green + IVMS
 * Frame 3 — bars exit top→off-screen, right→left; hero revealed
 */
export function HeroIntroOverlay() {
  const { shouldAnimate, completeIntroAnimation } = useHeroIntro()
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLParagraphElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    if (!shouldAnimate) return

    const overlay = overlayRef.current
    const logo = logoRef.current
    const bars = barRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!overlay || !logo || bars.length !== barCount) return

    const barBottom = `-${barEdgeOverflowVh}vh`
    const enterHeight = `${100 + barEdgeOverflowVh * 2}vh`

    gsap.set(bars, {
      top: 'auto',
      bottom: barBottom,
      height: enterHeight,
      yPercent: 100,
      transformOrigin: '50% 100%',
    })
    gsap.set(logo, { opacity: 0, y: 12 })
    gsap.set(overlay, { opacity: 1 })

    const tl = gsap.timeline({ onComplete: completeIntroAnimation })

    // Frame 1 — dark screen, IVMS appears
    tl.to(logo, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' })
      .to({}, { duration: frame1Hold })

      // Frame 2 — bars rise from bottom, left → right, fill screen green
      .to(
        bars,
        {
          yPercent: 0,
          duration: barEnterDuration,
          stagger: enterStagger,
          ease: 'power3.inOut',
        },
        'frame-2',
      )
      .to({}, { duration: frame2Hold })

      // Frame 3 — bars rise over top edge, right → left; logo fades with exit
      .to(
        bars,
        {
          yPercent: -100,
          duration: barExitFlyDuration,
          stagger: exitStagger,
          ease: 'power3.inOut',
        },
        'frame-3',
      )
      .to(logo, { opacity: 0, duration: logoFadeDuration, ease: 'power2.in' }, 'frame-3+=0.15')
      .to(overlay, { opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')

    return () => {
      tl.kill()
    }
  }, [completeIntroAnimation, shouldAnimate])

  if (!shouldAnimate) return null

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[70] overflow-hidden bg-navy" aria-hidden>
      {Array.from({ length: barCount }, (_, index) => (
        <div
          key={index}
          ref={(node) => {
            barRefs.current[index] = node
          }}
          className="absolute origin-bottom rounded-[clamp(8px,0.625vw,12px)] bg-teal will-change-transform"
          style={{
            bottom: `-${barEdgeOverflowVh}vh`,
            left: `${((index * HERO_INTRO_DESIGN.barWidth) / width) * 100}%`,
            width: `${(HERO_INTRO_DESIGN.barWidth / width) * 100}%`,
            height: `${100 + barEdgeOverflowVh * 2}vh`,
          }}
        />
      ))}

      <p
        ref={logoRef}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(4rem,6.67vw,8rem)] text-white"
      >
        IVMS
      </p>
    </div>
  )
}
