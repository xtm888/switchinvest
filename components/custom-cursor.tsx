"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only set up cursor if not on mobile
    if (!isMobile) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      }

      const handleMouseLeave = () => {
        setIsVisible(false)
      }

      const handleMouseEnter = () => {
        setIsVisible(true)
      }

      window.addEventListener("mousemove", updatePosition)
      document.addEventListener("mouseleave", handleMouseLeave)
      document.addEventListener("mouseenter", handleMouseEnter)

      return () => {
        window.removeEventListener("mousemove", updatePosition)
        document.removeEventListener("mouseleave", handleMouseLeave)
        document.removeEventListener("mouseenter", handleMouseEnter)
        window.removeEventListener("resize", checkMobile)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  // Don't render on mobile devices
  if (isMobile) return null

  // Simplified cursor without trails
  return (
    <>
      {isVisible && (
        <motion.div
          className="custom-cursor bg-copper/50"
          style={{
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9999,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            mixBlendMode: "normal",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  )
}
