'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, GraduationCap, BookOpen, Code2, BarChart2,
  Calculator, Palette, Award, Laptop, CreditCard, FileText,
  Building2, Globe, Monitor, Wifi
} from 'lucide-react';

const COURSES_MENU = [
  { href: '/courses?category=basic',            icon: Laptop,        label: 'Basic Computer / DCA',    desc: 'BCC, DCA, ADCA, Data Entry' },
  { href: '/courses?category=excel',            icon: BarChart2,     label: 'Excel & MIS',             desc: 'Advanced Excel, Power BI, VBA' },
  { href: '/courses?category=web',              icon: Code2,         label: 'Web Development',         desc: 'HTML, CSS, JS, React, Node.js' },
  { href: '/courses?category=programming',      icon: BookOpen,      label: 'Programming',             desc: 'C, C++, Python' },
  { href: '/courses?category=data',             icon: BarChart2,     label: 'Data Analytics',          desc: 'Python, SQL, Power BI' },
  { href: '/courses?category=tally',            icon: Calculator,    label: 'Tally & Accounting',      desc: 'Tally Prime + GST' },
  { href: '/courses?category=design',           icon: Palette,       label: 'Design & Video',          desc: 'Photoshop, CorelDRAW, Premiere' },
  { href: '/courses?category=digital-marketing',icon: Globe,         label: 'Digital Marketing',       desc: 'SEO, Google Ads, Social Media' },
  { href: '/courses?category=ai',               icon: Monitor,       label: 'AI & Machine Learning',   desc: 'AI, ML, Prompt Engineering' },
  { href: '/courses?category=finance',          icon: Award,         label: 'Finance & Banking',       desc: 'Stock Market, Investment Banking' },
  { href: '/courses?category=skill',            icon: GraduationCap, label: 'Skill Development',       desc: 'Job-oriented + Placement' },
  { href: '/courses',                           icon: GraduationCap, label: 'All Courses →',           desc: 'Browse all 30+ programs' },
];

const MODE_MENU = [
  { href: '/courses?mode=online',  icon: Wifi,    label: 'Online Courses',  desc: 'Learn from anywhere, anytime' },
  { href: '/courses?mode=offline', icon: Building2,label: 'Offline Classes', desc: 'In-person at Dwarka More' },
  { href: '/courses?mode=hybrid',  icon: Monitor,  label: 'Hybrid Mode',    desc: 'Online + Offline combined' },
  { href: '/exam',                 icon: FileText,  label: 'Online Exam',   desc: 'Appear for your exam online' },
];

const NAV = [
  { href: '/',          label: 'Home' },
  { href: '/courses',   label: 'Courses',   children: 'courses' },
  { href: '/courses',   label: 'Mode',      children: 'mode' },
  { href: '/about',     label: 'About' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/results',   label: 'Results' },
  { href: '/contact',   label: 'Contact' },
];

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => { setOpen(false); setMega(null); }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-11 h-11 relative flex-shrink-0">
              <Image src="/images/logo.png" alt="ANITIO Information Technology & Skill Development LLP" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display font-bold text-xl text-primary-900">ANITIO</div>
              <div className="text-[9px] text-gray-500 font-semibold tracking-widest uppercase mt-0.5">IT & Skill Development LLP</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onMouseEnter={() => setMega(item.children!)}
                    onMouseLeave={() => setMega(null)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${mega === item.children ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'}`}
                  >
                    {item.label} <ChevronDown size={13} className={`transition-transform ${mega === item.children ? 'rotate-180' : ''}`} />
                  </button>
                  {mega === item.children && (
                    <div
                      onMouseEnter={() => setMega(item.children!)}
                      onMouseLeave={() => setMega(null)}
                      className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-card-lg border border-gray-100 p-4 z-50 w-[680px] grid grid-cols-3 gap-2"
                    >
                      {(item.children === 'courses' ? COURSES_MENU : MODE_MENU).map(({ href, icon: Icon, label, desc }) => (
                        <Link key={href + label} href={href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition-colors">
                            <Icon size={15} className="text-primary-700 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-xs">{label}</div>
                            <div className="text-[10px] text-gray-500 mt-0.5">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href + item.label} href={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${pathname === item.href ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'}`}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-2">
            <Link href="/payment" className="flex items-center gap-1.5 text-sm font-semibold text-primary-700 border border-primary-200 hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors">
              <CreditCard size={14} /> Pay Fee
            </Link>
            <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20want%20to%20know%20about%20courses."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={WA_PATH} /></svg>
              WhatsApp
            </a>
            <Link href="/contact" className="btn-primary py-2 px-5 text-sm">Enroll Now</Link>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-gray-700 hover:text-primary-700 hover:bg-gray-100 rounded-lg transition-colors">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 space-y-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/courses', label: 'All Courses' },
              { href: '/courses?mode=online', label: '🌐 Online Courses' },
              { href: '/courses?mode=offline', label: '🏫 Offline Classes' },
              { href: '/courses?mode=hybrid', label: '🔄 Hybrid Mode' },
              { href: '/exam', label: '📝 Online Exam' },
              { href: '/about', label: 'About Us' },
              { href: '/franchise', label: 'Franchise' },
              { href: '/results', label: 'Check Results' },
              { href: '/schedule', label: 'Batch Schedule' },
              { href: '/payment', label: '💳 Pay Fee Online' },
              { href: '/contact', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <Link key={href + label} href={href}
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${pathname === href ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
              <Link href="/contact" className="btn-primary py-3 text-sm justify-center">Enroll Now</Link>
              <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl text-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
