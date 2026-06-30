import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'International Accounting Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn International Accounting at Anitio Institute, Dwarka More Delhi. Master IFRS, International Taxation, Financial Reporting, Accounts Payable, Audit & Compliance with placement assistance.',
  keywords: 'International Accounting Course Delhi, IFRS Training Dwarka, Global Accounting Course Delhi, International Finance Training, Accounts Training Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'International Accounting Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/international-accounting', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/international-accounting' },
};
const data = {
  courseName: 'International Accounting Course',
  description: 'Master International Accounting with IFRS standards, international taxation, financial reporting, accounts payable/receivable, and audit & compliance for global careers.',
  heroGradient: 'bg-gradient-to-r from-teal-900 via-emerald-800 to-green-900',
  badgeText: 'Global Accounting Program',
  badgeColor: 'bg-teal-500 text-white',
  accentColor: 'teal',
  stats: [{ value: '14+', label: 'Accounting Modules' }, { value: '10+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '1500+', label: 'Students Trained' }],
  modules: ['Introduction to International Accounting', 'Accounting Principles & Standards', 'IFRS Fundamentals', 'Financial Statement Preparation', 'International Taxation Basics', 'Accounts Payable & Receivable', 'Bank Reconciliation Process', 'Payroll Accounting', 'Financial Reporting & Analysis', 'GST & VAT Concepts', 'Accounting Software Training', 'Audit & Compliance Basics', 'Corporate Accounting', 'Real-Time Accounting Projects'],
  highlights: ['100% Practical Training', 'IFRS-Aligned Curriculum', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Global Accounting Skills', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['International Accountant', 'IFRS Specialist', 'Finance Executive', 'Accounts Payable Executive', 'Tax Consultant', 'Audit Associate', 'Corporate Accountant', 'Finance Manager'],
  ctaText: 'Launch Your International Accounting Career',
  aboutText1: 'This International Accounting course prepares you for finance roles in multinational companies, global BPOs, and accounting firms with IFRS-aligned curriculum.',
  aboutText2: 'Learn international standards, global taxation, and real accounting workflows using industry software at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
