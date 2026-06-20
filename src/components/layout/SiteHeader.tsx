import { motion } from 'framer-motion'
import { useHeaderTheme } from '@lib/useHeaderTheme'
import { useHeaderVisibility } from '@lib/useHeaderVisibility'
import { Header } from './Header'

export function SiteHeader() {
  const variant = useHeaderTheme()
  const isHeaderVisible = useHeaderVisibility()

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50"
      initial={false}
      animate={{
        opacity: isHeaderVisible ? 1 : 0,
        y: isHeaderVisible ? 0 : -24,
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header
        variant={variant}
        minimal
        className={isHeaderVisible ? '' : 'pointer-events-none'}
      />
    </motion.div>
  )
}
