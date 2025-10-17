"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define supported languages
export type Language = "en" | "nl" | "fr" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  initialLocale?: string
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  // Initialize with locale from URL (for SEO) or fallback to French
  const [language, setLanguage] = useState<Language>((initialLocale as Language) || "fr")

  // Sync language state with URL changes - this is critical for navigation to work
  useEffect(() => {
    if (initialLocale && initialLocale !== language) {
      setLanguage(initialLocale as Language)
    }
  }, [initialLocale, language])

  // Update document language when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }

    // Optional: Save preference to localStorage for future visits
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", language)
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
