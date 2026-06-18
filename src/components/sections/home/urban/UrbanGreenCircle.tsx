import { useId } from 'react'

type UrbanGreenCircleProps = {
  className?: string
}

export function UrbanGreenCircle({ className }: UrbanGreenCircleProps) {
  const id = useId().replace(/:/g, '')
  const gradientA = `urban-green-a-${id}`
  const gradientB = `urban-green-b-${id}`

  return (
    <svg
      viewBox="0 0 566 566"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="283" cy="283" r="283" fill={`url(#${gradientA})`} fillOpacity="0.8" />
      <circle cx="283" cy="283" r="283" fill={`url(#${gradientB})`} fillOpacity="0.8" />
      <defs>
        <linearGradient id={gradientA} x1="283" y1="-414" x2="283" y2="996" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" stopColor="#00D4AA" stopOpacity="0.01" />
          <stop offset="1" stopColor="#00D4AA" />
        </linearGradient>
        <linearGradient id={gradientB} x1="283" y1="-414" x2="283" y2="996" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" stopColor="#00D4AA" stopOpacity="0.01" />
          <stop offset="1" stopColor="#ABFF02" />
        </linearGradient>
      </defs>
    </svg>
  )
}
