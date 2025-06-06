"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function ManagementPage() {
  const { t } = useTranslation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-midnight/95 to-limestone/10">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-permafrost text-center mb-12 font-serif tracking-tight">
            {t("services.management.title")}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-permafrost/80 font-serif tracking-tight">
                  {t("services.management.description")}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-permafrost mb-4 font-serif">
                  {t("services.management.features.title")}
                </h2>
                <ul className="space-y-4">
                  {[
                    "services.management.features.1",
                    "services.management.features.2",
                    "services.management.features.3"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-2xl text-permafrost">•</span>
                      <p className="text-lg text-permafrost/80 font-serif">
                        {t(feature)}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 bg-limestone/5 rounded-lg overflow-hidden">
                {/* Add your management image here */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  </>
)
}
