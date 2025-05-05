"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"
import { get } from "lodash"

export function useTranslation() {
  const { language } = useLanguage()

  function t(key: string) {
    try {
      // First try to get from current language
      const translation = get(translations[language], key)
      if (translation !== undefined) return translation

      // If not found, try English as fallback
      const englishTranslation = get(translations.en, key)
      if (englishTranslation !== undefined) return englishTranslation

      // If neither found, return the key with a warning
      console.warn(`Missing translation for key: ${key}`)
      return key
    } catch (error) {
      console.error(`Error in translation for key ${key}:`, error)
      return key
    }
  }

  return { t, language }
}
