import { motion } from 'framer-motion'
import { cn } from '@lib/cn'
import type { Product } from '@data/home/products'

type ProductCardProps = {
  product: Product
  isActive: boolean
  index: number
  onActivate: () => void
}

export function ProductCard({ product, isActive, index, onActivate }: ProductCardProps) {
  return (
    <motion.article
      layout
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={cn(
        'glass-surface glass-surface--blur-4 flex min-h-[360px] flex-col rounded-[40px] outline-none min-[1920px]:h-[427px]',
        isActive && 'border-teal',
      )}
    >
      <div className="flex flex-1 items-center justify-center px-6 pt-8 min-[1920px]:px-8 min-[1920px]:pt-10">
        <motion.img
          src={product.image}
          alt=""
          className="max-h-[165px] w-auto max-w-[280px] object-contain min-[1920px]:max-h-[203px] min-[1920px]:max-w-[319px]"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0.4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          draggable={false}
        />
      </div>

      <div className="flex flex-col gap-3 px-6 pb-8 text-center min-[1920px]:gap-4 min-[1920px]:px-8 min-[1920px]:pb-10">
        <motion.h3
          className="text-xl min-[1920px]:text-[32px]"
          initial={false}
          animate={{ color: isActive ? 'rgba(0, 212, 170, 1)' : 'rgba(255, 255, 255, 0.4)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {product.title}
        </motion.h3>
        <motion.p
          className="mx-auto max-w-[428px] text-base min-[1920px]:text-2xl"
          initial={false}
          animate={{ color: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {product.description}
        </motion.p>
      </div>
    </motion.article>
  )
}
