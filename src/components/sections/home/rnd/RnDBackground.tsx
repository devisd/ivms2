import { RND_DESIGN } from '@data/home/rnd'

type RnDBackgroundProps = {
  className?: string
}

/** Figma 47:114 Capa 1 — wavy lines background (inside RnDDesignCanvas) */
export function RnDBackground({ className }: RnDBackgroundProps) {
  const { waves, height, width } = RND_DESIGN

  return (
    <div className={`absolute inset-0 ${className ?? ''}`} aria-hidden>
      <img
        src="/images/rnd/waves.svg"
        alt=""
        className="absolute max-w-none object-fill"
        style={{
          left: `${(waves.x / width) * 100}%`,
          top: `${(waves.y / height) * 100}%`,
          width: `${(waves.width / width) * 100}%`,
          height: `${(waves.height / height) * 100}%`,
        }}
      />
    </div>
  )
}
