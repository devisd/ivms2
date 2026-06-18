export type Product = {
  id: string
  title: string
  description: string
  image: string
}

export const PRODUCTS_TITLE = 'Vertical-complete products, not a generic toolkit'

/** Figma frame 46:796 — 1920×1405 */
export const PRODUCTS_DESIGN = {
  width: 1920,
  height: 1405,
  waves: { x: -751, y: 134, width: 3185, height: 1136 },
  glow: { x: -218, y: 654, width: 2321, height: 1219 },
} as const

export const PRODUCTS: Product[] = [
  {
    id: 'fleet',
    title: 'iVMS Fleet Platform',
    description: 'Unified fleet management, 11 capability clusters in one dashboard',
    image: '/images/products/fleet.png',
  },
  {
    id: 'itaxi',
    title: 'iTaxi',
    description: 'Taxi & ride-hail: driver scoring, payroll, zonal fare, licence reminders',
    image: '/images/products/itaxi.png',
  },
  {
    id: 'ibus',
    title: 'iBUS',
    description: 'School transport: student verification, boarding alerts, parent invoicing',
    image: '/images/products/ibus.png',
  },
  {
    id: 'ideliver',
    title: 'iDeliver / Smart Bikers',
    description: 'Last-mile & motorcycle compliance — live under ITC Abu Dhabi (Talabat)',
    image: '/images/products/ideliver.png',
  },
  {
    id: 'speedsense',
    title: 'SpeedSense',
    description: 'Automated traffic-fine interception & recovery for state enforcement',
    image: '/images/products/speedsense.png',
  },
  {
    id: 'ipay',
    title: 'Data iPAY / ZashX',
    description: 'Tap-to-pay wallet, WPS salary disbursement, fines, remittances',
    image: '/images/products/ipay.png',
  },
]
