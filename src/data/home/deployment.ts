export type DeploymentStep = {
  id: string
  title: string
  description: string
}

export const DEPLOYMENT_LABEL = 'Government revenue model'

export const DEPLOYMENT_TITLE = 'Deployments that fund themselves'

export const DEPLOYMENT_FOOTER_LINES = [
  'Each new sovereign',
  'deployment is paid for',
  'by the cash it generates.',
] as const

export const DEPLOYMENT_STEP_DESC_MAX_W = [
  'min-[1920px]:max-w-[467px]',
  'min-[1920px]:max-w-[476px]',
  'min-[1920px]:max-w-[521px]',
] as const

export const DEPLOYMENT_STEP_GAPS = [
  'gap-3',
  'gap-3 min-[1280px]:gap-10 min-[1440px]:gap-12 min-[1920px]:gap-[60px]',
  'gap-3 min-[1280px]:gap-10 min-[1440px]:gap-12 min-[1920px]:gap-[60px]',
] as const

/** Per-column line height — single continuous line from text top to grid bottom */
export const DEPLOYMENT_STEP_LINE_EXTEND = [
  'max-[1919px]:bottom-0 min-[1920px]:h-[calc(100%+180px)]',
  'min-[1024px]:h-[calc(100%+115px)] min-[1280px]:h-[calc(100%+144px)] min-[1440px]:h-[calc(100%+162px)] min-[1920px]:h-[calc(100%+216px)]',
  'min-[1024px]:h-[calc(100%+227px)] min-[1280px]:h-[calc(100%+284px)] min-[1440px]:h-[calc(100%+319px)] min-[1920px]:h-[calc(100%+426px)]',
] as const

export const DEPLOYMENT_STEPS: DeploymentStep[] = [
  {
    id: 'infrastructure',
    title: 'Zero up-front infrastructure',
    description:
      'iVMS is deployed on existing networks and vehicles, the state does not need capex.',
  },
  {
    id: 'self-funding',
    title: 'Self-funding from day one',
    description:
      'income from the first day through automatic collection of fines (SpeedSense), virtual tolling and digital wallet (iPay).',
  },
  {
    id: 'informal',
    title: 'Formalising informal economies',
    description:
      'Motorcycle taxis, unbanked drivers, and the manual collection of fines are being drawn into the tax base with increasing financial inclusion.',
  },
]
