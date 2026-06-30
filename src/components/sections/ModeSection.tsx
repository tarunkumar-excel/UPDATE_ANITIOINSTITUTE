import Link from 'next/link';
import { Wifi, Building2, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

const MODES = [
  {
    icon: Wifi,
    label: 'Online Classes',
    tag: 'Learn Anywhere',
    color: 'from-green-500 to-emerald-600',
    light: 'bg-green-50 border-green-200',
    href: '/courses?mode=online',
    features: ['Live video lectures', 'Recorded sessions', 'Digital study material', 'Online exam & result', 'WhatsApp support group', 'Same certificate'],
    desc: 'Attend live classes from your home. Ideal for students outside Delhi or with busy schedules.',
  },
  {
    icon: Building2,
    label: 'Offline Classes',
    tag: 'In-Person Training',
    color: 'from-primary-600 to-primary-800',
    light: 'bg-primary-50 border-primary-200',
    href: '/courses?mode=offline',
    features: ['Face-to-face learning', 'Hands-on lab practice', 'Printed study material', 'In-centre exam', 'Personal mentoring', 'Group discussions'],
    desc: 'Learn at our Dwarka More centre with expert trainers. 7 AM – 8 PM flexible batches.',
    highlight: true,
  },
  {
    icon: Monitor,
    label: 'Hybrid Mode',
    tag: 'Best of Both',
    color: 'from-purple-500 to-indigo-600',
    light: 'bg-purple-50 border-purple-200',
    href: '/courses?mode=hybrid',
    features: ['Attend online or offline', 'Switch mode anytime', 'Both recordings & labs', 'Flexible schedule', 'Dual access', 'Same fee structure'],
    desc: 'Mix of online and offline. Attend centre when possible, join online otherwise.',
  },
];

export default function ModeSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-subtitle">Flexible Learning</div>
          <h2 className="section-title mb-3">Online & Offline <span className="text-primary-600">Education Modes</span></h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Choose how you want to learn. Same quality curriculum, same ANITIO certification — online, offline, or hybrid.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {MODES.map(({ icon: Icon, label, tag, color, light, href, features, desc, highlight }) => (
            <div key={label} className={`card border ${light} overflow-hidden ${highlight ? 'ring-2 ring-primary-600 shadow-blue' : ''} hover:-translate-y-1 transition-all duration-300`}>
              <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  {highlight && <span className="text-[10px] font-bold bg-gold-400 text-primary-950 px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</span>}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">{tag}</div>
                <h3 className="font-display font-bold text-xl">{label}</h3>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">{desc}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={13} className="text-green-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={href} className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${highlight ? 'bg-primary-700 hover:bg-primary-800 text-white' : 'border-2 border-current hover:bg-gray-50'}`}
                  style={!highlight ? { color: '#1d4ed8' } : {}}>
                  View {label} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
