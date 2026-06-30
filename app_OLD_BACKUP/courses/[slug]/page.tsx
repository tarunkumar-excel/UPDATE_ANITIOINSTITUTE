/**
 * app/courses/[slug]/page.tsx — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Real H1 rendered (not a comment placeholder)
 *   ✅ Real page body: description, fee, duration, curriculum outline, CTA
 *   ✅ FAQs for ALL 14 (was only 5) — using ALL_COURSE_FAQS from schema.ts
 *   ✅ RELATED_COURSES for ALL 18 courses (was only 7)
 *   ✅ @graph schema (no duplicate BreadcrumbList)
 *   ✅ ISR: revalidate = 86400 (pages update daily, not only on redeploy)
 *   ✅ Server-rendered FAQ (not 'use client') — Googlebot reads all answers
 *   ✅ Speakable CSS selectors match actual DOM classes
 *   ✅ Images use next/image with priority + fallback
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { generateCourseMetadata, COURSE_META, BASE_URL, SITE_NAME } from '@/lib/metadata'
import { coursePageGraphSchema, ALL_COURSE_FAQS, howToEnrollSchema } from '@/lib/schema'

// ── ISR: revalidate course pages every 24 h ──────────────────────────────
export const revalidate = 86400

// ── generateStaticParams: ONLY real slugs (from COURSE_META, not sitemap) ─
export async function generateStaticParams() {
  return Object.keys(COURSE_META).map(slug => ({ slug }))
}

// ── Per-course metadata ────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return generateCourseMetadata(slug)
}

// ── Related courses map — all 18 courses covered ──────────────────────────
const RELATED: Record<string, Array<{ slug: string; name: string; duration: string }>> = {
  adca:                    [{ slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'tally-prime', name:'Tally Prime', duration:'3M' }, { slug:'advanced-excel', name:'Advanced Excel', duration:'2M' }, { slug:'python-programming', name:'Python', duration:'4M' }],
  dca:                     [{ slug:'adca', name:'ADCA Advanced Diploma', duration:'12M' }, { slug:'bcc', name:'BCC Basic Computer', duration:'3M' }, { slug:'tally-prime', name:'Tally Prime', duration:'3M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }],
  bcc:                     [{ slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'ccc', name:'CCC Government Exam', duration:'3M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }, { slug:'data-entry-operator', name:'Data Entry Operator', duration:'2M' }],
  ccc:                     [{ slug:'bcc', name:'BCC Basic Computer', duration:'3M' }, { slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }, { slug:'data-entry-operator', name:'Data Entry Operator', duration:'2M' }],
  'advanced-excel':        [{ slug:'excel-power-bi', name:'Excel + Power BI', duration:'3M' }, { slug:'data-analytics', name:'Data Analytics', duration:'4M' }, { slug:'tally-prime', name:'Tally Prime', duration:'3M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }],
  'excel-power-bi':        [{ slug:'advanced-excel', name:'Advanced Excel', duration:'2M' }, { slug:'data-analytics', name:'Data Analytics', duration:'4M' }, { slug:'python-programming', name:'Python', duration:'4M' }],
  'tally-prime':           [{ slug:'advanced-excel', name:'Advanced Excel', duration:'2M' }, { slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'adca', name:'ADCA Diploma', duration:'12M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }],
  'full-stack-web-development': [{ slug:'python-programming', name:'Python', duration:'4M' }, { slug:'digital-marketing', name:'Digital Marketing', duration:'4M' }, { slug:'web-designing', name:'Web Designing', duration:'3M' }, { slug:'data-analytics', name:'Data Analytics', duration:'4M' }],
  'python-programming':    [{ slug:'data-analytics', name:'Data Analytics', duration:'4M' }, { slug:'artificial-intelligence', name:'AI & ML', duration:'4M' }, { slug:'full-stack-web-development', name:'Web Development', duration:'6M' }],
  'data-analytics':        [{ slug:'python-programming', name:'Python', duration:'4M' }, { slug:'excel-power-bi', name:'Excel + Power BI', duration:'3M' }, { slug:'artificial-intelligence', name:'AI & ML', duration:'4M' }],
  'graphic-designing':     [{ slug:'digital-marketing', name:'Digital Marketing', duration:'4M' }, { slug:'web-designing', name:'Web Designing', duration:'3M' }, { slug:'full-stack-web-development', name:'Web Dev', duration:'6M' }],
  'digital-marketing':     [{ slug:'graphic-designing', name:'Graphic Design', duration:'3M' }, { slug:'full-stack-web-development', name:'Web Dev', duration:'6M' }, { slug:'python-programming', name:'Python', duration:'4M' }],
  'artificial-intelligence':[{ slug:'python-programming', name:'Python', duration:'4M' }, { slug:'data-analytics', name:'Data Analytics', duration:'4M' }, { slug:'full-stack-web-development', name:'Web Dev', duration:'6M' }],
  'skill-development':     [{ slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'adca', name:'ADCA Diploma', duration:'12M' }, { slug:'tally-prime', name:'Tally Prime', duration:'3M' }],
  'data-entry-operator':   [{ slug:'bcc', name:'BCC Basic Computer', duration:'3M' }, { slug:'ms-office', name:'MS Office', duration:'2M' }, { slug:'dca', name:'DCA Diploma', duration:'6M' }],
  'ms-office':             [{ slug:'advanced-excel', name:'Advanced Excel', duration:'2M' }, { slug:'dca', name:'DCA Diploma', duration:'6M' }, { slug:'data-entry-operator', name:'Data Entry Op', duration:'2M' }],
  'web-designing':         [{ slug:'full-stack-web-development', name:'Full Stack Web Dev', duration:'6M' }, { slug:'graphic-designing', name:'Graphic Design', duration:'3M' }, { slug:'digital-marketing', name:'Digital Marketing', duration:'4M' }],
  'cyber-security':        [{ slug:'full-stack-web-development', name:'Web Dev', duration:'6M' }, { slug:'python-programming', name:'Python', duration:'4M' }, { slug:'artificial-intelligence', name:'AI & ML', duration:'4M' }],
}

// ── Curriculum data per course ─────────────────────────────────────────────
const CURRICULUM: Record<string, string[]> = {
  adca:   ['Computer Fundamentals & Windows', 'MS Word Advanced', 'Advanced Excel (Formulas, Charts, Dashboards)', 'MS PowerPoint Professional', 'Internet & Email', 'Tally Prime with Accounting & GST', 'Database Management (SQL / MS Access)', 'Programming Basics (C / Python)', 'Web Designing (HTML, CSS)', 'Cyber Security & Digital Safety', 'Office Automation Projects', 'Final Project + Certification'],
  dca:    ['Computer Basics & Windows OS', 'MS Word (Documents, Mail Merge)', 'MS Excel (Formulas, Charts)', 'MS PowerPoint (Presentations)', 'Internet & Email Communication', 'Tally Prime Basics', 'Programming Fundamentals', 'Typing Practice & Productivity Tools'],
  bcc:    ['Introduction to Computers', 'Windows OS Basics', 'MS Word — Typing & Formatting', 'MS Excel — Basic Spreadsheets', 'MS PowerPoint — Presentations', 'Internet & Email Basics', 'Digital Literacy & Online Safety'],
  ccc:    ['Introduction to Computer Concepts', 'GUI Operating System (Windows)', 'MS Office — Word, Excel, PowerPoint', 'Internet & WWW', 'Email Communication', 'Digital Financial Applications (UPI, Net Banking)', 'LibreOffice Suite', 'Cybersecurity Awareness'],
  'advanced-excel': ['Excel Interface & Shortcuts', 'VLOOKUP, HLOOKUP, INDEX-MATCH', 'Pivot Tables & Pivot Charts', 'Power Query — Data Cleaning', 'Conditional Formatting & Data Validation', 'Excel Dashboards', 'MIS Report Preparation', 'Advanced Formulas & Array Functions'],
  'excel-power-bi': ['Advanced Excel Fundamentals', 'Pivot Tables & Power Query', 'Excel Dashboards', 'Power BI Desktop Setup', 'Data Import & Transformation', 'DAX Formulas Basics', 'Interactive Dashboards & Reports', 'Publishing to Power BI Service'],
  'tally-prime':  ['Tally Prime Interface', 'Company Creation & Configuration', 'Ledger & Group Creation', 'Voucher Entry (Sales, Purchase, Payment)', 'GST Setup & Filing (GSTR-1, GSTR-3B)', 'e-Way Bill Generation', 'Payroll Management', 'TDS in Tally', 'Bank Reconciliation', 'Balance Sheet & P&L Reports', 'Inventory Management'],
  'full-stack-web-development': ['HTML5 — Structure & Semantics', 'CSS3 — Styling & Flexbox/Grid', 'Bootstrap — Responsive Design', 'JavaScript — ES6+ Fundamentals', 'React.js — Components, Hooks, State', 'Node.js & Express.js — Backend APIs', 'MongoDB — Database Design', 'REST API Development', 'Authentication (JWT)', 'Git & GitHub', 'Project Deployment (Vercel/Netlify)'],
  'python-programming': ['Python Syntax & Basics', 'Variables, Data Types, Operators', 'Control Flow (if/else, loops)', 'Functions & Modules', 'Lists, Tuples, Dictionaries', 'Object-Oriented Programming (OOP)', 'File Handling & Exceptions', 'Python Libraries (os, datetime, json)', 'API Integration Project', 'Final Python Project'],
  'data-analytics': ['Python for Data Analysis', 'NumPy — Numerical Computing', 'Pandas — Data Manipulation', 'Matplotlib & Seaborn — Visualization', 'Excel Advanced Analysis', 'SQL for Data Querying', 'Power BI — Dashboards', 'Data Cleaning & EDA', 'Real Dataset Projects'],
  'graphic-designing': ['Adobe Photoshop — Interface & Tools', 'Photo Editing & Retouching', 'CorelDRAW — Vector Graphics', 'Logo Design', 'Adobe Illustrator Basics', 'Social Media Graphics', 'Banner & Brochure Design', 'Business Card Design', 'Portfolio Project'],
  'digital-marketing': ['SEO — On-page & Off-page', 'Google Ads (PPC Campaigns)', 'Meta Ads (Facebook & Instagram)', 'Social Media Marketing', 'YouTube Marketing', 'Email Marketing', 'Content Marketing & Blogging', 'Google Analytics 4', 'Live Campaign Setup', 'Digital Marketing Strategy Project'],
  'artificial-intelligence': ['Python for AI Basics', 'NumPy & Pandas for ML', 'scikit-learn — ML Algorithms', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'K-Means Clustering', 'NLP Introduction', 'Model Evaluation & Tuning', 'AI Project 1 — Classifier', 'AI Project 2 — Text Analysis'],
  'skill-development': ['Professional Resume Building', 'LinkedIn Profile Setup', 'Interview Preparation', 'Mock Interviews (HR & Technical)', 'Professional Communication', 'MS Office for Office Work', 'Email Etiquette', 'Job Application Strategies'],
}

// ── Page component ─────────────────────────────────────────────────────────
export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = COURSE_META[slug]
  if (!course) notFound()

  const courseUrl  = `${BASE_URL}/courses/${slug}`
  const faqs       = ALL_COURSE_FAQS[slug] ?? []
  const related    = RELATED[slug] ?? []
  const curriculum = CURRICULUM[slug] ?? []
  const discount   = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)

  // @graph schema (no duplicate BreadcrumbList)
  const pageSchema    = coursePageGraphSchema({ slug, name: course.h1, description: course.description, url: courseUrl, duration: course.isoDuration, mode: course.mode, price: course.price, originalPrice: course.originalPrice, rating: course.rating, reviewCount: course.reviewCount, credential: course.credential, datePublished: course.datePublished, prerequisites: course.prerequisites }, faqs)
  const enrollSchema  = howToEnrollSchema()
  const shortName     = course.h1.split(' — ')[0].split(' in ')[0]

  return (
    <>
      {/* JSON-LD — raw <script> for synchronous SSR */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enrollSchema) }} />

      {/* ── BREADCRUMB (visible + microdata) ─────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500 max-w-6xl mx-auto" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ name:'Home', url:BASE_URL }, { name:'All Courses', url:`${BASE_URL}/courses` }, { name:shortName, url:courseUrl }].map((item, i, arr) => (
            <li key={item.url} className="flex items-center gap-1" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              {i < arr.length - 1 ? (
                <><Link href={item.url} itemProp="item" className="hover:text-blue-700 hover:underline"><span itemProp="name">{item.name}</span></Link><meta itemProp="position" content={(i+1).toString()} /><svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg></>
              ) : (
                <><span itemProp="name" aria-current="page" className="text-gray-800 font-medium">{item.name}</span><meta itemProp="position" content={(i+1).toString()} /><meta itemProp="item" content={item.url} /></>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            {/* ── SINGLE H1 — keyword + location ─────────────── */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 course-intro">
              {course.h1}
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-6 course-intro">
              {course.description}
            </p>
            {/* Fee summary — schema-readable, human-readable */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 fee-summary" aria-label="Course fee and details">
              <div className="flex flex-wrap gap-6">
                <div><p className="text-blue-200 text-xs">Fee</p><p className="text-white font-bold text-2xl">₹{course.price.toLocaleString('en-IN')}<span className="text-sm font-normal text-blue-300 line-through ml-2">₹{course.originalPrice.toLocaleString('en-IN')}</span></p><p className="text-green-300 text-xs font-semibold">{discount}% OFF</p></div>
                <div><p className="text-blue-200 text-xs">Duration</p><p className="text-white font-bold text-xl">{course.duration}</p></div>
                <div><p className="text-blue-200 text-xs">Mode</p><p className="text-white font-bold text-xl capitalize">{course.mode}</p></div>
                <div><p className="text-blue-200 text-xs">Rating</p><p className="text-white font-bold text-xl">★ {course.rating} <span className="text-xs font-normal text-blue-300">({course.reviewCount}+ reviews)</span></p></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-sm shadow-lg" aria-label={`Enroll in ${shortName} at ANITIO Institute`}>🎓 Enroll Now — Free Demo</Link>
              <a href="https://wa.me/919289438428?text=Hello+ANITIO,+I+want+to+know+about+this+course" className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors text-sm" target="_blank" rel="noopener noreferrer">💬 WhatsApp Enquiry</a>
              <a href="tel:+919289438428" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-sm">📞 +91-9289438428</a>
            </div>
          </div>
          <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={course.ogImage ?? `/images/courses/${slug}.jpg`}
              alt={`${shortName} class at ANITIO Institute, Dwarka More, New Delhi`}
              fill className="object-cover" priority
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => { (e.target as HTMLImageElement).src = '/images/og-image.jpg' }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS COURSE ────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About the {shortName}</h2>
          {/* Definition-first paragraph — optimized for AI Overview extraction */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p><strong>{shortName}</strong> at <strong>ANITIO Information Technology &amp; Skill Development LLP, Dwarka Mor Metro Station, New Delhi</strong> is a <strong>{course.duration}</strong> {course.mode === 'hybrid' ? 'online and offline' : course.mode} course designed for practical, job-ready skills. Course fee: <strong>₹{course.price.toLocaleString('en-IN')}</strong> (original ₹{course.originalPrice.toLocaleString('en-IN')}). Upon completion, students receive the <strong>{course.credential}</strong>.</p>
            {course.prerequisites && <p><strong>Prerequisites:</strong> {course.prerequisites}</p>}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['Duration', course.duration], ['Mode', course.mode === 'hybrid' ? 'Online + Offline' : course.mode === 'online' ? 'Online' : 'In-Person'], ['Batch Timings', '7 AM – 8 PM'], ['Certificate', 'ANITIO + NSDC']].map(([k, v]) => (
              <div key={k} className="bg-blue-50 rounded-xl p-4 text-center"><p className="text-xs text-gray-500 mb-1">{k}</p><p className="font-bold text-blue-800 text-sm">{v}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ───────────────────────────────────────────────────── */}
      {curriculum.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="curriculum-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="curriculum-heading" className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum — {shortName}</h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {curriculum.map((item, i) => (
                <li key={i} className="flex gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <span className="text-blue-600 font-bold text-sm min-w-[24px]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-gray-800 text-sm">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── FAQ (server-rendered — Googlebot reads every answer) ─────────── */}
      {faqs.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions — {shortName}</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-gray-900 px-6 py-4 text-sm" itemProp="name">{faq.question}</h3>
                  <div className="px-6 pb-4 pt-2 text-gray-700 text-sm leading-relaxed border-t border-gray-200" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ENROLL CTA ───────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Start Your {shortName} Today</h2>
          <p className="text-blue-100 mb-6 text-sm">ANITIO Institute — H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">Apply Now — Free Demo</Link>
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors">WhatsApp Us Now</a>
          </div>
        </div>
      </section>

      {/* ── RELATED COURSES (internal linking) ───────────────────────────── */}
      {related.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="related-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900 mb-6">Related Courses at ANITIO Institute</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(rc => (
                <li key={rc.slug}>
                  <Link href={`/courses/${rc.slug}`} className="block p-4 border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group h-full" title={`${rc.name} at ANITIO Institute, Dwarka More`}>
                    <span className="font-semibold text-blue-700 group-hover:text-blue-800 block mb-1 text-sm">{rc.name}</span>
                    <span className="text-xs text-gray-500">Duration: {rc.duration}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center"><Link href="/courses" className="text-blue-700 font-semibold hover:underline text-sm">Browse All 30+ Courses at ANITIO →</Link></div>
          </div>
        </section>
      )}

      {/* ── LOCAL FOOTER (NAP for local SEO) ─────────────────────────────── */}
      <div className="bg-gray-50 border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-500">
        <p><strong className="text-gray-700">{SITE_NAME}</strong> · H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059 · <a href="tel:+919289438428" className="text-blue-600 hover:underline">+91-9289438428</a></p>
      </div>
    </>
  )
}
