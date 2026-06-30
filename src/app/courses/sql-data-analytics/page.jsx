import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'SQL & Data Analytics Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn SQL and Data Analytics at Anitio Institute, Dwarka More Delhi. Master MySQL, PostgreSQL, data queries, joins, stored procedures and analytics with live projects and placement assistance.',
  keywords: 'SQL Course Delhi, SQL Training Dwarka, Data Analytics Course Delhi, MySQL Training, Database Course New Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'SQL & Data Analytics Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/sql-data-analytics', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/sql-data-analytics' },
};
const data = {
  courseName: 'SQL & Data Analytics Course',
  description: 'Master SQL and Data Analytics with hands-on training in MySQL, PostgreSQL, complex queries, joins, stored procedures, and real-time data analysis projects.',
  heroGradient: 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900',
  badgeText: 'Database & Analytics Program',
  badgeColor: 'bg-blue-500 text-white',
  accentColor: 'blue',
  stats: [{ value: '14+', label: 'Modules' }, { value: '15+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '3000+', label: 'Students Trained' }],
  modules: ['Introduction to SQL & Databases', 'Database Management Systems', 'SQL Installation & Setup', 'Creating Databases & Tables', 'CRUD Operations in SQL', 'Filtering & Sorting Data', 'Aggregate Functions & Grouping', 'SQL Joins & Relationships', 'Subqueries & Nested Queries', 'Views, Indexes & Stored Procedures', 'SQL for Data Analytics', 'Power BI & SQL Integration', 'Real-Time Data Analysis Projects', 'Live Industry Case Studies'],
  highlights: ['100% Practical Training', 'Live SQL Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'SQL Certification Support', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Database Administrator', 'Data Analyst', 'SQL Developer', 'Backend Developer', 'Business Intelligence Analyst', 'Data Engineer', 'ETL Developer', 'Reporting Analyst'],
  ctaText: 'Become a SQL & Data Expert Today',
  aboutText1: 'This SQL & Data Analytics program gives you the complete database skills demanded by every industry. Available at Anitio Institute, Dwarka More, New Delhi with flexible batch timings.',
  aboutText2: 'Write complex queries, build analytical reports, integrate SQL with Power BI, and work on real industry datasets with expert mentorship.',
  aboutImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
