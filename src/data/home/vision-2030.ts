export type Vision2030Stat = {
  id: string
  value: string
  label: string
}

export const VISION_2030_TITLE_PREFIX = 'Aligned with '

export const VISION_2030_TITLE_ACCENT = 'Vision 2030'

export const VISION_2030_SUBTITLE =
  "iVMS directly addresses the Kingdom's critical transportation challenges and national infrastructure strategy."

export const VISION_2030_STATS: Vision2030Stat[] = [
  { id: 'thefts', value: '23,000+', label: 'Vehicle thefts in 2023' },
  { id: 'fatalities', value: '6,800+', label: 'Road fatalities per year' },
  { id: 'co2', value: '155M tons', label: 'Annual transport CO₂' },
  { id: 'damage', value: '116B SAR', label: 'Environmental damage cost' },
]
