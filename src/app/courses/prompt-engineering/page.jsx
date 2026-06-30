import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Prompt Engineering Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Prompt Engineering at Anitio Institute, Dwarka More Delhi. Master ChatGPT, Generative AI, Midjourney, DALL-E, Custom GPT development and AI automation with practical training.',
  keywords: 'Prompt Engineering Course Delhi, ChatGPT Training Dwarka, Generative AI Course, AI Prompting Course Delhi, Midjourney Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Prompt Engineering Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/prompt-engineering', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/prompt-engineering' },
};
const data = {
  courseName: 'Prompt Engineering Course',
  description: 'Master ChatGPT, Generative AI tools, advanced prompt writing, image generation, business automation and Custom GPT development with practical projects.',
  heroGradient: 'bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-900',
  badgeText: 'AI & Generative AI Program',
  badgeColor: 'bg-purple-500 text-white',
  accentColor: 'purple',
  stats: [{ value: '14+', label: 'AI Modules' }, { value: '15+', label: 'AI Projects' }, { value: '100%', label: 'Practical Training' }, { value: '2000+', label: 'Students Trained' }],
  modules: ['Introduction to Prompt Engineering', 'Understanding Generative AI', 'ChatGPT Fundamentals', 'Advanced Prompt Writing', 'Prompt Design Techniques', 'AI Content Generation', 'Image Generation Prompts', 'Midjourney & DALL·E Prompting', 'Business AI Automation', 'Prompt Chaining Techniques', 'AI Tools for Productivity', 'Custom GPT Development', 'AI Ethics & Responsible Usage', 'Real-World Prompt Engineering Projects'],
  highlights: ['100% Practical Training', 'Live AI Projects', 'Expert AI Trainers', 'Placement Assistance', 'AI Tool Certification', 'ChatGPT Mastery', 'Business AI Automation', 'Lifetime Access to Material'],
  careers: ['AI Prompt Engineer', 'AI Content Specialist', 'Generative AI Consultant', 'AI Automation Specialist', 'AI Product Manager', 'Digital Content Creator', 'AI Tools Trainer', 'Freelance AI Specialist'],
  ctaText: 'Master Prompt Engineering & AI Today',
  aboutText1: 'This Prompt Engineering course is designed for students, professionals, content creators, and entrepreneurs who want to harness the power of generative AI tools for business and career growth.',
  aboutText2: 'Learn to write powerful prompts, build Custom GPTs, automate business tasks, and create AI-generated content with live project guidance from industry experts.',
  aboutImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
