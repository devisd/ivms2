export type UrbanSlide = {
  id: string
  problem: string
  solution: string
  description?: string
  statValue: string
  statLabel: string
  image: string
}

export const URBAN_TITLE = 'From Urban Chaos to Intelligent Control'

export const URBAN_SLIDES: UrbanSlide[] = [
  {
    id: 'congestion',
    problem: 'Road Congestion',
    solution: 'Intelligent Flow Control',
    description:
      'Real-time traffic optimization reduces commute times by 15-20% and eliminates bottlenecks through predictive routing.',
    statValue: '28B+ SAR',
    statLabel: 'annual congestion cost in KSA',
    image: '/images/use-cases/urban-mobility.webp',
  },
  {
    id: 'fatalities',
    problem: 'Road Fatalities',
    solution: 'Predictive Safety',
    statValue: '6,800+',
    statLabel: 'road deaths per year in KSA',
    image: '/images/use-cases/fleet-operations.webp',
  },
  {
    id: 'revenue',
    problem: 'Revenue Leakage',
    solution: 'Automated Collection',
    description:
      'Smart toll zones and digital enforcement increase payment collection rates by 20-25% with zero physical infrastructure.',
    statValue: '42.4B SAR',
    statLabel: 'government transport spending',
    image: '/images/use-cases/public-transit.webp',
  },
  {
    id: 'silos',
    problem: 'Data Silos',
    solution: 'Unified Platform',
    description:
      'One platform connects cameras, sensors, GPS, payments, and IoT into a single source of truth for decision-makers.',
    statValue: '19%',
    statLabel: 'of KSA CO₂ from transport',
    image: '/images/urban/slide-4.webp',
  },
]
