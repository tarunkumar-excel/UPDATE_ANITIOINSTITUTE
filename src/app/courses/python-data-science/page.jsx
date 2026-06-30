import CoursePage from '@/components/CourseLayout';

export const metadata = {
  title: 'Python & Data Science Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Python Programming and Data Science at Anitio Institute, Dwarka More New Delhi. Master Pandas, NumPy, Machine Learning, Data Visualisation with 100% practical training and placement assistance.',
  keywords: 'Python Course Delhi, Data Science Course Dwarka, Python Training New Delhi, Data Science Institute Delhi, Machine Learning Course, NumPy Pandas Training',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Python & Data Science Course | Anitio Institute Dwarka More Delhi',
    description: 'Master Python Programming and Data Science with live projects and placement support at Anitio Institute.',
    type: 'website',
    url: 'https://anitio-institute-website-project.vercel.app/courses/python-data-science',
    siteName: 'Anitio Institute',
  },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/python-data-science' },
};

const data = {
  courseName: 'Python & Data Science Course',
  description: 'Master Python Programming and Data Science with hands-on training in Pandas, NumPy, Machine Learning, Data Visualisation, and real-world data projects.',
  heroGradient: 'bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900',
  badgeText: 'Data & Programming Program',
  badgeColor: 'bg-blue-500 text-white',
  accentColor: 'blue',
  stats: [
    { value: '16+', label: 'Modules' },
    { value: '20+', label: 'Live Projects' },
    { value: '100%', label: 'Placement Support' },
    { value: '4000+', label: 'Students Trained' },
  ],
  modules: [
    'Introduction to Python Programming',
    'Python Data Types & Control Flow',
    'Functions, Modules & OOP',
    'File Handling & Exception Handling',
    'NumPy for Numerical Computing',
    'Pandas for Data Analysis',
    'Data Cleaning & Preprocessing',
    'Data Visualisation with Matplotlib & Seaborn',
    'Statistical Analysis',
    'Introduction to Machine Learning',
    'Supervised & Unsupervised Learning',
    'Scikit-Learn Library',
    'SQL for Data Science',
    'Power BI / Tableau Integration',
    'Data Science Projects',
    'Interview Preparation',
  ],
  highlights: [
    '100% Practical Training',
    'Live Data Projects',
    'Industry Expert Trainers',
    'Placement Assistance',
    'Internship Opportunities',
    'Industry Recognised Certification',
    'Flexible Learning Modes',
    'Lifetime Access to Study Material',
  ],
  careers: [
    'Data Scientist',
    'Python Developer',
    'Data Analyst',
    'ML Engineer',
    'Business Intelligence Analyst',
    'Data Engineer',
    'Research Analyst',
    'AI/ML Associate',
  ],
  ctaText: 'Launch Your Data Science Career Today',
  aboutText1: 'This Python & Data Science program is designed for students, graduates, and professionals who want to break into one of the most in-demand fields. Available at Anitio Institute, Dwarka More, New Delhi.',
  aboutText2: 'Gain hands-on experience building real data pipelines, ML models, and visualisation dashboards with expert guidance and live project mentorship.',
  aboutImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop',
};

export default function Page() {
  return <CoursePage {...data} />;
}
