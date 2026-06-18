import { Container } from '@components/layout/Container'
import { RND_FOOTER, RND_INNOVATIONS } from '@data/home/rnd'
import { RnDBackground } from './RnDBackground'
import { RnDConnector } from './RnDConnector'
import { RnDDesignCanvas } from './RnDDesignCanvas'
import { RnDHeroCard } from './RnDHeroCard'
import { RnDInnovationCard } from './RnDInnovationCard'

export function RnDSection() {
  return (
    <section
      data-header-theme="light"
      className="relative overflow-x-clip bg-surface py-16 min-[1280px]:min-h-[calc(min(100vw,1920px)*1080/1920)] min-[1280px]:py-0 min-[1920px]:min-h-[1080px]"
    >
      <RnDDesignCanvas>
        <RnDBackground />
        <RnDConnector />
      </RnDDesignCanvas>

      <Container className="relative z-10 w-full flex flex-col gap-12 py-0 min-[1280px]:max-w-none min-[1280px]:gap-[calc(49/1920*100vw)] min-[1280px]:px-[calc(100/1920*100vw)] min-[1280px]:pt-[calc(174/1920*100vw)] min-[1280px]:min-h-[calc(min(100vw,1920px)*1080/1920)] min-[1920px]:max-w-[1720px] min-[1920px]:min-h-[1080px] min-[1920px]:gap-[49px] min-[1920px]:px-0 min-[1920px]:pt-[174px]">
        <div className="grid grid-cols-1 gap-10 min-[1280px]:grid-cols-[minmax(0,783fr)_minmax(0,490fr)] min-[1280px]:items-start min-[1280px]:gap-[calc(32/1920*100vw)] min-[1920px]:grid-cols-[783px_1fr] min-[1920px]:gap-8">
          <div className="flex w-full min-[1280px]:min-h-[calc(792/1920*100vw)] min-[1280px]:items-center min-[1920px]:min-h-[792px]">
            <RnDHeroCard />
          </div>

          <div className="flex flex-col gap-8 min-[1280px]:ml-auto min-[1280px]:w-full min-[1280px]:max-w-[calc(490/1920*100vw)] min-[1920px]:max-w-[490px]">
            {RND_INNOVATIONS.map((innovation, index) => (
              <RnDInnovationCard key={innovation.id} innovation={innovation} index={index} />
            ))}
          </div>
        </div>

        <p className="text-center text-base text-muted min-[1280px]:pb-[calc(36/1920*100vw)] min-[1280px]:text-[calc(24/1920*100vw)] min-[1920px]:pb-[36px] min-[1920px]:text-2xl">{RND_FOOTER}</p>
      </Container>
    </section>
  )
}
