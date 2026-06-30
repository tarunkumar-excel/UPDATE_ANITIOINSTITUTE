import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, Users, Award, Shield, BookOpen } from 'lucide-react';
import { SOCIALS } from '@/lib/utils';
import LazyMap from '@/components/ui/LazyMap';

const PROGRAMS = [
  { href: '/courses?category=basic',            label: 'Basic Computer / DCA' },
  { href: '/courses?category=excel',            label: 'Advanced Excel & MIS' },
  { href: '/courses?category=web',              label: 'Web Development' },
  { href: '/courses?category=programming',      label: 'Python / C / C++' },
  { href: '/courses?category=ai',               label: 'AI & Machine Learning' },
  { href: '/courses?category=data',             label: 'Data Analytics' },
  { href: '/courses?category=tally',            label: 'Tally Prime + GST' },
  { href: '/courses?category=design',           label: 'Graphic Designing' },
  { href: '/courses?category=digital-marketing',label: 'Digital Marketing' },
  { href: '/courses',                           label: 'All Courses →' },
];

const QUICK = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About ANITIO' },
  { href: '/franchise',  label: 'Franchise Opportunity' },
  { href: '/results',    label: 'Check Results' },
  { href: '/exam',       label: 'Online Exam' },
  { href: '/schedule',   label: 'Batch Schedule' },
  { href: '/payment',    label: 'Pay Fee Online' },
  { href: '/contact',    label: 'Contact Us' },
  { href: '/privacy',    label: 'Privacy Policy' },
  { href: '/terms',      label: 'Terms & Conditions' },
];

const STATS = [
  { icon: Users,    value: '5,000+', label: 'Students Trained' },
  { icon: BookOpen, value: '30+',    label: 'Courses Offered' },
  { icon: Award,    value: '100%',   label: 'Placement Support' },
  { icon: Shield,   value: '10+',    label: 'Years Experience' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Stats Strip */}
      <div className="bg-primary-900 border-b border-primary-800">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gold-400 font-display">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image src="/images/logo.png" alt="ANITIO Information Technology & Skill Development LLP" fill className="object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">ANITIO</div>
                <div className="text-[8px] text-gray-400 tracking-widest font-semibold uppercase leading-tight">Information Technology &<br />Skill Development LLP</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering students with practical IT skills and career-oriented education. Online & Offline courses at Dwarka More, New Delhi.
            </p>
            <div className="space-y-2.5 mb-5 text-sm">
              <a href="tel:+919289438428" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={13} className="text-gold-500 flex-shrink-0" /> +91 92894 38428
              </a>
              <a href="tel:+919971969158" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={13} className="text-gold-500 flex-shrink-0" /> +91 99719 69158
              </a>
              <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Mail size={13} className="text-gold-500 flex-shrink-0" /> anitioinstitute@gmail.com
              </a>
              <a href="https://www.anitioinstitute.com" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Globe size={13} className="text-gold-500 flex-shrink-0" /> www.anitioinstitute.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, Uttam Nagar, New Delhi – 110059</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {SOCIALS.map(({ label, href, bg, path }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all ${bg}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Our Courses</h3>
            <ul className="space-y-2">
              {PROGRAMS.map(({ href, label }) => (
                <li key={href + label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 bg-primary-900 rounded-xl border border-primary-800">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-2">💳 Pay Fee Online</h4>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed">Secure payment via UPI, Net Banking or Card.</p>
              <Link href="/payment"
                className="flex items-center justify-center gap-1.5 w-full bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold text-xs py-2.5 rounded-lg transition-colors">
                Pay Now →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK.map(({ href, label }) => (
                <li key={href + label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 bg-primary-900 rounded-xl border border-primary-800">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-2">🏫 Franchise Enquiry</h4>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed">Start your own computer institute with ANITIO.</p>
              <a href="tel:+919289438428"
                className="flex items-center justify-center gap-1.5 w-full bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs py-2.5 rounded-lg transition-colors mb-2">
                📞 +91 92894 38428
              </a>
              <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20am%20interested%20in%20Franchise."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-2.5 rounded-lg transition-colors">
                WhatsApp Franchise Team
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Find Us</h3>
            <div className="rounded-xl overflow-hidden mb-3 border border-primary-800">
              <LazyMap height={140} title="ANITIO Location" />
            </div>
            <a href="https://maps.google.com/?q=Sewak+Park+Dwarka+More+New+Delhi" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gold-400 hover:underline mb-4 block">📍 Open in Google Maps →</a>
            <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20want%20to%20know%20about%20courses."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} <strong className="text-gray-400">ANITIO Information Technology and Skill Development LLP</strong>. All rights reserved.</div>
          <div className="flex items-center gap-4 flex-wrap">
            <span>GST: 07ABCDE1234F1Z5</span>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-gold-400 transition-colors">Terms of Use</Link>
            <a href="https://www.anitioinstitute.com" className="hover:text-gold-400 transition-colors">www.anitioinstitute.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
