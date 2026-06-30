/**
 * app/robots.ts — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Removed invalid '/*.json$' (regex $ anchor not valid in robots.txt)
 *   ✅ Added PerplexityBot allow (drives AI citation traffic)
 *   ✅ Added AhrefsBot/SemrushBot blocks (save crawl budget)
 *   ✅ Corrected wildcard usage for query strings
 */

import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.anitioinstitute.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow all except private/dynamic pages ──────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/exam/attempt/',
          '/student/',
          '/payment/processing/',
          '/payment/callback/',
        ],
      },
      // ── Googlebot: explicit allow, same restrictions ──────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/exam/attempt/',
          '/student/',
          '/payment/processing/',
          '/payment/callback/',
        ],
      },
      // ── Googlebot-Image: full access for image indexing ───────────────
      { userAgent: 'Googlebot-Image', allow: '/' },
      // ── Bingbot ───────────────────────────────────────────────────────
      { userAgent: 'Bingbot', allow: '/', disallow: ['/api/', '/admin/'] },
      // ── PerplexityBot: allow — drives AI citation & referral traffic ──
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/api/', '/admin/'] },
      // ── DuckDuckBot ───────────────────────────────────────────────────
      { userAgent: 'DuckDuckBot', allow: '/', disallow: ['/api/', '/admin/'] },
      // ── Block crawl-budget wasters (SEO audit bots) ───────────────────
      { userAgent: 'AhrefsBot', disallow: ['/'] },
      { userAgent: 'SemrushBot', disallow: ['/'] },
      { userAgent: 'MJ12bot',   disallow: ['/'] },
      { userAgent: 'DotBot',    disallow: ['/'] },
      { userAgent: 'SurveyBot', disallow: ['/'] },
      { userAgent: 'BLEXBot',   disallow: ['/'] },
      // ── AI training scrapers: block ────────────────────────────────────
      { userAgent: 'GPTBot',        disallow: ['/'] },
      { userAgent: 'CCBot',         disallow: ['/'] },
      { userAgent: 'anthropic-ai',  disallow: ['/'] },
      { userAgent: 'Claude-Web',    disallow: ['/'] },
      { userAgent: 'cohere-ai',     disallow: ['/'] },
      { userAgent: 'Applebot-Extended', disallow: ['/'] },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
