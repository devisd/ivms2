type TrustedOperationalPlaqueProps = {
  className?: string
}

export function TrustedOperationalPlaque({ className }: TrustedOperationalPlaqueProps) {
  return (
    <div className={`grid h-[332px] w-[1110px] ${className ?? ''}`}>
      <svg
        viewBox="-20 0 1110 332"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="col-start-1 row-start-1 size-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M1090 300C1090 317.673 1075.67 332 1058 332H12C-5.67314 332 -20 317.673 -20 300V32C-20 14.3269 -5.67311 0 12 0H978.569C996.242 0 1010.57 14.3269 1010.57 32V144C1010.57 161.673 1024.9 176 1042.57 176H1058C1075.67 176 1090 190.327 1090 208V300Z"
          fill="#00D4AA"
        />
      </svg>
      <p className="col-start-1 row-start-1 ml-[254px] mt-[145px] w-[487px] whitespace-nowrap text-center text-[40px] uppercase leading-none text-white">
        OPERATIONAL ANCHORS
      </p>
    </div>
  )
}
