"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function TermsOfServicePage() {
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
              {t("terms.title") || "Terms of Service"}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            {t("terms.title") || "Terms of Service"}
          </h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 mb-6">Last updated: May 5, 2025</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing our website at https://switchinvest.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on SwitchInvest's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on SwitchInvest's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by SwitchInvest at any time.
              </p>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on SwitchInvest's website are provided on an 'as is' basis. SwitchInvest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall SwitchInvest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SwitchInvest's website, even if SwitchInvest or a SwitchInvest authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on SwitchInvest's website could include technical, typographical, or photographic errors. SwitchInvest does not warrant that any of the materials on its website are accurate, complete or current. SwitchInvest may make changes to the materials contained on its website at any time without notice. However SwitchInvest does not make any commitment to update the materials.
              </p>
              
              <h2>6. Links</h2>
              <p>
                SwitchInvest has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SwitchInvest of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2>7. Modifications</h2>
              <p>
                SwitchInvest may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Belgium and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p>
                Email: legal@switchinvest.com<br />
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
