import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer'
  style?: CSSProperties
}

export function Container({ children, className, as: Tag = 'div', style }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-[1720px] px-6 min-[1280px]:px-10 min-[1440px]:px-12 min-[1920px]:px-0',
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}
