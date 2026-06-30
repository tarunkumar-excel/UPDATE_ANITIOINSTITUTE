/**
 * app/computer-institute-[area]/page.tsx
 * Local SEO Landing Pages — one per area
 * Targets hyper-local keywords for Google Local Pack
 * Routes: /computer-institute-dwarka-more
 *         /computer-institute-uttam-nagar
 *         /computer-institute-dwarka
 *         /computer-institute-nawada
 *         /computer-institute-janakpuri
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { generatePageMetadata, COURSE_META, BASE_URL } from '@/lib/metadata'
import { localLandingGraphSchema, HOMEPAGE_FAQS, howToEnrollSchema } from '@/lib/schema'

export const revalidate = 86400

// ─── Area data: unique content per locality ────────────────────────────────
interface AreaData {
  name: string
  seoTitle: string
  h1: string
  description: string
  distance: string
  transit: string
  localKeywords: string[]
  localFAQs: Array<{ question: string; answer: string }>
  nearbyAreas: string[]
}

const AREAS: Record<string, AreaData> = {
  'dwarka-more': {
    name: 'Dwarka More',
    seoTitle: 'Best Computer Institute in Dwarka More Delhi | ANITIO',
    h1: 'Best Computer Institute in Dwarka More, New Delhi — ANITIO',
    description: 'ANITIO Institute is the No.1 computer training institute in Dwarka More, located directly at Dwarka Mor Metro Station. ADCA, DCA, BCC, CCC, Tally Prime, Excel, Python, Web Dev, AI. 100% Placement.',
    distance: 'At Dwarka Mor Metro Station — 0 km',
    transit: 'Blue Line Metro: Dwarka Mor Station (Exit Gate 2)',
    localKeywords: ['computer institute Dwarka More', 'computer classes Dwarka More', 'ADCA course Dwarka More', 'DCA course Dwarka More', 'Tally course Dwarka More', 'computer coaching Dwarka Mor metro'],
    localFAQs: [
      {
        question: 'Which is the best computer institute in Dwarka More?',
        answer: 'ANITIO Information Technology & Skill Development LLP is the top-rated computer training institute in Dwarka More, located directly at Dwarka Mor Metro Station (H-20, Sewak Park, Pillar No. 772). With 5,000+ students trained since 2015, 18+ courses, and 100% placement support, ANITIO is the #1 choice for computer education in Dwarka More.',
      },
      {
        question: 'What computer courses are available near Dwarka Mor Metro?',
        answer: 'ANITIO Institute at Dwarka Mor Metro offers 18+ computer courses: ADCA (12 months, ₹12,000), DCA (6 months, ₹7,500), BCC (3 months, ₹3,500), CCC coaching (3 months, ₹3,000), Tally Prime with GST (3 months, ₹6,000), Advanced Excel (2 months, ₹6,000), Full Stack Web Development (6 months, ₹18,000), Python (4 months, ₹12,000), Digital Marketing (4 months, ₹12,000), and AI & ML (4 months, ₹16,000).',
      },
    ],
    nearbyAreas: ['Uttam Nagar', 'Nawada', 'Janakpuri', 'Dwarka Sector 12', 'Sewak Park'],
  },
  'uttam-nagar': {
    name: 'Uttam Nagar',
    seoTitle: 'Best Computer Institute near Uttam Nagar Delhi | ANITIO',
    h1: 'Best Computer Institute near Uttam Nagar, Delhi — ANITIO at Dwarka Mor Metro',
    description: 'ANITIO Institute, the top computer training institute near Uttam Nagar, is just 2 km from Uttam Nagar East Metro. ADCA, DCA, Tally Prime, Excel, Python, Web Dev. 100% Placement Support.',
    distance: '~2 km from Uttam Nagar East Metro Station',
    transit: 'Blue Line: Uttam Nagar East → Dwarka Mor (1 stop, 3 min)',
    localKeywords: ['computer institute Uttam Nagar', 'computer classes Uttam Nagar', 'ADCA course Uttam Nagar', 'Tally course Uttam Nagar', 'computer coaching Uttam Nagar Delhi'],
    localFAQs: [
      {
        question: 'Which is the best computer institute near Uttam Nagar?',
        answer: 'ANITIO Institute at Dwarka Mor Metro Station is the top computer institute for students from Uttam Nagar. It is just one metro stop (3 minutes) from Uttam Nagar East Metro Station. ANITIO offers 18+ professional computer courses with 100% placement support, flexible 7 AM–8 PM batch timings, and fees starting from ₹3,000.',
      },
      {
        question: 'Is there a computer institute within walking distance of Uttam Nagar?',
        answer: 'ANITIO Institute at Dwarka Mor Metro Station is easily accessible from Uttam Nagar by metro (1 stop), auto-rickshaw, or e-rickshaw. The journey takes about 10–15 minutes from Uttam Nagar. The institute is located at H-20, Sewak Park, directly at Dwarka Mor Metro Exit Gate 2.',
      },
    ],
    nearbyAreas: ['Uttam Nagar East', 'Uttam Nagar West', 'Dwarka Mor', 'Hastsal', 'Bindapur'],
  },
  'dwarka': {
    name: 'Dwarka',
    seoTitle: 'Best Computer Institute for Dwarka Students Delhi | ANITIO',
    h1: 'Best Computer Institute for Dwarka Students — ANITIO at Dwarka Mor Metro, Delhi',
    description: 'ANITIO Institute at Dwarka Mor Metro is the top-rated computer training institute for students from all Dwarka sectors. ADCA, DCA, Tally, Excel, Python, Web Development. 100% Placement.',
    distance: '~5–15 min from various Dwarka sectors by metro (Blue Line)',
    transit: 'Blue Line: Any Dwarka Metro station → Dwarka Mor Station',
    localKeywords: ['computer institute Dwarka Delhi', 'computer classes Dwarka', 'ADCA course Dwarka', 'DCA course Dwarka Delhi', 'computer coaching Dwarka sector'],
    localFAQs: [
      {
        question: 'Which computer institute near Dwarka is best?',
        answer: 'ANITIO Institute at Dwarka Mor Metro Station is the most popular computer institute for students from all Dwarka sectors (Sector 6, 10, 12, 13, 14, 21, 23). Located on the Blue Line metro, ANITIO is accessible in 5–15 minutes from any Dwarka sector. The institute offers ADCA, DCA, Tally Prime, Python, Web Development, and 15+ other courses with 100% placement support.',
      },
      {
        question: 'How far is ANITIO Institute from Dwarka Sector 21?',
        answer: 'From Dwarka Sector 21 Metro Station, ANITIO Institute at Dwarka Mor is approximately 5–6 metro stations (about 10 minutes by Blue Line). Students from Dwarka take the metro directly to Dwarka Mor Station and the institute is right at the exit.',
      },
    ],
    nearbyAreas: ['Dwarka Sector 6', 'Dwarka Sector 10', 'Dwarka Sector 12', 'Dwarka Sector 21', 'Dwarka Sector 23'],
  },
  'nawada': {
    name: 'Nawada',
    seoTitle: 'Best Computer Institute near Nawada Metro Delhi | ANITIO',
    h1: 'Best Computer Institute near Nawada, Delhi — ANITIO at Dwarka Mor Metro',
    description: 'ANITIO Institute is just 1 metro stop from Nawada Station. Best computer training near Nawada Metro with ADCA, DCA, Tally Prime, Excel, Python courses. 100% Placement. Fee ₹3,000 onwards.',
    distance: '1 metro stop from Nawada Station (3 min)',
    transit: 'Blue Line: Nawada → Dwarka Mor (1 stop, 3 minutes)',
    localKeywords: ['computer institute near Nawada', 'computer classes Nawada Delhi', 'ADCA course near Nawada', 'computer coaching Nawada metro', 'IT training near Nawada'],
    localFAQs: [
      {
        question: 'Is there a good computer institute near Nawada Metro Station?',
        answer: 'Yes! ANITIO Institute is just 1 metro stop from Nawada Station on the Blue Line. Take the metro from Nawada to Dwarka Mor (3 minutes) and ANITIO is right at the station exit. Students from Nawada can reach the institute in under 10 minutes. ANITIO offers ADCA, DCA, Tally Prime, Excel, Python, and 15+ other courses.',
      },
    ],
    nearbyAreas: ['Nawada Village', 'Dwarka Mor', 'Uttam Nagar', 'Dabri', 'Mahavir Enclave'],
  },
  'janakpuri': {
    name: 'Janakpuri',
    seoTitle: 'Best Computer Institute near Janakpuri Delhi | ANITIO',
    h1: 'Best Computer Institute near Janakpuri, Delhi — ANITIO at Dwarka Mor Metro',
    description: 'ANITIO Institute at Dwarka Mor Metro is 15 min by metro from Janakpuri. Best computer courses for Janakpuri students: ADCA, DCA, Tally, Excel, Python, Web Dev. 100% Placement Support.',
    distance: '~15 min from Janakpuri West/East by Blue Line metro',
    transit: 'Blue Line: Janakpuri West → Dwarka Mor (3 stops, ~12 min)',
    localKeywords: ['computer institute near Janakpuri', 'computer classes Janakpuri Delhi', 'ADCA course near Janakpuri', 'computer coaching Janakpuri', 'IT training Janakpuri Delhi'],
    localFAQs: [
      {
        question: 'Which computer institute is best for students from Janakpuri?',
        answer: 'ANITIO Institute at Dwarka Mor Metro Station is highly recommended for Janakpuri students. It is only 3 metro stops (about 12 minutes) from Janakpuri West on the Blue Line. ANITIO offers 18+ computer and IT courses at affordable fees (₹3,000–₹18,000) with 100% placement support and batch timings from 7 AM to 8 PM.',
      },
    ],
    nearbyAreas: ['Janakpuri West', 'Janakpuri East', 'Tilak Nagar', 'Subhash Nagar', 'Tagore Garden'],
  },
}

export async function generateStaticParams() {
  return Object.keys(AREAS).map(area => ({ area }))
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params
  const data = AREAS[area]
  if (!data) return { title: 'Not Found', robots: { index: false, follow: false } }
  return generatePageMetadata({
    title: data.seoTitle,
    description: data.description,
    path: `/computer-institute-${area}`,
    keywords: data.localKeywords,
  })
}

export default async function LocalLandingPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params
  const data = AREAS[area]
  if (!data) notFound()

  const pageUrl = `${BASE_URL}/computer-institute-${area}`
  const allFAQs = [...data.localFAQs, ...HOMEPAGE_FAQS.slice(0, 4)]

  const pageSchema = localLandingGraphSchema({ areaName: data.name, pageUrl, faqs: allFAQs })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEnrollSchema()) }} />

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500 max-w-5xl mx-auto" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{name:'Home',url:BASE_URL},{name:'Areas',url:'#'},{name:data.name,url:pageUrl}].map((item,i,arr)=>(
            <li key={item.url} className="flex items-center gap-1" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              {i<arr.length-1?<><Link href={item.url} itemProp="item" className="hover:text-blue-700 hover:underline"><span itemProp="name">{item.name}</span></Link><meta itemProp="position" content={(i+1).toString()}/><span className="text-gray-300">/</span></>:<><span itemProp="name" aria-current="page" className="text-gray-800 font-medium">{item.name}</span><meta itemProp="position" content={(i+1).toString()}/><meta itemProp="item" content={item.url}/></>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold mb-2 uppercase tracking-wide">Computer Institute near {data.name}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">{data.h1}</h1>
          <p className="text-blue-100 text-base leading-relaxed mb-4 max-w-3xl mx-auto">{data.description}</p>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-sm mb-8">
            <span>📍 {data.distance}</span>
            <span className="text-blue-300">·</span>
            <span>🚇 {data.transit}</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-7 py-3 rounded-xl font-bold hover:bg-green-400 transition-colors">💬 WhatsApp Enquiry</a>
            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-7 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors">🎓 Book Free Demo</Link>
            <a href="tel:+919289438428" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* ── WHY ANITIO FOR [AREA] STUDENTS ──────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why {data.name} Students Choose ANITIO Institute</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['🚇', `Easy Commute from ${data.name}`, data.transit],
              ['⏰', 'Batches 7 AM – 8 PM', 'Multiple timeslots to fit your schedule.'],
              ['💰', 'Affordable Fees', 'From ₹3,000 (BCC/CCC) to ₹18,000 (Web Dev). EMI available.'],
              ['🎓', '100% Placement', 'Resume, interview prep, job referrals included.'],
              ['🏅', 'NSDC Recognized', 'Certificates accepted for government & private jobs.'],
              ['💻', 'Online + Offline', 'Attend from home or visit the centre — your choice.'],
            ].map(([icon,title,desc])=>(
              <div key={title as string} className="bg-blue-50 rounded-xl p-5">
                <span className="text-2xl mb-2 block">{icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP COURSES ──────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="courses-h2">
        <div className="max-w-5xl mx-auto">
          <h2 id="courses-h2" className="text-2xl font-bold text-gray-900 mb-8">
            Computer Courses Available for {data.name} Students
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(COURSE_META).map(([slug, course]) => (
              <li key={slug}>
                <Link
                  href={`/courses/${slug}`}
                  className="block border border-gray-200 bg-white rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all group"
                  title={`${course.h1.split(' — ')[0]} for ${data.name} students at ANITIO`}
                >
                  <h3 className="font-semibold text-blue-700 group-hover:text-blue-800 text-sm mb-1">{course.h1.split(' — ')[0]}</h3>
                  <p className="text-xs text-gray-500">{course.duration} · ₹{course.price.toLocaleString('en-IN')}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center"><Link href="/courses" className="text-blue-700 font-semibold hover:underline text-sm">View All Courses & Fees →</Link></div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="faq-h2" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-h2" className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions from {data.name} Students</h2>
          <div className="space-y-4">
            {allFAQs.map((faq, i) => (
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

      {/* ── NEARBY AREAS ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Students from nearby areas also attend ANITIO</h2>
          <div className="flex flex-wrap gap-2">
            {data.nearbyAreas.map(a => (
              <span key={a} className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDRESS ─────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-3">ANITIO Institute — Exact Location</h2>
          <address className="not-italic text-blue-100 text-sm space-y-1">
            <p>H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059</p>
            <p className="mt-2"><a href="tel:+919289438428" className="text-yellow-400 hover:underline">+91-9289438428</a> · <a href="mailto:anitioinstitute@gmail.com" className="text-yellow-400 hover:underline">anitioinstitute@gmail.com</a></p>
          </address>
          <a href="https://maps.google.com/?q=28.6098,77.0588" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-2 border-white text-white px-6 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">📍 Open in Google Maps</a>
        </div>
      </section>
    </>
  )
}
