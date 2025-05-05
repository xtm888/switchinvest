"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import Image from "next/image"

// Define an interface for team members for better type safety
interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  experience: string;
}

// Define an interface for the 'values' object structure
interface AboutValues {
  title: string;
  items: string[];
}

import StructuredData from '@/components/structured-data';

export default function AboutPage() {
  const { t } = useTranslation()

  // Fetch the parent objects and assert types
  const valuesObj = (t("about.values") || { title: '', items: [] }) as AboutValues;
  const teamMembers = (t("about.team") || []) as TeamMember[];

  return (
    <>
      <StructuredData type="about" />
      {/* Increased top/bottom padding */}
      <section className="relative py-20 md:py-32 bg-brand-teal text-white">
        <div className="container mx-auto px-4 relative z-10 mb-20 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-16 md:mb-20 font-serif tracking-tight">
            {t("about.title")}
          </h1>
          
          {/* Section 1: Description, Mission, Vision + Image */}
          <motion.div layout className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Centered Intro Text */}
                <p className="text-lg md:text-xl text-white/90 font-serif tracking-tight">
                  {t("about.description")}
                </p>
                {/* Add Mission and Vision */}
                <div className="space-y-3 border-l-4 border-brand-gold pl-4">
                  <p className="text-md md:text-lg text-white/90 font-serif tracking-tight italic">
                    <strong>Mission:</strong> {t("about.mission")}
                  </p>
                  <p className="text-md md:text-lg text-white/90 font-serif tracking-tight italic">
                    <strong>Vision:</strong> {t("about.vision")}
                  </p>
                </div>
              </motion.div>
              
              {/* Right Column: Image */}
              <motion.div
                className="relative h-64 md:h-full bg-white/5 p-2 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Use aspect-video for 16:9 ratio */}
                <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg h-full border border-brand-gold/20">
                  <Image
                    src="/images/about/oficeclass.jpg"
                    alt="Our Office"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
            
            {/* Subtle Divider */}
            <hr className="border-t border-brand-gold/20 my-16 md:my-20" />
            
            {/* Section 2: Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-24 md:mt-32 mb-24 md:mb-32"
            > 
              {/* Larger Section Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-serif">
                {valuesObj.title}
              </h2>
              {/* Values as a refined 2x2 grid with icons */}
              <div className="max-w-3xl mx-auto">
                {/* Removing grid centering, centering content within li instead */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Iterate over valuesObj.items array */}
                  {valuesObj.items.map((value, index) => {
                    // Simple mapping for demo icons - replace with actual SVGs or Heroicons later if needed
                    const icons = [
                      <svg key="0" className="w-10 h-10 text-permafrost mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" /></svg>, // Check for Excellence
                      <svg key="1" className="w-10 h-10 text-permafrost mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, // Shield/Circle for Integrity
                      <svg key="2" className="w-10 h-10 text-permafrost mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, // Bolt for Innovation
                      <svg key="3" className="w-10 h-10 text-permafrost mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> // Lock for Discretion
                    ];
                    return (
                      // Center content vertically within the list item
                      <li key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-colors duration-200">
                        {icons[index % icons.length]} {/* Icon first */}
                        <p className="text-lg text-white/90 font-serif text-center mt-2"> {/* Centered text below icon */}
                          {value} {/* Display the value directly */}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
            
            {/* Section 3: Team - Spacing adjusted by margin above */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              className="mt-24 md:mt-32 mb-20 md:mb-28"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.5 }} 
            >
              {/* Larger Section Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 font-serif">
                Meet Our Team
              </h2>
              {/* Added subtle hover bg, padding, top border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {/* Iterate over teamMembers array */}
                {teamMembers.map((member, index) => (
                  // Lighter team member presentation
                  <div key={index} className="flex flex-col p-6 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    {/* Wrapper for top content to enforce min-height */}
                    <div className="flex flex-col items-center text-center min-h-[240px]">
                      {/* Circular Placeholder Image */}
                      {/* Brand-gold gradient and border */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/30 mb-5 flex items-center justify-center border border-brand-gold/30 flex-shrink-0">
                        <span className="text-3xl font-serif text-white/80">{member.name.charAt(0)}</span> 
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 font-serif">
                        {member.name}
                      </h3>
                      <p className="text-md font-semibold text-white/70 mb-5 flex-grow">
                        {member.position}
                      </p>
                    </div>
                    {/* Details Section */}
                    {/* Centered details text with brand-gold divider */}
                    <div className="space-y-3 mt-auto pt-4 border-t border-brand-gold/30 w-full text-center">
                      <p className="text-sm text-white/80 leading-relaxed">
                        <strong className="font-medium text-white">Expertise: </strong> 
                        {member.expertise}
                      </p>
                      <p className="text-sm text-white/80 leading-relaxed">
                        <strong className="font-medium text-white">Experience: </strong> 
                        {member.experience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </>
  )
}
