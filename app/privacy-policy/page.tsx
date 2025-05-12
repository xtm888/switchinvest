"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function PrivacyPolicyPage() {
  const { t } = useTranslation()
  
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-sm mb-8 text-gray-600">
            <Link href="/" className="hover:text-brand-teal transition-colors group flex items-center">
              <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-300">
                {t("common.home") || "Home"}
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="font-medium">
              {t("privacy.title") || "Privacy Policy"}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            {t("privacy.title") || "Privacy Policy"}
          </h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 mb-6">Last updated: May 5, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how SwitchInvest ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website 
                or use our services. We respect your privacy and are committed to protecting your personal data.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide when contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and actions taken.</li>
                <li><strong>Device Information:</strong> Information about your device, browser, IP address, and operating system.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device that help us improve your experience. You can control cookies through your browser settings.</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and provide services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or part of our business</li>
              </ul>
              <p>We will never sell your personal information to third parties.</p>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Restrict or object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                Email: privacy@switchinvest.com<br />
                Address: Boulevard Anspach 1, 1000 Brussels, Belgium<br />
                Phone: +32 2 123 4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
