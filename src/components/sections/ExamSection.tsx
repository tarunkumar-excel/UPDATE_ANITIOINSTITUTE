import Link from 'next/link';
import { FileText, Monitor, Building2, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function ExamSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-subtitle">Examination System</div>
          <h2 className="section-title mb-3">Online & Offline <span className="text-primary-600">Exam Process</span></h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Transparent, fair, and technology-driven examination system for all enrolled students.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Online Exam */}
          <div className="card border border-green-200 overflow-hidden hover:shadow-card-lg transition-shadow">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Monitor size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-green-100">Online Mode</div>
                  <h3 className="font-display font-bold text-xl">Online Exam</h3>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">Appear for your exam from anywhere using your laptop or mobile. Proctored and secure.</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">How It Works:</h4>
              <ol className="space-y-2 mb-5">
                {[
                  'Login to student portal with enrollment ID',
                  'Select your course exam from the dashboard',
                  'Attempt MCQ & descriptive questions online',
                  'Submit exam — result published within 7 days',
                  'Download your digital mark sheet & certificate',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link href="/exam" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Attempt Online Exam <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Offline Exam */}
          <div className="card border border-blue-200 overflow-hidden hover:shadow-card-lg transition-shadow">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-200">Offline Mode</div>
                  <h3 className="font-display font-bold text-xl">In-Centre Exam</h3>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">Appear at our Dwarka More examination centre. Scheduled batches, supervised environment.</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">How It Works:</h4>
              <ol className="space-y-2 mb-5">
                {[
                  'Receive exam schedule from your batch coordinator',
                  'Arrive at the institute with admit card & ID proof',
                  'Appear for written / practical / computer-based exam',
                  'Results declared within 10–15 working days',
                  'Collect physical mark sheet & certificate from centre',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-primary-700 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Schedule Offline Exam <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Exam Features Strip */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h3 className="font-display font-bold text-gray-900 text-lg mb-4 text-center">Exam System Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle, text: 'Secure & Proctored', color: 'text-green-600' },
              { icon: Clock,       text: 'Flexible Scheduling', color: 'text-blue-600' },
              { icon: FileText,    text: 'Digital Certificates', color: 'text-purple-600' },
              { icon: Monitor,     text: 'Online Results Portal', color: 'text-orange-600' },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Icon size={16} className={color} /> {text}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/results" className="text-sm text-primary-600 font-semibold hover:underline">
              Check Exam Results →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
