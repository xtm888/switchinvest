"use client";

import { useState, Suspense } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import { Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PropertyValuationWidget from '@/components/property-valuation-widget'
import SectionDivider from '@/components/home/SectionDivider'
import MultiStepForm from '@/components/contact/MultiStepForm'

export default function ContactPage() {
  const { t } = useTranslation()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mrbqaynk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <LazyMotion features={domAnimation} strict>
    <>
      <section className="relative min-h-[35vh] bg-gradient-to-b from-brand-teal to-brand-teal/90 pt-16 pb-16 overflow-hidden text-white">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-28 h-28 bg-brand-gold/10 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, 18, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent opacity-70"></div>
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/pattern-bg-new.png"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-0">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white font-medium">
            <Link href="/" className="text-white/90 hover:text-white transition-colors group flex items-center">
              <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-300">
                {t("common.home") || "Home"}
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium">
              {t("valuation.cta") || "Evaluate My Property"}
            </span>
          </div>
          
          <div className="text-center pt-4">
            <m.div 
              className="w-20 h-1 bg-brand-gold mb-6 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            <m.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight max-w-4xl leading-tight mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent animate-gradient-shift">
                {t("contact.title") || "Get in Touch With Us"}
              </span>
            </m.h1>
            
            <m.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mt-6 font-serif mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("contact.subtitle") || "We're here to answer your questions about real estate investment opportunities in Belgium."}
            </m.p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      <section className="py-16 md:py-28 bg-brand-beige border-b border-brand-gold/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-10 text-center font-serif">{t("valuation.cta") || "Evaluate Your Property"}</h2>
          <Suspense fallback={<div>Loading valuation widget...</div>}>
            <PropertyValuationWidget />
          </Suspense>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="dots" />

      {/* Multi-Step Contact Form */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
              <Send className="w-4 h-4" />
              <span className="text-sm font-semibold">{t("contact.form.title") || "Contact Form"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
              {t("contact.title") || "Get in Touch With Us"}
            </h2>
            <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
              {t("contact.subtitle") || "We're here to answer your questions about real estate investment opportunities in Belgium."}
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MultiStepForm />
          </m.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="gradient" />

      {/* Contact Information */}
      <section className="py-12 pb-24 bg-brand-beige">
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 font-serif">
              {t("contact.info.address") || "Contact Information"}
            </h2>
            <p className="text-lg text-neutral-dark/70">
              {t("contact.quickContact") || "Choose your preferred contact method"}
            </p>
          </m.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <m.a
              href="tel:+32492996561"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call_click', {
                    phone_number: '+32 492 996561',
                    location: 'contact_page'
                  })
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-brand-teal/30 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 border-b-2 border-brand-gold pb-2 font-serif text-brand-teal">{t("contact.info.phone") || "Téléphone"}</h3>
              <p className="text-brand-teal font-semibold text-lg hover:underline font-serif">+32 492 996561</p>
              <p className="text-neutral-dark/60 text-sm mt-2">{t("contact.clickToCall") || "Cliquez pour appeler"}</p>
            </m.a>

            <m.a
              href="mailto:info@switchinvest.com"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'email_click', {
                    email: 'info@switchinvest.com',
                    location: 'contact_page'
                  })
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-brand-teal/30 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 border-b-2 border-brand-gold pb-2 font-serif text-brand-teal">{t("contact.info.email") || "Email"}</h3>
              <p className="text-brand-teal font-semibold text-base hover:underline font-serif break-all">info@switchinvest.com</p>
              <p className="text-neutral-dark/60 text-sm mt-2">{t("contact.clickToEmail") || "Cliquez pour envoyer un email"}</p>
            </m.a>

            <m.a
              href="https://www.google.com/maps/search/?api=1&query=Avenue+Louise+251+1000+Bruxelles+Belgique"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'address_click', {
                    address: 'Avenue Louise 251, 1000 Bruxelles',
                    location: 'contact_page'
                  })
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-brand-gold/30 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 border-b-2 border-brand-gold pb-2 font-serif text-brand-teal">{t("contact.info.address") || "Adresse"}</h3>
              <p className="text-brand-teal font-semibold hover:underline font-serif">Avenue Louise 251</p>
              <p className="text-brand-teal font-semibold hover:underline font-serif">1000 Bruxelles, Belgique</p>
              <p className="text-neutral-dark/60 text-sm mt-2">{t("contact.clickToMap") || "Cliquez pour voir sur la carte"}</p>
            </m.a>
          </div>
        </div>
      </section>
    </>
    </LazyMotion>
  )
}
