export const CTA_TITLE = 'Ready to Transform Your Infrastructure?'

export const CTA_DESCRIPTION =
  'Schedule a technical session with our team. See how iVMS can be configured for your city, highway network, or national deployment.'

export const CTA_PRIMARY_LABEL = 'Request investor materials'
export const CTA_SECONDARY_LABEL = 'Book a technical session'

/** Figma frame 1:382 — 1920×746 */
export const CTA_DESIGN = {
  width: 1920,
  height: 746,
  /**
   * Figma 1:383 — Ellipse 19 at x=-141, y=444, 2192×1219.
   * Inner asset uses inset -7.41% / -4.12% (see get_design_context).
   * Visible glow rises from section bottom toward center.
   */
  glow: {
    x: -141,
    y: 444,
    width: 2192,
    height: 1219,
    insetX: 4.12,
    insetY: 7.41,
  },
  waves: { x: -107.94, y: 201.31, width: 2051.93, height: 809.31 },
  wavesViewBox: '0 0 2052.91 810.889',
} as const
