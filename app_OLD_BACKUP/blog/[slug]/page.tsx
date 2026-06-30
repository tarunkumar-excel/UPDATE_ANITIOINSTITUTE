/**
 * app/blog/[slug]/page.tsx — ANITIO Institute · Final Production v3
 *
 * Replaces v1 stub (1 hardcoded post, 9x 404 sitemap URLs).
 * Uses typed post data — ready for MDX/CMS migration at scale.
 *
 * To publish a new post:
 *   1. Add post data to BLOG_POSTS object below
 *   2. Add the slug to PUBLISHED_BLOG_SLUGS in app/sitemap.ts
 *   3. Redeploy (ISR will pick it up within 24h after that)
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { generateBlogMetadata, BASE_URL, SITE_NAME } from '@/lib/metadata'
import { blogPostGraphSchema, howToEnrollSchema } from '@/lib/schema'
import type { FAQItem } from '@/lib/schema'

export const revalidate = 86400

interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  datePublished: string
  dateModified: string
  keywords: string[]
  relatedCourses: Array<{ slug: string; name: string }>
  relatedPosts: Array<{ slug: string; title: string }>
  faqs: FAQItem[]
  content: string
}

// ─── Blog Post Database ────────────────────────────────────────────────────
const BLOG_POSTS: Record<string, BlogPost> = {
  'adca-vs-dca-which-is-better': {
    slug: 'adca-vs-dca-which-is-better',
    title: 'ADCA vs DCA Course: Which is Better for Your Career in 2025?',
    description: 'Complete comparison of ADCA vs DCA course — syllabus, fee, duration, career scope, and salary in Delhi. Make the right choice for your computer diploma at ANITIO Institute.',
    category: 'Course Guides',
    readTime: '6 min read',
    datePublished: '2025-01-15',
    dateModified: '2025-06-01',
    keywords: ['ADCA vs DCA', 'ADCA or DCA which is better', 'computer diploma Delhi', 'ADCA DCA difference', 'DCA ADCA comparison'],
    relatedCourses: [{ slug:'adca', name:'ADCA — Advanced Diploma' }, { slug:'dca', name:'DCA — Diploma Course' }, { slug:'bcc', name:'BCC — Basic Computer' }],
    relatedPosts: [{ slug:'best-computer-courses-after-12th-delhi', title:'Best Computer Courses After 12th in Delhi 2025' }],
    faqs: [
      { question: 'Which is better — ADCA or DCA for government jobs?', answer: 'Both ADCA and DCA are accepted for government jobs in Delhi. DCA is sufficient for clerical and data entry posts. ADCA is preferred for senior IT, technical government roles that require programming, web, or database skills. For most SSC and Delhi subordinate service posts, DCA is adequate.' },
      { question: 'Is ADCA or DCA more useful for private sector jobs?', answer: 'ADCA opens significantly more private sector doors — IT companies, accounting firms, e-commerce, BPOs, and tech startups all prefer ADCA over DCA because of the broader skill set. DCA is useful for basic office and BPO roles.' },
    ],
    content: `
      <h2>What is ADCA Course?</h2>
      <p>ADCA (Advanced Diploma in Computer Applications) is a 12-month comprehensive IT diploma at ANITIO Institute, Dwarka More, New Delhi. It covers MS Office advanced, Tally Prime with GST, Advanced Excel, programming basics (C, Python), web designing (HTML, CSS), and SQL database management. Fee: ₹12,000 (original ₹18,000).</p>

      <h2>What is DCA Course?</h2>
      <p>DCA (Diploma in Computer Applications) is a 6-month computer diploma at ANITIO, covering MS Office fundamentals, Tally basics, internet, email, and programming introduction. It is the most popular entry-level computer course for job seekers in Delhi. Fee: ₹7,500 (original ₹10,000).</p>

      <h2>ADCA vs DCA: Side-by-Side Comparison</h2>
      <table>
        <thead><tr><th>Feature</th><th>DCA (6 Months)</th><th>ADCA (12 Months)</th></tr></thead>
        <tbody>
          <tr><td>Fee at ANITIO</td><td>₹7,500</td><td>₹12,000</td></tr>
          <tr><td>Programming</td><td>Introduction only</td><td>C & Python basics</td></tr>
          <tr><td>Web Design</td><td>Not included</td><td>HTML, CSS included</td></tr>
          <tr><td>Database (SQL)</td><td>Not included</td><td>SQL & MS Access</td></tr>
          <tr><td>Tally</td><td>Basic</td><td>Tally Prime + GST</td></tr>
          <tr><td>Starting Salary</td><td>₹10,000–₹18,000/month</td><td>₹12,000–₹25,000/month</td></tr>
          <tr><td>Time to Employment</td><td>6–7 months</td><td>12–14 months</td></tr>
        </tbody>
      </table>

      <h2>Which Course is Right for You?</h2>
      <ul>
        <li>Choose <strong>DCA</strong> if you need quick employment (within 6 months), have a tight budget, or need a basic computer certificate for a specific government exam.</li>
        <li>Choose <strong>ADCA</strong> if you want comprehensive IT skills, higher-paying jobs, or plan to work in technology, web, or accounting roles long-term.</li>
      </ul>

      <h2>Admission at ANITIO Institute, Dwarka More</h2>
      <p>Both ADCA and DCA are available at ANITIO Information Technology & Skill Development LLP, H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, New Delhi – 110059. Batch timings: 7 AM to 8 PM. Call +91-9289438428 for a free counselling session and demo class.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS[slug]
  if (!post) return { title: 'Article Not Found', robots: { index: false, follow: true } }
  return generateBlogMetadata({
    title: post.title, description: post.description, slug: post.slug,
    datePublished: post.datePublished, dateModified: post.dateModified,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS[slug]
  if (!post) notFound()

  const postUrl = `${BASE_URL}/blog/${slug}`
  const pageSchema = blogPostGraphSchema(
    { title: post.title, description: post.description, url: postUrl,
      image: `${BASE_URL}/images/blog/${slug}.jpg`,
      datePublished: post.datePublished, dateModified: post.dateModified },
    post.faqs
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEnrollSchema()) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500 max-w-4xl mx-auto">
          {[{name:'Home',url:'/'},{name:'Blog',url:'/blog'},{name:post.title.slice(0,35)+'...',url:`/blog/${slug}`}].map((item,i,arr)=>(
            <li key={item.url} className="flex items-center gap-1">
              {i<arr.length-1?<><Link href={item.url} className="hover:text-blue-700 hover:underline">{item.name}</Link><span className="text-gray-300">/</span></>:<span className="text-gray-800 font-medium" aria-current="page">{item.name}</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
            <time dateTime={post.datePublished} className="text-gray-500 text-xs">{new Date(post.datePublished).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 article-intro">{post.title}</h1>
          <p className="text-gray-600 text-base leading-relaxed article-intro">{post.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
            By <strong className="text-gray-700">{SITE_NAME}</strong> · Updated: {new Date(post.dateModified).toLocaleDateString('en-IN',{month:'long',year:'numeric'})}
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-700 prose-table:text-sm" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200" aria-labelledby="blog-faq-h2" itemScope itemType="https://schema.org/FAQPage">
            <h2 id="blog-faq-h2" className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq,i)=>(
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-gray-900 px-6 py-4 bg-gray-50 text-sm" itemProp="name">{faq.question}</h3>
                  <div className="px-6 py-4 text-gray-700 text-sm" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related courses */}
        {post.relatedCourses.length > 0 && (
          <section className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Enroll at ANITIO — Dwarka More</h2>
            <ul className="grid sm:grid-cols-3 gap-3">
              {post.relatedCourses.map(rc=>(
                <li key={rc.slug}><Link href={`/courses/${rc.slug}`} className="block border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all text-sm font-semibold text-blue-700 hover:text-blue-800">{rc.name} →</Link></li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {/* CTA */}
      <div className="bg-blue-700 text-white py-10 px-4 text-center">
        <h2 className="text-xl font-bold mb-2">Enroll at ANITIO Institute — Free Demo Class</h2>
        <p className="text-blue-100 text-sm mb-5">Dwarka Mor Metro Station, New Delhi · 100% Placement Support</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-400 transition-colors text-sm">💬 WhatsApp Now</a>
          <Link href="/courses" className="bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-sm">Browse All Courses</Link>
        </div>
      </div>
    </>
  )
}
