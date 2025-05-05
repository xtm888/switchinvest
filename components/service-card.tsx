"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  serviceKey: string
  icon: React.ReactNode
  t: (key: string) => any
}

export function ServiceCard({ serviceKey, icon, t }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <Card
      ref={cardRef}
      className="overflow-hidden border border-neutral-dark/10 bg-neutral-white transition-all duration-300 h-full hover:shadow-md hover:shadow-brand-gold/15"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4 border-b border-neutral-dark/10">
        <div className="text-brand-gold mb-3">{icon}</div>
        <CardTitle className="text-xl font-bold font-serif text-brand-teal">{t(`services.${serviceKey}.title`)}</CardTitle>
        <CardDescription className="text-neutral-dark/80">{t(`services.${serviceKey}.description`)}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {(() => {
            const raw = t(`services.${serviceKey}.features`) as unknown
            const featuresArray: string[] = Array.isArray(raw) ? (raw as string[]) : (raw ?? "").toString().split("\n")
            return featuresArray.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 0 : -5,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-2 text-sm text-neutral-dark"
              >
                <span className="text-brand-gold mt-1">•</span>
                <span>{feature}</span>
              </motion.li>
            ))
          })()}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 border-t border-neutral-dark/10">
        <Link href="/about">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 0 : -5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center text-brand-teal font-medium text-sm cursor-pointer"
          >
            {t('services.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>
        </Link>
      </CardFooter>
    </Card>
  )
}
