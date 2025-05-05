"use client"

import { useTranslation } from "@/hooks/use-translation"

export default function ClientPortalPage() {
  const { t } = useTranslation()

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-teal mb-8 font-serif">
        {t("clientPortal.title")}
      </h1>
      <p className="text-neutral-dark/80">
        {/* Placeholder: Add content and translation key */}
        Content for the client portal page will go here.
      </p>
    </main>
  )
}
