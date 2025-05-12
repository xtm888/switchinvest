"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"
import { get } from "lodash"

export function useTranslation() {
  const { language } = useLanguage()

  function t(key: string, vars?: Record<string, string | number>) {
    try {
      // First try to get from current language
      let translation = get(translations[language], key)
      if (translation === undefined) {
        // If not found, try English as fallback
        translation = get(translations.en, key)
      }
      if (typeof translation === 'string') {
        // Interpolate variables if provided
        if (vars) {
          Object.entries(vars).forEach(([k, v]) => {
            translation = translation.replace(new RegExp(`{{\s*${k}\s*}}`, 'g'), String(v))
          })
        }
        return translation
      }
      // If it's an array or object, return as-is
      if (translation !== undefined) return translation
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
