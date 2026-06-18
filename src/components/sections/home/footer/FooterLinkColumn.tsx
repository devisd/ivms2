import { motion } from 'framer-motion'
import { cn } from '@lib/cn'

const linkClassName =
  'text-base text-white transition-colors duration-300 hover:text-teal min-[1920px]:text-xl'

type FooterLinkColumnProps = {
  title: string
  links: readonly string[]
  variants?: {
    hidden: { opacity: number; y: number }
    visible: {
      opacity: number
      y: number
      transition: { duration: number; ease: readonly [number, number, number, number] }
    }
  }
}

export function FooterLinkColumn({ title, links, variants }: FooterLinkColumnProps) {
  return (
    <motion.div variants={variants} className="flex flex-col gap-4">
      <p className="text-sm tracking-[2px] text-muted uppercase min-[1920px]:text-xl">{title}</p>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className={cn(linkClassName)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
