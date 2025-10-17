"use client"

import { useTranslation } from "@/hooks/use-translation"
import { m, LazyMotion, domAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Users, TrendingUp, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import PlaceholderImage from "@/components/PlaceholderImage"

// Define an interface for the 'values' object structure
interface AboutValues {
  title: string;
  items: string[];
}

import StructuredData from '@/components/structured-data';
import SectionDivider from '@/components/home/SectionDivider';
import { TeamSection, TeamMemberData } from '@/components/about/TeamMember';
import CompanyTimeline, { TimelineEvent } from '@/components/about/CompanyTimeline';
import { Building2, Lightbulb, Rocket, Trophy, Globe, Target } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation()

  // Fetch the parent objects and assert types
  const valuesObj = (t("about.values") || { title: '', items: [] }) as AboutValues;

  // Value icons mapping
  const valueIcons = [
    <Award key="0" className="w-10 h-10" />,
    <Heart key="1" className="w-10 h-10" />,
    <TrendingUp key="2" className="w-10 h-10" />,
    <Users key="3" className="w-10 h-10" />
  ];

  // Team data
  const team: TeamMemberData[] = [
    {
      name: "Jean Dupont",
      role: "CEO & Fondateur",
      bio: "Plus de 20 ans d'expérience dans l'immobilier belge. Visionnaire passionné par l'innovation et la satisfaction client.",
      image: "/images/team/ceo.jpg",
      linkedin: "https://linkedin.com",
      email: "jean@switchinvest.be",
      specialties: ["Stratégie", "Développement", "Leadership"]
    },
    {
      name: "Marie Laurent",
      role: "Directrice Investissement",
      bio: "Experte en analyse de marché et stratégies d'investissement immobilier. MBA en Finance de la Solvay Brussels School.",
      image: "/images/team/investment-director.jpg",
      linkedin: "https://linkedin.com",
      email: "marie@switchinvest.be",
      specialties: ["Analyse", "Portefeuilles", "ROI"]
    },
    {
      name: "Thomas Vermeer",
      role: "Directeur Technique",
      bio: "Architecte de formation, expert en rénovation et développement immobilier. Garant de la qualité de nos projets.",
      image: "/images/team/tech-director.jpg",
      linkedin: "https://linkedin.com",
      email: "thomas@switchinvest.be",
      specialties: ["Architecture", "Rénovation", "Qualité"]
    },
    {
      name: "Sophie Chen",
      role: "Responsable Gestion",
      bio: "Spécialiste en gestion immobilière avec un focus sur l'optimisation et la satisfaction des locataires.",
      image: "/images/team/property-manager.jpg",
      linkedin: "https://linkedin.com",
      email: "sophie@switchinvest.be",
      specialties: ["Gestion", "Relation Client", "Optimisation"]
    },
    {
      name: "Lucas Martinez",
      role: "Conseiller Juridique",
      bio: "Avocat spécialisé en droit immobilier belge. Protège les intérêts de nos clients dans toutes leurs transactions.",
      image: "/images/team/legal.jpg",
      linkedin: "https://linkedin.com",
      email: "lucas@switchinvest.be",
      specialties: ["Droit", "Contrats", "Conformité"]
    },
    {
      name: "Emma Dubois",
      role: "Responsable Marketing",
      bio: "Stratège digitale créative, elle positionne nos propriétés et nos services auprès des bons publics.",
      image: "/images/team/marketing.jpg",
      linkedin: "https://linkedin.com",
      email: "emma@switchinvest.be",
      specialties: ["Digital", "Branding", "Communication"]
    }
  ];

  // Timeline events
  const timeline: TimelineEvent[] = [
    {
      year: "2010",
      title: "Fondation de SwitchInvest",
      description: "Création de l'entreprise avec une vision claire : révolutionner la gestion immobilière en Belgique grâce à la technologie et l'excellence du service.",
      icon: Rocket,
      highlight: true
    },
    {
      year: "2013",
      title: "Premier Projet de Développement",
      description: "Lancement de notre première résidence premium à Ixelles. Succès complet avec 100% de pré-ventes avant achèvement.",
      icon: Building2
    },
    {
      year: "2015",
      title: "Expansion Nationale",
      description: "Ouverture de bureaux à Anvers et Gand. Extension de nos services dans toute la Belgique.",
      icon: Globe
    },
    {
      year: "2017",
      title: "Innovation Technologique",
      description: "Lancement de notre plateforme propriétaire de gestion immobilière digitale, offrant transparence et contrôle total à nos clients.",
      icon: Lightbulb,
      highlight: true
    },
    {
      year: "2020",
      title: "50M€ d'Actifs Sous Gestion",
      description: "Franchissement du cap symbolique des 50 millions d'euros d'actifs sous gestion. Plus de 500 propriétés dans notre portefeuille.",
      icon: Trophy
    },
    {
      year: "2023",
      title: "Excellence & Croissance",
      description: "Reconnaissance comme l'un des leaders du marché belge. Lancement de notre service de conseil en investissement premium.",
      icon: Target,
      highlight: true
    }
  ];

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-beige/20"
    >
      <StructuredData type="about" />

      {/* Hero Section - Modern design */}
      <section className="relative bg-gradient-to-b from-brand-teal to-brand-teal/90 py-20 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white/90 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              {t("common.home") || "Home"}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {t("about.title")}
            </span>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-white via-brand-beige to-white bg-clip-text text-transparent animate-gradient-shift">
                {t("about.title")}
              </span>
            </h1>
            <p className="text-xl text-brand-beige/90 max-w-2xl mx-auto">
              {t("about.heroSubtitle") || "Excellence in Belgian Real Estate Since 2010"}
            </p>
          </m.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column: Text Content */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-teal font-serif mb-6">
                {t("about.storyTitle") || "Our Story"}
              </h2>

              <p className="text-lg text-neutral-dark/90">
                {t("about.description")}
              </p>

              {/* Mission and Vision Cards */}
              <div className="space-y-4 mt-8">
                <Card className="border-l-4 border-brand-gold bg-brand-beige/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-teal font-serif mb-2 text-lg">
                      {t("about.missionTitle") || "Mission"}
                    </h3>
                    <p className="text-neutral-dark/80">
                      {t("about.mission")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-brand-teal bg-brand-beige/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-brand-teal font-serif mb-2 text-lg">
                      {t("about.visionTitle") || "Vision"}
                    </h3>
                    <p className="text-neutral-dark/80">
                      {t("about.vision")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </m.div>

            {/* Right Column: Image */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl border-4 border-brand-gold/20">
                <PlaceholderImage variant="property" category="Our Office" />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="dots" />

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4 md:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 font-serif">
              {valuesObj.title}
            </h2>
            <p className="text-lg text-neutral-dark/80 max-w-2xl mx-auto">
              {t("about.valuesSubtitle") || "The principles that guide everything we do"}
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {valuesObj.items.map((value, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-brand-beige/30 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                      {valueIcons[index % valueIcons.length]}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-brand-teal group-hover:text-brand-gold transition-colors">
                      {value}
                    </h3>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="gradient" />

      {/* Company Timeline */}
      <CompanyTimeline events={timeline} />

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Team Section */}
      <TeamSection team={team} />

      {/* Section Divider */}
      <SectionDivider variant="dots" />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "15+", label: t("about.stats.experience") || "Years Experience" },
              { number: "500+", label: t("about.stats.properties") || "Properties Managed" },
              { number: "€50M+", label: t("about.stats.assets") || "Assets Under Management" },
              { number: "98%", label: t("about.stats.satisfaction") || "Client Satisfaction" }
            ].map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-brand-beige/90">
                  {stat.label}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="zigzag" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4 md:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white border-none">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                  {t("about.ctaTitle") || "Ready to Work With Us?"}
                </h3>
                <p className="text-brand-beige/90 mb-6 max-w-2xl mx-auto">
                  {t("about.ctaSubtitle") || "Let's discuss how we can help you unlock the value of your property"}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/contact">
                    <m.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(218, 165, 32, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3 rounded-lg transition-colors font-semibold"
                    >
                      {t("about.ctaContactButton") || "Contact Us Today"}
                    </m.button>
                  </Link>
                  <Link href="/services">
                    <m.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white font-serif px-8 py-3 rounded-lg transition-colors font-semibold border border-white/30"
                    >
                      {t("about.ctaServicesButton") || "View Our Services"}
                    </m.button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </section>
    </m.main>
  )
}
