/**
 * app/page.tsx — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Renders actual content (v1/v2 had empty placeholders + comments only)
 *   ✅ Single H1 with primary keyword + location
 *   ✅ FAQ section server-rendered (Googlebot reads every answer)
 *   ✅ Course cards with internal links to all 18 courses
 *   ✅ Hero image with priority={true} for LCP
 *   ✅ Speakable classes on H1 and intro paragraphs
 *   ✅ Address section for local SEO NAP
 *   ✅ HowTo schema for enrollment process
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { homepageMetadata, COURSE_META, BASE_URL, SHORT_NAME } from '@/lib/metadata'
import { HOMEPAGE_FAQS, howToEnrollSchema } from '@/lib/schema'

export const metadata: Metadata = {
  ...homepageMetadata,
  title: 'Best Computer Institute in Dwarka More Delhi | ANITIO',
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-IN': BASE_URL, 'x-default': BASE_URL },
  },
}

// Featured course slugs (highest-demand first)
const FEATURED_SLUGS = ['adca','dca','tally-prime','advanced-excel','digital-marketing','python-programming','full-stack-web-development','data-analytics','bcc','ccc','graphic-designing','artificial-intelligence']

export default function HomePage() {
  const featuredCourses = FEATURED_SLUGS.map(s => ({ slug:s, ...COURSE_META[s] })).filter(Boolean)

  return (
    <>
      {/* HowTo schema for enrollment */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEnrollSchema()) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* ── SINGLE H1 with primary keyword + location ─────────── */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 speakable hero-intro">
              Best Computer Institute in{' '}
              <span className="text-yellow-400">Dwarka More</span>, New Delhi
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-6 speakable hero-intro">
              <strong>ANITIO Information Technology &amp; Skill Development LLP</strong> —
              premier IT training institute at Dwarka Mor Metro Station, New Delhi.
              30+ courses including ADCA, DCA, Tally Prime, Advanced Excel, Python,
              Web Development, Digital Marketing &amp; AI.{' '}
              <strong>100% Placement Support. Batches 7 AM – 8 PM.</strong>
            </p>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[['5,000+','Students'],['30+','Courses'],['100%','Placement'],['10+','Years']].map(([v,l]) => (
                <div key={l} className="text-center"><p className="text-2xl font-extrabold text-yellow-400">{v}</p><p className="text-blue-200 text-xs mt-0.5">{l}</p></div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg">🎓 Enroll Now — Free Demo</Link>
              <Link href="/courses" className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors">Explore All Courses →</Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/hero-classroom.jpg" alt="ANITIO Institute computer lab — Dwarka More, New Delhi students learning" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="courses-h2">
        <div className="max-w-6xl mx-auto">
          <h2 id="courses-h2" className="text-3xl font-bold text-gray-900 mb-3 text-center">Popular Computer Courses at ANITIO</h2>
          <p className="text-gray-600 text-center mb-10">Job-oriented courses at Dwarka More, New Delhi · Online, Offline &amp; Hybrid</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCourses.map(c => {
              const disc = Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100)
              return (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="block border-2 border-gray-100 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg transition-all h-full group" title={`${c.h1} at ANITIO Institute, Dwarka More`}>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 mb-1 text-sm leading-tight">{c.h1.split(' — ')[0]}</h3>
                    <p className="text-xs text-gray-500 mb-3">{c.duration} · {c.mode}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-blue-700">₹{c.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-gray-400 line-through">₹{c.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-green-600 font-semibold">{disc}% off</span>
                    </div>
                    <p className="text-xs text-yellow-600 mt-1">★ {c.rating} ({c.reviewCount}+ reviews)</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="text-center mt-8"><Link href="/courses" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors">Browse All 30+ Courses →</Link></div>
        </div>
      </section>

      {/* ── WHY ANITIO ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50" aria-labelledby="why-h2">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-h2" className="text-3xl font-bold text-gray-900 mb-3 text-center">Why Choose ANITIO Institute in Dwarka More?</h2>
          <p className="text-gray-600 text-center mb-10">Since 2015 — trusted by 5,000+ students across Delhi-NCR</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[['🎓','100% Placement Support','Resume, mock interviews, LinkedIn &amp; job referrals for every student.'],['⏰','Flexible Batches','Classes from 7 AM to 8 PM, Monday to Saturday. Weekend batches too.'],['💻','Online &amp; Offline','Learn in-person at Dwarka More or join live online from anywhere.'],['🏅','Recognized Certificate','NSDC affiliated. Accepted for government &amp; private jobs across India.'],['👩‍🏫','Expert Faculty','Trainers with real IT industry experience — practical, hands-on teaching.'],['📚','Complete Study Material','Printed notes, digital resources, video lectures &amp; practice tests included.'],['💰','Affordable Fee','Best quality at lowest fees in Dwarka More. EMI options available.'],['🔬','Small Batch Size','Max 15 students per batch — personalized attention from every trainer.']].map(([icon,title,desc]) => (
              <li key={title as string} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-3xl mb-3 block" aria-hidden="true">{icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: desc as string }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ — server-rendered for Googlebot + AI Overview ───────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="faq-h2" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-h2" className="text-3xl font-bold text-gray-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-10">About ANITIO Institute, Dwarka More, New Delhi</p>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="font-semibold text-gray-900 px-6 py-4 bg-gray-50 text-sm" itemProp="name">{faq.question}</h3>
                <div className="px-6 py-4 text-gray-700 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ENROLL (visible HowTo content) ───────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="enroll-h2">
        <div className="max-w-4xl mx-auto">
          <h2 id="enroll-h2" className="text-3xl font-bold text-gray-900 mb-3 text-center">How to Enroll at ANITIO</h2>
          <p className="text-gray-600 text-center mb-10">Simple 5-step process · Free demo class available</p>
          <ol className="grid sm:grid-cols-5 gap-4">
            {[['Choose Course','Browse 30+ courses at /courses'],['Contact Us','Call or WhatsApp +91-9289438428'],['Free Demo','Attend online or in-person demo class'],['Admission','Pay fee, submit documents'],['Start Learning','Join batch 7AM–8PM']].map(([step, desc], i) => (
              <li key={step as string} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">{i+1}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{step}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── ADDRESS / CONTACT (Local SEO anchor) ─────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white" aria-labelledby="address-h2">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 id="address-h2" className="text-2xl font-bold mb-4">Visit ANITIO Institute — Dwarka More</h2>
            <address className="not-italic text-blue-100 space-y-2 text-sm">
              <p><strong className="text-white">ANITIO Information Technology &amp; Skill Development LLP</strong></p>
              <p>H-20, Sewak Park, Dwarka Mor Metro Station</p>
              <p>Pillar No. 772, Uttam Nagar, New Delhi – 110059</p>
              <p className="mt-3">📞 <a href="tel:+919289438428" className="text-yellow-400 hover:underline">+91-9289438428</a> · <a href="tel:+919971969158" className="text-yellow-400 hover:underline">+91-9971969158</a></p>
              <p>✉️ <a href="mailto:anitioinstitute@gmail.com" className="text-yellow-400 hover:underline">anitioinstitute@gmail.com</a></p>
              <p>🕐 Mon–Sat: 7:00 AM – 8:00 PM</p>
            </address>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <a href="https://wa.me/919289438428?text=Hello+ANITIO,+I+want+to+know+about+your+courses" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white text-center px-6 py-3.5 rounded-xl font-bold hover:bg-green-400 transition-colors">💬 WhatsApp Enquiry Now</a>
            <Link href="/contact" className="bg-yellow-400 text-blue-900 text-center px-6 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-colors">🎓 Book Free Demo Class</Link>
            <a href="https://maps.google.com/?q=28.6098,77.0588" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white text-center px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors">📍 Get Directions on Google Maps</a>
          </div>
        </div>
      </section>
    </>
  )
}
