"use client"

import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md animate-fade-in">
        <h1 className="text-9xl font-bold text-brand-teal mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-neutral-dark">
          {t("notFound.title") || "Page Not Found"}
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          {t("notFound.message") || "The page you're looking for doesn't exist or has been moved to a different location."}
        </p>
        
        <div className="hover:scale-105 transition-transform">
          <Link 
            href="/"
            className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 shadow-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("notFound.backHome") || "Back to Homepage"}
          </Link>
        </div>
      </div>
    </div>
  )
}
