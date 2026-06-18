type HeroStatBadgeProps = {
  label: string
}

export function HeroStatBadge({ label }: HeroStatBadgeProps) {
  return (
    <div className="glass-surface glass-surface--blur-2 flex h-[72px] items-center rounded-[32px] px-6 min-[1280px]:h-[82px] min-[1440px]:h-[94px] min-[1440px]:px-10">
      <span className="whitespace-nowrap text-lg text-white min-[1280px]:text-xl min-[1440px]:text-2xl min-[1920px]:text-[32px]">
        {label}
      </span>
    </div>
  )
}
