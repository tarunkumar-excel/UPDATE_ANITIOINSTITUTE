import Link from 'next/link';
import { Building2, TrendingUp, Award, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const PLANS = [
  { name: 'Associate Centre', invest: '₹50K – ₹1L',      area: 'Town Level',  features: ['Basic Branding', 'Course Materials', 'Certificate Authority', 'Online Support'] },
  { name: 'Sub Franchise',    invest: '₹1L – ₹2.5L',     area: 'District',    features: ['Full Branding Kit', 'Faculty Training', 'Admission System', 'Marketing Support', 'Exam Authority'], highlight: true },
  { name: 'Master Franchise', invest: '₹2.5L – ₹5L',     area: 'State Level', features: ['Exclusive Territory', 'Sub-Franchise Rights', 'Complete System', 'Dedicated Manager', 'Premium Support'] },
];

export default function FranchiseSection() {
  return (
    <section className="section bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Franchise Opportunity</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Start Your Own <span className="text-gold-400">Computer Institute</span>
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Join India's fastest-growing IT education franchise. Low investment, high returns, complete support from ANITIO.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: TrendingUp,  title: 'High ROI',        desc: '₹3–5 Lakh annual return potential with growing IT education demand.' },
            { icon: Award,       title: 'Brand Power',     desc: 'Leverage ANITIO\'s 10+ year reputation and recognized certifications.' },
            { icon: Building2,   title: 'Full System Access', desc: 'Admission portal, student database, exam system & results platform.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {PLANS.map(({ name, invest, area, features, highlight }) => (
            <div key={name} className={`rounded-2xl p-5 border ${highlight ? 'bg-white text-gray-900 border-gold-400 shadow-gold' : 'bg-white/10 text-white border-white/20'}`}>
              {highlight && <div className="text-[10px] font-bold bg-gold-400 text-primary-950 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Most Popular</div>}
              <h3 className={`font-display font-bold text-lg mb-1 ${highlight ? 'text-primary-900' : 'text-white'}`}>{name}</h3>
              <div className={`text-2xl font-bold mb-1 ${highlight ? 'text-primary-700' : 'text-gold-400'}`}>{invest}</div>
              <div className={`text-xs mb-4 ${highlight ? 'text-gray-500' : 'text-gray-300'}`}>{area}</div>
              <ul className="space-y-1.5 mb-4">
                {features.map(f => (
                  <li key={f} className={`flex items-center gap-2 text-xs ${highlight ? 'text-gray-700' : 'text-gray-300'}`}>
                    <CheckCircle size={11} className="text-green-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/franchise" className="btn-secondary py-3 px-8 justify-center">
            Full Franchise Details <ArrowRight size={16} />
          </Link>
          <a href="tel:+919289438428" className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-xl transition-colors">
            <Phone size={16} /> Call: +91 92894 38428
          </a>
        </div>
      </div>
    </section>
  );
}
