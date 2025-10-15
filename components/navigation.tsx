"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/use-translation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-brand-teal/10 shadow-lg'
          : 'bg-neutral-white border-b border-neutral-light/50 shadow-sm'
      } py-4`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center md:justify-between relative">
        <Link href="/" className="flex items-center">
          <div 
            className="relative transition-all duration-300 w-[180px] h-[60px]"
          >
            <Image
              alt="SWITCHinvest"
              fill
              style={{ objectFit: "contain" }}
              src="/images/logo.png"
              sizes="180px"
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/services" className="text-brand-teal hover-reveal font-serif flex items-center gap-1">
                {t("navigation.services")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-brand-beige/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link
                  href="/services/real-estate"
                  className="block px-4 py-2 text-sm text-neutral-dark hover:bg-brand-beige/20 hover:text-brand-gold transition-colors"
                >
                  🏠 {t("services.real_estate.title")}
                </Link>
                <Link
                  href="/services/investment"
                  className="block px-4 py-2 text-sm text-neutral-dark hover:bg-brand-beige/20 hover:text-brand-gold transition-colors"
                >
                  💰 {t("services.investment.title")}
                </Link>
                <Link
                  href="/services/development"
                  className="block px-4 py-2 text-sm text-neutral-dark hover:bg-brand-beige/20 hover:text-brand-gold transition-colors"
                >
                  🏗️ {t("services.development.title")}
                </Link>
                <Link
                  href="/services/management"
                  className="block px-4 py-2 text-sm text-neutral-dark hover:bg-brand-beige/20 hover:text-brand-gold transition-colors"
                >
                  📊 {t("services.management.title")}
                </Link>
              </div>
            </div>
          </div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/portfolio" className="text-brand-teal hover-reveal font-serif">
              {t("navigation.portfolio")}
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/blog" className="text-brand-teal hover-reveal font-serif">
              Blog
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/about" className="text-brand-teal hover-reveal font-serif">
              {t("navigation.about")}
            </Link>
          </motion.div>

          <LanguageSelector />

          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-sans relative overflow-hidden group">
                <span className="relative z-10">{t("navigation.contactUs") || "Contact Us"}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Button>
            </motion.div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-brand-teal/10 shadow-xl"
          >
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-6 flex flex-col space-y-4"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/services"
                  className="block text-brand-teal py-2 hover-reveal font-serif font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.services")}
                </Link>
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/real-estate"
                    className="block text-brand-teal/80 py-1 hover-reveal text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    🏠 {t("services.real_estate.title")}
                  </Link>
                  <Link
                    href="/services/investment"
                    className="block text-brand-teal/80 py-1 hover-reveal text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    💰 {t("services.investment.title")}
                  </Link>
                  <Link
                    href="/services/development"
                    className="block text-brand-teal/80 py-1 hover-reveal text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    🏗️ {t("services.development.title")}
                  </Link>
                  <Link
                    href="/services/management"
                    className="block text-brand-teal/80 py-1 hover-reveal text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    📊 {t("services.management.title")}
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/portfolio"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.portfolio")}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/blog"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/about"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.about")}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {t('valuation.cta') || 'Evaluate Now'}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
