import { TRUSTED_TITLE } from '@data/home/trusted'
import { Container } from '@components/layout/Container'
import { TrustedBento } from './TrustedBento'

export function TrustedSection() {
  return (
    <section data-header-theme="light" className="overflow-x-clip bg-surface">
      <Container>
        <TrustedBento title={TRUSTED_TITLE} />
      </Container>
    </section>
  )
}
