import { UrbanGreenCircle } from './UrbanGreenCircle'

type UrbanWheelPodProps = {
  image: string
}

export function UrbanWheelPod({ image }: UrbanWheelPodProps) {
  return (
    <div className="relative size-[566px] shrink-0 will-change-transform">
      <UrbanGreenCircle className="absolute inset-0 size-full" />
      <div className="absolute inset-0 flex items-center justify-center px-10 pb-6 pt-8">
        <img
          src={image}
          alt=""
          className="max-h-[300px] w-auto max-w-[470px] object-contain"
          draggable={false}
        />
      </div>
    </div>
  )
}
