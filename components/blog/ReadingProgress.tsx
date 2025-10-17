"use client"

import { useEffect, useState } from "react"
import { m, LazyMotion, domAnimation, useScroll, useSpring } from "framer-motion"

/**
 * Reading Progress Indicator
 * Shows a progress bar at the top of the page as user scrolls
 */

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Fixed progress bar at top */}
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal origin-left z-50"
        style={{ scaleX }}
      />
    </>
  )
}
