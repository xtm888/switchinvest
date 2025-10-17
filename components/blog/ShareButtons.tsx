"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react"
import { useState } from "react"

/**
 * Social Share Buttons
 * Floating sticky buttons for sharing article
 */

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${slug}`
    : ''

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-blue-700"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=Je pensais que cet article pourrait vous intéresser : ${encodedUrl}`,
      color: "hover:bg-neutral-600"
    }
  ]

  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-3 border border-brand-beige/30">
        <p className="text-xs font-semibold text-neutral-dark/60 mb-3 text-center">
          Partager
        </p>
        <div className="flex flex-col gap-2">
          {shareButtons.map((button) => (
            <m.a
              key={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-brand-teal/10 rounded-xl text-brand-teal transition-colors ${button.color} hover:text-white group`}
              title={`Partager sur ${button.name}`}
            >
              <button.icon className="w-5 h-5" />
            </m.a>
          ))}

          {/* Copy Link Button */}
          <m.button
            onClick={handleCopyLink}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold hover:bg-brand-gold hover:text-neutral-dark transition-colors relative"
            title="Copier le lien"
          >
            <Link2 className="w-5 h-5" />
            {copied && (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 bg-neutral-dark text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              >
                Copié!
              </m.div>
            )}
          </m.button>
        </div>
      </div>
    </m.div>
  )
}
