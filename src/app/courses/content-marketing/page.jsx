import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Content Marketing Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Content Marketing at Anitio Institute, Dwarka More Delhi. Master Content Strategy, Blog Writing, Video Marketing, Copywriting, Email Content, Social Media Content with placement assistance.',
  keywords: 'Content Marketing Course Delhi, Content Writing Training Dwarka, Blog Writing Course Delhi, Copywriting Course New Delhi, Content Strategy Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Content Marketing Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/content-marketing', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/content-marketing' },
};
const data = {
  courseName: 'Content Marketing Course',
  description: 'Master Content Marketing with content strategy, SEO blog writing, video content, email marketing, social media content, copywriting, and live content campaigns.',
  heroGradient: 'bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-900',
  badgeText: 'Content Marketing Program',
  badgeColor: 'bg-orange-500 text-white',
  accentColor: 'orange',
  stats: [{ value: '14+', label: 'Content Modules' }, { value: '10+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to Content Marketing', 'Content Strategy & Planning', 'Audience Research & Buyer Personas', 'SEO Content Writing', 'Blog Writing & Storytelling', 'Video Content Creation', 'Social Media Content Strategy', 'Email Content & Newsletters', 'Copywriting Fundamentals', 'Content Calendar Management', 'Content Distribution & Promotion', 'Content Analytics & Performance', 'AI Tools for Content Creation', 'Live Content Marketing Projects'],
  highlights: ['100% Practical Training', 'Live Content Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Content Portfolio Building', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Content Marketing Executive', 'Content Writer', 'Content Strategist', 'SEO Content Writer', 'Copywriter', 'Social Media Content Creator', 'Email Marketing Specialist', 'Freelance Content Marketer'],
  ctaText: 'Master Content Marketing & Build Your Career',
  aboutText1: 'This Content Marketing course teaches you how to create compelling content that attracts, engages, and converts audiences across blogs, social media, email, and video platforms.',
  aboutText2: 'Build a real content portfolio, work on live brand campaigns, and master AI-powered content tools with expert guidance at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
