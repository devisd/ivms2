import { useState } from 'react'
import { Container } from '@components/layout/Container'
import { PRODUCTS, PRODUCTS_TITLE } from '@data/home/products'
import { ProductCard } from './ProductCard'
import { ProductsBackground } from './ProductsBackground'

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section data-header-theme="dark" className="relative overflow-x-clip bg-navy py-16 min-[1920px]:min-h-[1405px] min-[1920px]:py-24">
      <ProductsBackground />

      <Container className="relative z-10 flex flex-col gap-12 min-[1920px]:gap-16">
        <h2 className="mx-auto max-w-[1325px] text-center text-[clamp(2.5rem,5.2vw,6.25rem)] leading-[1.1] text-white">
          {PRODUCTS_TITLE}
        </h2>

        <div className="grid grid-cols-1 gap-4 min-[1024px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1920px]:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isActive={index === activeIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
