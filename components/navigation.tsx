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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-neutral-white py-4 border-b border-neutral-light/50 shadow-sm`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center md:justify-between relative">
        <Link href="/" className="flex items-center">
          <div 
            className="relative transition-all duration-300 w-[240px] h-[60px]"
          >
            <Image
              alt="SWITCHinvest"
              fill
              style={{ objectFit: "contain" }}
              src="/images/logo.png"
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-brand-teal hover-reveal font-serif">
            {t("navigation.services")}
          </Link>
          <Link href="/portfolio" className="text-brand-teal hover-reveal font-serif">
            {t("navigation.portfolio")}
          </Link>
          <Link href="/#technologies" className="text-brand-teal hover-reveal font-serif">
            {t("navigation.technologies")}
          </Link>
          <Link href="/about" className="text-brand-teal hover-reveal font-serif">
            {t("navigation.about")}
          </Link>

          <LanguageSelector />

          <Link href="/contact">
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-sans">
              {t("navigation.contactUs") || "Contact Us"}
            </Button>
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
            className="md:hidden bg-neutral-white border-t border-neutral-light/50 shadow-md"
          >
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-6 flex flex-col space-y-4"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/#services"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.services")}
                </Link>
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
                  href="/#technologies"
                  className="block text-brand-teal py-2 hover-reveal font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.technologies")}
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
