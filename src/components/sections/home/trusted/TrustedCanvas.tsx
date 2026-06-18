import { useEffect, useRef, useState, type ReactNode } from 'react'

const TRUSTED_DESIGN_WIDTH = 1720

type TrustedCanvasProps = {
  children: ReactNode
}

export function TrustedCanvas({ children }: TrustedCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      setScale(Math.min(1, container.clientWidth / TRUSTED_DESIGN_WIDTH))
      setContentHeight(inner.offsetHeight)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(container)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full" style={{ height: contentHeight * scale || undefined }}>
      <div
        ref={innerRef}
        className="origin-top-left"
        style={{
          width: TRUSTED_DESIGN_WIDTH,
          transform: scale < 1 ? `scale(${scale})` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  )
}
