import CoursePage from '@/components/CourseLayout';
export const metadata = {
  title: 'Technical Analysis Course in Delhi | Anitio Institute — Dwarka More',
  description: 'Learn Technical Analysis at Anitio Institute, Dwarka More Delhi. Master candlestick patterns, chart analysis, RSI, MACD, intraday trading, swing trading with live market sessions.',
  keywords: 'Technical Analysis Course Delhi, Share Market Training Dwarka, Stock Market Course New Delhi, Trading Course Delhi, Chart Analysis Training',
  robots: { index: true, follow: true },
  openGraph: { title: 'Technical Analysis Course | Anitio Institute Dwarka More Delhi', type: 'website', url: 'https://anitio-institute-website-project.vercel.app/courses/technical-analysis', siteName: 'Anitio Institute' },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses/technical-analysis' },
};
const data = {
  courseName: 'Technical Analysis Course',
  description: 'Master Technical Analysis with candlestick patterns, chart patterns, RSI, MACD, Bollinger Bands, intraday & swing trading strategies, and live market sessions.',
  heroGradient: 'bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900',
  badgeText: 'Stock Market & Trading Program',
  badgeColor: 'bg-green-500 text-white',
  accentColor: 'green',
  stats: [{ value: '14+', label: 'Trading Modules' }, { value: '10+', label: 'Live Sessions' }, { value: '100%', label: 'Practical Training' }, { value: '2500+', label: 'Students Trained' }],
  modules: ['Introduction to Stock Market', 'Basics of Technical Analysis', 'Candlestick Pattern Analysis', 'Chart Patterns & Trends', 'Support & Resistance Levels', 'Moving Averages & Indicators', 'RSI, MACD & Bollinger Bands', 'Volume & Price Action Analysis', 'Intraday Trading Strategies', 'Swing Trading Techniques', 'Risk Management & Psychology', 'Options & Futures Basics', 'Trading Setup & Live Market Analysis', 'Real-Time Trading Case Studies'],
  highlights: ['100% Practical Market Training', 'Live Trading Sessions', 'Expert Trader Mentors', 'Placement Assistance', 'Trading Platform Practice', 'Risk Management Training', 'Online & Offline Classes', 'Lifetime Access to Material'],
  careers: ['Stock Market Trader', 'Technical Analyst', 'Equity Research Analyst', 'Investment Advisor', 'Portfolio Manager', 'Derivatives Trader', 'Research Analyst', 'Financial Advisor'],
  ctaText: 'Master the Stock Market with Technical Analysis',
  aboutText1: 'This Technical Analysis course is designed for beginners and intermediate traders who want to make data-driven trading decisions in the Indian stock market.',
  aboutText2: 'Learn to read charts, identify patterns, use indicators, and execute live trades with risk management strategies taught by experienced market professionals at Anitio Institute.',
  aboutImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
};
export default function Page() { return <CoursePage {...data} />; }
