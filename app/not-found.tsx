"use client"

import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Home, Search, Mail, FileText } from "lucide-react"

export default function NotFound() {
  const { t } = useTranslation()

  const popularPages = [
    { name: t("notFound.links.home") || "Home", href: "/", icon: Home },
    { name: t("notFound.links.services") || "Services", href: "/services", icon: Search },
    { name: t("notFound.links.blog") || "Blog", href: "/blog", icon: FileText },
    { name: t("notFound.links.contact") || "Contact", href: "/contact", icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-beige/30 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-64 h-64 mx-auto">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-9xl font-bold text-brand-teal/10 font-serif"
              >
                404
              </motion.h1>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-16 h-16 bg-brand-gold/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-20 h-20 bg-brand-teal/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-brand-teal mb-4 font-serif"
          >
            {t("notFound.title") || "Page Introuvable"}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-dark/70 mb-8 max-w-2xl mx-auto"
          >
            {t("notFound.message") || "Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
          </motion.p>

          {/* Primary Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                <Home className="w-5 h-5" />
                {t("notFound.backHome") || "Retour à l'accueil"}
              </motion.button>
            </Link>
          </motion.div>

          {/* Popular Pages Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-neutral-dark mb-6">
              {t("notFound.popularPagesTitle") || "Pages Populaires"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {popularPages.map((page, index) => (
                <Link key={page.href} href={page.href}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="bg-white rounded-xl p-6 border border-brand-beige/30 hover:border-brand-gold/50 transition-all group"
                  >
                    <page.icon className="w-8 h-8 text-brand-teal group-hover:text-brand-gold transition-colors mx-auto mb-3" />
                    <p className="text-sm font-semibold text-neutral-dark group-hover:text-brand-gold transition-colors">
                      {page.name}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm text-neutral-dark/60 mt-12"
          >
            {t("notFound.needHelp") || "Besoin d'aide ?"}{" "}
            <Link href="/contact" className="text-brand-teal hover:text-brand-gold transition-colors font-semibold">
              {t("notFound.contactTeam") || "Contactez notre équipe"}
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
