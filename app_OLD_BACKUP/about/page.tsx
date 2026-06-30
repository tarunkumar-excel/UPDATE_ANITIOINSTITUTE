/**
 * app/about/page.tsx — ANITIO Institute · Final Production v3
 * E-E-A-T optimized: real credentials, faculty section, history, trust signals
 * Schema: AboutPage, EducationalOrganization, WebPage
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata, BASE_URL, SITE_NAME } from '@/lib/metadata'
import { homepageGraphSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageMetadata({
  title: 'About ANITIO Institute Dwarka More | Computer Training Since 2015',
  description: 'About ANITIO Information Technology & Skill Development LLP — established 2015 at Dwarka Mor Metro, New Delhi. 5,000+ students trained, 18+ courses, NSDC affiliated, 100% placement support.',
  path: '/about',
  keywords: ['about ANITIO institute', 'ANITIO Dwarka More', 'computer institute Uttam Nagar', 'NSDC affiliated institute Delhi', 'IT training New Delhi'],
})

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${BASE_URL}/about/#webpage`,
      url: `${BASE_URL}/about`,
      name: 'About ANITIO Information Technology & Skill Development LLP',
      description: 'ANITIO is a premier computer training institute at Dwarka Mor Metro Station, New Delhi. Established 2015. NSDC affiliated. 5,000+ students trained.',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#localbusiness` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
        ],
      },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500 max-w-5xl mx-auto">
          <li><Link href="/" className="hover:text-blue-700 hover:underline">Home</Link></li>
          <li className="text-gray-300">/</li>
          <li><span className="text-gray-800 font-medium" aria-current="page">About</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About ANITIO Institute</h1>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            <strong>ANITIO Information Technology &amp; Skill Development LLP</strong> — 
            Premier computer training institute at Dwarka Mor Metro Station, New Delhi. 
            Established 2015. Trusted by 5,000+ students across Delhi-NCR.
          </p>
          <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[['2015','Founded'],['5,000+','Students'],['18+','Courses'],['100%','Placement']].map(([v,l])=>(
              <div key={l}><p className="text-2xl font-extrabold text-yellow-400">{v}</p><p className="text-blue-200 text-xs mt-0.5">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p><strong>ANITIO Information Technology &amp; Skill Development LLP</strong> was established in 2015 with a single mission: to provide world-class computer education at affordable fees to students and professionals in West Delhi.</p>
            <p>Founded at Dwarka Mor Metro Station, ANITIO started with basic computer courses (BCC, DCA) and has grown to offer 18+ professional IT programs including Full Stack Web Development, Python Programming, Data Analytics, Digital Marketing, Artificial Intelligence &amp; Machine Learning, and Cyber Security.</p>
            <p>We are proud to be affiliated with <strong>NSDC (National Skill Development Corporation)</strong> and recognized by the <strong>Ministry of Skill Development, Government of India</strong>. Our certificates are accepted by government departments and private employers across India.</p>
            <p>Over 10+ years, ANITIO has trained more than <strong>5,000 students</strong> — many of whom now work at leading IT companies, BPOs, banks, and government organizations across Delhi-NCR and beyond.</p>
          </div>
        </div>
      </section>

      {/* E-E-A-T: Credentials & Affiliations */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Credentials &amp; Affiliations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'NSDC Affiliated', desc: 'National Skill Development Corporation — recognized training partner of the Government of India.', icon: '🏆' },
              { title: 'Ministry of Skill Development', desc: 'Recognized by the Ministry of Skill Development & Entrepreneurship, Government of India.', icon: '🏛️' },
              { title: 'Industry-Recognized Certificates', desc: 'ANITIO certificates accepted by private employers and government departments for job applications.', icon: '🎓' },
              { title: '10+ Years of Excellence', desc: 'Established 2015. Over a decade of delivering quality computer education in West Delhi.', icon: '📅' },
              { title: '5,000+ Students Trained', desc: 'Trained 5,000+ students who are now employed in IT companies, banks, BPOs, and government jobs.', icon: '👩‍🎓' },
              { title: 'Online & Offline Modes', desc: 'Flexible learning — attend in-person at Dwarka More or join live online classes from anywhere in India.', icon: '💻' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section (E-E-A-T — Experience signal) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Our Expert Faculty</h2>
          <p className="text-gray-600 text-center mb-10 text-sm">Industry professionals with real-world experience teaching practical skills</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'IT & Programming Faculty', exp: '8+ years industry experience', courses: 'ADCA, DCA, Python, Web Development', qual: 'B.Tech Computer Science' },
              { name: 'Accounting & Finance Faculty', exp: '10+ years in corporate accounting', courses: 'Tally Prime, Advanced Excel, MIS', qual: 'M.Com, Certified Tally Trainer' },
              { name: 'Digital Marketing Faculty', exp: '6+ years in digital agencies', courses: 'Digital Marketing, SEO, Google Ads', qual: 'Google & Meta Certified Trainer' },
              { name: 'Data & AI Faculty', exp: '5+ years in data science', courses: 'Python, Data Analytics, AI & ML', qual: 'M.Sc Data Science' },
              { name: 'Design Faculty', exp: '7+ years freelance & agency work', courses: 'Graphic Design, Web Design', qual: 'B.Des, Adobe Certified Expert' },
              { name: 'Career & Placement Cell', exp: 'Dedicated HR & placement team', courses: 'Skill Development, Interview Prep', qual: 'HR professionals & industry connections' },
            ].map(f => (
              <div key={f.name} className="border border-gray-200 rounded-xl p-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-blue-700 text-xl">👩‍🏫</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{f.name}</h3>
                <p className="text-blue-600 text-xs mb-2">{f.qual}</p>
                <p className="text-gray-500 text-xs mb-1">Experience: {f.exp}</p>
                <p className="text-gray-500 text-xs">Teaches: {f.courses}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">
            ⚠️ Replace the above with real faculty names, photos, and verified credentials for maximum E-E-A-T impact.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Institute Infrastructure</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[['🖥️','Computer Labs','Latest hardware, high-speed internet'],['📚','Study Materials','Printed notes + digital resources'],['📶','Fast WiFi','High-speed internet in all labs'],['🎥','Recording Setup','Classes recorded for review'],['👥','Small Batches','Max 15 students per batch'],['🕐','Flexible Hours','7 AM – 8 PM, Mon–Sat'],['📱','WhatsApp Support','Doubt clearing via WhatsApp group'],['🏆','Placement Cell','Dedicated placement assistance']].map(([icon,title,desc])=>(
              <li key={title as string} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <span className="text-2xl mb-2 block" aria-hidden="true">{icon}</span>
                <p className="font-semibold text-gray-900 text-xs mb-1">{title}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Join 5,000+ Successful Students</h2>
          <p className="text-blue-100 mb-6 text-sm">H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses" className="bg-yellow-400 text-blue-900 px-7 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors">Browse All Courses</Link>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">Book Free Demo Class</Link>
          </div>
        </div>
      </section>
    </>
  )
}
