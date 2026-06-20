import { NAV_LINKS } from '@data/navigation'
import { cn } from '@lib/cn'
import { Button } from '@components/ui/Button'
import { Container } from './Container'

type HeaderProps = {
  variant?: 'dark' | 'light'
  className?: string
  minimal?: boolean
}

export function Header({ variant = 'dark', className, minimal = true }: HeaderProps) {
  const isDark = variant === 'dark'

  return (
    <header
      className={cn(
        'pointer-events-none w-full py-6 transition-colors duration-300 min-[1920px]:py-8',
        className,
      )}
    >
      <Container className="pointer-events-auto flex items-center justify-between gap-4">
        <a
          href="#"
          className={cn(
            'shrink-0 text-2xl transition-colors duration-300 min-[1280px]:text-3xl min-[1920px]:text-[40px]',
            isDark ? 'text-white' : 'text-navy',
          )}
        >
          IVMS
        </a>

        <nav
          className={cn(
            'hidden min-[1280px]:flex min-[1280px]:flex-1 min-[1280px]:justify-center',
            minimal && 'invisible pointer-events-none',
          )}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 min-[1440px]:gap-x-8 min-[1920px]:gap-x-[32px]">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-')}`}
                  className="text-sm uppercase text-muted transition-colors hover:text-teal min-[1440px]:text-base min-[1920px]:text-xl"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="glass"
          className={cn(
            'shrink-0 px-4 py-3 text-sm min-[1920px]:px-6 min-[1920px]:py-4 min-[1920px]:text-xl',
            isDark ? 'text-white' : 'text-navy',
          )}
        >
          Request a demo
        </Button>
      </Container>
    </header>
  )
}
