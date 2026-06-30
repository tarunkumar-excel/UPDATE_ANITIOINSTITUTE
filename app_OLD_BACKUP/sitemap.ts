/**
 * app/sitemap.ts — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Course slugs derived from COURSE_META (no phantom 404 URLs)
 *   ✅ Blog slugs only for PUBLISHED posts (empty array = no 404s)
 *   ✅ Local landing pages added (/computer-institute-dwarka-more etc.)
 *   ✅ lastModified uses real dates per page type
 */

import { MetadataRoute } from 'next'
import { COURSE_META } from '@/lib/metadata'

const BASE = 'https://www.anitioinstitute.com'
const NOW  = new Date()

// ─── Derive course slugs from COURSE_META — zero phantom 404s ─────────────
// COURSE_META has exactly 18 slugs, all with real pages.
const COURSE_SLUGS = Object.keys(COURSE_META)

// ─── Blog slugs: ONLY add when the page is actually published ─────────────
// Start empty. After publishing each blog post, add its slug here.
// NEVER add a slug before the page exists — it causes GSC Coverage errors.
export const PUBLISHED_BLOG_SLUGS: string[] = [
  // Uncomment each line AFTER you publish the corresponding blog post:
  // 'adca-vs-dca-which-is-better',
  // 'best-computer-courses-after-12th-delhi',
  // 'computer-courses-dwarka-more-delhi',
  // 'government-jobs-after-ccc-dca-course',
  // 'tally-prime-career-guide-2025',
]

// ─── Local landing page areas ─────────────────────────────────────────────
const LOCAL_AREAS = ['dwarka-more', 'uttam-nagar', 'dwarka', 'nawada', 'janakpuri']

// ─── Static pages ─────────────────────────────────────────────────────────
const STATIC: Array<{
  url: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']
}> = [
  { url: '/',          priority: 1.0, changeFrequency: 'weekly' },
  { url: '/courses',   priority: 0.95, changeFrequency: 'weekly' },
  { url: '/about',     priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/contact',   priority: 0.85, changeFrequency: 'monthly' },
  { url: '/franchise', priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/results',   priority: 0.7,  changeFrequency: 'weekly' },
  { url: '/exam',      priority: 0.65, changeFrequency: 'weekly' },
  { url: '/payment',   priority: 0.6,  changeFrequency: 'monthly' },
  { url: '/schedule',  priority: 0.7,  changeFrequency: 'weekly' },
  { url: '/blog',      priority: 0.85, changeFrequency: 'weekly' },
  { url: '/privacy',   priority: 0.2,  changeFrequency: 'yearly' },
  { url: '/terms',     priority: 0.2,  changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC.map(p => ({
    url: `${BASE}${p.url}`,
    lastModified: NOW,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const courseEntries = COURSE_SLUGS.map(slug => ({
    url: `${BASE}/courses/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogEntries = PUBLISHED_BLOG_SLUGS.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const localEntries = LOCAL_AREAS.map(area => ({
    url: `${BASE}/computer-institute-${area}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.82,
  }))

  return [...staticEntries, ...courseEntries, ...blogEntries, ...localEntries]
}
