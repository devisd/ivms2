import { useState } from 'react'
import { cn } from '@lib/cn'

type Locale = 'en' | 'ar'

const LOCALES: { id: Locale; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'ar', label: 'AR' },
]

export function FooterLanguageSwitch() {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <div className="flex gap-6 text-base tracking-widest min-[1920px]:text-2xl min-[1920px]:tracking-[2.4px]">
      {LOCALES.map(({ id, label }) => {
        const isActive = locale === id

        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLocale(id)}
            className={cn(
              'cursor-pointer transition-colors duration-300',
              isActive ? 'text-teal-dark' : 'text-muted hover:text-teal',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
