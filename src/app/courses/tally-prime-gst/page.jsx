import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Tally Prime & GST Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Tally Prime and GST at Anitio Institute, Dwarka More Delhi. Master Tally accounting, GST setup, GST returns, inventory management, payroll and MIS reporting with placement assistance.',
  keywords: 'Tally Prime Course Delhi, GST Course Dwarka, Tally Training New Delhi, Tally GST Institute Delhi, Accounting Software Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Tally Prime & GST Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/tally-prime-gst', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/tally-prime-gst' },
};
const data = {
  courseName: 'Tally Prime & GST Course',
  description: 'Master Tally Prime with complete GST setup, voucher entry, inventory management, payroll processing, GST returns, and MIS reporting with live accounting projects.',
  heroGradient: 'bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-900',
  badgeText: 'Tally & GST Program',
  badgeColor: 'bg-orange-500 text-white',
  accentColor: 'orange',
  stats: [{ value: '14+', label: 'Tally Modules' }, { value: '15+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '8000+', label: 'Students Trained' }],
  modules: ['Introduction to Tally Prime', 'Accounting Fundamentals', 'Company Creation in Tally', 'Ledger & Group Creation', 'Voucher Entry & Transactions', 'Inventory Management', 'GST Setup in Tally Prime', 'GST Purchase & Sales Entries', 'GST Returns & Reports', 'Bank Reconciliation', 'Payroll Management', 'MIS & Financial Reporting', 'TDS & Taxation Basics', 'Real-Time Accounting Projects'],
  highlights: ['100% Practical Training', 'Live Tally Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Tally Certification Support', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Tally Operator', 'Accounts Executive', 'GST Executive', 'Accountant', 'Finance Assistant', 'Billing Executive', 'Inventory Executive', 'Tax Assistant'],
  ctaText: 'Master Tally Prime & GST — Get Placed Fast',
  aboutText1: 'Tally Prime is the most widely used accounting software in India. This course makes you job-ready for accountant roles in just weeks with hands-on real company data practice.',
  aboutText2: 'Learn Tally Prime from scratch including full GST compliance, inventory management, payroll, and MIS reporting at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1568598035424-7070b67317d2?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
