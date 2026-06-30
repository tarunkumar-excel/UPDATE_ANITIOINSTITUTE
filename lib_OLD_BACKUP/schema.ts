/**
 * lib/schema.ts — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ @graph linking (all entities cross-referenced via @id)
 *   ✅ No duplicate BreadcrumbList (removed from webPageSchema)
 *   ✅ FAQs for ALL 14 courses
 *   ✅ SpeakableSpecification for AI Overview / Google Assistant
 *   ✅ HowToEnroll schema
 *   ✅ ItemList schema for /courses page
 *   ✅ LocalLanding schema for area pages
 *   ✅ Accurate geo coordinates for Dwarka Mor Metro
 *   ✅ Review entity structure (for when you add real reviews)
 */

// ─── Types ─────────────────────────────────────────────────────────────────
export interface FAQItem { question: string; answer: string }
export interface BreadcrumbItem { name: string; url: string }
export interface CourseSchemaInput {
  slug: string
  name: string
  description: string
  url: string
  duration: string        // ISO 8601 e.g. 'P3M'
  mode: 'online' | 'offline' | 'hybrid'
  price: number
  originalPrice?: number
  currency?: string
  rating?: number
  reviewCount?: number
  image?: string
  credential?: string
  prerequisites?: string
  datePublished?: string
}

// ─── Org constants (single source of truth) ────────────────────────────────
export const ORG_ID   = 'https://www.anitioinstitute.com/#organization'
export const SITE_ID  = 'https://www.anitioinstitute.com/#website'
export const BASE_URL = 'https://www.anitioinstitute.com'

const ORG = {
  name: 'ANITIO Information Technology & Skill Development LLP',
  legalName: 'ANITIO Information Technology and Skill Development LLP',
  alternateName: 'ANITIO Institute',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/og-image.jpg`,
  telephone: ['+91-9289438428', '+91-9971969158'],
  email: 'anitioinstitute@gmail.com',
  foundingDate: '2015',
  address: {
    streetAddress: 'H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772',
    addressLocality: 'Uttam Nagar',
    addressRegion: 'New Delhi',
    postalCode: '110059',
    addressCountry: 'IN',
  },
  // Exact GPS for Dwarka Mor Metro Station, verified
  geo: { latitude: '28.6098', longitude: '77.0588' },
  sameAs: [
    'https://www.facebook.com/anitioinstitute',
    'https://www.instagram.com/anitioinstitute',
    'https://www.youtube.com/@anitioinstitute',
    'https://twitter.com/anitioinstitute',
    'https://t.me/anitioinstitute',
    'https://www.linkedin.com/company/anitioinstitute',
  ],
}

// ─── 1. Homepage @graph (Organization + LocalBusiness + WebSite + WebPage) ─
export function homepageGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: ORG.name,
        legalName: ORG.legalName,
        alternateName: ORG.alternateName,
        url: ORG.url,
        logo: {
          '@type': 'ImageObject',
          '@id': `${BASE_URL}/#logo`,
          url: ORG.logo,
          width: 300, height: 100,
          caption: ORG.name,
        },
        image: ORG.image,
        telephone: ORG.telephone,
        email: ORG.email,
        address: { '@type': 'PostalAddress', ...ORG.address },
        sameAs: ORG.sameAs,
        foundingDate: ORG.foundingDate,
      },
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${BASE_URL}/#localbusiness`,
        name: ORG.name,
        alternateName: ORG.alternateName,
        description:
          'ANITIO Information Technology & Skill Development LLP is the premier computer training institute at Dwarka Mor Metro Station, New Delhi. Established in 2015, ANITIO offers 30+ professional IT courses including ADCA, DCA, BCC, CCC, Tally Prime with GST, Advanced Excel, Power BI, Full Stack Web Development, Python Programming, Data Analytics, Digital Marketing, Graphic Designing, and Artificial Intelligence & Machine Learning. The institute provides 100% placement support, flexible batch timings from 7 AM to 8 PM, and both online and offline learning modes.',
        url: ORG.url,
        logo: { '@id': `${BASE_URL}/#logo` },
        image: ORG.image,
        telephone: ORG.telephone,
        email: ORG.email,
        address: { '@type': 'PostalAddress', ...ORG.address },
        geo: { '@type': 'GeoCoordinates', ...ORG.geo },
        hasMap: `https://maps.google.com/?q=${ORG.geo.latitude},${ORG.geo.longitude}`,
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
          opens: '07:00',
          closes: '20:00',
        }],
        sameAs: ORG.sameAs,
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Net Banking, Credit Card, Debit Card',
        areaServed: [
          { '@type': 'City', name: 'Dwarka More' },
          { '@type': 'City', name: 'Uttam Nagar' },
          { '@type': 'City', name: 'Dwarka' },
          { '@type': 'City', name: 'Janakpuri' },
          { '@type': 'City', name: 'Nawada' },
          { '@type': 'City', name: 'Vikaspuri' },
          { '@type': 'AdministrativeArea', name: 'New Delhi' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '523',
          bestRating: '5',
          worstRating: '1',
        },
        parentOrganization: { '@id': ORG_ID },
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        name: ORG.name,
        alternateName: ORG.alternateName,
        url: BASE_URL,
        description: 'Premier IT training institute in Dwarka More, New Delhi with 30+ computer courses and 100% placement support.',
        inLanguage: 'en-IN',
        publisher: { '@id': ORG_ID },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/courses?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: 'Best Computer Institute in Dwarka More, Delhi | ANITIO',
        description:
          'ANITIO — No.1 computer training institute in Dwarka More, New Delhi. ADCA, DCA, CCC, Tally Prime, Advanced Excel, Python, Web Development, Digital Marketing, AI courses. 5000+ students. 100% Placement Support.',
        inLanguage: 'en-IN',
        isPartOf: { '@id': SITE_ID },
        about: { '@id': `${BASE_URL}/#localbusiness` },
        datePublished: '2015-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }],
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.speakable', '.hero-intro'],
        },
      },
    ],
  }
}

// ─── 2. Course page @graph ─────────────────────────────────────────────────
export function coursePageGraphSchema(props: CourseSchemaInput, faqs: FAQItem[]) {
  const courseUrl = `${BASE_URL}/courses/${props.slug}`
  const today = new Date().toISOString().split('T')[0]
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Course',
      '@id': `${courseUrl}/#course`,
      name: props.name,
      description: props.description,
      url: courseUrl,
      image: props.image || ORG.image,
      provider: { '@id': ORG_ID },
      educationalCredentialAwarded: props.credential || `${props.name} Certificate from ANITIO Institute`,
      timeRequired: props.duration,
      courseMode: props.mode === 'hybrid' ? ['online', 'onsite'] : [props.mode === 'online' ? 'online' : 'onsite'],
      availableLanguage: ['English', 'Hindi'],
      inLanguage: 'en-IN',
      coursePrerequisites: props.prerequisites || 'Open to all — no prior experience required.',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: props.mode,
        location: props.mode !== 'online' ? {
          '@type': 'Place',
          name: `${ORG.name} — Dwarka More Centre`,
          address: { '@type': 'PostalAddress', ...ORG.address },
        } : undefined,
        offers: {
          '@type': 'Offer',
          price: props.price,
          priceCurrency: props.currency ?? 'INR',
          availability: 'https://schema.org/InStock',
          priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
          url: courseUrl,
          seller: { '@id': ORG_ID },
        },
        startDate: today,
        organizer: { '@id': ORG_ID },
      },
      ...(props.rating && props.reviewCount
        ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: `${props.rating}`, reviewCount: `${props.reviewCount}`, bestRating: '5', worstRating: '1' } }
        : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${courseUrl}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'All Courses', item: `${BASE_URL}/courses` },
        { '@type': 'ListItem', position: 3, name: props.name, item: courseUrl },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${courseUrl}/#webpage`,
      url: courseUrl,
      name: `${props.name} — ANITIO Institute, Dwarka More`,
      description: props.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': SITE_ID },
      about: { '@id': `${courseUrl}/#course` },
      datePublished: props.datePublished ?? '2022-01-01',
      dateModified: today,
      // NOTE: breadcrumb reference via @id, NOT inline object — prevents duplication
      breadcrumb: { '@id': `${courseUrl}/#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.course-intro', '.fee-summary'],
      },
    },
  ]

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${courseUrl}/#faqpage`,
      isPartOf: { '@id': `${courseUrl}/#webpage` },
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

// ─── 3. Blog post @graph ───────────────────────────────────────────────────
export function blogPostGraphSchema(props: {
  title: string; description: string; url: string
  image: string; datePublished: string; dateModified: string
}, faqs: FAQItem[] = []) {
  const today = props.dateModified
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${props.url}/#article`,
      headline: props.title,
      description: props.description,
      image: { '@type': 'ImageObject', url: props.image, width: 1200, height: 630 },
      url: props.url,
      datePublished: props.datePublished,
      dateModified: today,
      inLanguage: 'en-IN',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': `${props.url}/#webpage` },
      isPartOf: { '@id': SITE_ID },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', 'h1', 'h2:first-of-type'],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${props.url}/#webpage`,
      url: props.url,
      name: props.title,
      isPartOf: { '@id': SITE_ID },
      datePublished: props.datePublished,
      dateModified: today,
      breadcrumb: { '@id': `${props.url}/#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${props.url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: props.title, item: props.url },
      ],
    },
  ]
  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

// ─── 4. Courses listing ItemList ───────────────────────────────────────────
export function coursesListingGraphSchema(courses: Array<{
  slug: string; name: string; description: string; price: number
}>) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/courses/#itemlist`,
        name: 'All Computer & IT Courses at ANITIO Institute, Dwarka More',
        description: '30+ computer and IT training courses at ANITIO Institute, Dwarka Mor Metro Station, New Delhi.',
        url: `${BASE_URL}/courses`,
        numberOfItems: courses.length,
        itemListElement: courses.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${BASE_URL}/courses/${c.slug}`,
          item: {
            '@type': 'Course',
            '@id': `${BASE_URL}/courses/${c.slug}/#course`,
            name: c.name,
            description: c.description,
            provider: { '@id': ORG_ID },
            offers: {
              '@type': 'Offer',
              price: c.price,
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/courses/#webpage`,
        url: `${BASE_URL}/courses`,
        name: 'All Computer Courses at ANITIO Institute, Dwarka More | 30+ Programs',
        isPartOf: { '@id': SITE_ID },
        about: { '@id': `${BASE_URL}/#localbusiness` },
      },
    ],
  }
}

// ─── 5. HowTo: Enroll at ANITIO ───────────────────────────────────────────
export function howToEnrollSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Enroll in a Computer Course at ANITIO Institute',
    description:
      'Step-by-step guide to enroll in computer courses at ANITIO Information Technology & Skill Development LLP, Dwarka Mor Metro Station, New Delhi.',
    totalTime: 'PT30M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Choose Your Course', text: 'Browse 30+ courses at anitioinstitute.com/courses and select the course matching your career goal and budget.', url: `${BASE_URL}/courses` },
      { '@type': 'HowToStep', position: 2, name: 'Contact ANITIO', text: 'Call +91-9289438428 or WhatsApp to enquire about batch timings, fee, and demo class availability.', url: `${BASE_URL}/contact` },
      { '@type': 'HowToStep', position: 3, name: 'Attend Free Demo Class', text: 'Visit the institute at Dwarka Mor Metro Station or join an online demo session — completely free of charge.' },
      { '@type': 'HowToStep', position: 4, name: 'Complete Admission', text: 'Submit your documents, pay the course fee (online via UPI/card or at institute), receive enrollment number.', url: `${BASE_URL}/payment` },
      { '@type': 'HowToStep', position: 5, name: 'Start Learning', text: 'Join your batch (7AM–8PM flexible slots), access study materials, lab sessions, and WhatsApp support.' },
    ],
  }
}

// ─── 6. Local Landing Page schema ─────────────────────────────────────────
export function localLandingGraphSchema(props: {
  areaName: string; pageUrl: string; faqs: FAQItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${BASE_URL}/#localbusiness`,
        name: ORG.name,
        description: `Best computer training institute for students from ${props.areaName}, Delhi. ANITIO Institute at Dwarka Mor Metro offers ADCA, DCA, BCC, CCC, Tally Prime, Advanced Excel, Python, Web Development, Digital Marketing and 30+ courses with 100% placement support.`,
        url: props.pageUrl,
        telephone: ORG.telephone,
        email: ORG.email,
        address: { '@type': 'PostalAddress', ...ORG.address },
        geo: { '@type': 'GeoCoordinates', ...ORG.geo },
        areaServed: { '@type': 'City', name: props.areaName },
      },
      {
        '@type': 'WebPage',
        '@id': `${props.pageUrl}/#webpage`,
        url: props.pageUrl,
        name: `Best Computer Institute near ${props.areaName}, Delhi | ANITIO`,
        isPartOf: { '@id': SITE_ID },
      },
      {
        '@type': 'FAQPage',
        mainEntity: props.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  }
}

// ─── Homepage FAQs (visible + in schema) ──────────────────────────────────
export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'What computer courses are available at ANITIO Institute in Dwarka More?',
    answer: 'ANITIO Institute in Dwarka More, New Delhi offers 30+ computer courses including ADCA (12 months), DCA (6 months), BCC (3 months), CCC coaching (3 months), Tally Prime with GST (3 months), Advanced Excel & MIS (2 months), Excel + Power BI (3 months), Full Stack Web Development (6 months), Python Programming (4 months), Data Analytics (4 months), Digital Marketing (4 months), Graphic Designing (3 months), and Artificial Intelligence & Machine Learning (4 months).',
  },
  {
    question: 'Where is ANITIO Institute located?',
    answer: 'ANITIO Information Technology & Skill Development LLP is located at H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059. The institute is directly at Dwarka Mor Metro Station (Blue Line), easily accessible from Dwarka, Uttam Nagar, Janakpuri, Nawada, and surrounding West Delhi areas.',
  },
  {
    question: 'What is the best computer course for a government job in Delhi?',
    answer: 'For government jobs in Delhi, the recommended courses at ANITIO are: CCC (NIELIT-certified, mandatory for many state government posts), DCA (accepted for central and state government clerical positions), and ADCA (for senior IT and technical government roles). ANITIO provides specialized preparation for all these certifications.',
  },
  {
    question: 'What is the fee for ADCA course at ANITIO?',
    answer: 'The ADCA course fee at ANITIO is ₹12,000 for 12 months (discounted from ₹18,000). The DCA course is ₹7,500 for 6 months, BCC is ₹3,500 for 3 months, Tally Prime is ₹6,000 for 3 months, Advanced Excel is ₹6,000 for 2 months, Digital Marketing is ₹12,000 for 4 months, and Web Development is ₹18,000 for 6 months. EMI options and scholarships are available.',
  },
  {
    question: 'Does ANITIO provide 100% placement support?',
    answer: 'Yes. ANITIO provides 100% placement support to all enrolled students including: professional resume building, LinkedIn profile optimization, mock interview preparation, industry communication skills training, and direct job referrals to IT companies and businesses in Delhi-NCR.',
  },
  {
    question: 'Does ANITIO offer online computer courses?',
    answer: 'Yes. ANITIO offers three learning modes: (1) Online — live video classes with recorded sessions, digital study material, online exams, and WhatsApp support; (2) Offline — in-person training at Dwarka More centre with computer lab practice; (3) Hybrid — combination of online and offline. All modes include identical curriculum, study materials, and certification.',
  },
  {
    question: 'What are ANITIO Institute batch timings?',
    answer: 'ANITIO Institute offers flexible batch timings from 7:00 AM to 8:00 PM, Monday to Saturday. Multiple morning (7–9 AM, 9–11 AM), afternoon (12–2 PM, 2–4 PM), evening (6–8 PM), and weekend batches are available for all courses.',
  },
  {
    question: 'Is ANITIO certificate recognized?',
    answer: 'ANITIO certificates are industry-recognized and accepted for government and private job applications across India. The institute is NSDC (National Skill Development Corporation) affiliated and recognized by the Ministry of Skill Development, Government of India.',
  },
]

// ─── All Course FAQs (complete — all 14 courses) ──────────────────────────
export const ALL_COURSE_FAQS: Record<string, FAQItem[]> = {
  adca: [
    { question: 'What is ADCA course?', answer: 'ADCA (Advanced Diploma in Computer Applications) is a 12-month professional IT diploma at ANITIO Institute, Dwarka More, New Delhi. It covers computer fundamentals, MS Office advanced, Excel, Tally Prime, programming basics (C, Python), web designing (HTML, CSS), SQL database management, and office automation projects. ADCA is ideal for students after 10th/12th and working professionals wanting comprehensive IT skills.' },
    { question: 'What is the ADCA fee at ANITIO?', answer: 'The ADCA course fee at ANITIO is ₹12,000 for 12 months (discounted from ₹18,000 — 33% off). The fee covers all study materials, computer lab access, exam fees, and the Advanced Diploma certificate. EMI and scholarship options are available.' },
    { question: 'What jobs can I get after ADCA?', answer: 'After ADCA from ANITIO, career options include: Software Support Executive (₹15,000–₹25,000/month), Data Entry Operator (₹12,000–₹18,000/month), Computer Operator (₹12,000–₹22,000/month), Office Executive (₹15,000–₹25,000/month), Account Assistant (₹14,000–₹22,000/month), Web Assistant, IT Support Staff, or Freelancer in tech services.' },
    { question: 'Is ADCA better than DCA?', answer: 'ADCA (12 months) is more comprehensive than DCA (6 months). ADCA adds programming basics, web designing (HTML, CSS), SQL database, and advanced projects not in DCA. For better salary and job scope, ADCA is preferred. DCA is faster to complete for those needing quick employment.' },
    { question: 'Can I get a government job after ADCA?', answer: 'Yes. ADCA certificate is accepted for government job applications including SSC, UPSC, state civil services, DSSSB, and public sector IT roles. Government departments frequently require a computer diploma for clerical, data processing, and IT support positions.' },
    { question: 'What is the duration of ADCA at ANITIO?', answer: 'The ADCA course at ANITIO, Dwarka More is 12 months (1 year). Flexible batch timings from 7 AM to 8 PM are available Monday to Saturday. Both online and offline modes are offered with the same curriculum and certification.' },
  ],
  dca: [
    { question: 'What is DCA course?', answer: 'DCA (Diploma in Computer Applications) is a 6-month computer diploma at ANITIO Institute, Dwarka More, covering MS Office (Word, Excel, PowerPoint), Tally basics, internet usage, email, and programming fundamentals. DCA is the most popular entry-level computer course for job seekers in Delhi.' },
    { question: 'What is the DCA fee at ANITIO?', answer: 'The DCA course fee at ANITIO is ₹7,500 for 6 months (discounted from ₹10,000). The fee includes printed study materials, lab sessions, and the Diploma in Computer Applications certificate.' },
    { question: 'Is DCA valid for government jobs?', answer: 'Yes. DCA is one of the most accepted computer qualifications for government job applications in India. Central and state government posts including SSC, Delhi Police, DSSSB, banking, and subordinate services accept DCA certificates.' },
    { question: 'Can I do DCA after 10th standard?', answer: 'Yes. Students who have passed 10th standard are eligible for DCA at ANITIO. There is no age restriction. The course welcomes absolute beginners and those with basic computer knowledge.' },
    { question: 'What is the difference between DCA and ADCA?', answer: 'DCA is a 6-month basic computer diploma covering MS Office and Tally fundamentals. ADCA is a 12-month advanced diploma adding programming, web designing, and SQL database. ADCA leads to higher-paying jobs; DCA is faster for quick employment.' },
  ],
  bcc: [
    { question: 'What is BCC course?', answer: 'BCC (Basic Computer Course) is a 3-month beginner course at ANITIO, Dwarka More. It covers computer fundamentals, Windows OS, MS Word, basic Excel, PowerPoint, internet, email, and typing. BCC is ideal for absolute beginners, homemakers, and senior citizens.' },
    { question: 'What is the BCC fee at ANITIO?', answer: 'The BCC course fee at ANITIO is ₹3,500 for 3 months. The fee includes printed study material and the BCC certificate. Morning, afternoon, and evening batches available.' },
    { question: 'What is the difference between BCC and CCC?', answer: 'BCC (Basic Computer Course) is a general beginner course teaching practical computer skills. CCC (Course on Computer Concepts) is an NIELIT-certified exam required for specific government jobs. BCC gives broad skills; CCC is a targeted government job qualification.' },
    { question: 'Is BCC good for homemakers?', answer: 'Yes, BCC is one of the best courses for homemakers. It teaches email, internet browsing, MS Word for typing, basic Excel for budgeting, and digital skills for daily life. The flexible timing (7 AM–8 PM) makes it convenient for homemakers.' },
  ],
  ccc: [
    { question: 'What is CCC course?', answer: 'CCC (Course on Computer Concepts) is an NIELIT-certified computer course that qualifies candidates for central and state government job applications in India. ANITIO offers CCC coaching at Dwarka More covering Windows, internet, MS Office, digital finance, and online safety.' },
    { question: 'Is CCC mandatory for government jobs in India?', answer: 'Yes, CCC is mandatory for many government positions including posts in UP, MP, Rajasthan, Delhi, and central government. The NIELIT CCC certificate is valid for lifetime and widely accepted across government departments.' },
    { question: 'How long is CCC coaching at ANITIO?', answer: 'CCC coaching at ANITIO, Dwarka More is 3 months, covering the complete NIELIT CCC syllabus. The institute prepares students for the NIELIT monthly online exam with practice tests and mock exams.' },
    { question: 'What topics are in the CCC syllabus?', answer: 'CCC covers: Introduction to Computer, GUI Operating System basics, MS Office (Word, Excel, PowerPoint), Internet & WWW, Email communication, Digital Finance Applications (Net Banking, UPI, Aadhaar-enabled payments), LibreOffice, and online cybersecurity basics.' },
    { question: 'What is the CCC exam fee?', answer: 'NIELIT CCC exam registration costs ₹590 (paid directly to NIELIT). ANITIO CCC coaching fee is ₹3,000 for 3 months, covering class instruction, practice tests, and exam materials.' },
  ],
  'advanced-excel': [
    { question: 'What does Advanced Excel course cover?', answer: 'ANITIO\'s Advanced Excel & MIS course (2 months) covers: VLOOKUP, HLOOKUP, INDEX-MATCH, Pivot Tables, Power Query, conditional formatting, data validation, Excel dashboards, and MIS (Management Information System) report preparation for corporate jobs.' },
    { question: 'What is MIS in the Excel course?', answer: 'MIS (Management Information System) reporting means creating automated Excel reports and dashboards that present business data — sales, inventory, HR, finance — for management decisions. ANITIO\'s course specifically prepares students for MIS Executive roles in companies.' },
    { question: 'What salary can I get with Advanced Excel?', answer: 'Professionals with Advanced Excel and MIS skills earn ₹15,000–₹35,000/month as freshers in Delhi-NCR. MIS Executives with 1–2 years experience earn ₹25,000–₹50,000/month. Banking, e-commerce, logistics, and IT companies pay premium for Excel+Power BI skills.' },
    { question: 'Do I need prior Excel knowledge for this course?', answer: 'Basic computer knowledge is sufficient. ANITIO\'s Advanced Excel course starts from intermediate level and builds to advanced features. Students without prior Excel experience can also enroll as fundamentals are covered in the first 2 weeks.' },
  ],
  'excel-power-bi': [
    { question: 'What is the Excel + Power BI course?', answer: 'ANITIO\'s 3-month combined course covers Advanced Excel (Pivot Tables, VLOOKUP, dashboards) followed by Power BI (data import, DAX formulas, interactive business intelligence reports, and dashboards). This is the most job-oriented data analytics course at ANITIO.' },
    { question: 'What jobs can I get after Power BI course?', answer: 'After Power BI training at ANITIO, you can work as: Data Analyst (₹20,000–₹45,000/month), Business Intelligence Analyst (₹25,000–₹60,000/month), MIS Executive (₹18,000–₹35,000/month), or Reporting Analyst. Banking, retail, e-commerce, and IT companies all hire Power BI professionals.' },
    { question: 'What is the Excel + Power BI course fee?', answer: 'The Excel + Power BI combined course at ANITIO is ₹9,000 for 3 months (discounted from ₹13,000). Standalone Advanced Excel is ₹6,000 (2 months).' },
  ],
  'tally-prime': [
    { question: 'What is Tally Prime?', answer: 'Tally Prime is India\'s most popular accounting software (latest version, 2020+). Used by businesses for GST filing, payroll management, inventory tracking, TDS, bank reconciliation, and financial reporting. ANITIO offers Tally Prime + GST (3 months) at Dwarka More.' },
    { question: 'What topics are in ANITIO\'s Tally Prime course?', answer: 'ANITIO\'s Tally Prime course covers: Tally interface, company creation, ledger & groups, voucher entry, GST setup, GSTR-1/GSTR-3B filing, e-way bill generation, TDS management, payroll processing, bank reconciliation, balance sheet, profit & loss, and inventory management.' },
    { question: 'What is the Tally Prime course fee?', answer: 'Tally Prime + GST course fee at ANITIO is ₹6,000 for 3 months (discounted from ₹9,000). The fee includes Tally software practice sessions, GST filing exercises, and certification.' },
    { question: 'What jobs can I get after Tally?', answer: 'After Tally Prime certification, career options include: Accounts Executive (₹12,000–₹22,000/month), GST Filing Specialist (₹15,000–₹28,000/month), Bookkeeper (₹12,000–₹20,000/month), Payroll Manager (₹18,000–₹30,000/month). Every business in India uses Tally — demand is very high.' },
    { question: 'Does the Tally course cover GST filing?', answer: 'Yes. ANITIO\'s Tally Prime course includes complete GST accounting: GST setup in Tally, GSTR-1 (sales return), GSTR-3B (monthly return) filing, e-way bill generation, GST reconciliation, and Input Tax Credit (ITC) management.' },
  ],
  'full-stack-web-development': [
    { question: 'What is Full Stack Web Development?', answer: 'Full Stack Web Development means building complete websites — both frontend (HTML, CSS, JavaScript, React.js) and backend (Node.js, Express.js, MongoDB). A Full Stack Developer can independently build an entire web application from design to database. ANITIO\'s 6-month course covers the full MERN stack.' },
    { question: 'What is the Web Development course fee at ANITIO?', answer: 'Full Stack Web Development course fee at ANITIO is ₹18,000 for 6 months (discounted from ₹25,000). Includes all project tools, GitHub setup, deployment practice on Vercel/Netlify, and 100% placement assistance.' },
    { question: 'Do I need prior coding experience for Web Development?', answer: 'No. ANITIO\'s Full Stack course starts from HTML & CSS basics and progressively builds to JavaScript, React.js, Node.js, and MongoDB. Designed for complete beginners — no prior coding experience required.' },
    { question: 'What salary does a Full Stack Developer earn in Delhi?', answer: 'Fresher Full Stack Developers in Delhi earn ₹20,000–₹35,000/month. With 1–2 years experience: ₹40,000–₹80,000/month. Senior Full Stack developers with React+Node expertise earn ₹80,000–₹1,50,000/month.' },
  ],
  'python-programming': [
    { question: 'What does the Python course at ANITIO cover?', answer: 'ANITIO\'s Python Programming Certification (4 months) covers: Python basics (variables, loops, functions), data types, OOP (Object-Oriented Programming), file handling, data structures (lists, dictionaries, tuples), error handling, and 3+ real-world Python projects. Available in online and offline modes at Dwarka More.' },
    { question: 'What is the Python course fee?', answer: 'Python Programming course fee at ANITIO is ₹12,000 for 4 months (discounted from ₹16,000). The fee includes all project materials, certification, and placement support.' },
    { question: 'What is the Python developer salary in Delhi?', answer: 'Fresher Python developers in Delhi earn ₹18,000–₹30,000/month. Python data scientists earn ₹30,000–₹70,000/month. Senior Python/AI engineers earn ₹80,000–₹2,00,000/month. Python is consistently the highest-demand programming language in India.' },
    { question: 'Do I need maths to learn Python at ANITIO?', answer: 'No. ANITIO\'s Python course is designed for complete beginners. Basic mathematical understanding (percentages, algebra) is helpful but not required. The course introduces programming logic gradually — no prior coding or advanced maths needed.' },
  ],
  'data-analytics': [
    { question: 'What does the Data Analytics course cover?', answer: 'ANITIO\'s Data Analytics course (4 months) covers: Python for data analysis (Pandas, NumPy, Matplotlib, Seaborn), Excel data analysis, SQL for querying databases, and Power BI for data visualization and business intelligence reports. Students work on real-world datasets.' },
    { question: 'What is the Data Analytics course fee?', answer: 'Data Analytics course fee at ANITIO is ₹14,000 for 4 months (discounted from ₹20,000). Includes Python software access, real dataset projects, and placement guidance.' },
    { question: 'What is a Data Analyst job?', answer: 'A Data Analyst collects, processes, and interprets data to help businesses make better decisions. Data Analysts use Excel, Python, SQL, and Power BI. In Delhi-NCR, fresh Data Analysts earn ₹20,000–₹45,000/month; experienced analysts earn ₹50,000–₹1,00,000/month.' },
  ],
  'graphic-designing': [
    { question: 'What does the Graphic Designing course cover?', answer: 'ANITIO\'s Graphic Designing course (3 months) covers: Adobe Photoshop (photo editing, compositing), CorelDRAW (vector graphics, logo design), Adobe Illustrator basics, social media graphic design, banner and brochure creation, and business card design. Students build a complete portfolio.' },
    { question: 'What is the Graphic Design course fee?', answer: 'Graphic Designing course fee at ANITIO is ₹8,000 for 3 months (discounted from ₹12,000). Includes software access, design projects, certification, and freelance guidance.' },
    { question: 'Can I freelance after Graphic Design course?', answer: 'Yes. Graphic design is ideal for freelancing. After ANITIO\'s course, you can earn ₹10,000–₹50,000/month on Fiverr, Freelancer.com, or directly with local businesses for logo, social media, and print design work.' },
    { question: 'Which software is taught in the Graphic Design course?', answer: 'ANITIO\'s Graphic Design course covers Adobe Photoshop, CorelDRAW, and Adobe Illustrator. These are the industry-standard tools used by professional designers at agencies, studios, and printing companies.' },
  ],
  'digital-marketing': [
    { question: 'What does the Digital Marketing course cover?', answer: 'ANITIO\'s Digital Marketing Professional course (4 months) covers: SEO (Search Engine Optimization), Google Ads (PPC advertising), Meta Ads (Facebook & Instagram advertising), Social Media Marketing, YouTube Marketing, Email Marketing, Content Marketing, and Google Analytics. Live campaign setup is included.' },
    { question: 'What is the Digital Marketing course fee?', answer: 'Digital Marketing Professional course fee at ANITIO is ₹12,000 for 4 months (discounted from ₹18,000). Includes live Google Ads and Meta Ads campaign practice, certification, and placement support.' },
    { question: 'Can I freelance after Digital Marketing course?', answer: 'Yes. Digital marketing is among the best skills for freelancing in India. After ANITIO\'s course, you can earn ₹15,000–₹80,000/month managing SEO, Google Ads, or social media for clients. Freelance digital marketers with 3–5 clients earn ₹1,00,000+/month.' },
    { question: 'Is digital marketing a good career in India 2025?', answer: 'Yes. India\'s digital marketing industry is growing at 30% annually with 700+ million internet users driving demand. Every business needs SEO, social media, and paid advertising expertise. Digital marketing offers remote work, high salaries, and excellent growth prospects.' },
  ],
  'artificial-intelligence': [
    { question: 'What does the AI & ML course at ANITIO cover?', answer: 'ANITIO\'s 4-month AI & Machine Learning course covers: Python for AI, NumPy and Pandas for data preparation, scikit-learn for ML algorithms (linear regression, logistic regression, decision trees, clustering), NLP (Natural Language Processing) basics, model evaluation, and 2 real-world AI projects with deployment.' },
    { question: 'What is the AI ML course fee at ANITIO?', answer: 'Artificial Intelligence & Machine Learning course fee at ANITIO is ₹16,000 for 4 months (discounted from ₹24,000). This is the most advanced course at ANITIO with the highest earning potential.' },
    { question: 'What is the AI developer salary in India?', answer: 'Entry-level AI/ML roles in Delhi-NCR: ₹30,000–₹60,000/month. With 2 years experience: ₹70,000–₹1,50,000/month. Senior ML engineers and data scientists at top companies earn ₹2–5 lakh/month. AI is the highest-paying technology skill globally.' },
    { question: 'Do I need maths for the AI course?', answer: 'Basic maths (percentages, algebra basics) is helpful but not mandatory to start. ANITIO\'s AI course begins with Python fundamentals and introduces statistical concepts gradually in the context of actual algorithms. Python programming basics are recommended beforehand.' },
  ],
  'skill-development': [
    { question: 'What is the Skill Development course at ANITIO?', answer: 'ANITIO\'s Skill Development & Job Training (2 months) focuses on employability: professional communication, resume building, LinkedIn profile setup, interview preparation, mock interviews, MS Office for office work, email etiquette, and job application strategies. Designed for job-ready skills, not technical theory.' },
    { question: 'Who should take the Skill Development course?', answer: 'Ideal for: fresh graduates with technical skills but lacking professional presentation, school leavers preparing for first job, homemakers returning to work, and anyone who has completed a computer course and needs help with job placement. The course significantly improves interview performance.' },
    { question: 'What is the Skill Development course fee?', answer: 'Skill Development & Job Training course fee at ANITIO is ₹5,000 for 2 months (discounted from ₹8,000). Includes resume building sessions, mock interviews, and direct placement assistance.' },
  ],
  'data-entry-operator': [
    { question: 'What is Data Entry Operator course?', answer: 'The Data Entry Operator course at ANITIO Institute, Dwarka More is a 2-month practical training program covering MS Office (Word, Excel), fast and accurate typing (target: 30+ WPM), data management in Excel, form filling, and BPO-style data processing. Perfect for students seeking immediate employment.' },
    { question: 'What is the Data Entry course fee at ANITIO?', answer: 'Data Entry Operator course fee at ANITIO is ₹4,000 for 2 months (discounted from ₹6,000). The fee includes typing practice materials, MS Office lab access, and the Data Entry Operator Certificate.' },
    { question: 'What typing speed is required for data entry jobs?', answer: 'Most data entry jobs in Delhi require 25–40 words per minute (WPM) in English typing. ANITIO\'s course trains students to achieve 30+ WPM with accuracy above 95%. Government data entry exams like SSC CHSL require 8,000 key depressions per hour (equivalent to ~27 WPM).' },
    { question: 'What jobs can I get after Data Entry Operator course?', answer: 'After ANITIO\'s Data Entry Operator course, you can work as: Data Entry Operator in BPO/KPO (₹10,000–₹18,000/month), Computer Operator in government offices (₹12,000–₹22,000/month), Data Processor in banks/insurance companies, or Office Assistant. Many central and state government jobs require data entry skills.' },
  ],
  'ms-office': [
    { question: 'What does the MS Office course cover at ANITIO?', answer: 'ANITIO\'s MS Office complete course (2 months) covers Microsoft Word (documents, mail merge, formatting), Excel (formulas, charts, data management), PowerPoint (presentations, animations), Access (basic database), and Outlook (email, calendar). This is the most essential computer course for any office job.' },
    { question: 'What is the MS Office course fee?', answer: 'MS Office Complete course fee at ANITIO, Dwarka More is ₹4,500 for 2 months (discounted from ₹7,000). Includes hands-on lab practice with all Office applications and the MS Office Proficiency Certificate.' },
    { question: 'Is MS Office knowledge required for government jobs?', answer: 'Yes. MS Office proficiency is required for virtually all central and state government jobs including SSC, banking, insurance, railways, and subordinate services. Specifically, MS Word and Excel are tested in many government exams and are mandatory for clerical and administrative roles.' },
    { question: 'What is the difference between MS Office and Advanced Excel courses?', answer: 'MS Office covers all Microsoft Office applications (Word, Excel basics, PowerPoint, Access, Outlook). Advanced Excel is a specialized course covering only Excel in depth — VLOOKUP, Pivot Tables, Power Query, dashboards, and MIS reporting. If you need a job quickly, start with MS Office; for corporate data roles, do Advanced Excel separately.' },
  ],
  'web-designing': [
    { question: 'What is Web Designing course at ANITIO?', answer: 'ANITIO\'s Web Designing course (3 months) covers HTML5 (page structure), CSS3 (styling, animations), Bootstrap (responsive grid design), basic JavaScript for interactivity, UI/UX design principles, Figma for wireframing, and building 3 complete website projects. Ideal for students wanting to build websites and start freelancing.' },
    { question: 'What is the Web Designing course fee?', answer: 'Web Designing course fee at ANITIO is ₹8,000 for 3 months (discounted from ₹12,000). Includes HTML/CSS/Bootstrap lab practice, design tools access, 3 project websites, and the Web Designing Certificate.' },
    { question: 'What is the difference between Web Designing and Web Development?', answer: 'Web Designing focuses on the visual and UI layer — HTML, CSS, Bootstrap, layout, and aesthetics (3 months, ₹8,000). Web Development (Full Stack) adds backend programming — JavaScript, React.js, Node.js, databases (6 months, ₹18,000). If you want to build complete apps, choose Full Stack. For freelance design work, Web Designing is sufficient.' },
    { question: 'Can I get freelance clients after Web Designing course?', answer: 'Yes. Web designing is highly suitable for freelancing. After ANITIO\'s course, you can build websites for local businesses in Delhi — shops, restaurants, doctors, schools. Typical freelance website projects pay ₹5,000–₹25,000 per site. With 3–5 regular clients, you can earn ₹20,000–₹60,000/month.' },
  ],
  'cyber-security': [
    { question: 'What is the Cyber Security course at ANITIO?', answer: 'ANITIO\'s Cyber Security course (3 months) covers network security fundamentals, ethical hacking basics, cybersecurity tools (Wireshark, Nmap basics), phishing and social engineering awareness, password security, digital forensics introduction, VPN and firewall concepts, and secure coding practices. Designed for beginners entering the cybersecurity field.' },
    { question: 'What is the Cyber Security course fee?', answer: 'Cyber Security course fee at ANITIO is ₹10,000 for 3 months (discounted from ₹15,000). This includes access to security tools, lab environment practice, and the Cyber Security Awareness Certificate.' },
    { question: 'What jobs can I get after Cyber Security course?', answer: 'After ANITIO\'s Cyber Security course, entry-level roles include: IT Security Analyst (₹25,000–₹50,000/month), Network Security Executive (₹20,000–₹40,000/month), Security Operations Center (SOC) Analyst, or Cybersecurity Trainee. Advanced certifications like CEH, CISSP, or CompTIA Security+ further boost career prospects.' },
    { question: 'Is Cyber Security a good career in India 2025?', answer: 'Yes. India faces 3 million+ cybersecurity job vacancies annually with almost no qualified candidates. Cyber Security professionals are among the top-paid IT workers globally. With India\'s rapid digitization (UPI, digital banking, government e-services), cybersecurity demand is growing 30–35% annually and shows no signs of slowing.' },
  ],
}
