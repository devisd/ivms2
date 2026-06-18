import { motion } from 'framer-motion'
import {
  TRUSTED_OPERATIONAL_PARTNERS,
  TRUSTED_SUPPLY_PARTNERS,
} from '@data/home/trusted'
import { TrustedCanvas } from './TrustedCanvas'
import { TrustedOperationalPlaque } from './TrustedOperationalPlaque'
import { TrustedPartnerCard } from './TrustedPartnerCard'
import { TrustedSupplyPlaque } from './TrustedSupplyPlaque'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

type TrustedBentoProps = {
  title: string
}

export function TrustedBento({ title }: TrustedBentoProps) {
  const [rta, udrive, itc] = TRUSTED_OPERATIONAL_PARTNERS
  const [oneGlobal, teltonika] = TRUSTED_SUPPLY_PARTNERS

  return (
    <TrustedCanvas>
      <motion.div
        className="flex w-[1720px] flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="h-[140px] shrink-0" aria-hidden />

        <motion.h2
          variants={itemVariants}
          className="mx-auto flex h-[238px] w-[1325px] shrink-0 items-start justify-center text-center text-[100px] leading-[1.19] text-navy"
        >
          {title}
        </motion.h2>

        <div className="mt-[80px] flex shrink-0 flex-col gap-5">
          <div className="grid grid-cols-[902px_414px_364px] gap-5 grid-rows-[156px_156px]">
            <motion.div variants={itemVariants} className="ml-[-120px] row-span-2">
              <TrustedOperationalPlaque />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrustedPartnerCard {...rta} className="w-[414px] ml-[10px]" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrustedPartnerCard {...udrive} className="w-[364px] ml-[10px]" />
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 col-start-2 ml-[88px] w-[700px]">
              <TrustedPartnerCard {...itc} />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="isolate grid h-[224px] shrink-0 grid-cols-[357px_478px_845px]"
          >
            <div className="relative z-0 col-span-3 col-start-1 row-start-1 h-[224px] w-[1992px] translate-x-[-114px]">
              <TrustedSupplyPlaque className="size-full" />
            </div>

            <div className="z-10 col-start-1 row-start-1 ml-[-40px]">
              <TrustedPartnerCard {...oneGlobal} className="w-[357px]" />
            </div>

            <div className="z-10 col-start-2 row-start-1 pr-10 ml-[-18px]">
              <TrustedPartnerCard {...teltonika} className="w-[448px]" />
            </div>

            <div className="z-10 col-start-3 row-start-1 grid h-[156px]">
              <p className="col-start-1 row-start-1 self-center justify-self-center text-center text-[40px] uppercase leading-none text-white">
                DIRECT SUPPLY CHAIN
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </TrustedCanvas>
  )
}
