"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Shield, Lock, Mail, Linkedin, Twitter, Facebook, Send } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"
import SectionDivider from "@/components/home/SectionDivider"
import { useState } from "react"

export function Footer() {
  const { t } = useTranslation()
  const { setLanguage } = useLanguage()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="relative">
      {/* Wave Divider */}
      <SectionDivider variant="wave" />

      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-brand-teal to-brand-teal/90 text-brand-beige/80 pt-16 pb-8 relative overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-white/3 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Premium Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <Mail className="w-12 h-12 text-brand-gold" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                  {t("home.newsletter.title") || "Restez Informé de Nos Opportunités"}
                </h3>
                <p className="text-brand-beige/90 mb-6">
                  {t("home.newsletter.subtitle") || "Recevez en exclusivité nos analyses de marché, opportunités d'investissement et conseils d'experts"}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("home.newsletter.placeholder") || "votre@email.com"}
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    aria-label="Email address"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t("home.newsletter.button") || "S'abonner"}
                  </motion.button>
                </form>
                <p className="text-xs text-white/50 mt-4">
                  {t("home.newsletter.privacy") || "🔒 Vos données sont protégées. Désabonnement possible à tout moment."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src="/images/logo.png"
                alt="SwitchInvest"
                width={180}
                height={60}
                className="mb-4 object-contain"
              />
              <p className="mb-6 font-serif text-brand-beige/90">{t("footer.description")}</p>

              {/* Trust Badges with Glow */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 bg-white/10 rounded-lg border border-white/20"
                >
                  <Shield className="h-5 w-5 text-brand-gold" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-2 bg-white/10 rounded-lg border border-white/20"
                >
                  <Lock className="h-5 w-5 text-brand-gold" />
                </motion.div>
              </div>

              {/* Social Media Icons - Optimized for accessibility */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-brand-gold/20 transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-brand-beige group-hover:text-brand-gold transition-colors" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-brand-gold/20 transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5 text-brand-beige group-hover:text-brand-gold transition-colors" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-brand-gold/20 transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-brand-beige group-hover:text-brand-gold transition-colors" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-white mb-4 font-serif">{t("footer.services.title")}</h4>
              <ul className="space-y-2">
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/services/real-estate" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("services.real_estate.title") || "We Buy Your Property"}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/services/development" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("services.development.title") || "Turnkey Renovations"}
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-4 font-serif">{t("footer.company.title")}</h4>
              <ul className="space-y-2">
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/about" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.company.about")}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/portfolio" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("portfolio.title") || "Portfolio"}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/blog" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("notFound.links.blog") || "Blog"}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/contact" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.company.contact")}
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold text-white mb-4 font-serif">{t("footer.legal.title")}</h4>
              <ul className="space-y-2">
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/privacy-policy" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.legal.privacy")}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/terms" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.legal.terms")}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/privacy-policy#cookies" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.legal.cookies")}
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/privacy-policy#gdpr" className="hover-reveal text-brand-beige/80 hover:text-brand-gold transition-colors">
                      {t("footer.legal.gdpr")}
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </motion.div>
        </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs mb-4 md:mb-0 text-brand-beige/70"
            >
              &copy; {new Date().getFullYear()} SwitchInvest.be. {t("footer.copyright")}
            </motion.div>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center text-xs text-brand-beige/70"
              >
                <Globe className="h-4 w-4 mr-1" />
                <span>{t("footer.belgium")}</span>
              </motion.div>
              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={() => setLanguage("nl")}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 min-w-[44px] min-h-[44px] text-sm font-semibold bg-white/10 hover:bg-brand-gold hover:text-neutral-dark rounded-md transition-colors cursor-pointer border border-white/20"
                  title={`${t("languages.nl")} (${t("languages.regions.flanders")}, ${t("languages.regions.brussels")})`}
                  aria-label={`Switch to Dutch language`}
                >
                  NL
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 min-w-[44px] min-h-[44px] text-sm font-semibold bg-white/10 hover:bg-brand-gold hover:text-neutral-dark rounded-md transition-colors cursor-pointer border border-white/20"
                  title={`${t("languages.fr")} (${t("languages.regions.wallonia")}, ${t("languages.regions.brussels")})`}
                  aria-label={`Switch to French language`}
                >
                  FR
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setLanguage("de")}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 min-w-[44px] min-h-[44px] text-sm font-semibold bg-white/10 hover:bg-brand-gold hover:text-neutral-dark rounded-md transition-colors cursor-pointer border border-white/20"
                  title={`${t("languages.de")} (${t("languages.regions.german")})`}
                  aria-label={`Switch to German language`}
                >
                  DE
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setLanguage("en")}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 min-w-[44px] min-h-[44px] text-sm font-semibold bg-white/10 hover:bg-brand-gold hover:text-neutral-dark rounded-md transition-colors cursor-pointer border border-white/20"
                  title={`${t("languages.en")} (${t("languages.regions.international")})`}
                  aria-label={`Switch to English language`}
                >
                  EN
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
