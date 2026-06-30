import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Target, Eye, Heart, Users, Award, BookOpen, Laptop, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us – ANITIO Information Technology & Skill Development LLP',
  description: 'Learn about ANITIO IT & Skill Development LLP — a professional training institute in Dwarka More, New Delhi offering IT courses and skill development programs.',
};

const TEAM = [
  { name: 'Director', role: 'Founder & Director', initials: 'AN', desc: 'Visionary leader with 10+ years of experience in IT education and skill development.' },
  { name: 'Head of Training', role: 'Lead Trainer & Academic Head', initials: 'HT', desc: 'Expert trainer with industry experience in software development and IT education.' },
  { name: 'Career Advisor', role: 'Placement & Career Counsellor', initials: 'CA', desc: 'Dedicated to helping students find the right career path and placement opportunities.' },
];

const VALUES = [
  { icon: Target,  title: 'Our Mission',  desc: 'To develop skilled professionals who are ready for real-world challenges by providing expert guidance, practical exposure, and industry-relevant courses.' },
  { icon: Eye,     title: 'Our Vision',   desc: 'To become the most trusted IT training institute in Delhi NCR, recognized for transforming students into confident, job-ready IT professionals.' },
  { icon: Heart,   title: 'Our Values',   desc: 'Excellence in teaching, practical hands-on training, integrity, student-first approach, and commitment to delivering quality IT education.' },
];

const COURSES_BRIEF = [
  { icon: Laptop,    label: 'Basic Computer & DCA',      sub: 'Beginner to intermediate' },
  { icon: BookOpen,  label: 'Advanced Excel & MIS',       sub: 'Corporate ready reporting' },
  { icon: Award,     label: 'Web Development',            sub: 'HTML, CSS, JS, React' },
  { icon: Users,     label: 'Python & Programming',       sub: 'C, C++, Python courses' },
  { icon: Target,    label: 'Data Analysis',              sub: 'Python, Power BI' },
  { icon: Eye,       label: 'Tally & Accounting',         sub: 'Tally Prime + GST' },
  { icon: Heart,     label: 'Graphic Designing',          sub: 'Photoshop, CorelDRAW' },
  { icon: Award,     label: 'Skill Development',          sub: 'Job-oriented training' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">About Us</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            About <span className="text-gold-400">ANITIO</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
            ANITIO Information Technology and Skill Development LLP — a professional IT training institute empowering students with practical skills and career-oriented education in New Delhi.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/courses" className="btn-primary py-2.5">Explore Courses <ArrowRight size={15} /></Link>
            <Link href="/contact" className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-14 space-y-16">

        {/* Who we are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-subtitle">Who We Are</div>
            <h2 className="section-title mb-5">Empowering Students with <span className="text-primary-600">Practical IT Skills</span></h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">ANITIO Information Technology and Skill Development LLP</strong> is a professional training institute focused on empowering students with practical IT skills and career-oriented education.
              </p>
              <p>
                We aim to bridge the gap between theoretical knowledge and industry requirements by providing hands-on training in various technical and professional domains. Our programs are designed to be immediately applicable in real-world work environments.
              </p>
              <p>
                Our mission is to develop skilled professionals who are ready for real-world challenges. We provide expert guidance, practical exposure, and industry-relevant courses to help students achieve their career goals.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                'Expert Industry Faculty',
                'Hands-on Practical Training',
                'Job Placement Support',
                'Flexible Batch Timings',
                'Affordable Course Fees',
                'Recognized Certification',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '5,000+', label: 'Students Trained', color: 'bg-primary-600' },
              { val: '8+',     label: 'Courses Offered',  color: 'bg-gold-500' },
              { val: '100%',   label: 'Placement Support',color: 'bg-green-600' },
              { val: '10+',    label: 'Years Experience', color: 'bg-purple-600' },
            ].map(({ val, label, color }) => (
              <div key={label} className={`${color} rounded-2xl p-6 text-white text-center`}>
                <div className="text-4xl font-display font-bold mb-1">{val}</div>
                <div className="text-sm opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div>
          <div className="text-center mb-10">
            <div className="section-subtitle">Our Foundation</div>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-8 text-center group hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Icon size={26} className="text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses offered */}
        <div className="bg-white rounded-3xl shadow-card p-10">
          <div className="text-center mb-10">
            <div className="section-subtitle">What We Offer</div>
            <h2 className="section-title">Our Training Programs</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">From beginner computer courses to advanced programming and design — we cover all aspects of IT and skill development.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COURSES_BRIEF.map(({ icon: Icon, label, sub }) => (
              <Link key={label} href="/courses" className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group">
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{label}</div>
                <div className="text-xs text-gray-500">{sub}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="btn-primary">View All Courses <ArrowRight size={16} /></Link>
          </div>
        </div>

        {/* Faculty */}
        <div>
          <div className="text-center mb-10">
            <div className="section-subtitle">Our Team</div>
            <h2 className="section-title">Expert Faculty & Staff</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map(({ name, role, initials, desc }) => (
              <div key={name} className="card p-7 text-center group hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {initials}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base">{name}</h3>
                <div className="text-primary-600 text-sm font-medium mb-3">{role}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-10 text-white text-center">
          <h2 className="font-display font-bold text-3xl mb-3">Ready to Start Your IT Career?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">Visit us at our institute or contact us today to learn about admissions, courses, and batch schedules.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+919289438428" className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
              <Phone size={15} /> +91 92894 38428
            </a>
            <a href="tel:+919971969158" className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
              <Phone size={15} /> +91 99719 69158
            </a>
            <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
              <Mail size={15} /> anitioinstitute@gmail.com
            </a>
          </div>
          <div className="flex items-start justify-center gap-2 text-gray-300 text-sm mb-6">
            <MapPin size={15} className="text-gold-400 flex-shrink-0 mt-0.5" />
            H-20, Sewak Park, Dwarka Mor Metro Station, Uttam Nagar, Pillar No. 772, New Delhi, India
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Enroll Now <ArrowRight size={15} /></Link>
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
