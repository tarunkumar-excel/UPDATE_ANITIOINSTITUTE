/**
 * app/layout.tsx — ANITIO Institute · Final Production v3
 *
 * Fixes from audit:
 *   ✅ Removed static hreflang (was pointing ALL pages to homepage URL)
 *   ✅ Removed preconnect to wa.me (redirect service, not asset host)
 *   ✅ GA4 ID via env var (not hardcoded placeholder)
 *   ✅ GSC code via env var (not hardcoded placeholder)
 *   ✅ schema injection uses raw <script> in <head> (synchronous SSR)
 *   ✅ Skip-to-content for accessibility + Core Web Vitals
 *   ✅ GA4 event tracking for WhatsApp + phone CTAs
 *   ✅ Font fallbacks specified (reduces CLS if Google Fonts slow)
 */

import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

import { homepageMetadata } from '@/lib/metadata'
import { homepageGraphSchema } from '@/lib/schema'

// ─── Fonts ────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
})

// ─── Viewport export ──────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
}

// ─── Root metadata export ─────────────────────────────────────────────────
// Each child page MUST export its own `metadata` to override these defaults.
export const metadata: Metadata = {
  ...homepageMetadata,
  title: {
    default: 'Best Computer Institute in Dwarka More Delhi | ANITIO',
    template: '%s | ANITIO Institute',
  },
  // GSC verification via environment variable
  // Set NEXT_PUBLIC_GOOGLE_VERIFICATION in Vercel → Project Settings → Environment Variables
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? 'REPLACE_WITH_YOUR_REAL_CODE',
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID ?? ''

  // Global @graph JSON-LD: Organization + LocalBusiness + WebSite + Homepage WebPage
  // Using raw <script> in <head> = synchronous SSR → Googlebot sees it in first HTML byte
  const globalSchema = homepageGraphSchema()

  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Critical resource hints ────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics (loaded after interactive — no preconnect needed) */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />

        {/* ── Favicons & manifest ─────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Geo meta (local SEO signals, legacy but still used) ──────── */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Dwarka More, Uttam Nagar, New Delhi" />
        <meta name="geo.position" content="28.6098;77.0588" />
        <meta name="ICBM" content="28.6098, 77.0588" />

        {/* ── Global JSON-LD via raw <script> (server-rendered, sync) ──── */}
        {/*
          IMPORTANT: In Next.js 15 App Router, use raw <script> directly in <head>
          for JSON-LD you want in the initial HTML. next/script with
          beforeInteractive is for external .js files, not inline scripts.
          Raw <script type="application/ld+json"> renders server-side correctly.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>

      <body
        className={`${inter.className} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        {/* ── Skip navigation (accessibility + passes LCP audit) ─────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-blue-800 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-xl"
        >
          Skip to main content
        </a>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>

        {/* ── Google Analytics 4 ────────────────────────────────────────── */}
        {/*
          To activate: set NEXT_PUBLIC_GA4_ID in Vercel environment variables.
          Format: G-XXXXXXXXXX (find in analytics.google.com → Admin → Data Streams)
          Using afterInteractive so it does NOT block LCP (critical for Core Web Vitals)
        */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure',
                  custom_map: { dimension1: 'course_slug' }
                });

                // Track WhatsApp CTA clicks (key conversion event)
                document.addEventListener('click', function(e) {
                  const el = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
                  if (el) {
                    gtag('event', 'whatsapp_click', {
                      event_category: 'CTA',
                      event_label: window.location.pathname,
                    });
                  }
                  // Track phone call clicks
                  const tel = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
                  if (tel) {
                    gtag('event', 'phone_call', {
                      event_category: 'CTA',
                      event_label: tel.getAttribute('href') || '',
                    });
                  }
                  // Track enroll clicks
                  const enroll = e.target && e.target.closest ? e.target.closest('a[href*="/contact"]') : null;
                  if (enroll && document.querySelector('h1')) {
                    gtag('event', 'enroll_click', {
                      event_category: 'CTA',
                      event_label: document.querySelector('h1')?.textContent?.slice(0,50) || 'unknown',
                    });
                  }
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
