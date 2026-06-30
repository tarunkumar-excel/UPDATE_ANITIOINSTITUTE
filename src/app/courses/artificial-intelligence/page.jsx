import CoursePage from '@/components/CourseLayout';

export const metadata = {
  title: 'Artificial Intelligence Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Join the best Artificial Intelligence Course at Anitio Institute, Dwarka More New Delhi. Learn ML, Deep Learning, NLP, Computer Vision, Generative AI with 100% practical training and placement assistance.',
  keywords: 'Artificial Intelligence Course Delhi, AI Course Dwarka, Machine Learning Training New Delhi, Deep Learning Course, AI Institute Delhi, Generative AI Course, ChatGPT Training',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Artificial Intelligence Course | Anitio Institute Dwarka More Delhi',
    description: 'Master AI, Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI with live projects and placement support at Anitio Institute.',
    type: 'website',
    url: 'https://anitio-institute-website-project.vercel.app/courses/artificial-intelligence',
    siteName: 'Anitio Institute',
  },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/artificial-intelligence' },
};

const data = {
  courseName: 'Artificial Intelligence Course',
  tagline: 'Future Technology Program',
  description: 'Master Artificial Intelligence with hands-on training in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI technologies.',
  heroGradient: 'bg-gradient-to-r from-black via-gray-900 to-indigo-900',
  badgeText: 'Future Technology Program',
  badgeColor: 'bg-indigo-600 text-white',
  accentColor: 'indigo',
  stats: [
    { value: '14+', label: 'AI Modules' },
    { value: '25+', label: 'Live Projects' },
    { value: '100%', label: 'Placement Support' },
    { value: '5000+', label: 'Students Trained' },
  ],
  modules: [
    'Introduction to Artificial Intelligence',
    'Python Programming for AI',
    'Machine Learning Fundamentals',
    'Deep Learning Concepts',
    'Neural Networks',
    'Natural Language Processing (NLP)',
    'Computer Vision',
    'Data Science for AI',
    'TensorFlow & Keras',
    'AI Model Deployment',
    'Chatbot Development',
    'Generative AI & ChatGPT',
    'AI Ethics & Responsible AI',
    'Live AI Projects & Case Studies',
  ],
  highlights: [
    '100% Practical Training',
    'Live Industry Projects',
    'AI Expert Trainers',
    'Placement Assistance',
    'Internship Opportunities',
    'Industry Recognised Certification',
    'Flexible Learning Modes',
    'Lifetime Access to Study Material',
  ],
  careers: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Scientist',
    'NLP Engineer',
    'Computer Vision Engineer',
    'Business Intelligence Analyst',
    'Automation Engineer',
    'AI Research Associate',
  ],
  ctaText: 'Become an AI Professional Today',
  aboutText1: 'This Artificial Intelligence training program is designed for beginners, students, working professionals, and tech enthusiasts who want to build a successful career in AI technologies at Anitio Institute, Dwarka More, New Delhi.',
  aboutText2: 'Learn real-world AI implementation with Machine Learning algorithms, Deep Learning models, ChatGPT integration, and AI automation tools with live project experience.',
  aboutImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
};

export default function Page() {
  return <CoursePage {...data} />;
}
