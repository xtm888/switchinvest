"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import { Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

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
  
  const handleSubmit = () => {
    // Open default mail client with prefilled data
    const { name, email, phone, message } = formData
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    )
    window.location.href = `mailto:info@switchinvest.com?subject=${subject}&body=${body}`
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
      <section className="relative bg-brand-teal text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/pattern-bg-new.png"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors group flex items-center">
              <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-300">
                {t("common.home") || "Home"}
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium">
              {t("contact.title") || "Contact Us"}
            </span>
          </div>
          
          <div className="text-center">
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
      
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4">
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
            {formSubmitted ? (
              <div className="text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  {t("contact.success.title") || "Message Sent Successfully!"}
                </h2>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  {t("contact.success.message") || "Thank you for contacting us. Our team will get back to you within 24-48 hours."}
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      message: ""
                    })
                  }}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium"
                >
                  {t("contact.success.newMessage") || "Send Another Message"}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center text-brand-teal">
                  {t("contact.form.title") || "Contact Form"}
                </h2>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("contact.form.name") || "Full Name"}*
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("contact.form.email") || "Email Address"}*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.form.phone") || "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.form.message") || "Your Message"}*
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-shadow"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-medium px-8 py-3 rounded-md flex items-center justify-center gap-2 min-w-[180px]"
                    >
                      {t("contact.form.submit") || "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.info.phone") || "Phone"}</h3>
              <p className="text-gray-600">+32 492 996561</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.info.email") || "Email"}</h3>
              <p className="text-gray-600">info@switchinvest.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.info.address") || "Address"}</h3>
              <p className="text-gray-600">Avenue Louise 251, 1000 Bruxelles, Belgique</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
