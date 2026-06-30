import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Performance Marketing Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Performance Marketing at Anitio Institute, Dwarka More Delhi. Master Google Ads, Facebook Ads, ROI Optimisation, Conversion Rate Optimisation, Affiliate Marketing with placement assistance.',
  keywords: 'Performance Marketing Course Delhi, Performance Marketing Training Dwarka, Paid Marketing Course New Delhi, CPA Marketing Delhi, ROI Marketing Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Performance Marketing Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/performance-marketing', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/performance-marketing' },
};
const data = {
  courseName: 'Performance Marketing Course',
  description: 'Master Performance Marketing with Google Ads, Meta Ads, ROI optimisation, conversion tracking, A/B testing, affiliate marketing, and data-driven campaign management.',
  heroGradient: 'bg-gradient-to-r from-red-900 via-orange-800 to-amber-900',
  badgeText: 'Performance & Paid Marketing Program',
  badgeColor: 'bg-red-500 text-white',
  accentColor: 'red',
  stats: [{ value: '14+', label: 'PM Modules' }, { value: '12+', label: 'Live Campaigns' }, { value: '100%', label: 'Placement Support' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to Performance Marketing', 'Digital Marketing Fundamentals', 'Google Search & Display Ads', 'Facebook & Instagram Ads', 'YouTube Performance Campaigns', 'Landing Page Optimisation', 'Conversion Rate Optimisation (CRO)', 'A/B Testing Strategies', 'Affiliate & Programmatic Marketing', 'Marketing Funnel & Automation', 'Analytics & Attribution Models', 'ROAS & ROI Tracking', 'Performance Marketing Tools', 'Live Campaign Management Projects'],
  highlights: ['100% Practical Training', 'Live Campaign Management', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Multi-Channel Certification', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Performance Marketing Executive', 'Paid Media Specialist', 'Growth Marketing Analyst', 'PPC & SEM Analyst', 'Affiliate Marketing Manager', 'Digital Campaign Manager', 'E-commerce Growth Specialist', 'Performance Marketing Manager'],
  ctaText: 'Master Performance Marketing & Drive Real ROI',
  aboutText1: 'This Performance Marketing course teaches you to plan, launch, and optimise paid campaigns across Google, Meta, and affiliate channels for measurable business results.',
  aboutText2: 'Run real campaigns with actual budgets, analyse performance data, improve ROAS, and build a proven track record with expert mentorship at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
