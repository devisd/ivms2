import { cn } from '@lib/cn'

type SectionHeadingProps = {
  label: string
  title: string
  dark?: boolean
  className?: string
}

export function SectionHeading({ label, title, dark = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center', className)}>
      {label ? (
        <p className="text-xl uppercase tracking-wide text-teal min-[1280px]:text-2xl min-[1440px]:text-[32px] min-[1920px]:text-[40px]">
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          'max-w-[1325px] text-[clamp(2.5rem,5.2vw,6.25rem)] leading-[1.1]',
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
