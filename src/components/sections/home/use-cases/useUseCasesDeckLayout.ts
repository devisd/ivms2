import {
  USE_CASES_DECK_STACK,
  type DeckStackSlot,
  type UseCase,
} from '@data/home/use-cases'

export type ResolvedDeckCard = {
  useCase: UseCase
  slot: DeckStackSlot
  titleOpacity: number
  cardOpacity: number
}

const EXIT_DURATION = 0.48
const ENTER_START = 0.52
const EXITING_Z_INDEX = 100

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

function interpolateSlot(from: number, to: number, t: number): DeckStackSlot {
  const a = USE_CASES_DECK_STACK[from]
  const b = USE_CASES_DECK_STACK[to]

  return {
    top: lerp(a.top, b.top, t),
    width: lerp(a.width, b.width, t),
    height: lerp(a.height, b.height, t),
    zIndex: Math.round(lerp(a.zIndex, b.zIndex, t)),
    mode: t < 0.5 ? a.mode : b.mode,
    background: t < 0.5 ? a.background : b.background,
    roundedBottom: t < 0.5 ? a.roundedBottom : b.roundedBottom,
  }
}

export function resolveDeckCards(useCases: UseCase[], deckProgress: number): ResolvedDeckCard[] {
  const count = useCases.length
  if (count === 0) return []

  const rotation = Math.floor(deckProgress) % count
  const t = deckProgress - Math.floor(deckProgress)
  const backSlot = count - 1

  return useCases.map((useCase, index) => {
    const fromSlot = (index - rotation + count) % count
    const toSlot = (index - rotation - 1 + count) % count

    if (t === 0) {
      const slot = USE_CASES_DECK_STACK[fromSlot]
      return {
        useCase,
        slot,
        titleOpacity: fromSlot === 0 ? 1 : 0,
        cardOpacity: 1,
      }
    }

    // Front card exits down, then reappears at the back — no pass-through
    if (fromSlot === 0) {
      const front = USE_CASES_DECK_STACK[0]
      const back = USE_CASES_DECK_STACK[backSlot]

      if (t < EXIT_DURATION) {
        const et = easeInOutCubic(t / EXIT_DURATION)
        return {
          useCase,
          slot: {
            ...front,
            top: lerp(front.top, 1.1, et),
            width: lerp(front.width, front.width * 0.72, et),
            height: lerp(front.height, front.height * 0.5, et),
            zIndex: EXITING_Z_INDEX,
            mode: 'front',
          },
          titleOpacity: 1 - et,
          cardOpacity: 1 - et,
        }
      }

      if (t < ENTER_START) {
        return {
          useCase,
          slot: { ...back, zIndex: 5 },
          titleOpacity: 0,
          cardOpacity: 0,
        }
      }

      const it = easeInOutCubic((t - ENTER_START) / (1 - ENTER_START))
      return {
        useCase,
        slot: back,
        titleOpacity: 0,
        cardOpacity: it,
      }
    }

    const shiftT = easeInOutCubic(t)
    const slot = interpolateSlot(fromSlot, toSlot, shiftT)

    // While the front card exits, others must not rise above it in z-order
    const zIndex =
      t < EXIT_DURATION ? USE_CASES_DECK_STACK[fromSlot].zIndex : slot.zIndex

    let titleOpacity = 0
    if (toSlot === 0) {
      titleOpacity = easeInOutCubic(Math.min(1, Math.max(0, (t - 0.12) / 0.6)))
    }

    return { useCase, slot: { ...slot, zIndex }, titleOpacity, cardOpacity: 1 }
  })
}
