import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Payroll Management Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Payroll Management at Anitio Institute, Dwarka More Delhi. Master HR Payroll, PF, ESI, TDS, Labour Laws, Salary Calculation, Payroll Software with live projects and placement assistance.',
  keywords: 'Payroll Management Course Delhi, HR Payroll Training Dwarka, PF ESI Course New Delhi, Salary Processing Training, HR Course Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Payroll Management Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/payroll-management', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/payroll-management' },
};
const data = {
  courseName: 'Payroll Management Course',
  description: 'Master Payroll Management with HR payroll processing, PF & ESI, TDS, labour laws, salary calculation, payroll software, and real-time payroll projects.',
  heroGradient: 'bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900',
  badgeText: 'HR & Payroll Program',
  badgeColor: 'bg-purple-500 text-white',
  accentColor: 'purple',
  stats: [{ value: '14+', label: 'Payroll Modules' }, { value: '10+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '3000+', label: 'Students Trained' }],
  modules: ['Introduction to Payroll Management', 'HR & Payroll Fundamentals', 'Employee Salary Structure', 'Attendance & Leave Management', 'Salary Calculation Process', 'PF & ESI Management', 'TDS & Professional Tax', 'Payroll Compliance & Labor Laws', 'Bonus, Incentives & Reimbursements', 'Payroll Processing in Excel', 'Payroll Software Training', 'MIS & Payroll Reporting', 'Advanced Payroll Analytics', 'Real-Time Payroll Projects'],
  highlights: ['100% Practical Training', 'Live Payroll Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Payroll Software Certification', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Payroll Executive', 'HR Executive', 'Payroll Manager', 'HR & Admin Manager', 'Compensation & Benefits Analyst', 'PF & ESI Specialist', 'Labour Law Consultant', 'HR Business Partner'],
  ctaText: 'Master Payroll Management & Get Placed',
  aboutText1: 'This Payroll Management course is designed for HR aspirants, finance professionals, and commerce graduates who want to master end-to-end payroll processing used in Indian companies.',
  aboutText2: 'Learn salary computation, statutory compliance, PF/ESI filing, TDS deduction, and payroll software with live company data at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
