import { motion } from 'framer-motion'
import { Container } from '@components/layout/Container'
import { FOOTER_BRAND, FOOTER_COPYRIGHT, FOOTER_LINKS } from '@data/home/footer'
import { FooterLanguageSwitch } from './FooterLanguageSwitch'
import { FooterLinkColumn } from './FooterLinkColumn'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer data-header-theme="dark" className="bg-navy pt-[100px] pb-[53px]">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-10 min-[1024px]:grid-cols-[1.5fr_repeat(4,1fr)] min-[1920px]:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p className="text-2xl text-white min-[1920px]:text-[40px]">{FOOTER_BRAND.title}</p>
            <p className="max-w-[524px] text-base leading-normal text-white min-[1920px]:text-2xl">
              {FOOTER_BRAND.description}
            </p>
          </motion.div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <FooterLinkColumn
              key={category}
              title={category}
              links={links}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 border-t border-white/10 pt-8 min-[1920px]:mt-[113px] min-[1920px]:pt-[50px]"
        >
          <div className="flex flex-col items-start justify-between gap-4 min-[1024px]:flex-row min-[1024px]:items-center">
            <p className="text-base text-muted min-[1920px]:text-2xl">
              © {currentYear} {FOOTER_COPYRIGHT.company}, {FOOTER_COPYRIGHT.location}. All rights
              reserved.
            </p>
            <FooterLanguageSwitch />
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
