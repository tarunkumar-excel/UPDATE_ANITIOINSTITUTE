/**
 * components/seo/FAQStatic.tsx  — SERVER COMPONENT (no 'use client')
 *
 * FIX: v1 FAQSection was 'use client' — Googlebot never saw FAQ answers
 * in the initial HTML response, making FAQ schema unverifiable.
 *
 * This component renders FAQ as plain visible HTML.
 * Googlebot reads every question and answer on first crawl.
 * Use this on all course pages and homepage.
 *
 * For interactive accordion (user UX), wrap with FAQAccordion client component.
 */

export interface FAQItem { question: string; answer: string }

interface FAQStaticProps {
  faqs: FAQItem[]
  title?: string
  titleId?: string
  className?: string
}

// SERVER component — renders synchronously, no JavaScript needed
export function FAQStatic({ faqs, title, titleId = 'faq-heading', className = '' }: FAQStaticProps) {
  if (faqs.length === 0) return null
  return (
    <section aria-labelledby={titleId} className={className} itemScope itemType="https://schema.org/FAQPage">
      {title && (
        <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="font-semibold text-gray-900 px-6 py-4 bg-gray-50 text-sm" itemProp="name">{faq.question}</h3>
            <div className="px-6 py-4 text-gray-700 text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
