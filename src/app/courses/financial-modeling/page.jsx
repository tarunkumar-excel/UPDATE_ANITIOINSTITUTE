import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Financial Modeling Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Financial Modeling at Anitio Institute, Dwarka More Delhi. Master Excel, DCF Valuation, Income Statement, Balance Sheet modeling, Budgeting and Financial Planning with live projects.',
  keywords: 'Financial Modeling Course Delhi, Excel Finance Training Dwarka, DCF Valuation Course, Financial Analysis Course New Delhi, Equity Research Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Financial Modeling Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/financial-modeling', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/financial-modeling' },
};
const data = {
  courseName: 'Financial Modeling Course',
  description: 'Master Financial Modeling with Advanced Excel, DCF Valuation, Income Statement & Balance Sheet modeling, Budgeting, and equity research fundamentals.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-slate-800 to-gray-900',
  badgeText: 'Finance & Valuation Program',
  badgeColor: 'bg-blue-500 text-white',
  accentColor: 'blue',
  stats: [{ value: '14+', label: 'Finance Modules' }, { value: '12+', label: 'Modeling Projects' }, { value: '100%', label: 'Placement Support' }, { value: '2500+', label: 'Students Trained' }],
  modules: ['Introduction to Financial Modeling', 'Advanced MS Excel for Finance', 'Financial Statement Analysis', 'Income Statement Modeling', 'Balance Sheet Modeling', 'Cash Flow Statement Modeling', 'Ratio Analysis & Forecasting', 'Valuation Techniques', 'DCF (Discounted Cash Flow) Modeling', 'Budgeting & Financial Planning', 'Scenario & Sensitivity Analysis', 'Investment & Equity Research Basics', 'Dashboard & MIS Reporting', 'Live Financial Modeling Projects'],
  highlights: ['100% Practical Training', 'Live Financial Models', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'CFA/CA-level Skills', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Financial Analyst', 'Investment Analyst', 'Equity Research Analyst', 'FP&A Analyst', 'Corporate Finance Professional', 'Credit Analyst', 'Portfolio Analyst', 'Business Valuation Specialist'],
  ctaText: 'Build Your Financial Modeling Career Today',
  aboutText1: 'This Financial Modeling course is ideal for finance graduates, CAs, MBAs, and professionals who want to master the skills used in investment banking and corporate finance.',
  aboutText2: 'Build complete 3-statement financial models, perform DCF valuations, and create investor-ready dashboards with expert mentorship at Anitio Institute, Dwarka More.',
  aboutImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
