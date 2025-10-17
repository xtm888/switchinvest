"use client";

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from '@/hooks/use-translation'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { Home, Ruler, Bed, Wrench, MapPin, User, Mail, Phone, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

type FormDataType = { propertyType: string; size: string; bedrooms: string; condition: string; address: string; postalCode: string; features: string[]; name: string; email: string; phone: string }

// Realistic Belgian real estate prices per m² based on regions and postal codes
// Brussels region: 1000-1299 (premium areas like EU quarter, Louise, etc.)
// Antwerp region: 2000-2999
// Liège region: 4000-4999
// Ghent region: 9000-9999
// Charleroi region: 6000-6999
// Other major cities and suburbs
const baseRates: Record<string, number> = {
  // Brussels - Premium areas
  '1000': 4500, // Brussels city center (Bruxelles-Ville)
  '1050': 4200, // Ixelles (affluent area)
  '1060': 3500, // Saint-Gilles
  '1150': 4000, // Woluwe-Saint-Pierre (EU area)
  '1160': 3800, // Auderghem
  '1170': 3600, // Watermael-Boitsfort
  '1180': 3400, // Uccle
  '1200': 3900, // Woluwe-Saint-Lambert

  // Antwerp region
  '2000': 3800, // Antwerp city center
  '2018': 3600, // Antwerp Zuid
  '2060': 3200, // Antwerp Linkeroever

  // Ghent region
  '9000': 3500, // Ghent city center
  '9050': 3000, // Ghent suburbs

  // Liège region
  '4000': 2800, // Liège city center
  '4020': 2500, // Liège suburbs

  // Charleroi region
  '6000': 2200, // Charleroi
  '6001': 2100, // Charleroi suburbs

  // Bruges
  '8000': 3400, // Bruges city center

  // Leuven
  '3000': 3300, // Leuven

  // Other Belgian areas (default rates by first digit)
  '1': 3500, // Brussels region default
  '2': 3000, // Flemish Brabant/Antwerp default
  '3': 2800, // Flemish Brabant/Limburg default
  '4': 2500, // Liège region default
  '5': 2400, // Namur region default
  '6': 2200, // Hainaut region default
  '7': 2300, // Hainaut region default
  '8': 2700, // West Flanders default
  '9': 2900, // East Flanders default
}

// Property type multipliers
const propertyTypeMultipliers: Record<string, number> = {
  'house': 1.0,      // Houses are baseline
  'apartment': 0.85, // Apartments typically cheaper per m²
  'studio': 1.2,     // Studios expensive per m² but small total
  'land': 0.4,       // Land is cheaper per m² than built property
  'other': 0.9,
}

// Condition multipliers based on renovation state
const conditionMultipliers: Record<string, number> = {
  'new': 1.15,              // New construction premium
  'renovated': 1.08,        // Recently renovated
  'needsRenovation': 0.88,  // Needs work - discount
  'old': 0.92,              // Old but maintained
}
const featureList = ['Garden', 'Terrace', 'Parking', 'Elevator']

export default function PropertyValuationWidget() {
  const searchParams = useSearchParams()
  const utm = {
    utm_source: searchParams.get('utm_source') || '',
    utm_medium: searchParams.get('utm_medium') || '',
    utm_campaign: searchParams.get('utm_campaign') || '',
    gclid: searchParams.get('gclid') || ''
  }

  const { t } = useTranslation()

  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormDataType>({ propertyType: '', size: '', bedrooms: '', condition: '', address: '', postalCode: '', features: [], name: '', email: '', phone: '' })
  const [estimate, setEstimate] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debounceRef = useRef<number | null>(null)

  useEffect(() => { window.dataLayer?.push({ event: 'valuation_started' }) }, [])

  useEffect(() => {
    // Get base rate per m² based on postal code
    // Try exact match first, then 4-digit, 3-digit, 2-digit, then first digit fallback
    let baseRate = baseRates[form.postalCode] ||
                   baseRates[form.postalCode.substring(0, 3)] ||
                   baseRates[form.postalCode.substring(0, 2)] ||
                   baseRates[form.postalCode.substring(0, 1)] ||
                   2500 // Belgium-wide average fallback

    // Apply property type multiplier
    const propertyTypeMult = propertyTypeMultipliers[form.propertyType] || 1.0

    // Apply condition multiplier
    const conditionMult = conditionMultipliers[form.condition] || 1.0

    // Calculate feature premium (each feature adds 2-5% value)
    const featurePremiums: Record<string, number> = {
      'Garden': 0.05,    // Garden adds 5%
      'Terrace': 0.03,   // Terrace adds 3%
      'Parking': 0.04,   // Parking adds 4%
      'Elevator': 0.02,  // Elevator adds 2%
    }
    const featureBonus = form.features.reduce((acc, feat) => acc + (featurePremiums[feat] || 0), 0)

    // Calculate bedroom adjustment (more bedrooms = slight premium per m²)
    const bedroomCount = parseInt(form.bedrooms) || 0
    let bedroomMult = 1.0
    if (bedroomCount >= 3) bedroomMult = 1.05  // Family homes premium
    if (bedroomCount >= 4) bedroomMult = 1.08  // Large family homes

    // Get size
    const sizeNum = parseFloat(form.size) || 0

    // Calculate final estimate
    // Formula: baseRate/m² × size × propertyType × condition × (1 + features) × bedroom adjustment
    const estimatedValue = baseRate * sizeNum * propertyTypeMult * conditionMult * (1 + featureBonus) * bedroomMult

    setEstimate(Math.round(estimatedValue))
  }, [form])

  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current)
    const query = form.address
    if (query.length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }
    debounceRef.current = window.setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setSuggestions(data)
        setShowSuggestions(true)
      } catch {
        setSuggestions([])
      }
    }, 500)
    return () => { if (debounceRef.current) window.clearTimeout(debounceRef.current) }
  }, [form.address])

  const handleNext = () => setStep(s => Math.min(s + 1, 6))
  const handleBack = () => setStep(s => Math.max(s - 1, 1))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox' && featureList.includes(value)) {
      setForm(prev => {
        const features = prev.features.includes(value) ? prev.features.filter(f => f !== value) : [...prev.features, value]
        return { ...prev, features }
      })
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = () => {
    window.dataLayer?.push({ event: 'valuation_completed', value: estimate })
    setStep(6)
  }

  const handleSelectSuggestion = (place: any) => {
    setForm(prev => ({ ...prev, address: place.display_name || prev.address, postalCode: place.address?.postcode || prev.postalCode }))
    setSuggestions([])
    setShowSuggestions(false)
  }

  // Step icons
  const stepIcons = [Home, Bed, MapPin, CheckCircle2, User]
  const StepIcon = stepIcons[step - 1] || Home

  if (step === 6) {
    return (
      <m.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        action="https://formspree.io/f/mrbqaynk"
        method="POST"
        className='relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-brand-gold/30 text-center overflow-hidden'
      >
        {/* Glassmorphism background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-brand-gold/5 to-transparent rounded-2xl" />

        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />

        <div className="relative z-10">
          {/* Success Icon */}
          <m.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal to-cyan-600 rounded-full mb-6 shadow-xl"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </m.div>

          <h3 className='text-3xl font-bold mb-4 bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent font-serif'>
            {t('valuation.thankContact')}
          </h3>

          <div className="bg-brand-beige/30 rounded-xl p-6 mb-6 border border-brand-gold/20">
            <p className="text-sm text-neutral-dark/60 mb-2">{t('valuation.thankYou').split('{{')[0]}</p>
            <p className="text-4xl font-bold text-brand-teal">
              €{estimate.toLocaleString()}
            </p>
          </div>

          <input type="hidden" name="propertyType" value={form.propertyType} />
          <input type="hidden" name="size" value={form.size} />
          <input type="hidden" name="bedrooms" value={form.bedrooms} />
          <input type="hidden" name="condition" value={form.condition} />
          <input type="hidden" name="address" value={form.address} />
          <input type="hidden" name="postalCode" value={form.postalCode} />
          <input type="hidden" name="estimate" value={estimate} />
          <input type="hidden" name="name" value={form.name} />
          <input type="hidden" name="email" value={form.email} />
          <input type="hidden" name="phone" value={form.phone} />

          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className='mt-6 bg-gradient-to-r from-brand-teal to-cyan-600 hover:from-brand-gold hover:to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2'
          >
            {t('valuation.submit') || 'Soumettre'}
            <ArrowRight className="w-5 h-5" />
          </m.button>

          <button
            type="button"
            className='mt-4 block mx-auto text-brand-teal hover:text-brand-gold font-medium transition-colors duration-200'
            onClick={() => setStep(1)}
          >
            {t('valuation.newEvaluation') || 'Nouvelle évaluation'}
          </button>
        </div>
      </m.form>
    )
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border-2 border-brand-gold/30 overflow-hidden'
    >
      {/* Glassmorphism background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-brand-gold/5 to-transparent rounded-2xl" />

      {/* Animated top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal" />

      <div className="relative z-10">
        {/* Header with step indicator and progress */}
        <div className='mb-8'>
          <div className="flex items-center justify-between mb-4">
            {/* Step icon */}
            <m.div
              key={step}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-teal to-cyan-600 rounded-xl shadow-lg"
            >
              <StepIcon className="w-7 h-7 text-white" />
            </m.div>

            {/* Step counter */}
            <div className="text-right">
              <p className='text-sm text-neutral-dark/60'>{t('valuation.step', { step, total: 5 }) || `Étape ${step} sur 5`}</p>
              <p className='text-lg font-bold text-brand-teal'>{Math.round(((step - 1) / 4) * 100)}%</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
            <m.div
              initial={{ width: 0 }}
              animate={{ width: `${((step - 1) / 4) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-brand-teal via-cyan-500 to-brand-gold rounded-full shadow-lg relative overflow-hidden"
            >
              {/* Animated shine on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
            </m.div>
          </div>
        </div>

        {error && (
          <m.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-red-500 mb-4 bg-red-50 border border-red-200 rounded-lg p-3'
          >
            {t(error) || error}
          </m.p>
        )}

        <AnimatePresence mode="wait">
          <m.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Home className="w-4 h-4 text-brand-teal" />
                    {t('valuation.type')} *
                  </span>
                  <select
                    name='propertyType'
                    value={form.propertyType}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50 bg-white'
                  >
                    <option value=''>{t('valuation.typePlaceholder')}</option>
                    <option value='apartment'>{t('valuation.typeOptions.apartment')}</option>
                    <option value='house'>{t('valuation.typeOptions.house')}</option>
                    <option value='studio'>{t('valuation.typeOptions.studio')}</option>
                    <option value='land'>{t('valuation.typeOptions.land')}</option>
                    <option value='other'>{t('valuation.typeOptions.other')}</option>
                  </select>
                </label>

                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Ruler className="w-4 h-4 text-brand-teal" />
                    {t('valuation.size')} *
                  </span>
                  <input
                    name='size'
                    type='number'
                    min='10'
                    max='10000'
                    value={form.size}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                    placeholder={t('valuation.sizePlaceholder')}
                  />
                </label>
              </div>
            )}

            {step === 2 && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Bed className="w-4 h-4 text-brand-teal" />
                    {t('valuation.bedrooms')} *
                  </span>
                  <select
                    name='bedrooms'
                    value={form.bedrooms}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50 bg-white'
                  >
                    <option value=''>{t('valuation.bedroomsPlaceholder')}</option>
                    {Array.from({ length: 11 }, (_, i) => <option key={i}>{i}</option>)}
                  </select>
                </label>

                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Wrench className="w-4 h-4 text-brand-teal" />
                    {t('valuation.condition')} *
                  </span>
                  <select
                    name='condition'
                    value={form.condition}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50 bg-white'
                  >
                    <option value=''>{t('valuation.conditionPlaceholder')}</option>
                    <option value='new'>{t('valuation.conditionOptions.new')}</option>
                    <option value='renovated'>{t('valuation.conditionOptions.renovated')}</option>
                    <option value='needsRenovation'>{t('valuation.conditionOptions.needsRenovation')}</option>
                    <option value='old'>{t('valuation.conditionOptions.old')}</option>
                  </select>
                </label>
              </div>
            )}

            {step === 3 && (
              <div className='space-y-6'>
                <div className='relative'>
                  <label className='block group'>
                    <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                      <MapPin className="w-4 h-4 text-brand-teal" />
                      {t('valuation.address')} *
                    </span>
                    <input
                      name='address'
                      type='text'
                      value={form.address}
                      onChange={handleChange}
                      required
                      autoComplete='off'
                      aria-invalid={!form.address}
                      aria-describedby='address-error'
                      className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                      placeholder={t('valuation.addressPlaceholder') || 'Commencez à taper votre adresse...'}
                    />
                  </label>
                  {!form.address && (
                    <p id='address-error' className='text-red-500 text-sm mt-1'>{t('valuation.addressRequired') || 'Adresse requise'}</p>
                  )}
                  {showSuggestions && suggestions.length > 0 && (
                    <m.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute z-20 bg-white border-2 border-brand-gold/30 w-full mt-2 max-h-60 overflow-auto rounded-xl shadow-xl backdrop-blur-sm'
                    >
                      {suggestions.map((place, idx) => (
                        <li
                          key={idx}
                          className='p-3 hover:bg-brand-teal/10 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0'
                          onClick={() => handleSelectSuggestion(place)}
                        >
                          {place.display_name}
                        </li>
                      ))}
                    </m.ul>
                  )}
                </div>

                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <MapPin className="w-4 h-4 text-brand-teal" />
                    {t('valuation.postalCode')} *
                  </span>
                  <input
                    name='postalCode'
                    type='text'
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                    pattern='^[1-9]\d{3}$'
                    aria-invalid={!/^[1-9]\d{3}$/.test(form.postalCode)}
                    aria-describedby='postal-error'
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                  />
                  {form.postalCode && !/^[1-9]\d{3}$/.test(form.postalCode) && (
                    <p id='postal-error' className='text-red-500 text-sm mt-1'>{t('valuation.postalCodeInvalid') || 'Code postal invalide'}</p>
                  )}
                </label>
              </div>
            )}

            {step === 4 && (
              <fieldset>
                <legend className='flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-4'>
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  {t('valuation.features')}
                </legend>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                  {featureList.map(feat => (
                    <m.label
                      key={feat}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        form.features.includes(feat)
                          ? 'border-brand-gold bg-brand-gold/10 shadow-md'
                          : 'border-gray-200 hover:border-brand-teal/50 bg-white'
                      }`}
                    >
                      <input
                        type='checkbox'
                        name='features'
                        value={feat}
                        checked={form.features.includes(feat)}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        form.features.includes(feat) ? 'text-brand-teal' : 'text-neutral-dark'
                      }`}>
                        {t(`valuation.featuresOptions.${feat.toLowerCase()}`) || feat}
                      </span>
                      {form.features.includes(feat) && (
                        <m.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                        </m.div>
                      )}
                    </m.label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 5 && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <User className="w-4 h-4 text-brand-teal" />
                    {t('valuation.name')} *
                  </span>
                  <input
                    name='name'
                    type='text'
                    placeholder={t('valuation.namePlaceholder')}
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                  />
                </label>

                <label className='block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Mail className="w-4 h-4 text-brand-teal" />
                    {t('valuation.email')} *
                  </span>
                  <input
                    name='email'
                    type='email'
                    placeholder={t('valuation.emailPlaceholder')}
                    value={form.email}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                  />
                </label>

                <label className='md:col-span-2 block group'>
                  <span className="flex items-center gap-2 text-sm font-semibold text-neutral-dark mb-2">
                    <Phone className="w-4 h-4 text-brand-teal" />
                    {t('valuation.phone')} *
                  </span>
                  <input
                    name='phone'
                    type='tel'
                    placeholder={t('valuation.phonePlaceholder')}
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className='block w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm hover:border-brand-teal/50'
                  />
                </label>
              </div>
            )}
          </m.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className='flex justify-between mt-8 gap-4'>
          {step > 1 ? (
            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBack}
              className='px-6 py-3 bg-white border-2 border-gray-200 hover:border-brand-teal/50 text-neutral-dark font-medium rounded-xl transition-all duration-200 shadow-sm inline-flex items-center gap-2'
            >
              <ArrowLeft className="w-5 h-5" />
              {t('valuation.back') || 'Back'}
            </m.button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={isLoading}
              className='ml-auto px-8 py-3 bg-gradient-to-r from-brand-teal to-cyan-600 hover:from-brand-gold hover:to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2'
            >
              {isLoading ? t('valuation.loading') : t('valuation.next')}
              <ArrowRight className="w-5 h-5" />
            </m.button>
          ) : (
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={isLoading}
              className='ml-auto px-8 py-3 bg-gradient-to-r from-brand-teal to-cyan-600 hover:from-brand-gold hover:to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2'
            >
              {isLoading ? t('valuation.loading') : t('valuation.submit')}
              <ArrowRight className="w-5 h-5" />
            </m.button>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal opacity-50" />
    </m.div>
  )
}
