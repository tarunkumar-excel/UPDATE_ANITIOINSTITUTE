import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import NoticesSection from '@/components/sections/NoticesSection';
import CoursesSection from '@/components/sections/CoursesSection';
import ModeSection from '@/components/sections/ModeSection';
import StatsSection from '@/components/sections/StatsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import FranchiseSection from '@/components/sections/FranchiseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ExamSection from '@/components/sections/ExamSection';

export const metadata: Metadata = {
  title: 'ANITIO Information Technology & Skill Development LLP | Dwarka More, New Delhi',
  description: 'ANITIO — Premier IT training institute at Dwarka More, New Delhi. Online & Offline courses in Computer, DCA, Excel, Web Dev, Python, Tally, Graphic Design, AI & more. 100% Placement Support. Franchise Available.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NoticesSection />
      <ModeSection />
      <CoursesSection />
      <StatsSection />
      <ExamSection />
      <WhyChooseSection />
      <FranchiseSection />
      <TestimonialsSection />
    </>
  );
}
