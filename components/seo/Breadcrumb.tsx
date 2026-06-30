/**
 * components/seo/Breadcrumb.tsx
 * FIX: Split from SEOComponents.tsx (which had duplicate 'import Link' causing build error)
 */

import Link from 'next/link'

export interface BreadcrumbItem { name: string; url: string }

export default function Breadcrumb({ items, className = '' }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.url} className="flex items-center gap-1" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              {isLast ? (
                <span className="text-gray-800 font-medium max-w-xs truncate" itemProp="name" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.url} itemProp="item" className="hover:text-blue-700 hover:underline transition-colors"><span itemProp="name">{item.name}</span></Link>
              )}
              <meta itemProp="position" content={(i + 1).toString()} />
              {!isLast && <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
