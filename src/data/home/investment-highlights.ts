export type InvestmentHighlight = {
  value: string
  label: string
}

export const INVESTMENT_HIGHLIGHTS_LABEL = 'Investment highlights'

export const INVESTMENT_HIGHLIGHTS_TITLE = 'The company at a glance'

export const INVESTMENT_HIGHLIGHTS: InvestmentHighlight[] = [
  { value: '7,000+', label: 'Vehicles under active management' },
  {
    value: '2',
    label: 'Sovereign-grade operational anchors (RTA Dubai · ITC Abu Dhabi / Talabat)',
  },
  { value: '150+', label: 'Specialists in AI/ML, IoT, cloud, cybersecurity, payments' },
  { value: '25', label: 'Country expansion pipeline across 4 regions' },
  {
    value: '4',
    label: 'Compliance jurisdictions (UAE PDPL · UK GDPR · OSHA · ISO 27001-aligned)',
  },
  {
    value: 'End to end',
    label: 'Vertically integrated: hardware, connectivity, software, install, payments',
  },
  { value: '340–854%', label: 'Modelled customer 5-year ROI (reference 100-vehicle fleet)' },
  { value: '2.1–6 mo', label: 'Modelled customer payback' },
]
