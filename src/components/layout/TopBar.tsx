'use client';
import { Phone, Mail } from 'lucide-react';
import { SOCIALS } from '@/lib/utils';

export default function TopBar() {
  return (
    <div className="bg-primary-950 text-white text-xs py-2 hidden md:block">
      <div className="container-custom flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-5 flex-wrap">
          <a href="tel:+919289438428" className="flex items-center gap-1.5 text-gray-400 hover:text-gold-400 transition-colors">
            <Phone size={11} /> +91 92894 38428
          </a>
          <a href="tel:+919971969158" className="flex items-center gap-1.5 text-gray-400 hover:text-gold-400 transition-colors">
            <Phone size={11} /> +91 99719 69158
          </a>
          <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-1.5 text-gray-400 hover:text-gold-400 transition-colors">
            <Mail size={11} /> anitioinstitute@gmail.com
          </a>
          <span className="text-gray-600 hidden lg:inline">www.anitioinstitute.com</span>
          <span className="text-gray-600 hidden lg:inline">Mon–Sat: 9:00 AM – 6:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 mr-1 text-[10px]">Follow:</span>
          {SOCIALS.map(({ label, href, path }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="text-gray-500 hover:text-gold-400 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d={path} /></svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
