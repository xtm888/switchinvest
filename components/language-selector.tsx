"use client"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import { useRouter, usePathname } from "next/navigation"

// Define the languages with their regional information
const languages = [
  { code: "nl", name: "Nederlands", regions: ["Flanders", "Brussels"] },
  { code: "fr", name: "Français", regions: ["Wallonia", "Brussels"] },
  { code: "de", name: "Deutsch", regions: ["german"] },
  { code: "en", name: "English", regions: ["International"] },
]

interface LanguageSelectorProps {
  variant?: "ghost" | "default"
  mobile?: boolean
}

export function LanguageSelector({ variant = "ghost", mobile = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageSwitch = (newLanguage: string) => {
    // Replace current locale in pathname with new locale
    const currentPath = pathname || `/${language}`
    const newPath = currentPath.replace(`/${language}`, `/${newLanguage}`)
    // Navigate to new URL - the LanguageProvider will update from the URL
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={`text-brand-teal flex items-center gap-1 hover:bg-gray-200 font-serif ${
            mobile ? "w-full justify-center" : ""
          }`}
        >
          <Globe className="h-4 w-4" />
          <span className="capitalize">{languages.find((l) => l.code === language)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-md">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageSwitch(lang.code)}
            className={`font-serif text-gray-800 hover:bg-gray-100 flex items-center justify-between ${
              language === lang.code ? "bg-brand-teal/10" : ""
            }`}
          >
            <div>
              <span>{lang.name}</span>
              <span className="text-xs block text-gray-600">
                {lang.regions.map((region) => t(`languages.regions.${region.toLowerCase()}`)).join(", ")}
              </span>
            </div>
            {language === lang.code && <Check className="h-4 w-4 text-brand-teal" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
