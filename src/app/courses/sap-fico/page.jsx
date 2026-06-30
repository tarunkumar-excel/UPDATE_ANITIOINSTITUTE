import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'SAP FICO Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn SAP FICO at Anitio Institute, Dwarka More Delhi. Master SAP Financial Accounting, Controlling, General Ledger, Accounts Payable, Asset Accounting with live SAP server practice.',
  keywords: 'SAP FICO Course Delhi, SAP Training Dwarka, SAP Finance Course New Delhi, ERP Training Delhi, SAP FI CO Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'SAP FICO Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/sap-fico', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/sap-fico' },
};
const data = {
  courseName: 'SAP FICO Course',
  description: 'Master SAP FICO — Financial Accounting & Controlling — with live SAP server practice, real-world configuration, and industry-focused placement assistance.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900',
  badgeText: 'ERP & SAP Finance Program',
  badgeColor: 'bg-blue-600 text-white',
  accentColor: 'blue',
  stats: [{ value: '14+', label: 'SAP Modules' }, { value: '10+', label: 'Live SAP Projects' }, { value: '100%', label: 'Placement Support' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to SAP & ERP', 'SAP FICO Overview', 'Financial Accounting (FI) Basics', 'General Ledger Accounting', 'Accounts Payable & Receivable', 'Asset Accounting', 'Bank Accounting', 'Cost Center Accounting', 'Profit Center Accounting', 'Internal Orders & Costing', 'GST & Tax Configuration in SAP', 'SAP FICO Reporting', 'Real-Time SAP FICO Projects', 'Live Industry Case Studies'],
  highlights: ['100% Practical SAP Training', 'Live SAP Server Practice', 'Industry Expert Trainers', 'Placement Assistance', 'SAP Certification Guidance', 'Job-Ready Skills', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['SAP FICO Consultant', 'SAP Finance Analyst', 'ERP Consultant', 'Financial Controller', 'SAP Functional Analyst', 'Finance Manager', 'ERP Implementation Specialist', 'SAP Project Manager'],
  ctaText: 'Become a SAP FICO Professional Today',
  aboutText1: 'This SAP FICO training gives you hands-on live server experience, making you job-ready for top MNCs and IT companies. Available at Anitio Institute, Dwarka More, New Delhi.',
  aboutText2: 'Learn SAP configuration, financial transactions, controlling modules, and real-world implementation scenarios with expert SAP-certified trainers.',
  aboutImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
