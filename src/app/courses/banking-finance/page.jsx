import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Banking & Finance Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Banking & Finance at Anitio Institute, Dwarka More Delhi. Master Retail Banking, Corporate Banking, Financial Markets, Insurance, Loan Processing, Digital Banking with placement assistance.',
  keywords: 'Banking Finance Course Delhi, Banking Training Dwarka, Finance Course New Delhi, Bank Job Training Delhi, NBFC Course',
  robots: { index: true, follow: true },
  openGraph: { title: 'Banking & Finance Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/banking-finance', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/banking-finance' },
};
const data = {
  courseName: 'Banking & Finance Course',
  description: 'Master Banking & Finance with Retail Banking, Corporate Banking, Financial Markets, Insurance, Loan Processing, Digital Banking, and FinTech with live projects.',
  heroGradient: 'bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900',
  badgeText: 'Banking & Finance Program',
  badgeColor: 'bg-indigo-500 text-white',
  accentColor: 'indigo',
  stats: [{ value: '14+', label: 'Banking Modules' }, { value: '12+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '4000+', label: 'Students Trained' }],
  modules: ['Introduction to Banking & Finance', 'Indian Banking System', 'Retail Banking Operations', 'Corporate Banking Fundamentals', 'Financial Markets & Instruments', 'Investment Banking Basics', 'Insurance & Risk Management', 'Loan Processing & Credit Analysis', 'GST & Financial Taxation', 'Financial Accounting Basics', 'MS Excel for Banking & Finance', 'Digital Banking & FinTech', 'Customer Relationship Management', 'Live Banking Projects & Case Studies'],
  highlights: ['100% Practical Training', 'Live Banking Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Banking Certification Support', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Banking Executive', 'Credit Analyst', 'Loan Officer', 'Financial Advisor', 'Insurance Advisor', 'Branch Manager', 'FinTech Analyst', 'Investment Advisor'],
  ctaText: 'Build Your Banking & Finance Career Today',
  aboutText1: 'This Banking & Finance course prepares you for roles in banks, NBFCs, insurance companies, and financial institutions with practical skills and industry knowledge.',
  aboutText2: 'Master loan processing, credit analysis, digital banking, and financial markets with real case studies and expert mentors at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
