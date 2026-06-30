import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import NewsTicker from '@/components/layout/NewsTicker';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'ANITIO Information Technology & Skill Development LLP | Dwarka More, New Delhi',
    template: '%s | ANITIO IT & Skill Development',
  },
  description: 'ANITIO Information Technology & Skill Development LLP — Premier IT training institute at Dwarka More, New Delhi. Online & Offline courses: Computer, DCA, Excel, Web Dev, Python, Tally, Graphic Design, AI, Data Analytics & more. 100% Placement Support.',
  keywords: [
    'computer institute Dwarka More','IT training New Delhi','DCA course Delhi',
    'basic computer course','web development course','python course Delhi',
    'tally course Uttam Nagar','graphic design course','ANITIO institute',
    'skill development','online computer course','offline IT training',
    'digital marketing course','data analytics course','AI course Delhi',
    'franchise computer institute','ADCA diploma Delhi','computer classes Uttam Nagar',
  ],
  metadataBase: new URL('https://www.anitioinstitute.com'),
  authors: [{ name: 'ANITIO Information Technology and Skill Development LLP' }],
  creator: 'ANITIO',
  publisher: 'ANITIO Information Technology and Skill Development LLP',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.anitioinstitute.com',
    siteName: 'ANITIO Information Technology & Skill Development LLP',
    title: 'ANITIO – IT Training Institute | Dwarka More, New Delhi',
    description: 'Professional IT training institute offering online & offline computer courses, web development, Python, Tally, graphic design, data analytics and skill development programs in New Delhi.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'ANITIO Institute' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anitioinstitute',
    creator: '@anitioinstitute',
  },
  alternates: {
    canonical: 'https://www.anitioinstitute.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'ANITIO Information Technology and Skill Development LLP',
              url: 'https://www.anitioinstitute.com',
              logo: 'https://www.anitioinstitute.com/images/logo.png',
              description: 'Professional IT training institute at Dwarka More, New Delhi',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772',
                addressLocality: 'Uttam Nagar',
                addressRegion: 'New Delhi',
                postalCode: '110059',
                addressCountry: 'IN',
              },
              telephone: ['+91-9289438428', '+91-9971969158'],
              email: 'anitioinstitute@gmail.com',
              sameAs: [
                'https://facebook.com/anitioinstitute',
                'https://instagram.com/anitioinstitute',
                'https://youtube.com/@anitioinstitute',
                'https://twitter.com/anitioinstitute',
              ],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
              hasMap: 'https://maps.google.com/?q=Sewak+Park+Dwarka+More+New+Delhi',
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Toaster position="top-right" toastOptions={{ duration: 4000, style: { fontFamily: 'DM Sans, sans-serif', fontSize: '14px' } }} />
        <TopBar />
        <Navbar />
        <NewsTicker />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
