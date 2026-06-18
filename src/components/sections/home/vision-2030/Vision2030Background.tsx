type Vision2030BackgroundProps = {
  className?: string
}

export function Vision2030Background({ className }: Vision2030BackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ''}`} aria-hidden>
      <img
        src="/images/vision-2030/background.png"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(10,22,40,0.64)]" />
    </div>
  )
}
