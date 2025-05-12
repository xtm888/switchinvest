"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import { Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import PropertyValuationWidget from '@/components/property-valuation-widget'

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
    <>
      <section className="relative min-h-[35vh] bg-gradient-to-b from-brand-teal to-brand-teal/90 pt-16 pb-16 overflow-hidden text-white">
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
            <motion.div 
              className="w-20 h-1 bg-brand-gold mb-6 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight max-w-4xl leading-tight mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("contact.title") || "Get in Touch With Us"}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mt-6 font-serif mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("contact.subtitle") || "We're here to answer your questions about real estate investment opportunities in Belgium."}
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-28 bg-brand-beige border-b border-brand-gold/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-10 text-center font-serif">{t("valuation.cta") || "Evaluate Your Property"}</h2>
          <PropertyValuationWidget />
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 pb-24 bg-brand-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-brand-gold pb-1 mb-4">{t("contact.info.phone") || "Phone"}</h3>
              <p className="text-gray-600">+32 492 996561</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-brand-gold pb-1 mb-4">{t("contact.info.email") || "Email"}</h3>
              <p className="text-gray-600">info@switchinvest.com</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 border-b-2 border-brand-gold pb-1 mb-4">{t("contact.info.address") || "Address"}</h3>
              <p className="text-gray-600">Avenue Louise 251, 1000 Bruxelles, Belgique</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
