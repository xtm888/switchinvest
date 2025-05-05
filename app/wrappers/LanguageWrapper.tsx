"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { useLanguage } from "@/contexts/language-context"

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  
  return (
    <div className="language-wrapper" data-language={language}>
      {children}
    </div>
  )
}
