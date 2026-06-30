/**
 * app/contact/page.tsx — ANITIO Institute · Final Production v3
 * Schema: ContactPage + LocalBusiness
 */
import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata, BASE_URL, SITE_NAME } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact ANITIO Institute Dwarka More | Enroll in Computer Courses',
  description: 'Contact ANITIO Institute at Dwarka Mor Metro Station. Call +91-9289438428, WhatsApp, or visit us. Free demo class available. ADCA, DCA, Tally, Excel, Python, Web Dev courses in New Delhi.',
  path: '/contact',
  keywords: ['contact ANITIO institute', 'ANITIO Dwarka More contact', 'enroll ANITIO', 'computer course admission Delhi'],
})

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact/#webpage`,
  name: 'Contact ANITIO Institute — Dwarka Mor Metro, New Delhi',
  description: 'Contact ANITIO Information Technology & Skill Development LLP for course enquiries, admissions, demo class booking, and franchise information.',
  url: `${BASE_URL}/contact`,
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#localbusiness` },
  mainEntity: { '@id': `${BASE_URL}/#localbusiness` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500 max-w-5xl mx-auto">
          <li><Link href="/" className="hover:text-blue-700 hover:underline">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><span className="text-gray-800 font-medium" aria-current="page">Contact</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Contact ANITIO Institute</h1>
        <p className="text-blue-100 text-base max-w-2xl mx-auto">Dwarka Mor Metro Station, New Delhi · Free Demo Class Available · Enroll Today</p>
      </section>

      {/* Contact details */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">📞</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Phone / Call</p>
                  <a href="tel:+919289438428" className="text-blue-700 hover:underline text-sm block">+91-9289438428</a>
                  <a href="tel:+919971969158" className="text-blue-700 hover:underline text-sm block">+91-9971969158</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">💬</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">WhatsApp</p>
                  <a href="https://wa.me/919289438428?text=Hello+ANITIO,+I+want+to+enquire+about+a+course" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">+91-9289438428 (WhatsApp)</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">✉️</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Email</p>
                  <a href="mailto:anitioinstitute@gmail.com" className="text-blue-700 hover:underline text-sm">anitioinstitute@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">📍</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Address</p>
                  <address className="not-italic text-gray-600 text-sm">
                    H-20, Sewak Park<br/>
                    Dwarka Mor Metro Station, Pillar No. 772<br/>
                    Uttam Nagar, New Delhi – 110059
                  </address>
                  <a href="https://maps.google.com/?q=28.6098,77.0588" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-xs mt-1 block">Open in Google Maps →</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🕐</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Working Hours</p>
                  <p className="text-gray-600 text-sm">Monday to Saturday: 7:00 AM – 8:00 PM</p>
                  <p className="text-gray-500 text-xs">Sunday: Closed (Emergency WhatsApp support available)</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-8 space-y-3">
              <a href="https://wa.me/919289438428?text=Hello+ANITIO,+I+want+to+enroll+in+a+computer+course" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-3.5 rounded-xl font-bold hover:bg-green-400 transition-colors w-full">💬 WhatsApp Now — Get Instant Response</a>
              <a href="tel:+919289438428" className="flex items-center justify-center gap-2 bg-blue-700 text-white py-3.5 rounded-xl font-bold hover:bg-blue-800 transition-colors w-full">📞 Call Now — +91-9289438428</a>
            </div>
          </div>

          {/* Right: How to reach */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">How to Reach ANITIO</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-bold text-blue-900 text-sm mb-2">🚇 By Metro (Recommended)</h3>
                <ul className="text-blue-800 text-xs space-y-1">
                  <li>• Blue Line: Alight at <strong>Dwarka Mor Station</strong></li>
                  <li>• Take Exit Gate 2 towards Sewak Park</li>
                  <li>• ANITIO is H-20, Sewak Park (2-min walk from exit)</li>
                  <li>• Look for Pillar No. 772</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">🛺 By Auto-Rickshaw / E-Rickshaw</h3>
                <p className="text-gray-700 text-xs">Ask for "ANITIO Institute, Sewak Park, Dwarka Mor Metro Pillar 772". Auto/E-rickshaw available from Uttam Nagar, Nawada, and surrounding areas.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">🚗 By Car / Bike</h3>
                <p className="text-gray-700 text-xs">Search "ANITIO Computer Institute Dwarka More" on Google Maps. Coordinates: 28.6098°N, 77.0588°E. Parking available near Sewak Park.</p>
              </div>
            </div>

            {/* Course enquiry prompt */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h3 className="font-bold text-yellow-900 text-sm mb-2">📋 When you contact us, mention:</h3>
              <ul className="text-yellow-800 text-xs space-y-1">
                <li>• Which course you're interested in</li>
                <li>• Your preferred batch timing (morning/evening/weekend)</li>
                <li>• Whether you want online or offline mode</li>
                <li>• Your educational background</li>
              </ul>
              <p className="text-yellow-700 text-xs mt-2 font-semibold">We'll respond within 30 minutes during working hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse courses CTA */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Not sure which course to take?</h2>
        <p className="text-gray-600 text-sm mb-5">Browse all 18 courses with fees, duration, and career scope — then contact us.</p>
        <Link href="/courses" className="inline-block bg-blue-700 text-white px-7 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors">Browse All Courses & Fees →</Link>
      </section>
    </>
  )
}
