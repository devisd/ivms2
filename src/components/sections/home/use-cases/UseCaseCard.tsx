import { USE_CASES_DECK_STACK } from '@data/home/use-cases'
import type { ResolvedDeckCard } from './useUseCasesDeckLayout'

type UseCaseCardProps = {
  card: ResolvedDeckCard
  deckHeight: number
}

const PARTIAL_HEIGHT = USE_CASES_DECK_STACK[1].height

export function UseCaseCard({ card, deckHeight }: UseCaseCardProps) {
  const { useCase, slot, titleOpacity, cardOpacity } = card
  const scale = deckHeight / 620

  const top = slot.top * deckHeight
  const width = `${slot.width * 100}%`
  const height = slot.height * scale
  const showImage = slot.height >= PARTIAL_HEIGHT * 0.55

  return (
    <article
      className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-t-[clamp(48px,6vw,93px)] will-change-[top,width,height,opacity]"
      style={{
        top,
        width,
        height,
        zIndex: slot.zIndex,
        opacity: cardOpacity,
        backgroundColor: slot.background,
        borderBottomLeftRadius: slot.roundedBottom ? 28.667 * scale : 0,
        borderBottomRightRadius: slot.roundedBottom ? 28.667 * scale : 0,
      }}
    >
      {showImage ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={useCase.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: useCase.imagePosition ?? 'center' }}
            draggable={false}
          />
          {useCase.overlay ? (
            <div className="absolute inset-0" style={{ backgroundColor: useCase.overlay }} />
          ) : null}
        </div>
      ) : null}

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: titleOpacity }}
      >
        <h3 className="text-center text-2xl text-teal min-[1920px]:text-[40px]">{useCase.title}</h3>
      </div>
    </article>
  )
}
