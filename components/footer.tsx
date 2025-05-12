"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, Shield, Lock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useTranslation()
  const { setLanguage } = useLanguage()

  return (
    <footer className="bg-brand-teal text-brand-beige/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/images/logo.png"
              alt="SwitchInvest"
              width={180}
              height={60}
              className="mb-4 object-contain"
            />
            <p className="mb-4 font-serif">{t("footer.description")}</p>
            <div className="flex items-center text-xs">
              <Shield className="h-4 w-4 mr-1" />
              <span>{t("footer.security.gdpr")}</span>
              <Lock className="h-4 w-4 ml-3 mr-1" />
              <span>{t("footer.security.encryption")}</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-beige mb-4 font-serif">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.services.portfolioAdmin")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.services.assetEnhancement")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.services.proprietaryTech")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.services.compliance")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-beige mb-4 font-serif">{t("footer.company.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.company.leadership")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.company.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover-reveal">
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-beige mb-4 font-serif">{t("footer.legal.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover-reveal">
                  {t("footer.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover-reveal">
                  {t("footer.legal.terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy#cookies" className="hover-reveal">
                  {t("footer.legal.cookies")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy#gdpr" className="hover-reveal">
                  {t("footer.legal.gdpr")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-beige/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SwitchInvest.be. {t("footer.copyright")}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center text-xs">
              <Globe className="h-4 w-4 mr-1" />
              <span>{t("footer.belgium")}</span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setLanguage("nl")}
                className="text-xs hover-reveal cursor-pointer"
                title={`${t("languages.nl")} (${t("languages.regions.flanders")}, ${t("languages.regions.brussels")})`}
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className="text-xs hover-reveal cursor-pointer"
                title={`${t("languages.fr")} (${t("languages.regions.wallonia")}, ${t("languages.regions.brussels")})`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("de")}
                className="text-xs hover-reveal cursor-pointer"
                title={`${t("languages.de")} (${t("languages.regions.german")})`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className="text-xs hover-reveal cursor-pointer"
                title={`${t("languages.en")} (${t("languages.regions.international")})`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
