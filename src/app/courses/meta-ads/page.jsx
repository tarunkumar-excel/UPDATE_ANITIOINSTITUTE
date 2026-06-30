import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Meta Ads Specialist Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Meta Ads at Anitio Institute, Dwarka More Delhi. Master Facebook Ads, Instagram Ads, Meta Business Suite, Audience Targeting, Retargeting, Lead Generation Ads with placement assistance.',
  keywords: 'Meta Ads Course Delhi, Facebook Ads Training Dwarka, Instagram Ads Course New Delhi, Meta Business Suite Training, Facebook Marketing Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Meta Ads Specialist Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/meta-ads', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/meta-ads' },
};
const data = {
  courseName: 'Meta Ads Specialist Course',
  description: 'Master Meta Ads — Facebook & Instagram Advertising — with audience targeting, campaign creation, retargeting, lead generation ads, Meta Pixel, and live ad management.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-indigo-800 to-violet-900',
  badgeText: 'Meta & Facebook Ads Program',
  badgeColor: 'bg-blue-600 text-white',
  accentColor: 'indigo',
  stats: [{ value: '14+', label: 'Meta Ads Modules' }, { value: '10+', label: 'Live Ad Campaigns' }, { value: '100%', label: 'Placement Support' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to Meta Advertising', 'Meta Business Suite Setup', 'Facebook Ads Manager Overview', 'Campaign Objectives & Structure', 'Audience Research & Targeting', 'Custom & Lookalike Audiences', 'Ad Creatives & Copywriting', 'Facebook Lead Generation Ads', 'Instagram Ads & Stories Ads', 'Meta Pixel Setup & Events', 'Retargeting & Remarketing', 'Budget & Bidding Optimisation', 'Analytics & Ad Performance Reporting', 'Live Meta Ads Campaign Projects'],
  highlights: ['100% Practical Ads Training', 'Live Facebook & Instagram Campaigns', 'Industry Expert Trainers', 'Placement Assistance', 'Meta Certification Guidance', 'Real Ad Budget Experience', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Meta Ads Specialist', 'Facebook Ads Manager', 'Social Media Advertiser', 'Performance Marketing Executive', 'Digital Marketing Executive', 'Paid Social Specialist', 'E-commerce Ads Manager', 'Freelance Meta Ads Expert'],
  ctaText: 'Become a Certified Meta Ads Specialist',
  aboutText1: 'This Meta Ads course teaches you to run high-converting Facebook and Instagram ad campaigns for businesses across every industry — from lead generation to e-commerce sales.',
  aboutText2: 'Manage real ad accounts, set up Meta Pixel, build custom audiences, and optimise campaigns for ROAS with expert guidance at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
