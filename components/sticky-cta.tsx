"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePhoneClick = () => {
    // Track phone click with GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        phone_number: '+32 492 996561',
        location: 'sticky_cta'
      })
    }
  }

  const handleWhatsAppClick = () => {
    // Track WhatsApp click with GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        phone_number: '+32 492 996561',
        location: 'sticky_cta'
      })
    }
  }

  const handleEmailClick = () => {
    // Track email click with GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_click', {
        email: 'info@switchinvest.com',
        location: 'sticky_cta'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-brand-gold/20 p-5 mb-2 min-w-[320px] backdrop-blur-sm"
              >
                <div className="space-y-2">
                  {/* Header */}
                  <div className="pb-3 mb-3 border-b border-brand-beige">
                    <h3 className="text-brand-teal font-serif font-bold text-lg">
                      {t("contact.title") || "Contactez-nous"}
                    </h3>
                    <p className="text-neutral-dark/60 text-xs mt-1">
                      {t("contact.subtitle") || "Nous sommes là pour vous aider"}
                    </p>
                  </div>

                  {/* Contact Options */}
                  <a
                    href="tel:+32492996561"
                    onClick={handlePhoneClick}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-brand-teal/30 hover:bg-brand-teal/10 hover:border-brand-teal transition-all duration-300 h-auto py-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                        <Phone className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-xs text-neutral-dark/60 font-normal">{t("contact.info.phone") || "Téléphone"}</p>
                        <p className="text-brand-teal font-serif font-semibold">+32 492 996561</p>
                      </div>
                    </Button>
                  </a>

                  <a
                    href="mailto:info@switchinvest.com"
                    onClick={handleEmailClick}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-brand-teal/30 hover:bg-brand-teal/10 hover:border-brand-teal transition-all duration-300 h-auto py-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                        <Mail className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-xs text-neutral-dark/60 font-normal">{t("contact.info.email") || "Email"}</p>
                        <p className="text-brand-teal font-serif font-semibold text-sm">info@switchinvest.com</p>
                      </div>
                    </Button>
                  </a>

                  <a
                    href="https://wa.me/32492996561"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-green-600/30 hover:bg-green-50 hover:border-green-600 transition-all duration-300 h-auto py-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-xs text-neutral-dark/60 font-normal">WhatsApp</p>
                        <p className="text-green-600 font-serif font-semibold">{t("contact.whatsapp") || "Message instantané"}</p>
                      </div>
                    </Button>
                  </a>

                  <Link href="/contact" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-brand-gold/40 hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 h-auto py-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-xs text-neutral-dark/60 font-normal">{t("valuation.cta") || "Évaluation"}</p>
                        <p className="text-brand-gold font-serif font-semibold">{t("valuation.title") || "Évaluer mon bien"}</p>
                      </div>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-br from-brand-gold via-brand-gold to-brand-gold/90 hover:shadow-2xl text-neutral-dark rounded-full shadow-xl p-4 md:px-6 md:py-4 flex items-center gap-3 font-serif font-bold transition-all relative overflow-hidden group"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            {isExpanded ? (
              <>
                <X className="w-6 h-6 relative z-10" />
                <span className="hidden md:inline relative z-10">{t("common.close") || "Fermer"}</span>
              </>
            ) : (
              <>
                <Phone className="w-6 h-6 animate-pulse relative z-10" />
                <span className="hidden md:inline relative z-10">{t("contact.quickContact") || "Contact Rapide"}</span>
              </>
            )}
          </motion.button>

          {/* Notification Badge */}
          {!isExpanded && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                delay: 0.5,
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3
              }}
              className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-lg border-2 border-white"
            >
              !
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
