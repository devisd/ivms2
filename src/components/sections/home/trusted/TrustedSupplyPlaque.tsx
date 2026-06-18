type TrustedSupplyPlaqueProps = {
  className?: string
}

const SUPPLY_SHAPE_PATH =
  'M1977.66 189C1977.66 206.673 1963.33 221 1945.66 221H910.33C909.502 221 908.83 221.672 908.83 222.5C908.83 223.328 908.159 224 907.33 224H9.83008C-3.42475 224 -14.1699 213.255 -14.1699 200C-14.1699 186.745 -3.42476 176 9.83008 176H876.66C894.333 176 908.66 161.673 908.66 144V32C908.66 14.3269 922.987 0 940.66 0H1945.66C1963.33 0 1977.66 14.3269 1977.66 32V189Z'

export function TrustedSupplyPlaque({ className }: TrustedSupplyPlaqueProps) {
  return (
    <svg
      viewBox="-14.17 0 1992 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={SUPPLY_SHAPE_PATH} fill="#0A1628" />
      <rect x="-14.17" y="176" width="1992" height="48" fill="#0A1628" />
    </svg>
  )
}
