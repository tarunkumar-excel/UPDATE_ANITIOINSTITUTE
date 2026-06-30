// app/not-found.tsx
// Custom 404 page with SEO-friendly content and internal links

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 – Page Not Found | ANITIO Institute',
  description: 'The page you are looking for could not be found. Browse our computer courses or contact ANITIO Institute in Dwarka More, New Delhi.',
  robots: {
    index: false,
    follow: true,
  },
}

const POPULAR_COURSES = [
  { slug: 'adca', name: 'ADCA – Advanced Diploma' },
  { slug: 'dca', name: 'DCA – Diploma in Computer' },
  { slug: 'tally-prime', name: 'Tally Prime + GST' },
  { slug: 'advanced-excel', name: 'Advanced Excel & MIS' },
  { slug: 'digital-marketing', name: 'Digital Marketing' },
  { slug: 'python-programming', name: 'Python Programming' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="text-9xl font-black text-blue-100 select-none mb-4">
          404
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. It may have been
          moved or deleted.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Link
            href="/"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/courses"
            className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Browse All Courses
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Popular Courses - Internal Links */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Popular Courses at ANITIO
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {POPULAR_COURSES.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                >
                  → {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need help? Call{' '}
            <a
              href="tel:+919289438428"
              className="text-blue-600 hover:underline font-medium"
            >
              +91-9289438428
            </a>{' '}
            or{' '}
            <a
              href="https://wa.me/919289438428?text=Hello+ANITIO"
              className="text-green-600 hover:underline font-medium"
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}


// ════════════════════════════════════════════════════════════════════════════
// app/error.tsx
// Custom 500 / runtime error page
// ════════════════════════════════════════════════════════════════════════════

// Create as: app/error.tsx

'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to analytics or monitoring
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="text-7xl font-black text-red-100 select-none mb-4">
          500
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We're sorry, something unexpected happened. Please try again or
          return to the homepage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Go Home
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Error ID: {error.digest || 'Unknown'}
        </p>
      </div>
    </div>
  )
}
