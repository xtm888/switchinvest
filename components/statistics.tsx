"use client"

import { useRef, useEffect } from "react"
import { m, LazyMotion, domAnimation, useInView, useAnimation } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"

interface Statistic {
  key: string
  value: string
  prefix?: string
  suffix?: string
}

export function Statistics() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  const statistics: Statistic[] = [
    { key: "yearsExperience", prefix: "", value: "15", suffix: " years" },
    { key: "satisfiedClients", prefix: "", value: "85", suffix: "%" },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 py-12"
    >
      {statistics.map((stat) => (
        <m.div
          key={stat.key}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col items-center text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-brand-beige mb-3 flex items-baseline font-serif">
            {stat.prefix && <span className="text-brand-gold mr-1">{stat.prefix}</span>}
            <span>{stat.value}</span>
            {stat.suffix && <span className="text-brand-gold ml-1">{stat.suffix}</span>}
          </div>
          <div className="text-sm md:text-base text-brand-beige/80 font-serif tracking-wide">{t(`statistics.${stat.key}`)}</div>
        </m.div>
      ))}
    </m.div>
  )
}
