export type TrustedPartner = {
  title: string
  description: string
  variant: 'teal' | 'blue'
}

export const TRUSTED_TITLE = 'Trusted by sovereign-grade transport authorities'

export const TRUSTED_OPERATIONAL_PARTNERS: TrustedPartner[] = [
  {
    title: 'RTA Dubai',
    description: 'Active operational relationship, fleet management & compliance',
    variant: 'teal',
  },
  {
    title: 'UDrive (Dubai)',
    description: 'Smart Asset Management proposal (in proposal)',
    variant: 'teal',
  },
  {
    title: 'ITC Abu Dhabi',
    description:
      'fleet safety & rider-behaviour compliance for the Talabat delivery operation; drone road-safety PoC in deployment',
    variant: 'teal',
  },
]

export const TRUSTED_SUPPLY_PARTNERS: TrustedPartner[] = [
  {
    title: '1Global',
    description: 'multi-network SIM connectivity on every device',
    variant: 'blue',
  },
  {
    title: 'Teltonika',
    description: 'telematics hardware, manufacturer pricing + firmware control',
    variant: 'blue',
  },
]
