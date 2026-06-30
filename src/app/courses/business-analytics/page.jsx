import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Business Analytics Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Business Analytics at Anitio Institute, Dwarka More Delhi. Master Excel, SQL, Power BI, Python, Data Visualisation, Predictive Analytics and Google Analytics with placement assistance.',
  keywords: 'Business Analytics Course Delhi, Data Analytics Training Dwarka, Excel Analytics Course, Power BI Training Delhi, Python Analytics Course',
  robots: { index: true, follow: true },
  openGraph: { title: 'Business Analytics Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/business-analytics', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/business-analytics' },
};
const data = {
  courseName: 'Business Analytics Course',
  description: 'Master Business Analytics with Excel, SQL, Power BI, Python, Data Visualisation, Predictive Analytics, and Google Analytics for data-driven business decision-making.',
  heroGradient: 'bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900',
  badgeText: 'Analytics & Intelligence Program',
  badgeColor: 'bg-emerald-500 text-white',
  accentColor: 'green',
  stats: [{ value: '14+', label: 'Analytics Modules' }, { value: '20+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '3500+', label: 'Students Trained' }],
  modules: ['Business Intelligence Fundamentals', 'Excel for Analytics', 'SQL Database Management', 'Power BI Dashboard Development', 'Python for Data Analysis', 'Data Visualization Techniques', 'Statistics for Business', 'Predictive Analytics', 'Machine Learning Basics', 'Google Analytics', 'Financial Analytics', 'Marketing Analytics', 'Project Management', 'Resume Building & Interview Preparation'],
  highlights: ['100% Practical Training', 'Live Projects & Case Studies', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'Certification Support', 'Flexible Timings', 'Lifetime Learning Support'],
  careers: ['Business Analyst', 'Data Analyst', 'Marketing Analyst', 'Financial Analyst', 'Product Analyst', 'Operations Analyst', 'MIS Executive', 'BI Analyst'],
  ctaText: 'Start Your Business Analytics Career Today',
  aboutText1: 'This Business Analytics program covers the complete analytics toolkit needed by modern enterprises — from Excel to Python to Power BI — available at Anitio Institute, Dwarka More, New Delhi.',
  aboutText2: 'Master the tools and techniques to analyse business data, create visual reports, forecast trends, and drive data-driven decisions with hands-on project experience.',
  aboutImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
