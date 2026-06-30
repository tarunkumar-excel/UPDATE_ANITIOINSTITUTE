import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Social Media Marketing Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Social Media Marketing at Anitio Institute, Dwarka More Delhi. Master Facebook, Instagram, YouTube, LinkedIn marketing, Canva design, paid ads and influencer marketing with placement.',
  keywords: 'Social Media Marketing Course Delhi, SMM Training Dwarka, Facebook Marketing Course Delhi, Instagram Marketing Training, Social Media Course New Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Social Media Marketing Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/social-media-marketing', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/social-media-marketing' },
};
const data = {
  courseName: 'Social Media Marketing Course',
  description: 'Master Social Media Marketing with Facebook, Instagram, YouTube, LinkedIn strategies, Canva design, paid social ads, influencer marketing, and live campaign projects.',
  heroGradient: 'bg-gradient-to-r from-purple-900 via-pink-800 to-rose-900',
  badgeText: 'Social Media Marketing Program',
  badgeColor: 'bg-pink-500 text-white',
  accentColor: 'purple',
  stats: [{ value: '14+', label: 'SMM Modules' }, { value: '12+', label: 'Live Campaigns' }, { value: '100%', label: 'Placement Support' }, { value: '3500+', label: 'Students Trained' }],
  modules: ['Introduction to Social Media Marketing', 'Facebook Marketing Strategy', 'Instagram Marketing & Reels Growth', 'YouTube Channel Optimization', 'LinkedIn Marketing', 'Twitter / X Marketing', 'Content Creation & Branding', 'Canva Design for Social Media', 'Social Media Advertising', 'Lead Generation Campaigns', 'Influencer Marketing', 'Analytics & Performance Tracking', 'Social Media Automation Tools', 'Live Campaign Management Projects'],
  highlights: ['100% Practical SMM Training', 'Live Campaign Management', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Meta & LinkedIn Certifications', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Social Media Executive', 'Social Media Manager', 'Content Creator', 'Brand Manager', 'Community Manager', 'Influencer Marketing Specialist', 'Instagram Growth Expert', 'Freelance Social Media Marketer'],
  ctaText: 'Master Social Media Marketing Today',
  aboutText1: 'This Social Media Marketing course teaches you to grow brands, run paid campaigns, create viral content, and generate leads across all major social platforms.',
  aboutText2: 'Manage real brand accounts, run Facebook & Instagram ads, create Canva graphics, and track social analytics with expert guidance at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
