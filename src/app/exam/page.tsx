'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Monitor, Lock, BookOpen, Clock, CheckCircle, AlertCircle, LogIn } from 'lucide-react';

const INSTRUCTIONS = [
  'Ensure stable internet connection before starting the exam.',
  'Do not refresh or close the browser during the exam.',
  'All questions must be answered before final submission.',
  'The timer will auto-submit when time is up.',
  'Results will be published within 7 working days.',
  'Keep your enrollment ID and password ready to login.',
];

export default function ExamPage() {
  const [enrollId, setEnrollId] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setError('Enrollment ID not found or DOB mismatch. Please contact the institute.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="page-hero">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Student Portal</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Online <span className="text-gold-400">Exam Portal</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl">Login with your enrollment ID to attempt your scheduled examination online.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Login Card */}
          <div>
            <div className="card p-8 border border-gray-200 shadow-card-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <LogIn size={22} className="text-primary-700" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900 text-xl">Student Login</h2>
                  <p className="text-xs text-gray-500">Enter your credentials to access exam</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Enrollment ID *</label>
                  <div className="relative">
                    <BookOpen size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input className="input-field pl-9" placeholder="e.g. ANITIO25001"
                      value={enrollId} onChange={e => setEnrollId(e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-9"
                      value={dob} onChange={e => setDob(e.target.value)} required />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Your DOB is used as default password.</p>
                </div>

                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" /> {error}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Logging in...</>
                  ) : (
                    <><LogIn size={16} /> Login to Exam Portal</>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-2">Forgot your enrollment ID?</p>
                <a href="https://wa.me/919289438428?text=Hello%20ANITIO%2C%20I%20forgot%20my%20enrollment%20ID%20for%20exam."
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs text-primary-600 font-semibold hover:underline">
                  Contact us on WhatsApp →
                </a>
              </div>
            </div>

            <div className="card p-5 mt-5 bg-blue-50 border border-blue-200">
              <h3 className="font-semibold text-blue-900 text-sm mb-1">📌 Note for Students</h3>
              <p className="text-xs text-blue-700 leading-relaxed">
                Your enrollment ID was shared with you at the time of admission. If you haven't received it, contact the institute at <a href="tel:+919289438428" className="underline">+91 92894 38428</a>.
              </p>
            </div>
          </div>

          {/* Instructions + Info */}
          <div className="space-y-5">
            <div className="card p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Monitor size={20} className="text-primary-600" />
                <h3 className="font-display font-bold text-gray-900 text-lg">Exam Instructions</h3>
              </div>
              <ul className="space-y-3">
                {INSTRUCTIONS.map((inst, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" /> {inst}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Clock,        title: 'Exam Duration',    value: '2–3 Hours',      color: 'bg-blue-100 text-blue-700' },
                { icon: BookOpen,     title: 'Question Format',  value: 'MCQ + Theory',    color: 'bg-green-100 text-green-700' },
                { icon: CheckCircle,  title: 'Pass Percentage',  value: '40% Minimum',     color: 'bg-purple-100 text-purple-700' },
                { icon: Monitor,      title: 'Device Support',   value: 'PC / Mobile',     color: 'bg-orange-100 text-orange-700' },
              ].map(({ icon: Icon, title, value, color }) => (
                <div key={title} className="card p-4 border border-gray-200 text-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{value}</div>
                  <div className="text-xs text-gray-500">{title}</div>
                </div>
              ))}
            </div>

            <div className="card p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Also Available</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/results" className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-xl p-3 transition-colors text-sm font-semibold text-gray-700 hover:text-primary-700">
                  📊 Check Results
                </Link>
                <Link href="/schedule" className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-xl p-3 transition-colors text-sm font-semibold text-gray-700 hover:text-primary-700">
                  🗓️ Batch Schedule
                </Link>
                <Link href="/payment" className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-xl p-3 transition-colors text-sm font-semibold text-gray-700 hover:text-primary-700">
                  💳 Pay Fee
                </Link>
                <Link href="/contact" className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-xl p-3 transition-colors text-sm font-semibold text-gray-700 hover:text-primary-700">
                  📞 Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
