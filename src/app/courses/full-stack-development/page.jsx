import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Full Stack Web Development Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Full Stack Web Development at Anitio Institute, Dwarka More Delhi. Master HTML, CSS, JavaScript, React JS, Next.js, Node.js, MongoDB, REST APIs with live projects and placement assistance.',
  keywords: 'Full Stack Development Course Delhi, Web Development Training Dwarka, React JS Course New Delhi, MERN Stack Training Delhi, Node.js Course Delhi',
  robots: { index: true, follow: true },
  openGraph: { title: 'Full Stack Web Development Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/full-stack-development', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/full-stack-development' },
};
const data = {
  courseName: 'Full Stack Web Development Course',
  description: 'Master Full Stack Web Development with HTML, CSS, JavaScript, React JS, Next.js, Node.js, Express, MongoDB, REST APIs, and deployment with live industry projects.',
  heroGradient: 'bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900',
  badgeText: 'MERN Stack Development Program',
  badgeColor: 'bg-slate-500 text-white',
  accentColor: 'indigo',
  stats: [{ value: '16+', label: 'Dev Modules' }, { value: '25+', label: 'Live Projects' }, { value: '100%', label: 'Placement Support' }, { value: '3000+', label: 'Students Trained' }],
  modules: ['HTML5 & CSS3 Fundamentals', 'JavaScript ES6+ Programming', 'Responsive Web Design & Tailwind CSS', 'React JS Development', 'Next.js Framework', 'Node.js & Express.js Backend', 'MongoDB & Database Design', 'REST API Development', 'Authentication & JWT', 'Git & GitHub Version Control', 'Deployment on Vercel & AWS', 'TypeScript Basics', 'Full Stack Project Development', 'React Native Mobile App Basics', 'Soft Skills & Interview Preparation', 'Career Support & Job Placement'],
  highlights: ['100% Practical Coding Training', '25+ Live Dev Projects', 'Industry Expert Trainers', 'Placement Assistance', 'Internship Opportunities', 'GitHub Portfolio Building', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'React JS Developer', 'Next.js Developer', 'MERN Stack Developer', 'Node.js Developer', 'Web Application Developer'],
  ctaText: 'Build Your Full Stack Dev Career Today',
  aboutText1: 'This Full Stack Web Development course is designed for beginners and intermediate learners who want to build modern, scalable web applications using the MERN stack.',
  aboutText2: 'Build 25+ real-world projects, deploy to production, create your GitHub portfolio, and get placed in top tech companies with expert mentorship at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
