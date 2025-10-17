"use client"

import { useTranslation } from "@/hooks/use-translation"
import { m, LazyMotion, domAnimation } from "framer-motion"
import Image from "next/image"

export default function TechnologiesPage() {
  const { t } = useTranslation()

  const technologies = [
    {
      title: t("technologies.items.1.title"),
      description: t("technologies.items.1.description"),
      image: "/images/technologies/1.jpg",
      features: [
        t("technologies.items.1.features.1"),
        t("technologies.items.1.features.2"),
        t("technologies.items.1.features.3")
      ]
    },
    {
      title: t("technologies.items.2.title"),
      description: t("technologies.items.2.description"),
      image: "/images/technologies/2.jpg",
      features: [
        t("technologies.items.2.features.1"),
        t("technologies.items.2.features.2"),
        t("technologies.items.2.features.3")
      ]
    },
    {
      title: t("technologies.items.3.title"),
      description: t("technologies.items.3.description"),
      image: "/images/technologies/3.jpg",
      features: [
        t("technologies.items.3.features.1"),
        t("technologies.items.3.features.2"),
        t("technologies.items.3.features.3")
      ]
    }
  ]

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-permafrost text-center mb-12 font-serif tracking-tight">
            {t("technologies.title")}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white font-serif mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-lg text-white/80 font-serif mb-4">
                      {tech.description}
                    </p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2">
                          <span className="text-xl text-white">•</span>
                          <p className="text-sm text-white/80 font-serif">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
