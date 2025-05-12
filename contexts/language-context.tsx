"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define supported languages
export type Language = "en" | "nl" | "fr" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with French or stored preference
  const [language, setLanguage] = useState<Language>("fr")

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
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
