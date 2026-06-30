import Link from 'next/link';
import { CheckCircle, Users, Clock, Award, Laptop, Briefcase, BookOpen, HeartHandshake, ArrowRight } from 'lucide-react';

const REASONS = [
  { icon: Award,        title: 'Expert Industry Faculty',    desc: 'Learn from experienced professionals with real industry background in IT, design, and finance.' },
  { icon: Laptop,       title: 'Practical Hands-on Training', desc: 'Each course includes project work, lab practice, and real-world assignments — not just theory.' },
  { icon: Briefcase,    title: '100% Placement Support',     desc: 'Resume building, mock interviews, LinkedIn setup, and job referrals for every student.' },
  { icon: Clock,        title: 'Flexible Batch Timings',     desc: 'Choose from 7 AM to 8 PM slots on weekdays & weekends. Online, offline, and hybrid modes.' },
  { icon: BookOpen,     title: 'Comprehensive Study Material',desc: 'Complete study kits — printed notes, digital resources, video lectures, and practice tests.' },
  { icon: Users,        title: 'Small Batch Size',           desc: 'Limited students per batch ensures personalized attention from trainers for every learner.' },
  { icon: CheckCircle,  title: 'Recognized Certification',  desc: 'Government-recognized and industry-accepted certificates that add real value to your CV.' },
  { icon: HeartHandshake,title: 'Affordable Fee Structure', desc: 'Best quality education at the most affordable fee. EMI options and scholarship available.' },
];

export default function WhyChooseSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="section-subtitle">Why ANITIO?</div>
            <h2 className="section-title mb-5">Why Choose <span className="text-primary-600">ANITIO Institute?</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Since 2015, ANITIO has been the most trusted computer training institute in Dwarka More. Our focus is on practical skills, real industry exposure, and student success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/courses" className="btn-primary">
              Explore Our Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-5">
            {/* Address Card */}
            <div className="card p-6 border border-gray-200">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-4">📍 Visit Our Centre</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">ANITIO Information Technology & Skill Development LLP</p>
                <p>H-20, Sewak Park, Dwarka Mor Metro Station<br />Pillar No. 772, Uttam Nagar<br />New Delhi – 110059</p>
                <p>🕐 Mon–Sat: 9:00 AM – 6:00 PM</p>
                <p>📞 <a href="tel:+919289438428" className="text-primary-600 hover:underline">+91 92894 38428</a> &nbsp;|&nbsp; <a href="tel:+919971969158" className="text-primary-600 hover:underline">+91 99719 69158</a></p>
                <p>✉️ <a href="mailto:anitioinstitute@gmail.com" className="text-primary-600 hover:underline">anitioinstitute@gmail.com</a></p>
                <p>🌐 <a href="https://www.anitioinstitute.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.anitioinstitute.com</a></p>
              </div>
              <a href="https://maps.google.com/?q=Sewak+Park+Dwarka+More+New+Delhi" target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-700 hover:underline">
                Open in Google Maps →
              </a>
            </div>
            {/* Accreditation */}
            <div className="card p-6 bg-gradient-to-br from-gold-50 to-amber-50 border border-gold-200">
              <h3 className="font-display font-bold text-gray-900 mb-3">🏅 Accreditations & Recognition</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Ministry of Skill Development Recognized', 'NSDC Affiliated', 'ISO Certified Training Centre', 'Govt. of India Empanelled'].map(a => (
                  <div key={a} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <CheckCircle size={12} className="text-green-600 flex-shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
