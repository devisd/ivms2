import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { RND_DESIGN } from '@data/home/rnd'

const { width, height } = RND_DESIGN

function figmaBox(box: { x: number; y: number; width: number; height: number }) {
  return {
    left: `${(box.x / width) * 100}%`,
    top: `${(box.y / height) * 100}%`,
    width: `${(box.width / width) * 100}%`,
    height: `${(box.height / height) * 100}%`,
  }
}

function branchBox(topPercent: number, boxHeight: number, originX: number, originWidth: number) {
  return {
    left: `${(originX / width) * 100}%`,
    top: `${topPercent}%`,
    width: `${(originWidth / width) * 100}%`,
    height: `${(boxHeight / height) * 100}%`,
  }
}

const lineTransition = { duration: 0.9, ease: 'easeInOut' as const }

/** Figma 47:21, 47:12, 47:14, 47:54 — connector lines + hub */
export function RnDConnector() {
  const { hub, diagramLine, branchOrigin, branchTop, branchBottom, connectorNudgeY } = RND_DESIGN

  return (
    <div
      className="absolute inset-0 max-[1919px]:translate-y-[var(--rnd-connector-nudge)]"
      style={{ '--rnd-connector-nudge': `${connectorNudgeY}px` } as CSSProperties}
      aria-hidden
    >
      {/* Figma 47:54 — hub frame */}
      <div className="absolute" style={figmaBox(hub)}>
        <div className="absolute left-0 top-0 size-full">
          <img
            src="/images/rnd/hub-outer.png"
            alt=""
            className="size-full max-w-none"
            width={98}
            height={98}
          />
        </div>
        <div
          className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center"
          style={{
            left: `${(8 / hub.width) * 100}%`,
            width: `${(82 / hub.width) * 100}%`,
            height: `${(82 / hub.height) * 100}%`,
          }}
        >
          <img src="/images/rnd/hub-inner.svg" alt="" className="size-full max-w-none" />
        </div>
      </div>

      <svg
        className="absolute overflow-visible"
        style={figmaBox(diagramLine)}
        viewBox="0 0 420 5"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="2.5"
          y1="2.5"
          x2="417.5"
          y2="2.5"
          stroke="#00D4AA"
          strokeWidth={5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...lineTransition, delay: 0.15 }}
        />
      </svg>

      <svg
        className="absolute origin-top-left -scale-y-100 overflow-visible"
        style={branchBox(branchTop.top, branchTop.height, branchOrigin.x, branchOrigin.width)}
        viewBox="0 0 240 290.943"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2.5 2.5C127.455 2.5 82.7266 288.443 237.5 288.443"
          stroke="#00D4AA"
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...lineTransition, delay: 0.3 }}
        />
      </svg>

      <svg
        className="absolute overflow-visible"
        style={branchBox(branchBottom.top, branchBottom.height, branchOrigin.x, branchOrigin.width)}
        viewBox="0 0 240 306.704"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2.5 2.5C127.455 2.5 82.7266 304.204 237.5 304.204"
          stroke="#00D4AA"
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...lineTransition, delay: 0.45 }}
        />
      </svg>
    </div>
  )
}
