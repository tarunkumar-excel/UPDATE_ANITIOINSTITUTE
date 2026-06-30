// middleware.ts
// Fixes underscore course slugs → hyphen slugs (SEO critical)
// Also handles legacy URLs and enforces www. and https://
// Place this at: middleware.ts (project root, same level as app/)

import { NextRequest, NextResponse } from 'next/server'

// ─── Slug Redirect Map ────────────────────────────────────────────────────────
const COURSE_SLUG_REDIRECTS: Record<string, string> = {
  'adca_course':                       'adca',
  'bcc_course':                        'bcc',
  'cca_course':                        'cca',
  'ccc_course':                        'ccc',
  'advanced_excel_mis_reporting_course': 'advanced-excel',
  'Excel_PowerBI':                     'excel-power-bi',
  'excel_powerbi':                     'excel-power-bi',
  'tally_prime_gst_accounting':        'tally-prime',
  'tally_prime':                       'tally-prime',
  'full_stack_web_development':        'full-stack-web-development',
  'python_programming_certification':  'python-programming',
  'python_programming':                'python-programming',
  'data_analytics':                    'data-analytics',
  'graphic_designing':                 'graphic-designing',
  'digital_marketing':                 'digital-marketing',
  'skill_development_job_oriented_training': 'skill-development',
  'skill_development':                 'skill-development',
}

export function middleware(request: NextRequest) {
  const { pathname, search, host } = request.nextUrl

  // ── 1. Force www. (only in production) ───────────────────────────────────
  if (host === 'anitioinstitute.com' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(
      `https://www.anitioinstitute.com${pathname}${search}`,
      { status: 301 }
    )
  }

  // ── 2. Force HTTPS (only in production, skip on localhost) ───────────────
  if (request.nextUrl.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(
      `https://${host}${pathname}${search}`,
      { status: 301 }
    )
  }

  // ── 3. Redirect old course slugs to new clean slugs ───────────────────────
  if (pathname.startsWith('/courses/')) {
    const oldSlug = pathname.replace('/courses/', '')
    const newSlug = COURSE_SLUG_REDIRECTS[oldSlug]
    if (newSlug) {
      return NextResponse.redirect(
        new URL(`/courses/${newSlug}${search}`, request.url),
        { status: 301 }
      )
    }
  }

  // ── 4. Normalize trailing slashes (remove them) ───────────────────────────
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1) + search, request.url),
      { status: 301 }
    )
  }

  // ── 5. Redirect /home to / ────────────────────────────────────────────────
  if (pathname === '/home') {
    return NextResponse.redirect(
      new URL(`/${search}`, request.url),
      { status: 301 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|manifest.json|images/|icons/|api/).*)',
  ],
}