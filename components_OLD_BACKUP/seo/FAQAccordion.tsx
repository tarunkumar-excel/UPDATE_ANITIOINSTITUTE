'use client'
/**
 * components/seo/FAQAccordion.tsx — CLIENT COMPONENT (UX enhancement only)
 *
 * This adds interactive accordion behavior for users.
 * For SEO, always use FAQStatic above this — the static version
 * is what Googlebot reads. This client component enhances UX.
 *
 * Pattern: Use FAQStatic for SEO + wrap with FAQAccordion for UX.
 * Or use just FAQStatic if you prefer the always-visible layout.
 */

import { useState } from 'react'
export interface FAQItem { question: string; answer: string }

export function FAQAccordion({ faqs, title, className = '' }: { faqs: FAQItem[]; title?: string; className?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  if (faqs.length === 0) return null
  return (
    <div className={className}>
      {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={open === i}
              aria-controls={`faq-acc-${i}`}
            >
              <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.question}</span>
              <svg className={`w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id={`faq-acc-${i}`} role="region" hidden={open !== i} className="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
