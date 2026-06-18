import {
  URBAN_ORBIT_CENTER_X_OFFSET,
  URBAN_ORBIT_CENTER_Y,
  URBAN_ORBIT_RING_SIZE,
} from '@data/home/urban-orbit'

type UrbanBackgroundProps = {
  scale: number
}

export function UrbanBackground({ scale }: UrbanBackgroundProps) {
  const ringCenter = URBAN_ORBIT_RING_SIZE / 2

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-surface" aria-hidden>
      <div
        className="absolute size-0"
        style={{
          left: `calc(50% + ${URBAN_ORBIT_CENTER_X_OFFSET * scale}px)`,
          top: URBAN_ORBIT_CENTER_Y * scale,
        }}
      >
        <div className="origin-top-left" style={{ transform: `scale(${scale})` }}>
          <img
            src="/images/urban/orbit-ring.svg"
            alt=""
            className="absolute max-w-none"
            style={{
              left: -ringCenter,
              top: -ringCenter,
              width: URBAN_ORBIT_RING_SIZE,
              height: URBAN_ORBIT_RING_SIZE,
            }}
          />
        </div>
      </div>
    </div>
  )
}
