import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Data Analytics Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Data Analytics at Anitio Institute, Dwarka More Delhi. Master Advanced Excel, SQL, Power BI, Python, Tableau with live projects and placement assistance.',
  keywords: 'Data Analytics Course Delhi, Data Analyst Training Dwarka, Excel Course Delhi, Analytics Institute New Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Data Analytics Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/data-analytics', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/data-analytics' },
};
const data = {
  courseName: 'Data Analytics Course',
  description: 'Master Data Analytics with Advanced Excel, SQL, Power BI, Python, and Tableau through 100% practical training with live industry projects and placement support.',
  heroGradient: 'bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900',
  badgeText: 'Data Analytics Program',
  badgeColor: 'bg-teal-500 text-white',
  accentColor: 'teal',
  stats: [{ value: '12+', label: 'Modules' }, { value: '20+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '4000+', label: 'Students Trained' }],
  modules: ['Advanced Excel & MIS', 'SQL for Data Analysis', 'Power BI Dashboards', 'Python for Analytics', 'Tableau Visualisation', 'Statistics & Probability', 'Data Cleaning Techniques', 'Business Intelligence Basics', 'Google Analytics', 'Data Storytelling', 'Predictive Analytics', 'Live Data Projects & Case Studies'],
  highlights: ['100% Practical Training', 'Live Data Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Multiple Tool Certifications', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Data Analyst', 'Business Analyst', 'MIS Executive', 'Reporting Analyst', 'BI Analyst', 'Operations Analyst', 'Marketing Analyst', 'Research Analyst'],
  ctaText: 'Launch Your Data Analytics Career Now',
  aboutText1: 'This comprehensive Data Analytics course covers the complete toolkit from Excel to Python to Tableau, preparing you for high-demand analyst roles in any industry.',
  aboutText2: 'Learn with real datasets, build dashboards, write SQL queries, and create Python models with live mentorship at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
