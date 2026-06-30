import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Building2, TrendingUp, Award, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Franchise Opportunity – ANITIO IT & Skill Development',
  description: 'Start your own computer institute with ANITIO franchise. Low investment, high returns, complete support. Associate, Sub Franchise, and Master Franchise options available.',
};

const types = [
  {
    name: 'Associate Center',
    invest: '₹50K – ₹1 Lakh',
    area: 'Single Town',
    features: ['Basic Branding', 'Course Materials', 'Online Support', 'Certificate Authority'],
  },
  {
    name: 'Sub Franchise',
    invest: '₹1 Lakh – ₹2.5 Lakh',
    area: 'District Level',
    features: ['Full Branding Kit', 'Faculty Training', 'Admission System', 'Marketing Support', 'Exam Authority'],
    highlight: true,
  },
  {
    name: 'Master Franchise',
    invest: '₹2.5 Lakh – ₹5 Lakh',
    area: 'State Level',
    features: ['Exclusive Territory', 'Sub-Franchise Rights', 'Complete System Access', 'Dedicated Manager', 'Premium Support'],
  },
];

const benefits = [
  { icon: TrendingUp, title: 'High ROI', desc: '₹3–5 Lakh annual return with growing IT education demand.' },
  { icon: Award, title: 'Brand Power', desc: "Leverage ANITIO's 14+ year reputation and recognized certifications." },
  { icon: Building2, title: 'Student Network', desc: 'Centralized admission system, results portal, and student database.' },
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Franchise Opportunity</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Start Your Own <span className="text-gold-400">Computer Institute</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
            Join India's fastest growing IT education franchise network. Low investment, high returns, and complete support from ANITIO.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="btn-primary py-2.5">Apply Now <ArrowRight size={15} /></Link>
            <a href="tel:+919289438428" className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-14">
        {/* Benefits */}
        <div className="text-center mb-10">
          <div className="section-subtitle">Why Choose ANITIO Franchise</div>
          <h2 className="section-title">Grow with a Trusted Brand</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-700 transition-colors">
                <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="text-center mb-10">
          <h2 className="section-title">Franchise Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {types.map(({ name, invest, area, features, highlight }) => (
            <div key={name} className={`rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 ${highlight ? 'bg-primary-900 border-primary-700 text-white shadow-blue' : 'bg-white border-gray-200 hover:shadow-card'}`}>
              {highlight && (
                <div className="inline-block bg-gold-500 text-primary-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-3">Most Popular</div>
              )}
              <h3 className={`font-display font-bold text-xl mb-1 ${highlight ? 'text-white' : 'text-primary-900'}`}>{name}</h3>
              <div className={`text-sm font-semibold mb-1 ${highlight ? 'text-gold-400' : 'text-gold-600'}`}>{invest}</div>
              <div className={`text-xs mb-4 flex items-center gap-1 ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                <MapPin size={11} />{area}
              </div>
              <div className="space-y-2 mb-6">
                {features.map((f) => (
                  <div key={f} className={`flex items-center gap-2 text-sm ${highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                    <CheckCircle size={14} className={highlight ? 'text-gold-400' : 'text-green-500'} />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/contact" className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors ${highlight ? 'bg-gold-500 hover:bg-gold-600 text-primary-950' : 'bg-primary-700 hover:bg-primary-800 text-white'}`}>
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="card p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-2xl text-primary-900 mb-3">Interested in a Franchise?</h3>
          <p className="text-gray-600 text-sm mb-6">Contact our franchise team today. We'll guide you through the entire process.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919289438428" className="flex items-center gap-2 btn-primary">
              <Phone size={15} /> +91 92894 38428
            </a>
            <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-2 btn-outline">
              <Mail size={15} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
