'use client';
import { useState } from 'react';
import Link from 'next/link';

// ─── Shared Form Component ────────────────────────────────────────────────────
export function CourseForm({ courseName, accentColor = 'indigo' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', mode: '' });

  const colors = {
    indigo: { btn: 'bg-indigo-700 hover:bg-indigo-800', ring: 'focus:ring-indigo-500' },
    orange: { btn: 'bg-orange-600 hover:bg-orange-700', ring: 'focus:ring-orange-500' },
    green:  { btn: 'bg-green-700 hover:bg-green-800',   ring: 'focus:ring-green-500'  },
    blue:   { btn: 'bg-blue-700 hover:bg-blue-800',     ring: 'focus:ring-blue-500'   },
    purple: { btn: 'bg-purple-700 hover:bg-purple-800', ring: 'focus:ring-purple-500' },
    red:    { btn: 'bg-red-700 hover:bg-red-800',       ring: 'focus:ring-red-500'    },
    teal:   { btn: 'bg-teal-700 hover:bg-teal-800',     ring: 'focus:ring-teal-500'   },
  };
  const c = colors[accentColor] || colors.indigo;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mbdblwww', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, course: courseName }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', email: '', phone: '', mode: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClass = `w-full border border-gray-300 rounded-xl px-5 py-4 ${c.ring} focus:ring-2 outline-none text-gray-900 text-sm`;

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Registration Successful!</h3>
        <p className="text-gray-600 mb-6">Thank you! Our team will call you within 24 hours to confirm your free demo class for <strong>{courseName}</strong>.</p>
        <p className="text-sm text-gray-500">📞 You can also call us directly: <a href="tel:9289438428" className="font-semibold text-indigo-700">9289438428</a></p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-indigo-600 underline">Register another person</button>
      </div>
    );
  }

  return (
    <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
      <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">Book Free Demo Class</h2>
      <p className="text-center text-gray-500 mb-7 text-sm">Start your career with expert guidance — no fees, no commitment.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required name="name" type="text" placeholder="Full Name" value={formData.name}
          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className={inputClass} />
        <input required name="email" type="email" placeholder="Email Address" value={formData.email}
          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className={inputClass} />
        <input required name="phone" type="tel" placeholder="Phone Number (WhatsApp)" value={formData.phone}
          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className={inputClass} />
        <select required name="mode" value={formData.mode}
          onChange={e => setFormData(p => ({ ...p, mode: e.target.value }))}
          className={inputClass + ' bg-white cursor-pointer'}>
          <option value="">Select Learning Mode</option>
          <option>Online Training</option>
          <option>Offline Classroom (Dwarka More)</option>
          <option>Hybrid Learning</option>
        </select>
        <button type="submit" disabled={status === 'sending'}
          className={`w-full ${c.btn} text-white py-4 rounded-xl font-bold text-lg transition duration-300 disabled:opacity-60`}>
          {status === 'sending' ? 'Sending...' : 'Register Now — It\'s Free'}
        </button>
        {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please call us at 9289438428.</p>}
      </form>
      <p className="text-xs text-gray-400 text-center mt-4">📍 Dwarka More, New Delhi · 📞 9289438428</p>
    </div>
  );
}

// ─── Shared Header ────────────────────────────────────────────────────────────
export function CourseHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-700 rounded-xl flex items-center justify-center text-white font-extrabold text-lg">A</div>
          <div>
            <div className="font-extrabold text-gray-900 text-sm leading-tight">ANITIO</div>
            <div className="text-xs text-gray-500 leading-tight">IT & Skill Development LLP</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-indigo-700 transition">Home</Link>
          <Link href="/courses" className="hover:text-indigo-700 transition">All Courses</Link>
          <Link href="/#about" className="hover:text-indigo-700 transition">About</Link>
          <Link href="/#contact" className="hover:text-indigo-700 transition">Contact</Link>
          <a href="tel:9289438428" className="bg-indigo-700 text-white px-5 py-2 rounded-xl hover:bg-indigo-800 transition font-semibold">
            📞 Call Now
          </a>
        </nav>
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          <Link href="/" className="block hover:text-indigo-700" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/courses" className="block hover:text-indigo-700" onClick={() => setOpen(false)}>All Courses</Link>
          <Link href="/#about" className="block hover:text-indigo-700" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#contact" className="block hover:text-indigo-700" onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:9289438428" className="block bg-indigo-700 text-white px-4 py-2 rounded-xl text-center font-semibold">📞 9289438428</a>
        </div>
      )}
    </header>
  );
}

// ─── Shared Footer ────────────────────────────────────────────────────────────
export function CourseFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg">A</div>
            <span className="font-extrabold text-lg">ANITIO</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            ANITIO Information Technology & Skill Development LLP — Dwarka More, New Delhi. Professional IT, Finance & Digital Marketing training with placement assistance.
          </p>
          <p className="text-gray-400 text-sm">📍 Dwarka More, New Delhi, 110075</p>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white transition">All Courses</Link></li>
            <li><Link href="/#about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-5">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>📍 Dwarka More, New Delhi</li>
            <li><a href="tel:9289438428" className="hover:text-white transition">📞 9289438428</a></li>
            <li><a href="mailto:info@anitio.in" className="hover:text-white transition">✉ info@anitio.in</a></li>
            <li><a href="https://anitio-institute-website-project.vercel.app" className="hover:text-white transition">🌐 anitio.in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-5">Follow Us</h4>
          <div className="flex flex-col gap-3 text-sm">
            {[
              { name: 'Facebook', href: 'https://facebook.com', bg: 'hover:bg-blue-600' },
              { name: 'Instagram', href: 'https://instagram.com', bg: 'hover:bg-pink-600' },
              { name: 'LinkedIn',  href: 'https://linkedin.com', bg: 'hover:bg-blue-700' },
              { name: 'YouTube',   href: 'https://youtube.com',  bg: 'hover:bg-red-600'  },
              { name: 'WhatsApp',  href: 'https://wa.me/919289438428', bg: 'hover:bg-green-600' },
            ].map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`bg-gray-800 ${s.bg} px-4 py-2 rounded-lg transition text-gray-300 hover:text-white`}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 ANITIO Information Technology & Skill Development LLP. All Rights Reserved. | Dwarka More, New Delhi
      </div>
    </footer>
  );
}

// ─── Shared Course Page Template ──────────────────────────────────────────────
export default function CoursePage({
  courseName,
  tagline,
  description,
  heroGradient,
  badgeText,
  badgeColor,
  accentColor,
  stats,
  modules,
  highlights,
  careers,
  ctaText,
  aboutText1,
  aboutText2,
  aboutImage,
}) {
  return (
    <>
      <CourseHeader />
      <main className="bg-gray-50 text-gray-900 overflow-hidden">

        {/* ── Hero ── */}
        <section className={`${heroGradient} text-white py-20 px-6 relative`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className={`${badgeColor} px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest`}>
                {badgeText}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-5 mb-5">
                {courseName}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">{description}</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#register" className={`bg-white text-gray-900 px-7 py-3 rounded-2xl font-bold transition shadow-xl hover:shadow-2xl`}>
                  Enroll Now — Free Demo
                </a>
                <a href="tel:9289438428" className="border border-white text-white hover:bg-white hover:text-gray-900 px-7 py-3 rounded-2xl font-semibold transition">
                  📞 Call Now
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-extrabold">{s.value}</div>
                    <div className="text-gray-300 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div id="register">
              <CourseForm courseName={courseName} accentColor={accentColor} />
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <img src={aboutImage} alt={`${courseName} Training at Anitio Institute`}
              className="rounded-3xl shadow-2xl w-full object-cover aspect-video" loading="lazy" />
            <div>
              <h2 className="text-3xl font-bold mb-5">Learn {courseName} From Industry Experts</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">{aboutText1}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{aboutText2}</p>
              <div className="flex flex-wrap gap-3">
                {['Dwarka More, New Delhi', 'Online & Offline', 'Placement Support', 'Certificate'].map(t => (
                  <span key={t} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-100">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Curriculum ── */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Industry-focused curriculum designed for real-world career success.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 transition duration-300 border border-gray-100">
                  <div className="text-indigo-600 text-2xl font-extrabold mb-3">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-base font-semibold text-gray-900">{mod}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Program Highlights</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white rounded-2xl p-7 shadow-xl text-center">
                  <h3 className="text-base font-bold">{h}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Careers ── */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Career Opportunities After This Course</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">Unlock exciting career roles with industry-recognised skills and placement support from Anitio Institute.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careers.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100 hover:shadow-xl transition">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold mb-3 mx-auto">✓</div>
                  <h3 className="text-base font-bold text-indigo-700">{c}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={`${heroGradient} py-20 px-6 text-white text-center`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5">{ctaText}</h2>
            <p className="text-lg text-gray-300 mb-8">Join our professional training at Dwarka More, New Delhi. Online & Offline batches available. 100% Placement Support.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#register" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                Apply for Admission
              </a>
              <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <CourseFooter />
    </>
  );
}
