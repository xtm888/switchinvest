"use client"

import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"
import PropertyValuationWidget from "@/components/property-valuation-widget"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Home, Clock, Euro, CheckCircle2, ArrowRight, Phone, Mail } from "lucide-react"
import { m, LazyMotion, domAnimation } from "framer-motion"

export default function BruxellesPage() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  const brusselsNeighborhoods = [
    { fr: "Ixelles", nl: "Elsene" },
    { fr: "Uccle", nl: "Ukkel" },
    { fr: "Schaerbeek", nl: "Schaarbeek" },
    { fr: "Etterbeek", nl: "Etterbeek" },
    { fr: "Saint-Gilles", nl: "Sint-Gillis" },
    { fr: "Anderlecht", nl: "Anderlecht" },
    { fr: "Molenbeek", nl: "Molenbeek" },
    { fr: "Woluwe", nl: "Woluwe" },
    { fr: "Evere", nl: "Evere" },
    { fr: "Jette", nl: "Jette" },
    { fr: "Forest", nl: "Vorst" },
    { fr: "Auderghem", nl: "Oudergem" },
  ]

  const isFrench = language === 'fr'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-brand-teal via-brand-teal/95 to-brand-gold/30 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Location Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <MapPin className="w-5 h-5 text-brand-gold" />
              <span className="font-medium">
                {isFrench
                  ? "Spécialistes Bruxelles • 150+ Propriétés Achetées"
                  : "Brusselse Specialisten • 150+ Woningen Gekocht"}
              </span>
            </m.div>

            {/* Main Headline */}
            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6"
            >
              {isFrench
                ? "Vendre Votre Maison à Bruxelles ?"
                : "Huis Verkopen in Brussel?"}
              <br />
              <span className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold bg-clip-text text-transparent">
                {isFrench ? "Offre Sous 48 Heures" : "Bod Binnen 48 Uur"}
              </span>
            </m.h1>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {isFrench
                ? "SwitchInvest achète des propriétés dans les 19 communes de Bruxelles. Offre comptant en 24-48h, clôture en 7 jours, zéro commission."
                : "SwitchInvest koopt woningen in alle 19 Brusselse gemeenten. Contant bod binnen 24-48u, afsluiting in 7 dagen, geen commissie."}
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={`/${language}/contact`}>
                <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-semibold px-8 py-4 text-lg group">
                  {isFrench ? "Obtenez Votre Offre Gratuite" : "Ontvang Uw Gratis Bod"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+32492996561">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-teal px-8 py-4 text-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  {isFrench ? "Appelez Maintenant" : "Bel Nu"}
                </Button>
              </a>
            </m.div>

            {/* Trust Indicators */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm"
            >
              {[
                isFrench ? "Offre 24-48h Garantie" : "Gegarandeerd Bod 24-48u",
                isFrench ? "Zéro Commission" : "Geen Commissie",
                isFrench ? "Achat en l'État" : "Aankoop As-Is"
              ].map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span>{indicator}</span>
                </div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* Brussels Market Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              {isFrench
                ? "Le Marché Immobilier à Bruxelles"
                : "Vastgoedmarkt in Brussel"}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {isFrench
                ? "Données actualisées sur le marché immobilier bruxellois en 2025"
                : "Actuele gegevens over de Brusselse vastgoedmarkt in 2025"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-brand-beige rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Euro className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <div className="text-5xl font-bold text-brand-teal mb-2">€3,500/m²</div>
              <div className="text-gray-700 font-medium">
                {isFrench ? "Prix Moyen à Bruxelles" : "Gemiddelde Prijs in Brussel"}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-brand-beige rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Clock className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <div className="text-5xl font-bold text-brand-teal mb-2">
                120 {isFrench ? 'jours' : 'dagen'}
              </div>
              <div className="text-gray-700 font-medium">
                {isFrench ? "Délai de Vente Traditionnel" : "Traditionele Verkooptijd"}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {isFrench ? "vs 7 jours avec nous" : "vs 7 dagen bij ons"}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-brand-beige rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Home className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <div className="text-5xl font-bold text-brand-teal mb-2">150+</div>
              <div className="text-gray-700 font-medium">
                {isFrench ? "Propriétés Achetées à Bruxelles" : "Woningen Gekocht in Brussel"}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {isFrench ? "Depuis 2010" : "Sinds 2010"}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Brussels Neighborhoods Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              {isFrench
                ? "Nous Achetons Dans Toutes Les Communes de Bruxelles"
                : "Wij Kopen in Alle Brusselse Gemeenten"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isFrench
                ? "Service dans les 19 communes de la Région de Bruxelles-Capitale"
                : "Service in alle 19 gemeenten van het Brussels Hoofdstedelijk Gewest"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {brusselsNeighborhoods.map((neighborhood, index) => (
              <m.div
                key={neighborhood.fr}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center group"
              >
                <Home className="w-8 h-8 text-brand-teal mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800 text-lg">
                  {isFrench ? neighborhood.fr : neighborhood.nl}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {isFrench ? "Nous achetons ici" : "Wij kopen hier"}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell to SwitchInvest in Brussels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              {isFrench
                ? "Pourquoi Vendre à SwitchInvest à Bruxelles ?"
                : "Waarom Verkopen Aan SwitchInvest in Brussel?"}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {isFrench
                ? "Notre expertise locale et notre engagement font la différence"
                : "Onze lokale expertise en toewijding maken het verschil"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: isFrench ? "Expertise Locale Bruxelloise" : "Lokale Brusselse Expertise",
                description: isFrench
                  ? "Plus de 150 propriétés achetées à Bruxelles depuis 2010. Connaissance approfondie des 19 communes, des prix du marché par quartier, et des spécificités de chaque commune."
                  : "Meer dan 150 woningen gekocht in Brussel sinds 2010. Grondige kennis van de 19 gemeenten, marktprijzen per wijk, en de specifieke kenmerken van elke gemeente."
              },
              {
                title: isFrench ? "Bureau à Evere (Bruxelles)" : "Kantoor in Evere (Brussel)",
                description: isFrench
                  ? "Notre bureau principal est situé à Evere dans la Région de Bruxelles-Capitale. Équipe locale disponible pour visite rapide de votre propriété dans n'importe quelle commune."
                  : "Ons hoofdkantoor bevindt zich in Evere in het Brussels Hoofdstedelijk Gewest. Lokaal team beschikbaar voor snelle bezichtiging van uw woning in elke gemeente."
              },
              {
                title: isFrench ? "Service Bilingue FR/NL" : "Tweetalige Service FR/NL",
                description: isFrench
                  ? "Équipe 100% bilingue français-néerlandais. Communication fluide dans votre langue préférée, toute la documentation dans votre langue, service professionnel adapté à Bruxelles."
                  : "100% tweetalig team Frans-Nederlands. Vlotte communicatie in uw voorkeurstaal, alle documentatie in uw taal, professionele service aangepast aan Brussel."
              },
              {
                title: isFrench ? "Prix Basés sur Votre Commune" : "Prijzen Gebaseerd op Uw Gemeente",
                description: isFrench
                  ? "Offres basées sur les prix réels du marché de votre commune (Uccle ≠ Anderlecht). Évaluation juste tenant compte des spécificités de chaque quartier bruxellois."
                  : "Biedingen gebaseerd op echte marktprijzen van uw gemeente (Ukkel ≠ Anderlecht). Eerlijke evaluatie rekening houdend met de specifieke kenmerken van elke Brusselse wijk."
              }
            ].map((reason, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-brand-beige rounded-xl hover:shadow-lg transition-shadow"
              >
                <CheckCircle2 className="w-7 h-7 text-brand-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Valuation Calculator */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-teal/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                {isFrench
                  ? "Combien Vaut Votre Propriété à Bruxelles ?"
                  : "Hoeveel Is Uw Woning Waard in Brussel?"}
              </h2>
              <p className="text-xl text-white/90">
                {isFrench
                  ? "Obtenez une estimation gratuite en 2 minutes • Aucune obligation"
                  : "Ontvang een gratis schatting in 2 minuten • Geen verplichting"}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <PropertyValuationWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Brussels FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                {isFrench
                  ? "Questions Fréquentes Sur Bruxelles"
                  : "Veelgestelde Vragen Over Brussel"}
              </h2>
              <p className="text-gray-600 text-lg">
                {isFrench
                  ? "Tout ce que vous devez savoir pour vendre à Bruxelles"
                  : "Alles wat u moet weten om te verkopen in Brussel"}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: isFrench
                    ? "Achetez-vous dans toutes les communes de Bruxelles ?"
                    : "Kopen jullie in alle Brusselse gemeenten?",
                  a: isFrench
                    ? "Oui ! Nous achetons des propriétés dans les 19 communes de Bruxelles-Capitale : Ixelles, Uccle, Schaerbeek, Etterbeek, Saint-Gilles, Anderlecht, Molenbeek, Woluwe, Evere, Jette, Forest, Watermael-Boitsfort, Auderghem, Bruxelles-Ville, Koekelberg, Berchem-Sainte-Agathe, Ganshoren, Saint-Josse-ten-Noode, et Laeken."
                    : "Ja! Wij kopen woningen in alle 19 gemeenten van Brussel-Hoofdstad: Elsene, Ukkel, Schaarbeek, Etterbeek, Sint-Gillis, Anderlecht, Molenbeek, Woluwe, Evere, Jette, Vorst, Watermaal-Bosvoorde, Oudergem, Brussel-Stad, Koekelberg, Sint-Agatha-Berchem, Ganshoren, Sint-Joost-ten-Node, en Laken."
                },
                {
                  q: isFrench
                    ? "Quel est le prix moyen d'une maison à Bruxelles ?"
                    : "Wat is de gemiddelde prijs van een huis in Brussel?",
                  a: isFrench
                    ? "Le prix moyen varie fortement selon la commune : de €250.000-300.000 (Anderlecht, Molenbeek, Saint-Josse) à €500.000-700.000+ (Uccle, Ixelles, Woluwe). Notre offre reflète toujours le prix réel du marché de votre commune moins nos coûts de rénovation. Nous fournissons une évaluation transparente basée sur les données actuelles du marché."
                    : "De gemiddelde prijs varieert sterk per gemeente: van €250.000-300.000 (Anderlecht, Molenbeek, Sint-Joost) tot €500.000-700.000+ (Ukkel, Elsene, Woluwe). Ons bod weerspiegelt altijd de echte marktprijs van uw gemeente minus onze renovatiekosten. Wij bieden een transparante evaluatie gebaseerd op actuele marktgegevens."
                },
                {
                  q: isFrench
                    ? "Combien de temps pour vendre ma maison à Bruxelles ?"
                    : "Hoe lang duurt het om mijn huis in Brussel te verkopen?",
                  a: isFrench
                    ? "Avec une agence traditionnelle à Bruxelles : 3-6 mois en moyenne, plus frais d'agence de 3-6%. Avec SwitchInvest : offre garantie en 24-48h, clôture en 7-30 jours selon votre convenance. Vous choisissez la date de clôture qui vous arrange, pas d'attente d'autres acheteurs."
                    : "Met een traditioneel makelaarskantoor in Brussel: gemiddeld 3-6 maanden, plus makelaarskosten van 3-6%. Met SwitchInvest: gegarandeerd bod binnen 24-48u, afsluiting in 7-30 dagen volgens uw planning. U kiest de afsluitingsdatum die u past, geen wachten op andere kopers."
                },
                {
                  q: isFrench
                    ? "Achetez-vous des appartements ou seulement des maisons ?"
                    : "Kopen jullie appartementen of alleen huizen?",
                  a: isFrench
                    ? "Nous achetons TOUS types de biens résidentiels à Bruxelles : maisons unifamiliales, appartements (studio, 1-2-3+ chambres), penthouses, immeubles de rapport, terrains à bâtir, propriétés en copropriété ou co-héritées. Nous achetons également des biens avec locataires en place ou nécessitant des travaux importants."
                    : "Wij kopen ALLE soorten residentiële eigendommen in Brussel: eengezinswoningen, appartementen (studio, 1-2-3+ slaapkamers), penthouses, opbrengsteigendommen, bouwgrond, eigenschappen in mede-eigendom of co-erfenis. Wij kopen ook eigendommen met zittende huurders of die grote renovaties nodig hebben."
                }
              ].map((faq, index) => (
                <m.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-brand-beige rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <summary className="font-semibold text-lg cursor-pointer text-gray-800 flex justify-between items-center">
                    {faq.q}
                    <span className="text-brand-teal group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </m.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-teal via-brand-teal/95 to-brand-gold/20">
        <div className="container mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">
              {isFrench
                ? "Prêt à Vendre Votre Propriété à Bruxelles ?"
                : "Klaar Om Uw Eigendom in Brussel Te Verkopen?"}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              {isFrench
                ? "Obtenez votre offre comptant gratuite en 2 minutes. Service rapide dans toutes les communes de Bruxelles. Aucune obligation, zéro frais cachés."
                : "Ontvang uw gratis contant bod in 2 minuten. Snelle service in alle Brusselse gemeenten. Geen verplichting, geen verborgen kosten."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${language}/contact`}>
                <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-semibold px-10 py-6 text-xl group">
                  {isFrench ? "Obtenez Votre Offre Maintenant" : "Ontvang Uw Bod Nu"}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+32492996561">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-teal px-10 py-6 text-xl">
                  <Phone className="mr-2 w-6 h-6" />
                  +32 492 996561
                </Button>
              </a>
            </div>
            <div className="mt-8 text-white/80">
              <Mail className="inline w-5 h-5 mr-2" />
              <a href="mailto:info@switchinvest.be" className="hover:text-brand-gold transition-colors">
                info@switchinvest.be
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  )
}
