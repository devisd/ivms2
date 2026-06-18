export type TrustBadge = {
  id: string
  title: string
  description: string
  descriptionLines?: [string, string]
  icon: string
  iconWidth: number
}

export const TRUST_BADGES_FOOTER = 'Shariah-compliant governance framework.'

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'gdpr',
    title: 'GDPR',
    description: 'Full data protection and privacy governance',
    descriptionLines: ['Full data protection', 'and privacy governance'],
    icon: '/images/trust-badges/gdpr.png',
    iconWidth: 109,
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001',
    description: 'Information security management certified',
    icon: '/images/trust-badges/iso-27001.png',
    iconWidth: 114,
  },
  {
    id: 'wcag',
    title: 'WCAG 2.1',
    description: 'Accessible to all users',
    icon: '/images/trust-badges/wcag.png',
    iconWidth: 113,
  },
  {
    id: 'thatcham',
    title: 'Thatcham Accredited',
    description: 'Independently tested vehicle security',
    icon: '/images/trust-badges/thatcham.png',
    iconWidth: 114,
  },
]
