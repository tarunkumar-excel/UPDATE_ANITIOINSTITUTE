import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Investment Banking Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Investment Banking at Anitio Institute, Dwarka More Delhi. Master M&A, IPO, Equity Markets, Valuation, Financial Modeling, and Corporate Finance with live projects and placement assistance.',
  keywords: 'Investment Banking Course Delhi, IB Training Dwarka, M&A Course New Delhi, Equity Research Training Delhi, Finance Course Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Investment Banking Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/investment-banking', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/investment-banking' },
};
const data = {
  courseName: 'Investment Banking Course',
  description: 'Master Investment Banking with M&A, IPO processes, Equity & Debt Markets, Valuation, Financial Modeling, and Corporate Finance with real-world case studies.',
  heroGradient: 'bg-gradient-to-r from-gray-900 via-slate-800 to-zinc-900',
  badgeText: 'Investment & Finance Program',
  badgeColor: 'bg-gray-600 text-white',
  accentColor: 'indigo',
  stats: [{ value: '14+', label: 'IB Modules' }, { value: '10+', label: 'Case Studies' }, { value: '100%', label: 'Placement Support' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to Investment Banking', 'Financial Markets & Institutions', 'Corporate Finance Fundamentals', 'Equity & Debt Markets', 'Financial Statement Analysis', 'Valuation Techniques & Models', 'Mergers & Acquisitions (M&A)', 'IPO & Capital Market Process', 'Risk Management & Compliance', 'Excel for Financial Modeling', 'Portfolio & Wealth Management', 'Business Analytics for Finance', 'Investment Banking Case Studies', 'Real-Time Financial Projects'],
  highlights: ['100% Practical Training', 'Live IB Case Studies', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'IB-Ready Portfolio', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Investment Banker', 'Equity Research Analyst', 'M&A Analyst', 'Corporate Finance Analyst', 'Capital Markets Associate', 'Wealth Manager', 'Financial Advisor', 'Private Equity Analyst'],
  ctaText: 'Launch Your Investment Banking Career',
  aboutText1: 'This Investment Banking program is designed for finance graduates, MBAs, and CAs who aspire to build careers in investment banking, private equity, and capital markets.',
  aboutText2: 'Master M&A deal structuring, IPO processes, valuation models, and financial analysis with real case studies and expert mentors at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
