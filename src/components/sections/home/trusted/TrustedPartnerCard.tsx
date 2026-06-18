import { motion } from 'framer-motion'
import type { TrustedPartner } from '@data/home/trusted'
import { cn } from '@lib/cn'

type TrustedPartnerCardProps = TrustedPartner & {
  className?: string
}

export function TrustedPartnerCard({ title, description, variant, className }: TrustedPartnerCardProps) {
  return (
    <motion.article
      className={cn(
        'box-border flex h-[156px] shrink-0 flex-col overflow-hidden rounded-[32px] p-6',
        variant === 'teal' ? 'bg-card' : 'bg-[rgba(59,120,211,0.12)]',
        className,
      )}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <h3
        className={cn(
          'shrink-0 text-[32px] leading-[38px]',
          variant === 'teal' ? 'text-teal' : 'text-navy',
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mt-3 line-clamp-2 text-2xl leading-[29px]',
          variant === 'teal' ? 'text-navy' : 'text-muted',
        )}
      >
        {description}
      </p>
    </motion.article>
  )
}
