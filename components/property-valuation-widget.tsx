'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from '@/hooks/use-translation'

type FormDataType = { propertyType: string; size: string; bedrooms: string; condition: string; address: string; postalCode: string; features: string[]; name: string; email: string; phone: string }

const baseRates: Record<string, number> = { '1000': 4000, '2000': 3500, '3000': 3000 }
const conditionMultipliers: Record<string, number> = { New: 1.1, Renovated: 1.05, NeedsRenovation: 0.95, Old: 0.9 }
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
    const baseRate = baseRates[form.postalCode] || 2000
    const cond = conditionMultipliers[form.condition as keyof typeof conditionMultipliers] || 1
    const featCount = form.features.length
    const featMult = Math.min(featCount * 0.02, 0.15)
    const sizeNum = parseFloat(form.size) || 0
    setEstimate(Math.round(baseRate * sizeNum * cond * (1 + featMult)))
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

  if (step === 6) {
    return (
      <form
        action="https://formspree.io/f/mrbqaynk"
        method="POST"
        className='bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto border border-brand-gold/20 text-center'
      >
        <h3 className='text-2xl font-bold mb-4'>
          {t('valuation.thankContact')}
        </h3>
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
        <button type="submit" className='mt-6 bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-medium px-8 py-3 rounded-md transition-all duration-200 shadow-md'>
          {t('valuation.submit') || 'Soumettre'}
        </button>
        <button
          type="button"
          className='mt-4 bg-gray-200 hover:bg-gray-300 text-neutral-dark font-medium px-8 py-3 rounded-md transition-all duration-200 shadow-sm'
          onClick={() => setStep(1)}
        >
          {t('valuation.newEvaluation') || 'Nouvelle évaluation'}
        </button>
      </form>
    )
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto border border-brand-gold/20'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl font-bold text-brand-teal'>{t('valuation.step', { step, total: 5 }) || `Étape ${step} sur 5`}</h3>
        <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-teal to-brand-gold rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
      </div>
      {error && <p className='text-red-500 mb-4'>{t(error) || error}</p>}
      {step === 1 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            {t('valuation.type')} *
            <select name='propertyType' value={form.propertyType} onChange={handleChange} required className='mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm'>
              <option value=''>{t('valuation.typePlaceholder')}</option>
              <option value='apartment'>{t('valuation.typeOptions.apartment')}</option>
              <option value='house'>{t('valuation.typeOptions.house')}</option>
              <option value='studio'>{t('valuation.typeOptions.studio')}</option>
              <option value='land'>{t('valuation.typeOptions.land')}</option>
              <option value='other'>{t('valuation.typeOptions.other')}</option>
            </select>
          </label>
          <label className='block'>
            {t('valuation.size')} *
            <input name='size' type='number' min='10' max='10000' value={form.size} onChange={handleChange} required className='mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 shadow-sm' placeholder={t('valuation.sizePlaceholder')} />
          </label>
        </div>
      )}
      {step === 2 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            {t('valuation.bedrooms')} *
            <select name='bedrooms' value={form.bedrooms} onChange={handleChange} required className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'>
              <option value=''>{t('valuation.bedroomsPlaceholder')}</option>
              {Array.from({ length: 11 }, (_, i) => <option key={i}>{i}</option>)}
            </select>
          </label>
          <label className='block'>
            {t('valuation.condition')} *
            <select name='condition' value={form.condition} onChange={handleChange} required className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'>
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
        <div className='relative'>
          <label className='block'>
            {t('valuation.address')} *
            <input
              name='address'
              type='text'
              value={form.address}
              onChange={handleChange}
              required
              autoComplete='off'
              aria-invalid={!form.address}
              aria-describedby='address-error'
              className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'
              placeholder={t('valuation.addressPlaceholder') || 'Commencez à taper votre adresse...'}
            />
          </label>
          <p id='address-error' className='text-red-500 text-sm'>{!form.address && (t('valuation.addressRequired') || 'Adresse requise')}</p>
          {showSuggestions && suggestions.length > 0 && (
            <ul className='absolute z-10 bg-white border border-gray-300 w-full mt-1 max-h-60 overflow-auto'>
              {suggestions.map((place, idx) => (
                <li
                  key={idx}
                  className='p-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => handleSelectSuggestion(place)}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          )}
          <label className='mt-4 block'>
            {t('valuation.postalCode')} *
            <input
              name='postalCode'
              type='text'
              value={form.postalCode}
              onChange={handleChange}
              required
              pattern='^[1-9]\d{3}$'
              aria-invalid={!/^[1-9]\d{3}$/.test(form.postalCode)}
              aria-describedby='postal-error'
              className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'
            />
          </label>
          <p id='postal-error' className='text-red-500 text-sm'>{!/^[1-9]\d{3}$/.test(form.postalCode) && (t('valuation.postalCodeInvalid') || 'Code postal invalide')}</p>
        </div>
      )}
      {step === 4 && (
        <fieldset className='mt-4'>
          <legend className='font-medium'>{t('valuation.features')}</legend>
          <div className='flex flex-wrap gap-2 mt-2'>
            {featureList.map(feat => (
              <label key={feat} className='flex items-center space-x-2'>
                <input type='checkbox' name='features' value={feat} checked={form.features.includes(feat)} onChange={handleChange} />
                <span>{t(`valuation.featuresOptions.${feat.toLowerCase()}`) || feat}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      {step === 5 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            {t('valuation.name')} *
            <input
              name='name'
              type='text'
              placeholder={t('valuation.namePlaceholder')}
              value={form.name}
              onChange={handleChange}
              required
              className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'
            />
          </label>
          <label className='block'>
            {t('valuation.email')} *
            <input
              name='email'
              type='email'
              placeholder={t('valuation.emailPlaceholder')}
              value={form.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'
            />
          </label>
          <label className='md:col-span-2 block'>
            {t('valuation.phone')} *
            <input
              name='phone'
              type='tel'
              placeholder={t('valuation.phonePlaceholder')}
              value={form.phone}
              onChange={handleChange}
              required
              className='mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-gold'
            />
          </label>
        </div>
      )}

      <div className='flex justify-between mt-6'>
        {step > 1 && (
          <button onClick={handleBack} className='px-4 py-2 bg-gray-200 rounded-md'>
            {t('valuation.back') || 'Back'}
          </button>
        )}
        {step < 5 && (
          <button onClick={handleNext} disabled={isLoading} className='ml-auto px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-medium rounded-md transition-all duration-200 shadow-sm'>
            {isLoading ? t('valuation.loading') : t('valuation.next')}
          </button>
        )}
        {step === 5 && (
          <button onClick={handleSubmit} disabled={isLoading} className='ml-auto px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-medium rounded-md transition-all duration-200 shadow-sm'>
            {isLoading ? t('valuation.loading') : t('valuation.submit')}
          </button>
        )}
      </div>
    </div>
  )
}
