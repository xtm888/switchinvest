"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

/**
 * Full Page Loader
 * Displays during page transitions or initial loads
 */

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Animated Logo or Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-brand-teal/20 border-t-brand-teal"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brand-teal font-serif text-lg"
        >
          Chargement...
        </motion.p>
      </motion.div>
    </div>
  )
}

/**
 * Inline Loader
 * For loading content within components
 */

export function InlineLoader({ message = "Chargement..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
        <p className="text-neutral-dark/60 text-sm">{message}</p>
      </div>
    </div>
  )
}

/**
 * Button Loader
 * For loading state in buttons
 */

export function ButtonLoader() {
  return (
    <Loader2 className="w-4 h-4 animate-spin" />
  )
}
