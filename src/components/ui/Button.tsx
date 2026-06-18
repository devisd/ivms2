import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@lib/cn'

type ButtonVariant = 'primary' | 'outline' | 'dark' | 'glass' | 'glass-outline'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-transparent bg-gradient-to-b from-[rgba(0,212,170,0.01)] from-[24.37%] to-[rgba(0,212,170,0.8)] to-[175.96%] text-white hover:border-teal/40 hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,212,170,0.35)]',
  outline:
    'border border-[rgba(0,212,170,0.3)] bg-transparent text-white hover:border-teal/70 hover:bg-teal/10 hover:shadow-[0_0_20px_rgba(0,212,170,0.18)]',
  dark:
    'border border-transparent bg-gradient-to-b from-[rgba(0,212,170,0.01)] from-[24.37%] to-[rgba(0,212,170,0.8)] to-[175.96%] text-navy hover:border-teal/30 hover:brightness-105 hover:shadow-[0_0_24px_rgba(0,212,170,0.25)]',
  glass:
    'glass-surface glass-surface--blur-8 glass-surface--teal hover:brightness-110 hover:shadow-[0_0_28px_rgba(0,212,170,0.35)]',
  'glass-outline':
    'glass-surface glass-surface--blur-8 glass-surface--outline hover:border-teal/70 hover:shadow-[0_0_20px_rgba(0,212,170,0.18)]',
}

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-14 shrink-0 cursor-pointer items-center justify-center rounded-[20px] px-6 py-4 text-base uppercase tracking-wide transition-all duration-300 hover:opacity-100 active:scale-[0.98] min-[1920px]:text-xl',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
