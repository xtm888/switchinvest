"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  serviceKey: string
  icon: React.ReactNode
  t: (key: string) => any
}

export function ServiceCard({ serviceKey, icon, t }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect with mouse tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className="relative overflow-hidden border-2 border-brand-beige/30 hover:border-brand-gold/60 bg-white transition-all duration-300 h-full group shadow-lg hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Gradient background overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* 3D shine effect that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)",
            transform: "translateZ(20px)",
            left: shineX,
            top: shineY,
            width: "200px",
            height: "200px",
            marginLeft: "-100px",
            marginTop: "-100px",
          }}
        />

        {/* Animated accent line at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <CardHeader className="pb-4 relative z-10" style={{ transform: "translateZ(40px)" }}>
          <motion.div
            animate={
              isHovered
                ? { rotate: 360 }
                : {
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }
            }
            transition={
              isHovered
                ? { duration: 0.6 }
                : {
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            className="w-20 h-20 bg-gradient-to-br from-brand-teal via-cyan-600 to-brand-teal/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 text-white"
            style={{ transform: isHovered ? "translateZ(60px)" : "translateZ(40px)" }}
          >
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
              }}
              transition={{
                duration: isHovered ? 0.4 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="transform"
            >
              {icon}
            </motion.div>
          </motion.div>
          <CardTitle
            className="text-2xl font-bold font-serif text-brand-teal group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-gold transition-all duration-300 text-center"
            style={{ transform: "translateZ(30px)" }}
          >
            {t(`services.${serviceKey}.title`)}
          </CardTitle>
          <CardDescription
            className="text-neutral-dark/70 group-hover:text-neutral-dark/90 transition-colors text-center mt-2"
            style={{ transform: "translateZ(25px)" }}
          >
            {t(`services.${serviceKey}.description`)}
          </CardDescription>
        </CardHeader>
      <CardContent className="pt-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <ul className="space-y-3">
          {(() => {
            const raw = t(`services.${serviceKey}.features`) as unknown
            const featuresArray: string[] = Array.isArray(raw) ? (raw as string[]) : (raw ?? "").toString().split("\n")
            return featuresArray.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0.8,
                  x: isHovered ? 0 : -5,
                }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex items-start gap-3 text-sm text-neutral-dark group/item"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold group-hover/item:scale-110 transition-transform">
                  ✓
                </span>
                <span className="group-hover/item:text-brand-teal transition-colors">{feature}</span>
              </motion.li>
            ))
          })()}
        </ul>
      </CardContent>
      <CardFooter className="pt-6 pb-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <Link href={`/services/${serviceKey.replace('_', '-')}`} className="w-full">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-cyan-600 group-hover:from-brand-gold group-hover:to-yellow-500 text-white font-semibold text-sm px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span>{t('services.learnMore')}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </CardFooter>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
    </Card>
    </motion.div>
  )
}
