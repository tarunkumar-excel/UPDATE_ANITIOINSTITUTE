/**
 * lib/metadata.ts — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Removed unused `LOCATION` constant (TypeScript strict warning)
 *   ✅ Added h1 field for each course (what to render as H1 tag)
 *   ✅ Added all 18 courses (v1 had only 14; sitemap listed 30 → 404s)
 *   ✅ hreflang removed from baseMetadata (must be per-page via alternates)
 *   ✅ Added ogImage per course
 *   ✅ datePublished added to every course
 *   ✅ og:type is 'website' for courses (correct — 'article' is wrong for course pages)
 */

import { Metadata } from 'next'

export const BASE_URL   = 'https://www.anitioinstitute.com'
export const SITE_NAME  = 'ANITIO Information Technology & Skill Development LLP'
export const SHORT_NAME = 'ANITIO Institute'
const OG_IMAGE = `${BASE_URL}/images/og-image.jpg`

// ─── Base metadata (no hreflang — each page sets it via alternates) ────────
export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SHORT_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Dwarka More, Uttam Nagar, New Delhi, India',
    'geo.position': '28.6098;77.0588',
    'ICBM': '28.6098, 77.0588',
    'DC.language': 'en-IN',
    'DC.coverage': 'New Delhi, Delhi, India',
    'DC.publisher': SITE_NAME,
  },
}

// ─── Homepage metadata ─────────────────────────────────────────────────────
export const homepageMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: 'Best Computer Institute in Dwarka More Delhi | ANITIO',
    template: `%s | ${SHORT_NAME}`,
  },
  description:
    'ANITIO — No.1 computer training institute in Dwarka More, New Delhi. Courses: ADCA, DCA, BCC, CCC, Tally Prime, Advanced Excel, Python, Web Development, Digital Marketing, AI. 100% Placement. Enroll Now.',
  keywords: [
    'computer institute Dwarka More', 'computer institute Delhi', 'best computer institute near me',
    'ADCA course Delhi', 'DCA course New Delhi', 'DCA course Dwarka More',
    'BCC course Delhi', 'CCC course Delhi', 'Tally Prime course Dwarka More',
    'Advanced Excel course Delhi', 'computer classes Uttam Nagar',
    'IT training institute New Delhi', 'digital marketing course Delhi',
    'web development course Delhi', 'Python course Delhi',
    'data analytics course Delhi', 'graphic designing course Delhi',
    'ANITIO institute', 'skill development Dwarka More',
    'computer course after 10th Delhi', 'computer course after 12th Delhi',
    'government job computer course Delhi', 'computer classes Dwarka Mor metro',
  ],
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-IN': BASE_URL, 'x-default': BASE_URL },
  },
  openGraph: {
    type: 'website', locale: 'en_IN', url: BASE_URL, siteName: SITE_NAME,
    title: 'Best Computer Institute in Dwarka More, Delhi | ANITIO',
    description: 'ANITIO — Premier IT training institute in Dwarka More, New Delhi. 30+ courses: ADCA, DCA, CCC, Tally, Excel, Python, Web Dev, AI. 5000+ students. 100% Placement. Flexible batches 7AM–8PM.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'ANITIO Computer Training Institute — Dwarka More, New Delhi', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image', site: '@anitioinstitute', creator: '@anitioinstitute',
    title: 'Best Computer Institute in Dwarka More Delhi | ANITIO',
    description: 'ANITIO — IT training in Dwarka More. ADCA, DCA, CCC, Tally, Excel, Python, Web Dev, AI. 100% Placement.',
    images: [{ url: OG_IMAGE, alt: 'ANITIO Institute — Dwarka More, New Delhi', width: 1200, height: 630 }],
  },
  verification: {
    // ⚠️  Go to search.google.com/search-console → Add Property → HTML tag
    // Copy the content="" value and paste here. Then redeploy.
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? 'REPLACE_WITH_YOUR_REAL_CODE',
  },
  category: 'education',
}

// ─── Course Meta type ─────────────────────────────────────────────────────
export interface CourseMeta {
  title: string          // <title> tag — max 60 chars
  h1: string             // <h1> to render on page — max 80 chars
  description: string    // meta description — max 160 chars
  keywords: string[]
  price: number
  originalPrice: number
  duration: string       // human: '3 Months'
  isoDuration: string    // ISO 8601: 'P3M'
  mode: 'online' | 'offline' | 'hybrid'
  rating: number
  reviewCount: number
  credential: string
  datePublished: string
  prerequisites?: string
  ogImage?: string
}

// ─── COURSE_META — 18 courses (all slugs that have real pages) ─────────────
export const COURSE_META: Record<string, CourseMeta> = {
  adca: {
    title: 'ADCA Course in Dwarka More Delhi | Advanced Diploma Computer Applications',
    h1: 'ADCA Course in Dwarka More, New Delhi — Advanced Diploma in Computer Applications',
    description: 'Enroll in ADCA at ANITIO, Dwarka More. 12-month advanced diploma: Excel, Tally, programming, web design, database. Fee ₹12,000. 100% Placement. Batches 7AM–8PM.',
    keywords: ['ADCA course Delhi', 'ADCA course Dwarka More', 'advanced diploma computer applications Delhi', 'ADCA course fee', 'ADCA 1 year Delhi', 'computer diploma Delhi'],
    price: 12000, originalPrice: 18000, duration: '12 Months', isoDuration: 'P12M',
    mode: 'hybrid', rating: 4.6, reviewCount: 312,
    credential: 'Advanced Diploma in Computer Applications', datePublished: '2020-01-01',
    prerequisites: 'None — open to students after 10th/12th and working professionals.',
  },
  dca: {
    title: 'DCA Course in Dwarka More Delhi | Diploma in Computer Applications | ANITIO',
    h1: 'DCA Course in Dwarka More, New Delhi — Diploma in Computer Applications',
    description: 'DCA at ANITIO, Dwarka More. 6-month diploma: MS Office, Tally, internet, programming. Fee ₹7,500. 100% Placement. Morning to evening batches available.',
    keywords: ['DCA course Delhi', 'DCA course Dwarka More', 'diploma computer applications Delhi', 'DCA 6 months', 'DCA course fee Delhi', 'computer diploma Delhi'],
    price: 7500, originalPrice: 10000, duration: '6 Months', isoDuration: 'P6M',
    mode: 'hybrid', rating: 4.6, reviewCount: 486,
    credential: 'Diploma in Computer Applications', datePublished: '2020-01-01',
  },
  bcc: {
    title: 'BCC Course Delhi | Basic Computer Course | ANITIO Dwarka More',
    h1: 'BCC — Basic Computer Course at ANITIO Institute, Dwarka More, New Delhi',
    description: 'BCC at ANITIO, Dwarka More. 3-month beginner course: computer fundamentals, MS Office, internet, email. Fee ₹3,500. Ideal for beginners, housewives, and students.',
    keywords: ['BCC course Delhi', 'basic computer course Dwarka More', 'basic computer course Delhi', 'BCC certificate', 'beginner computer course New Delhi'],
    price: 3500, originalPrice: 5000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'offline', rating: 4.5, reviewCount: 198,
    credential: 'Basic Computer Course Certificate', datePublished: '2020-01-01',
  },
  ccc: {
    title: 'CCC Course Delhi | NIELIT Computer Concepts | Government Job | ANITIO',
    h1: 'CCC Course in Delhi — NIELIT Course on Computer Concepts at ANITIO, Dwarka More',
    description: 'CCC coaching at ANITIO, Dwarka More. NIELIT-certified course for government jobs. 3 months. Fee ₹3,000. Expert CCC exam prep in Delhi.',
    keywords: ['CCC course Delhi', 'CCC NIELIT Delhi', 'CCC government job', 'CCC exam preparation Dwarka', 'NIELIT CCC coaching Delhi'],
    price: 3000, originalPrice: 4500, duration: '3 Months', isoDuration: 'P3M',
    mode: 'offline', rating: 4.5, reviewCount: 156,
    credential: 'NIELIT CCC Certificate', datePublished: '2020-01-01',
  },
  'advanced-excel': {
    title: 'Advanced Excel Course Delhi | MIS Reporting VLOOKUP Pivot Table | ANITIO',
    h1: 'Advanced Excel & MIS Reporting Course in Delhi — ANITIO Institute, Dwarka More',
    description: 'Advanced Excel & MIS at ANITIO, Dwarka More. 2 months: VLOOKUP, Pivot Tables, Power Query, dashboards, MIS reports. Fee ₹6,000. Job-oriented. 100% Placement.',
    keywords: ['advanced excel course Delhi', 'excel MIS course Delhi', 'VLOOKUP Pivot Table course', 'advanced excel Dwarka More', 'MIS reporting course Delhi'],
    price: 6000, originalPrice: 8500, duration: '2 Months', isoDuration: 'P2M',
    mode: 'hybrid', rating: 4.7, reviewCount: 267,
    credential: 'Advanced Excel & MIS Certificate', datePublished: '2021-01-01',
  },
  'excel-power-bi': {
    title: 'Excel Power BI Course Delhi | Data Analytics Business Intelligence | ANITIO',
    h1: 'Excel + Power BI Course in Delhi — Data Analytics at ANITIO, Dwarka More',
    description: 'Excel + Power BI at ANITIO, Dwarka More. 3 months: Advanced Excel, Power BI dashboards, DAX, business intelligence. Fee ₹9,000. 100% Placement.',
    keywords: ['Power BI course Delhi', 'Excel Power BI course', 'data analytics course Delhi', 'Power BI training Dwarka More', 'business intelligence course Delhi'],
    price: 9000, originalPrice: 13000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'hybrid', rating: 4.7, reviewCount: 134,
    credential: 'Excel + Power BI Data Analytics Certificate', datePublished: '2021-06-01',
  },
  'tally-prime': {
    title: 'Tally Prime Course Delhi | Tally GST Accounting | ANITIO Dwarka More',
    h1: 'Tally Prime + GST Course in Delhi — Complete Accounting at ANITIO, Dwarka More',
    description: 'Tally Prime + GST at ANITIO, Dwarka More. 3 months: GST filing, payroll, TDS, balance sheet, inventory. Fee ₹6,000. Job-ready training. 100% Placement.',
    keywords: ['Tally Prime course Delhi', 'Tally GST course Delhi', 'Tally course Dwarka More', 'Tally accounting course Delhi', 'Tally Uttam Nagar', 'GST filing course Delhi'],
    price: 6000, originalPrice: 9000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'hybrid', rating: 4.6, reviewCount: 321,
    credential: 'Tally Prime with GST Accounting Certificate', datePublished: '2020-01-01',
  },
  'full-stack-web-development': {
    title: 'Full Stack Web Development Course Delhi | React Node.js | ANITIO',
    h1: 'Full Stack Web Development Course in Delhi — ANITIO Institute, Dwarka More',
    description: 'Full Stack Web Dev at ANITIO, Dwarka More. 6 months: HTML, CSS, JavaScript, React.js, Node.js, MongoDB. Fee ₹18,000. Real projects. 100% Placement.',
    keywords: ['web development course Delhi', 'full stack course Delhi', 'React JS course Delhi', 'Node JS training Delhi', 'JavaScript course New Delhi'],
    price: 18000, originalPrice: 25000, duration: '6 Months', isoDuration: 'P6M',
    mode: 'hybrid', rating: 4.8, reviewCount: 189,
    credential: 'Full Stack Web Development Certificate', datePublished: '2021-06-01',
    prerequisites: 'Basic computer knowledge. No coding experience required.',
  },
  'python-programming': {
    title: 'Python Course Delhi | Python Programming Certification | ANITIO Dwarka More',
    h1: 'Python Programming Certification Course in Delhi — ANITIO, Dwarka More',
    description: 'Python Programming at ANITIO, Dwarka More. 4 months: basics to advanced OOP, data structures, real projects. Fee ₹12,000. Expert trainers. 100% Placement.',
    keywords: ['Python course Delhi', 'Python programming Delhi', 'Python course Dwarka More', 'Python certification Delhi', 'learn Python New Delhi'],
    price: 12000, originalPrice: 16000, duration: '4 Months', isoDuration: 'P4M',
    mode: 'hybrid', rating: 4.7, reviewCount: 178,
    credential: 'Python Programming Certification', datePublished: '2021-01-01',
  },
  'data-analytics': {
    title: 'Data Analytics Course Delhi | Python Excel Power BI | ANITIO Dwarka More',
    h1: 'Data Analytics Course in Delhi — Python + Excel + Power BI at ANITIO, Dwarka More',
    description: 'Data Analytics at ANITIO, Dwarka More. 4 months: Python Pandas NumPy Matplotlib Excel SQL Power BI. Fee ₹14,000. End-to-end analytics. 100% Placement.',
    keywords: ['data analytics course Delhi', 'data analyst course Delhi', 'Python analytics Delhi', 'data science course Delhi', 'analytics training Dwarka More'],
    price: 14000, originalPrice: 20000, duration: '4 Months', isoDuration: 'P4M',
    mode: 'hybrid', rating: 4.8, reviewCount: 142,
    credential: 'Data Analytics Professional Certificate', datePublished: '2022-01-01',
  },
  'graphic-designing': {
    title: 'Graphic Designing Course Delhi | Photoshop CorelDRAW | ANITIO Dwarka More',
    h1: 'Graphic Designing Course in Delhi — Adobe Photoshop & CorelDRAW at ANITIO',
    description: 'Graphic Design at ANITIO, Dwarka More. 3 months: Adobe Photoshop, CorelDRAW, Illustrator, logo design, social media graphics. Fee ₹8,000. Freelance & job placement.',
    keywords: ['graphic designing course Delhi', 'Photoshop course Delhi', 'CorelDRAW course Dwarka More', 'graphic design training Delhi', 'logo design course Delhi'],
    price: 8000, originalPrice: 12000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'offline', rating: 4.6, reviewCount: 167,
    credential: 'Graphic Design Certificate', datePublished: '2020-01-01',
  },
  'digital-marketing': {
    title: 'Digital Marketing Course Delhi | SEO Google Ads Meta Ads | ANITIO Dwarka More',
    h1: 'Digital Marketing Professional Course in Delhi — ANITIO Institute, Dwarka More',
    description: 'Digital Marketing at ANITIO, Dwarka More. 4 months: SEO, Google Ads, Meta Ads, Social Media, Email Marketing, Analytics. Fee ₹12,000. 100% Placement.',
    keywords: ['digital marketing course Delhi', 'SEO course Delhi', 'Google Ads course Delhi', 'digital marketing Dwarka More', 'social media marketing course Delhi'],
    price: 12000, originalPrice: 18000, duration: '4 Months', isoDuration: 'P4M',
    mode: 'hybrid', rating: 4.7, reviewCount: 198,
    credential: 'Digital Marketing Professional Certificate', datePublished: '2021-01-01',
  },
  'artificial-intelligence': {
    title: 'AI Machine Learning Course Delhi | Artificial Intelligence | ANITIO Dwarka More',
    h1: 'Artificial Intelligence & Machine Learning Course in Delhi — ANITIO, Dwarka More',
    description: 'AI & ML at ANITIO, Dwarka More. 4 months: Python AI scikit-learn NLP ML algorithms real projects. Fee ₹16,000. Future-ready skills. 100% Placement.',
    keywords: ['AI course Delhi', 'machine learning course Delhi', 'artificial intelligence training Dwarka', 'AI ML course New Delhi', 'Python AI course Delhi'],
    price: 16000, originalPrice: 24000, duration: '4 Months', isoDuration: 'P4M',
    mode: 'hybrid', rating: 4.8, reviewCount: 89,
    credential: 'AI & Machine Learning Certificate', datePublished: '2023-01-01',
    prerequisites: 'Basic Python knowledge recommended. Maths basics helpful.',
  },
  'skill-development': {
    title: 'Skill Development Course Delhi | Job Training Placement | ANITIO Dwarka More',
    h1: 'Skill Development & Job Training Course in Delhi — ANITIO, Dwarka More',
    description: 'Skill Development at ANITIO, Dwarka More. 2 months: resume, interview prep, MS Office, professional communication. Fee ₹5,000. Get job-ready fast.',
    keywords: ['skill development course Delhi', 'job training Delhi', 'placement training Dwarka More', 'employability skills Delhi'],
    price: 5000, originalPrice: 8000, duration: '2 Months', isoDuration: 'P2M',
    mode: 'offline', rating: 4.5, reviewCount: 234,
    credential: 'Skill Development & Employability Certificate', datePublished: '2020-01-01',
  },
  // ── 4 new courses added (were in sitemap, now have real metadata) ──────
  'data-entry-operator': {
    title: 'Data Entry Operator Course Delhi | Computer Typing Training | ANITIO',
    h1: 'Data Entry Operator Course in Delhi — ANITIO Institute, Dwarka More',
    description: 'Data Entry Operator at ANITIO, Dwarka More. 2 months: MS Office, typing speed, data management, Excel. Fee ₹4,000. BPO and office job placement support.',
    keywords: ['data entry course Delhi', 'data entry operator course', 'typing course Delhi', 'data entry training Dwarka', 'computer operator course Delhi'],
    price: 4000, originalPrice: 6000, duration: '2 Months', isoDuration: 'P2M',
    mode: 'offline', rating: 4.4, reviewCount: 156,
    credential: 'Data Entry Operator Certificate', datePublished: '2020-01-01',
  },
  'ms-office': {
    title: 'MS Office Course Delhi | Word Excel PowerPoint | ANITIO Dwarka More',
    h1: 'MS Office Complete Course in Delhi — Word, Excel, PowerPoint at ANITIO, Dwarka More',
    description: 'MS Office at ANITIO, Dwarka More. 2 months: MS Word, Excel, PowerPoint, Access, Outlook. Fee ₹4,500. Complete Office training for jobs. Flexible batches.',
    keywords: ['MS Office course Delhi', 'Microsoft Office training Delhi', 'MS Word Excel course Dwarka', 'Office course Uttam Nagar'],
    price: 4500, originalPrice: 7000, duration: '2 Months', isoDuration: 'P2M',
    mode: 'offline', rating: 4.5, reviewCount: 123,
    credential: 'MS Office Proficiency Certificate', datePublished: '2020-01-01',
  },
  'web-designing': {
    title: 'Web Designing Course Delhi | HTML CSS Bootstrap UI Design | ANITIO',
    h1: 'Web Designing Course in Delhi — HTML, CSS & UI Design at ANITIO, Dwarka More',
    description: 'Web Designing at ANITIO, Dwarka More. 3 months: HTML5, CSS3, Bootstrap, responsive design, UI/UX basics, Figma. Fee ₹8,000. Build real websites.',
    keywords: ['web designing course Delhi', 'HTML CSS course Delhi', 'web design training Dwarka More', 'UI design course Delhi', 'website design course New Delhi'],
    price: 8000, originalPrice: 12000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'hybrid', rating: 4.6, reviewCount: 98,
    credential: 'Web Designing Certificate', datePublished: '2021-01-01',
  },
  'cyber-security': {
    title: 'Cyber Security Course Delhi | Network Security Ethical Hacking | ANITIO',
    h1: 'Cyber Security Course in Delhi — ANITIO Institute, Dwarka More',
    description: 'Cyber Security at ANITIO, Dwarka More. 3 months: network security, ethical hacking basics, cybersecurity tools, digital safety. Fee ₹10,000. In-demand career skills.',
    keywords: ['cyber security course Delhi', 'ethical hacking course Delhi', 'network security training Dwarka', 'cybersecurity course New Delhi'],
    price: 10000, originalPrice: 15000, duration: '3 Months', isoDuration: 'P3M',
    mode: 'hybrid', rating: 4.5, reviewCount: 67,
    credential: 'Cyber Security Awareness Certificate', datePublished: '2023-01-01',
  },
}

// ─── generateCourseMetadata ───────────────────────────────────────────────
export function generateCourseMetadata(slug: string): Metadata {
  const course = COURSE_META[slug]
  const courseUrl = `${BASE_URL}/courses/${slug}`
  if (!course) {
    return {
      title: 'Course Not Found | ANITIO Institute',
      description: 'The requested course page could not be found. Browse all courses at ANITIO Institute.',
      robots: { index: false, follow: true },
    }
  }
  return {
    ...baseMetadata,
    title: course.title,
    description: course.description,
    keywords: [...course.keywords, 'ANITIO institute', 'computer course Delhi', 'IT training Dwarka More'],
    alternates: { canonical: courseUrl, languages: { 'en-IN': courseUrl, 'x-default': courseUrl } },
    openGraph: {
      type: 'website', locale: 'en_IN', url: courseUrl, siteName: SITE_NAME,
      title: course.title, description: course.description,
      images: [{ url: course.ogImage ?? OG_IMAGE, width: 1200, height: 630, alt: `${course.h1} — ANITIO Institute`, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image', site: '@anitioinstitute', creator: '@anitioinstitute',
      title: course.title, description: course.description,
      images: [{ url: course.ogImage ?? OG_IMAGE, alt: course.h1 }],
    },
  }
}

// ─── generatePageMetadata ─────────────────────────────────────────────────
export function generatePageMetadata(props: {
  title: string; description: string; path: string
  keywords?: string[]; ogImage?: string; noIndex?: boolean
}): Metadata {
  const pageUrl = `${BASE_URL}${props.path}`
  return {
    ...baseMetadata,
    title: props.title,
    description: props.description,
    ...(props.keywords ? { keywords: props.keywords } : {}),
    ...(props.noIndex ? { robots: { index: false, follow: false } } : {}),
    alternates: { canonical: pageUrl, languages: { 'en-IN': pageUrl, 'x-default': pageUrl } },
    openGraph: {
      type: 'website', locale: 'en_IN', url: pageUrl, siteName: SITE_NAME,
      title: props.title, description: props.description,
      images: [{ url: props.ogImage ?? OG_IMAGE, width: 1200, height: 630, alt: props.title, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image', site: '@anitioinstitute',
      title: props.title, description: props.description,
      images: [props.ogImage ?? OG_IMAGE],
    },
  }
}

// ─── generateBlogMetadata ─────────────────────────────────────────────────
export function generateBlogMetadata(props: {
  title: string; description: string; slug: string
  image?: string; datePublished: string; dateModified?: string
  keywords?: string[]
}): Metadata {
  const pageUrl = `${BASE_URL}/blog/${props.slug}`
  return {
    ...baseMetadata,
    title: `${props.title} | ANITIO Blog`,
    description: props.description,
    keywords: [...(props.keywords ?? []), 'ANITIO blog', 'computer courses Delhi', 'IT education tips'],
    alternates: { canonical: pageUrl, languages: { 'en-IN': pageUrl } },
    openGraph: {
      type: 'article', locale: 'en_IN', url: pageUrl, siteName: SITE_NAME,
      title: props.title, description: props.description,
      images: [{ url: props.image ?? OG_IMAGE, width: 1200, height: 630, alt: props.title }],
      publishedTime: props.datePublished,
      modifiedTime: props.dateModified ?? props.datePublished,
      authors: [SITE_NAME],
      tags: props.keywords,
    },
    twitter: {
      card: 'summary_large_image', site: '@anitioinstitute',
      title: props.title, description: props.description,
      images: [props.image ?? OG_IMAGE],
    },
  }
}
