import { useEffect, useState } from 'react'

const HEADER_VISIBILITY_OFFSET = 120

export function useHeaderVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById('investment-highlights')
    if (!target) return

    const update = () => {
      const { top } = target.getBoundingClientRect()
      setIsVisible((current) => {
        const next = top <= HEADER_VISIBILITY_OFFSET
        return current === next ? current : next
      })
    }

    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return isVisible
}
