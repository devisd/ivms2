import { HeroIntroProvider } from '@context/HeroIntroContext'
import { SiteHeader } from '@components/layout/SiteHeader'
import {
  CtaSection,
  DeploymentSection,
  Footer,
  Hero,
  HowItWorks,
  InvestmentHighlights,
  PlatformCapabilities,
  ProductsSection,
  RnDSection,
  TrustedSection,
  TrustBadges,
  UrbanSection,
  UseCasesSection,
  Vision2030,
  ZoomSection,
} from '@components/sections/home'

export function HomePage() {
  return (
    <HeroIntroProvider>
      <main className="min-h-screen">
        <SiteHeader />
        <Hero />
        <ZoomSection />
        <InvestmentHighlights />
        <TrustedSection />
        <UrbanSection />
        <HowItWorks />
        <PlatformCapabilities />
        <ProductsSection />
        <RnDSection />
        <UseCasesSection />
        <TrustBadges />
        <Vision2030 />
        <DeploymentSection />
        <CtaSection />
        <Footer />
      </main>
    </HeroIntroProvider>
  )
}
