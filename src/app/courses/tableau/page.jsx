import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Tableau Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Tableau at Anitio Institute, Dwarka More New Delhi. Master data visualisation, interactive dashboards, Tableau Server and business intelligence with live projects.',
  keywords: 'Tableau Course Delhi, Tableau Training Dwarka, Data Visualisation Course New Delhi, Business Intelligence Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Tableau Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/tableau', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/tableau' },
};
const data = {
  courseName: 'Tableau Course',
  description: 'Master Tableau with hands-on training in data visualisation, interactive dashboards, calculated fields, Tableau Server, and real-time business intelligence reporting.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-cyan-800 to-teal-800',
  badgeText: 'Data Visualisation Program',
  badgeColor: 'bg-cyan-500 text-white',
  accentColor: 'teal',
  stats: [{ value: '14+', label: 'Modules' }, { value: '18+', label: 'Dashboard Projects' }, { value: '100%', label: 'Placement Support' }, { value: '2500+', label: 'Students Trained' }],
  modules: ['Introduction to Tableau', 'Tableau Desktop Installation', 'Connecting Data Sources', 'Data Cleaning & Preparation', 'Interactive Dashboard Design', 'Charts & Graph Visualizations', 'Calculated Fields & Parameters', 'Advanced Tableau Functions', 'Storytelling with Data', 'Tableau Server & Tableau Cloud', 'SQL Integration with Tableau', 'Business Intelligence Reporting', 'Real-Time Data Analytics', 'Live Projects & Case Studies'],
  highlights: ['100% Practical Training', 'Live Dashboard Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Tableau Desktop Certification', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Tableau Developer', 'Data Analyst', 'Business Intelligence Analyst', 'Data Visualisation Specialist', 'Analytics Consultant', 'MIS Analyst', 'Reporting Analyst', 'BI Developer'],
  ctaText: 'Master Tableau & Land Your Dream Job',
  aboutText1: 'This Tableau training is designed for data analysts, BI professionals, and students who want to master industry-leading data visualisation tools at Anitio Institute, Dwarka More.',
  aboutText2: 'Build stunning interactive dashboards, connect real data sources, and publish professional reports with expert mentorship and live project experience.',
  aboutImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
