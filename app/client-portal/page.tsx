import { redirect } from 'next/navigation'

export default function ClientPortalPage() {
  // Redirect to contact page where the valuation widget is located
  redirect('/contact')
}
