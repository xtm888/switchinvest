"use client"

import { useState } from "react"
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
import { User, Mail, Phone, MessageSquare, Send, Check, ArrowRight, ArrowLeft } from "lucide-react"

/**
 * Premium Multi-Step Contact Form
 * Features:
 * - 3-step progressive form
 * - Progress indicator
 * - Smooth animations between steps
 * - Success animation
 * - Form validation
 */

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  propertyType: string
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyType: ""
  })

  const totalSteps = 3

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

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
        setIsSuccess(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
          setCurrentStep(1)
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            propertyType: ""
          })
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.subject && formData.propertyType
      case 3:
        return formData.message
      default:
        return false
    }
  }

  if (isSuccess) {
    return (
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-12 shadow-2xl text-center max-w-2xl mx-auto"
      >
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-12 h-12 text-white" />
        </m.div>
        <m.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-brand-teal mb-4 font-serif"
        >
          Message Envoyé Avec Succès!
        </m.h3>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-neutral-dark/70 text-lg"
        >
          Nous vous répondrons dans les plus brefs délais. Merci pour votre confiance!
        </m.p>
      </m.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <m.div
                initial={false}
                animate={{
                  scale: currentStep === step ? 1.2 : 1,
                  backgroundColor: currentStep >= step ? "#0f766e" : "#e5e7eb"
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  currentStep >= step ? "text-white" : "text-gray-400"
                }`}
              >
                {currentStep > step ? <Check className="w-5 h-5" /> : step}
              </m.div>
              {step < 3 && (
                <m.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep > step ? "#0f766e" : "#e5e7eb"
                  }}
                  className="flex-1 h-1 mx-2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-neutral-dark/60">
            Étape {currentStep} sur {totalSteps}
          </p>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <m.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-brand-teal mb-6 font-serif">
                Vos Coordonnées
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Nom Complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal/50" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal/50" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal/50" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                      placeholder="+32 4XX XX XX XX"
                    />
                  </div>
                </div>
              </div>
            </m.div>
          )}

          {currentStep === 2 && (
            <m.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-brand-teal mb-6 font-serif">
                Votre Projet
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="evaluation">Évaluation de Propriété</option>
                    <option value="vente">Vente de Propriété</option>
                    <option value="achat">Achat de Propriété</option>
                    <option value="gestion">Gestion de Patrimoine</option>
                    <option value="investissement">Opportunité d'Investissement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Type de Propriété *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Appartement", "Maison", "Immeuble", "Terrain", "Bureau", "Commerce"].map((type) => (
                      <m.label
                        key={type}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`cursor-pointer p-4 border-2 rounded-lg text-center font-semibold transition-all ${
                          formData.propertyType === type
                            ? "border-brand-teal bg-brand-teal/5 text-brand-teal"
                            : "border-gray-200 text-neutral-dark hover:border-brand-teal/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value={type}
                          checked={formData.propertyType === type}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {type}
                      </m.label>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          )}

          {currentStep === 3 && (
            <m.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-brand-teal mb-6 font-serif">
                Votre Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Décrivez Votre Projet *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-teal/50" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none transition-colors resize-none"
                      placeholder="Parlez-nous de votre projet immobilier..."
                    />
                  </div>
                </div>

                <div className="bg-brand-beige/30 p-4 rounded-lg">
                  <p className="text-sm text-neutral-dark/70">
                    <strong>Protection des données:</strong> Vos informations sont sécurisées et ne seront jamais partagées avec des tiers.
                  </p>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <m.button
              type="button"
              onClick={prevStep}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-brand-teal text-brand-teal rounded-lg font-semibold flex items-center gap-2 transition-colors hover:bg-brand-teal/5"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </m.button>
          )}

          {currentStep < totalSteps ? (
            <m.button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              whileHover={isStepValid() ? { scale: 1.05, x: 5 } : {}}
              whileTap={isStepValid() ? { scale: 0.95 } : {}}
              className={`ml-auto px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
                isStepValid()
                  ? "bg-brand-teal text-white hover:bg-brand-teal/90"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Suivant
              <ArrowRight className="w-5 h-5" />
            </m.button>
          ) : (
            <m.button
              type="submit"
              disabled={!isStepValid() || isSubmitting}
              whileHover={isStepValid() && !isSubmitting ? { scale: 1.05 } : {}}
              whileTap={isStepValid() && !isSubmitting ? { scale: 0.95 } : {}}
              className={`ml-auto px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
                isStepValid() && !isSubmitting
                  ? "bg-gradient-to-r from-brand-gold to-yellow-500 text-neutral-dark hover:from-brand-gold/90 hover:to-yellow-500/90"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <m.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5" />
                  </m.div>
                  Envoi...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer
                </>
              )}
            </m.button>
          )}
        </div>
      </form>
    </div>
  )
}
