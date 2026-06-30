import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'SEO Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn SEO at Anitio Institute, Dwarka More Delhi. Master On-Page SEO, Off-Page SEO, Technical SEO, Keyword Research, Link Building, Google Search Console and Content Writing with placement.',
  keywords: 'SEO Course Delhi, SEO Training Dwarka, Search Engine Optimization Course New Delhi, SEO Institute Delhi, Technical SEO Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'SEO Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/seo-course', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/seo-course' },
};
const data = {
  courseName: 'SEO Course',
  description: 'Master Search Engine Optimization with On-Page SEO, Off-Page SEO, Technical SEO, Keyword Research, Link Building, Google Search Console, and live SEO projects.',
  heroGradient: 'bg-gradient-to-r from-green-900 via-lime-800 to-emerald-900',
  badgeText: 'SEO & Search Marketing Program',
  badgeColor: 'bg-green-500 text-white',
  accentColor: 'green',
  stats: [{ value: '14+', label: 'SEO Modules' }, { value: '10+', label: 'Live SEO Projects' }, { value: '100%', label: 'Placement Support' }, { value: '3000+', label: 'Students Trained' }],
  modules: ['Introduction to Search Engine Optimization', 'How Search Engines Work', 'Keyword Research & Planning', 'On-Page SEO Optimization', 'Technical SEO Fundamentals', 'Off-Page SEO & Link Building', 'Local SEO Strategies', 'Google Search Console Setup', 'Google Analytics Integration', 'SEO Content Writing', 'Website Speed Optimization', 'Mobile SEO & Core Web Vitals', 'SEO Auditing & Reporting', 'Live SEO Projects & Case Studies'],
  highlights: ['100% Practical SEO Training', 'Live Website SEO Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'SEO Tool Certifications', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['SEO Executive', 'SEO Specialist', 'SEO Analyst', 'Content SEO Writer', 'Digital Marketing Executive', 'SEO Manager', 'Search Marketing Specialist', 'Freelance SEO Expert'],
  ctaText: 'Master SEO & Rank Websites on Google',
  aboutText1: 'This SEO course teaches you how to rank websites on Google, drive organic traffic, and generate leads using proven white-hat SEO techniques used by top digital agencies.',
  aboutText2: 'Work on live websites, conduct real SEO audits, build backlinks, and track rankings with tools like Ahrefs, SEMrush, and Google Search Console at Anitio Institute, Dwarka More.',
  aboutImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
