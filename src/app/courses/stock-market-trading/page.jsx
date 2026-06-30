import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Stock Market Trading Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Stock Market Trading at Anitio Institute, Dwarka More Delhi. Master Technical Analysis, Candlestick Patterns, Intraday Trading, Options, Futures and live market sessions with expert trainers.',
  keywords: 'Stock Market Course Delhi, Share Market Training Dwarka, Trading Course New Delhi, Intraday Trading Delhi, Options Trading Course',
  robots: { index: true, follow: true },
  openGraph: { title: 'Stock Market Trading Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/stock-market-trading', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/stock-market-trading' },
};
const data = {
  courseName: 'Stock Market Trading Course',
  description: 'Master Stock Market Trading with Technical Analysis, Candlestick Patterns, Intraday & Swing Trading, Options, Futures, Risk Management, and live market sessions.',
  heroGradient: 'bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900',
  badgeText: 'Stock Market & Trading Program',
  badgeColor: 'bg-green-500 text-white',
  accentColor: 'green',
  stats: [{ value: '14+', label: 'Trading Modules' }, { value: '15+', label: 'Live Sessions' }, { value: '100%', label: 'Practical Training' }, { value: '3000+', label: 'Students Trained' }],
  modules: ['Introduction to Stock Market', 'Basics of Trading & Investing', 'Technical Analysis Fundamentals', 'Candlestick Chart Patterns', 'Support & Resistance Strategy', 'Intraday Trading Techniques', 'Swing Trading Strategies', 'Options Trading Basics', 'Future & Derivatives Market', 'Risk Management & Psychology', 'Fundamental Analysis', 'Trading with Indicators', 'Portfolio Management', 'Live Market Practical Sessions'],
  highlights: ['100% Practical Training', 'Live Market Sessions', 'Expert Trader Mentors', 'Trading Platform Practice', 'Risk Management Training', 'Demat & Trading Account Setup', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Stock Trader', 'Technical Analyst', 'Equity Research Analyst', 'Investment Advisor', 'Portfolio Manager', 'Derivatives Trader', 'Commodity Trader', 'Freelance Trader'],
  ctaText: 'Start Your Stock Market Journey Today',
  aboutText1: 'This Stock Market Trading course is designed for beginners and intermediate learners who want to learn profitable trading strategies in Indian equity, options, and futures markets.',
  aboutText2: 'Learn to read charts, trade live markets, manage risk, and build a profitable trading portfolio with experienced market professionals at Anitio Institute, Dwarka More, New Delhi.',
  aboutImage: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
