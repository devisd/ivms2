import { PRODUCTS_DESIGN } from '@data/home/products'

type ProductsBackgroundProps = {
  className?: string
}

/** Figma 46:1234 Capa 1 + 46:839 Ellipse 19 — coordinates within 1920×1405 frame */
export function ProductsBackground({ className }: ProductsBackgroundProps) {
  const { waves, glow, height, width } = PRODUCTS_DESIGN

  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ''}`} aria-hidden>
      <img
        src="/images/products/waves.svg"
        alt=""
        className="absolute max-w-none object-fill"
        style={{
          left: `${(waves.x / width) * 100}%`,
          top: `${(waves.y / height) * 100}%`,
          width: `${(waves.width / width) * 100}%`,
          height: `${(waves.height / height) * 100}%`,
        }}
      />
      <img
        src="/images/products/glow-ellipse.svg"
        alt=""
        className="absolute max-w-none"
        style={{
          left: `${(glow.x / width) * 100}%`,
          top: `${(glow.y / height) * 100}%`,
          width: `${(glow.width / width) * 100}%`,
          height: `${(glow.height / height) * 100}%`,
        }}
      />
    </div>
  )
}
