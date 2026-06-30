/**
 * components/seo/RelatedCourses.tsx
 * FIX: Split from SEOComponents.tsx (which had duplicate import Link)
 * Internal linking component — ensures every course page links to related courses
 */

import Link from 'next/link'

interface Course { slug: string; name: string; duration?: string; price?: number }

export function RelatedCourses({ courses, title = 'Related Courses at ANITIO' }: { courses: Course[]; title?: string }) {
  if (!courses.length) return null
  return (
    <section aria-labelledby="related-heading" className="py-10">
      <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(c => (
          <li key={c.slug}>
            <Link href={`/courses/${c.slug}`} className="block p-4 border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group h-full" title={`${c.name} at ANITIO Institute, Dwarka More`}>
              <span className="font-semibold text-blue-700 group-hover:text-blue-800 block mb-1 text-sm">{c.name}</span>
              {c.duration && <span className="text-xs text-gray-500">Duration: {c.duration}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
