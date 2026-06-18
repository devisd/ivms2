import { useEffect, useState } from 'react'

export type HeaderTheme = 'dark' | 'light'

const HEADER_PROBE_Y = 44

function getThemeAtHeader(): HeaderTheme {
  const section = document
    .elementsFromPoint(window.innerWidth / 2, HEADER_PROBE_Y)
    .find(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element.hasAttribute('data-header-theme'),
    )

  return section?.getAttribute('data-header-theme') === 'light' ? 'light' : 'dark'
}

export function useHeaderTheme(): HeaderTheme {
  const [theme, setTheme] = useState<HeaderTheme>('dark')

  useEffect(() => {
    const update = () => {
      setTheme((current) => {
        const next = getThemeAtHeader()
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

  return theme
}
