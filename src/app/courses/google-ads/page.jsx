import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Google Ads Certification Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Google Ads at Anitio Institute, Dwarka More Delhi. Master Search Ads, Display Ads, YouTube Ads, Shopping Ads, PPC campaigns, Keyword Bidding with Google Ads Certification and placement.',
  keywords: 'Google Ads Course Delhi, PPC Training Dwarka, Google AdWords Course New Delhi, SEM Course Delhi, Google Ads Certification Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Google Ads Certification Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/google-ads', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/google-ads' },
};
const data = {
  courseName: 'Google Ads Certification Course',
  description: 'Master Google Ads with Search Ads, Display Ads, YouTube Ads, Shopping Ads, PPC bidding strategies, conversion tracking, and live campaign management with Google certification.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900',
  badgeText: 'Google Ads & PPC Program',
  badgeColor: 'bg-blue-500 text-white',
  accentColor: 'blue',
  stats: [{ value: '14+', label: 'Ads Modules' }, { value: '10+', label: 'Live Campaigns' }, { value: '100%', label: 'Placement Support' }, { value: '2500+', label: 'Students Trained' }],
  modules: ['Introduction to Google Ads', 'Google Ads Account Setup', 'Keyword Research & Planning', 'Search Campaign Creation', 'Ad Copywriting & Ad Extensions', 'Display Network Advertising', 'YouTube Video Ads', 'Shopping Ads for E-commerce', 'Smart & Performance Max Campaigns', 'Bidding Strategies & Budget Management', 'Quality Score Optimisation', 'Conversion Tracking Setup', 'Google Analytics Integration', 'Live Google Ads Campaign Projects'],
  highlights: ['100% Practical Ads Training', 'Live Campaign Management', 'Industry Expert Trainers', 'Placement Assistance', 'Google Ads Certification', 'Real Ad Budget Practice', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Google Ads Specialist', 'PPC Executive', 'SEM Analyst', 'Performance Marketing Executive', 'Digital Marketing Executive', 'Paid Ads Manager', 'E-commerce Marketing Specialist', 'Freelance Google Ads Expert'],
  ctaText: 'Get Google Ads Certified & Land Your Job',
  aboutText1: 'This Google Ads Certification course teaches you to create, manage, and optimise paid campaigns on Google Search, Display, YouTube, and Shopping platforms with real budgets.',
  aboutText2: 'Run live ad campaigns, manage real client accounts, and achieve measurable ROI with expert mentorship at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
