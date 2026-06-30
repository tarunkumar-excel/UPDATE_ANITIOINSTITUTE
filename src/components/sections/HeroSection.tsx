'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Monitor, Building2, GraduationCap, Users, Award, Wifi } from 'lucide-react';

const SLIDES = [
  {
    tag: '🎓 Admissions Open – New Batches Starting',
    heading: 'Empowering Skills,\nBuilding IT Careers',
    sub: 'ANITIO Information Technology & Skill Development LLP — professional training institute in Dwarka More, New Delhi. Practical learning, expert faculty, 100% placement support.',
    cta: { label: 'Enroll Now', href: '/contact' },
    cta2: { label: 'Explore Courses', href: '/courses' },
    pills: ['Job-Oriented Programs', 'Online & Offline', 'Placement Support'],
    gradient: 'from-primary-950 via-primary-900 to-primary-800',
  },
  {
    tag: '🌐 Online Courses Available – Learn From Home',
    heading: 'Study Online or\nCome to Our Centre',
    sub: 'Choose your mode — study from home with our Live Online Classes or attend in-person at Dwarka More. Same quality, same certificate, flexible timing.',
    cta: { label: 'Online Courses', href: '/courses?mode=online' },
    cta2: { label: 'Offline Classes', href: '/courses?mode=offline' },
    pills: ['Live Online Classes', 'In-Person Training', 'Hybrid Available'],
    gradient: 'from-primary-950 via-blue-950 to-primary-900',
  },
  {
    tag: '🤖 NEW: AI & Machine Learning Course Launched!',
    heading: 'Future-Ready IT\nSkills for 2025',
    sub: 'From Basic Computer to AI & Machine Learning — 30+ courses designed to make you job-ready. Expert trainers, hands-on projects, real-world skills.',
    cta: { label: 'View AI Course', href: '/courses?category=ai' },
    cta2: { label: 'All Courses', href: '/courses' },
    pills: ['AI & ML', 'Web Development', 'Data Analytics'],
    gradient: 'from-primary-950 via-indigo-950 to-primary-900',
  },
  {
    tag: '🏫 Franchise Opportunity – Start Your Institute',
    heading: 'Own a Computer\nInstitute with ANITIO',
    sub: 'Join India\'s growing IT education network. Low investment, high returns, complete branding, exam authority and dedicated support for franchise partners.',
    cta: { label: 'Franchise Details', href: '/franchise' },
    cta2: { label: 'Contact Us', href: '/contact' },
    pills: ['Low Investment', 'High Returns', 'Full Support'],
    gradient: 'from-primary-950 via-primary-900 to-blue-950',
  },
];

const QUICK_STATS = [
  { icon: Users,        value: '5,000+', label: 'Students' },
  { icon: GraduationCap,value: '30+',    label: 'Courses' },
  { icon: Award,        value: '100%',   label: 'Placement' },
  { icon: Building2,    value: '10+',    label: 'Years' },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section className={`relative bg-gradient-to-br ${slide.gradient} text-white overflow-hidden transition-all duration-700`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-in">
            <div className="inline-block bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-gold-500/30">
              {slide.tag}
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl xl:text-6xl leading-tight mb-5 whitespace-pre-line">
              {slide.heading.split('\n')[0]}{'\n'}
              <span className="text-gold-400">{slide.heading.split('\n')[1]}</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
              {slide.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-7">
              {slide.pills.map(p => (
                <span key={p} className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                  <CheckCircle size={11} className="text-gold-400" /> {p}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href={slide.cta.href} className="btn-primary py-3 px-7 text-base">
                {slide.cta.label} <ArrowRight size={16} />
              </Link>
              <Link href={slide.cta2.href} className="flex items-center gap-2 text-white border-2 border-white/30 hover:border-white/60 px-7 py-3 rounded-xl text-base font-semibold transition-colors">
                {slide.cta2.label}
              </Link>
            </div>
            {/* Mode Badges */}
            <div className="flex gap-3 flex-wrap">
              <Link href="/courses?mode=online" className="flex items-center gap-2 bg-green-500/20 border border-green-500/40 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                <Wifi size={13} /> Online Classes
              </Link>
              <Link href="/courses?mode=offline" className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                <Building2 size={13} /> Offline Classes
              </Link>
              <Link href="/courses?mode=hybrid" className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                <Monitor size={13} /> Hybrid Mode
              </Link>
            </div>
          </div>

          {/* Right — Stats + Quick Info Card */}
          <div className="hidden lg:flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {QUICK_STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors">
                  <Icon size={24} className="text-gold-400 mx-auto mb-2" />
                  <div className="font-display font-bold text-2xl text-white">{value}</div>
                  <div className="text-xs text-gray-300">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-display font-bold text-white text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/courses" className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group">
                  <span className="text-sm font-semibold text-white">Browse All Courses</span>
                  <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/exam" className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group">
                  <span className="text-sm font-semibold text-white">Online Exam Portal</span>
                  <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/results" className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group">
                  <span className="text-sm font-semibold text-white">Check Exam Results</span>
                  <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/payment" className="flex items-center justify-between bg-gold-500/30 hover:bg-gold-500/40 px-4 py-3 rounded-xl transition-colors group border border-gold-500/40">
                  <span className="text-sm font-semibold text-gold-300">Pay Fee Online</span>
                  <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/franchise" className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group">
                  <span className="text-sm font-semibold text-white">Franchise Enquiry</span>
                  <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/40'}`} />
        ))}
      </div>
    </section>
  );
}
