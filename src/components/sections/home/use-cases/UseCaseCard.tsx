import type { ResolvedDeckCard } from './useUseCasesDeckLayout'

type UseCaseCardProps = {
  card: ResolvedDeckCard
  deckHeight: number
}

export function UseCaseCard({ card, deckHeight }: UseCaseCardProps) {
  const { useCase, slot, titleOpacity, cardOpacity } = card
  const scale = deckHeight / 620

  const top = slot.top * deckHeight
  const width = `${slot.width * 100}%`
  const height = slot.height * scale
  const showImage = slot.mode === 'front' || slot.mode === 'partial'

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
            className="absolute left-0 w-full max-w-none object-cover"
            style={{
              top: useCase.imageOffsetY ? useCase.imageOffsetY * scale : 0,
              height: slot.mode === 'front' ? 773.104 * scale : 585.875 * scale,
              width: slot.mode === 'front' ? '100.9%' : '100%',
            }}
            draggable={false}
          />
          {useCase.overlay ? (
            <div className="absolute inset-0" style={{ backgroundColor: useCase.overlay }} />
          ) : null}
        </div>
      ) : null}

      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: titleOpacity }}
      >
        <h3 className="text-center text-2xl text-teal min-[1920px]:text-[40px]">{useCase.title}</h3>
      </div>
    </article>
  )
}
