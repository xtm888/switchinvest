"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function CookieConsent() {
  const { t } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Small delay to avoid showing banner immediately on page load
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])
  
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowBanner(false)
  }
  
  const handleDecline = () => {
    // In a real implementation, you would disable non-essential cookies
    localStorage.setItem("cookieConsent", "false")
    setShowBanner(false)
  }
  
  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold mb-2">{t("cookie.title") || "Cookie Consent"}</h3>
              <p className="text-sm text-gray-600 max-w-2xl">
                {t("cookie.message") || 
                  "We use cookies to enhance your browsing experience and analyze website traffic. By clicking \"Accept\", you consent to our use of cookies as described in our"}
                <Link href="/privacy-policy" className="text-brand-teal underline ml-1">
                  {t("cookie.privacyPolicy") || "Privacy Policy"}
                </Link>.
              </p>
            </div>
            <div className="flex gap-3 whitespace-nowrap">
              <button 
                onClick={handleDecline}
                className="px-5 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                {t("cookie.decline") || "Decline"}
              </button>
              <button 
                onClick={handleAccept}
                className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark px-5 py-2 rounded-md font-medium text-sm"
              >
                {t("cookie.accept") || "Accept"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
