import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Cost Accounting Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Cost Accounting at Anitio Institute, Dwarka More Delhi. Master Cost Sheet, Marginal Costing, Budgetary Control, Standard Costing, Variance Analysis and Tally Prime with placement support.',
  keywords: 'Cost Accounting Course Delhi, Cost Accountant Training Dwarka, Costing Course New Delhi, Management Accounting Delhi, CMA Foundation',
  robots: { index: true, follow: true },
  openGraph: { title: 'Cost Accounting Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/cost-accounting', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/cost-accounting' },
};
const data = {
  courseName: 'Cost Accounting Course',
  description: 'Master Cost Accounting with Cost Sheet preparation, Marginal Costing, Budgetary Control, Standard Costing, Variance Analysis, and Tally Prime integration.',
  heroGradient: 'bg-gradient-to-r from-red-900 via-rose-800 to-orange-900',
  badgeText: 'Cost & Management Accounting',
  badgeColor: 'bg-red-500 text-white',
  accentColor: 'red',
  stats: [{ value: '14+', label: 'Costing Modules' }, { value: '12+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '2500+', label: 'Students Trained' }],
  modules: ['Introduction to Cost Accounting', 'Cost Concepts & Classification', 'Material Cost Management', 'Labour Cost Accounting', 'Overhead Cost Analysis', 'Cost Sheet Preparation', 'Marginal Costing Techniques', 'Budgetary Control', 'Standard Costing & Variance Analysis', 'Process & Job Costing', 'Break-Even Analysis', 'Financial Statement Analysis', 'Tally Prime for Cost Accounting', 'Live Cost Accounting Projects'],
  highlights: ['100% Practical Training', 'Live Costing Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'CMA Foundation Guidance', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Cost Accountant', 'Management Accountant', 'Cost Analyst', 'Budget Analyst', 'Financial Controller', 'Costing Executive', 'MIS Executive', 'Finance Manager'],
  ctaText: 'Master Cost Accounting & Advance Your Career',
  aboutText1: 'This Cost Accounting course is ideal for commerce students, CMA aspirants, and finance professionals who want to master management accounting techniques used in manufacturing and service industries.',
  aboutText2: 'Learn cost analysis, budgetary control, variance analysis, and costing software with live project experience at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
