import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Digital Marketing Master Program in Delhi | Anitio Institute — Dwarka More',
  description: 'Join the Digital Marketing Master Program at Anitio Institute, Dwarka More Delhi. Master SEO, Google Ads, Social Media, Facebook Ads, YouTube, Email Marketing, Content Marketing with placement.',
  keywords: 'Digital Marketing Course Delhi, Digital Marketing Training Dwarka, SEO Course New Delhi, Google Ads Training Delhi, Social Media Marketing Course',
  robots: { index: true, follow: true },
  openGraph: { title: 'Digital Marketing Master Program | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/digital-marketing', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/digital-marketing' },
};
const data = {
  courseName: 'Digital Marketing Master Program',
  description: 'Master Digital Marketing with SEO, Google Ads, Social Media Marketing, Facebook & Instagram Ads, YouTube Marketing, Email Marketing, and live campaign management.',
  heroGradient: 'bg-gradient-to-r from-pink-900 via-rose-800 to-red-900',
  badgeText: 'Digital Marketing Master Program',
  badgeColor: 'bg-pink-500 text-white',
  accentColor: 'red',
  stats: [{ value: '14+', label: 'DM Modules' }, { value: '20+', label: 'Live Campaigns' }, { value: '100%', label: 'Placement Support' }, { value: '5000+', label: 'Students Trained' }],
  modules: ['Introduction to Digital Marketing', 'Search Engine Optimization (SEO)', 'Search Engine Marketing (Google Ads)', 'Social Media Marketing (SMM)', 'Facebook & Instagram Ads', 'YouTube Marketing', 'Content Marketing Strategy', 'Email Marketing Campaigns', 'Affiliate Marketing Basics', 'WordPress Website Development', 'Google Analytics & Search Console', 'Lead Generation Techniques', 'E-commerce Marketing', 'Live Projects & Case Studies'],
  highlights: ['100% Practical DM Training', 'Live Campaign Management', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Google Certification Guidance', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'Google Ads Expert', 'Content Marketing Executive', 'Performance Marketing Analyst', 'E-commerce Marketing Specialist', 'Freelance Digital Marketer'],
  ctaText: 'Become a Digital Marketing Expert Today',
  aboutText1: 'This Digital Marketing Master Program covers every major channel — SEO, paid ads, social media, email marketing, and analytics — making you a complete 360° digital marketer.',
  aboutText2: 'Manage live campaigns, track real data, build your portfolio, and get Google-certified with expert guidance at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efbc07?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
