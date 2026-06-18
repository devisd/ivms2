import { useLayoutEffect, useRef, useState } from 'react'
import { USE_CASES } from '@data/home/use-cases'
import { UseCaseCard } from './UseCaseCard'
import { resolveDeckCards } from './useUseCasesDeckLayout'

type UseCasesDeckProps = {
  deckProgress: number
}

export function UseCasesDeck({ deckProgress }: UseCasesDeckProps) {
  const deckRef = useRef<HTMLDivElement>(null)
  const [deckHeight, setDeckHeight] = useState(620)

  useLayoutEffect(() => {
    const node = deckRef.current
    if (!node) return

    const update = () => setDeckHeight(node.clientHeight)
    update()

    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const cards = resolveDeckCards(USE_CASES, deckProgress).sort(
    (a, b) => a.slot.zIndex - b.slot.zIndex,
  )

  return (
    <div
      ref={deckRef}
      className="relative mx-auto h-[min(62vw,620px)] w-full max-w-[1720px] overflow-hidden min-[1024px]:h-[min(56vw,620px)] min-[1920px]:h-[620px]"
    >
      {cards.map((card) => (
        <UseCaseCard key={card.useCase.id} card={card} deckHeight={deckHeight} />
      ))}
    </div>
  )
}
