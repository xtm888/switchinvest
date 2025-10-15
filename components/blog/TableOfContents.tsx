"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, ChevronRight } from "lucide-react"

/**
 * Floating Table of Contents
 * Automatically extracts H2 headings from content and creates navigation
 */

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Extract headings from content
    const extractedHeadings: Heading[] = []
    const lines = content.split('\n')

    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.substring(3).trim()
        const id = `heading-${index}`
        extractedHeadings.push({ id, text, level: 2 })
      } else if (line.startsWith('### ')) {
        const text = line.substring(4).trim()
        const id = `heading-${index}`
        extractedHeadings.push({ id, text, level: 3 })
      }
    })

    setHeadings(extractedHeadings)

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -35% 0px" }
    )

    // Observe all h2 and h3 elements
    document.querySelectorAll('h2, h3').forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [content])

  if (headings.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40 max-w-xs"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-brand-beige/30 overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white flex items-center justify-between hover:from-brand-teal/90 hover:to-brand-teal transition-colors"
        >
          <div className="flex items-center gap-2">
            <List className="w-5 h-5" />
            <span className="font-semibold text-sm">Table des Matières</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="p-3 space-y-1 max-h-[60vh] overflow-y-auto">
                {headings.map((heading, index) => (
                  <motion.li
                    key={heading.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById(heading.id)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className={`block py-2 px-3 rounded-lg text-sm transition-all ${
                        heading.level === 3 ? 'pl-6' : ''
                      } ${
                        activeId === heading.id
                          ? 'bg-brand-teal text-white font-semibold'
                          : 'text-neutral-dark/70 hover:bg-brand-teal/10 hover:text-brand-teal'
                      }`}
                    >
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        {activeId === heading.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 bg-brand-gold rounded-full"
                          />
                        )}
                        <span className="line-clamp-2">{heading.text}</span>
                      </motion.div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
