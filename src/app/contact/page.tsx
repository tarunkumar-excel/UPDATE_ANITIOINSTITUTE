'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import LazyMap from '@/components/ui/LazyMap';

const CONTACTS = [
  { icon: Phone, title: 'Call Us',         lines: ['+91 92894 38428', '+91 99719 69158'],       href: 'tel:+919289438428' },
  { icon: Mail,  title: 'Email Us',        lines: ['anitioinstitute@gmail.com'],                  href: 'mailto:anitioinstitute@gmail.com' },
  { icon: MapPin,title: 'Visit Us',        lines: ['H-20, Sewak Park, Dwarka Mor Metro Station', 'Uttam Nagar, Pillar No. 772, New Delhi'], href: 'https://maps.google.com/?q=Sewak+Park+Dwarka+More+New+Delhi' },
  { icon: Clock, title: 'Working Hours',   lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'], href: '#' },
];

const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20want%20to%20know%20about%20courses.', color: 'bg-green-500 hover:bg-green-600', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' },
  { label: 'Telegram', href: 'https://t.me/anitioinstitute', color: 'bg-sky-500 hover:bg-sky-600', path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
  { label: 'Facebook',  href: 'https://facebook.com/anitioinstitute', color: 'bg-blue-600 hover:bg-blue-700', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Instagram', href: 'https://instagram.com/anitioinstitute', color: 'bg-pink-500 hover:bg-pink-600', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
  { label: 'YouTube',   href: 'https://youtube.com/@anitioinstitute', color: 'bg-red-600 hover:bg-red-700',   path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'Twitter',   href: 'https://twitter.com/anitioinstitute', color: 'bg-gray-800 hover:bg-gray-900', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Get In Touch</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">Contact <span className="text-gold-400">ANITIO</span></h1>
          <p className="text-gray-300 text-sm max-w-xl">We're here to help! Reach out for course inquiries, admissions, or any other questions.</p>

          {/* Social quick links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {SOCIALS.map(({ label, href, color, path }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`${color} text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors`}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={path} /></svg>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-12">

        {/* Contact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {CONTACTS.map(({ icon: Icon, title, lines, href }) => (
            <a key={title} href={href} className="card p-5 text-center group hover:-translate-y-1 border border-transparent hover:border-primary-200">
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon size={20} className="text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-sm mb-2">{title}</h3>
              {lines.map(l => <div key={l} className="text-xs text-gray-600 leading-relaxed">{l}</div>)}
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="card p-8">
            <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 flex items-center gap-2">
              <MessageSquare size={22} className="text-primary-600" /> Inquiry Form
            </h2>
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={34} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm mb-6">We will respond within 24 hours via call or email.</p>
                <button onClick={() => setSent(false)} className="btn-outline text-sm">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input className="input-field" placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input className="input-field" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input className="input-field" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Course Interested In</label>
                  <select className="select-field" value={form.course} onChange={e => update('course', e.target.value)}>
                    <option value="">Select a course...</option>
                    {['Basic Computer / DCA', 'Advanced Excel & MIS', 'Web Development', 'Python Programming', 'C / C++ Programming', 'Data Analysis', 'Tally Prime + GST', 'Graphic Designing', 'Skill Development', 'Other'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea className="input-field resize-none" rows={4} placeholder="Your query or message..."
                    value={form.message} onChange={e => update('message', e.target.value)} />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-70">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Or call us directly:
                  <a href="tel:+919289438428" className="text-primary-600 font-semibold ml-1">+91 92894 38428</a>
                </p>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="card overflow-hidden">
              <LazyMap height={280} title="ANITIO Institute Location" />
              <div className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">📍 H-20, Sewak Park, Dwarka Mor Metro Station, Uttam Nagar</p>
                <p className="text-xs text-gray-500 mb-3">Pillar No. 772, New Delhi, India</p>
                <a href="https://maps.google.com/?q=Sewak+Park+Dwarka+More+New+Delhi" target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-sm py-1.5">Open in Google Maps →</a>
              </div>
            </div>

            {/* WhatsApp quick contact */}
            <div className="card p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">💬 WhatsApp Inquiry</h3>
              <p className="text-gray-600 text-sm mb-4">Get instant response on WhatsApp. Our team replies within minutes.</p>
              <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20want%20to%20know%20about%20your%20courses."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Google Business */}
            <div className="card p-6 text-center">
              <h3 className="font-display font-bold text-gray-900 mb-2">⭐ Find Us on Google</h3>
              <p className="text-gray-500 text-sm mb-4">Search "ANITIO Dwarka More" on Google Maps or click below.</p>
              <a href="https://g.page/r/anitio-dwarka-more" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm justify-center w-full">Find us on Google →</a>
            </div>

            {/* Payment + Franchise */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="card p-5 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h3 className="font-display font-bold text-gray-900 mb-2">💳 Pay Fee Online</h3>
                <p className="text-gray-600 text-sm mb-4">Pay your course fee securely via UPI, Net Banking or Card.</p>
                <a href="https://rzp.io/l/anitioinstitute" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                  Pay Now →
                </a>
              </div>
              <div className="card p-5 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <h3 className="font-display font-bold text-gray-900 mb-2">🏫 Franchise Enquiry</h3>
                <p className="text-gray-600 text-sm mb-3">Start your own computer institute with ANITIO.</p>
                <a href="tel:+919289438428"
                  className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm mb-2">
                  📞 +91 92894 38428
                </a>
                <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20want%20Franchise%20details."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
                  WhatsApp Franchise Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
