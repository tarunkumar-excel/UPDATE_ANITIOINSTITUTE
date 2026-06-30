import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Financial Accounting Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Financial Accounting at Anitio Institute, Dwarka More Delhi. Master Tally Prime, GST, Payroll, Taxation, Balance Sheet, Journal Entries with live accounting projects and placement assistance.',
  keywords: 'Financial Accounting Course Delhi, Tally Course Dwarka, GST Training New Delhi, Accounting Classes Delhi, Payroll Course',
  robots: { index: true, follow: true },
  openGraph: { title: 'Financial Accounting Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/financial-accounting', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/financial-accounting' },
};
const data = {
  courseName: 'Financial Accounting Course',
  description: 'Master Financial Accounting, Tally Prime, GST, Payroll, Taxation, and Financial Reporting with practical projects and industry-focused placement support.',
  heroGradient: 'bg-gradient-to-r from-amber-900 via-orange-800 to-red-900',
  badgeText: 'Accounting & Finance Program',
  badgeColor: 'bg-orange-500 text-black',
  accentColor: 'orange',
  stats: [{ value: '14+', label: 'Accounting Modules' }, { value: '15+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '6000+', label: 'Students Trained' }],
  modules: ['Introduction to Financial Accounting', 'Accounting Principles & Concepts', 'Journal Entries & Ledger Posting', 'Trial Balance Preparation', 'Profit & Loss Account', 'Balance Sheet Preparation', 'Cash Book & Bank Reconciliation', 'GST Basics & Taxation', 'Tally Prime Fundamentals', 'Payroll Management', 'Inventory Management', 'Financial Statement Analysis', 'MS Excel for Accounting', 'Live Accounting Projects & Case Studies'],
  highlights: ['100% Practical Training', 'Live Accounting Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Certification Support', 'Online & Offline Classes', 'Lifetime Learning Access'],
  careers: ['Accountant', 'Accounts Executive', 'GST Executive', 'Tally Operator', 'Finance Assistant', 'Payroll Executive', 'Tax Consultant', 'Financial Analyst'],
  ctaText: 'Start Your Accounting Career Today',
  aboutText1: 'This Financial Accounting course is designed for commerce students, graduates, and professionals who want to master accounting practices used in real businesses.',
  aboutText2: 'Learn Tally Prime, GST filing, payroll processing, and financial reporting with live company data and expert guidance at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
