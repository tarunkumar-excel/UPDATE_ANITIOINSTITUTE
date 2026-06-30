'use client';
import { useState } from 'react';
import { Search, Trophy, Download, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { getGrade, GRADE_SCALE } from '@/lib/utils';

const SAMPLE_RESULTS = [
  {
    enrollmentNo: 'ANITIO25001',
    studentName: 'Rahul Sharma',
    courseName: 'DCA – Diploma in Computer Applications',
    examName: 'DCA Final Examination',
    subjects: [
      { code: 'DCA-101', name: 'Computer Fundamentals', max: 100, obtained: 82, grade: 'A+' },
      { code: 'DCA-102', name: 'MS Office Suite',        max: 100, obtained: 76, grade: 'A'  },
      { code: 'DCA-103', name: 'Internet & Email',        max: 100, obtained: 88, grade: 'A+' },
      { code: 'DCA-104', name: 'Tally Basics',            max: 100, obtained: 71, grade: 'A'  },
    ],
    totalMax: 400, totalObtained: 317, percentage: '79.25', grade: 'A', status: 'pass' as const,
    datePublished: '2025-03-15',
  },
  {
    enrollmentNo: 'ANITIO25002',
    studentName: 'Priya Gupta',
    courseName: 'Advanced Excel & MIS Reporting',
    examName: 'Excel MIS Final Assessment',
    subjects: [
      { code: 'EX-101', name: 'Excel Fundamentals',   max: 100, obtained: 91, grade: 'O'  },
      { code: 'EX-102', name: 'Advanced Formulas',     max: 100, obtained: 87, grade: 'A+' },
      { code: 'EX-103', name: 'Pivot & Dashboard',     max: 100, obtained: 93, grade: 'O'  },
    ],
    totalMax: 300, totalObtained: 271, percentage: '90.33', grade: 'O', status: 'pass' as const,
    datePublished: '2025-03-20',
  },
];

type Result = typeof SAMPLE_RESULTS[0];

function ResultCard({ r }: { r: Result }) {
  const [show, setShow] = useState(false);
  const pass = r.status === 'pass';
  const pct = parseFloat(r.percentage);
  return (
    <div className={`card border-2 ${pass ? 'border-green-200' : 'border-red-200'}`}>
      <div className={`p-5 ${pass ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {pass ? <CheckCircle size={16} className="text-green-600" /> : <XCircle size={16} className="text-red-600" />}
              <span className={`font-bold text-sm ${pass ? 'text-green-700' : 'text-red-700'}`}>{pass ? 'PASS' : 'FAIL'}</span>
              <span className="badge-blue text-[10px]">{r.grade}</span>
            </div>
            <h3 className="font-display font-bold text-gray-900 text-xl">{r.studentName}</h3>
            <div className="text-xs text-gray-500 font-mono mt-0.5">{r.enrollmentNo}</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-primary-700">{r.percentage}%</div>
            <div className="text-xs text-gray-500">{r.totalObtained}/{r.totalMax} Marks</div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid sm:grid-cols-3 gap-3 text-xs mb-4">
          <div><div className="text-gray-400">Course</div><div className="font-semibold text-gray-900 mt-0.5">{r.courseName}</div></div>
          <div><div className="text-gray-400">Examination</div><div className="font-semibold text-gray-900 mt-0.5">{r.examName}</div></div>
          <div><div className="text-gray-400">Published</div><div className="font-semibold text-gray-900 mt-0.5">{new Date(r.datePublished).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div></div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1"><span>Score</span><span>{pct}%</span></div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-blue-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="text-sm text-primary-600 font-semibold hover:text-primary-800 flex items-center gap-1 transition-colors mb-4">
          {show ? 'Hide' : 'Show'} Subject-wise Marks <span className={`transition-transform inline-block ${show ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {show && (
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  {['Code', 'Subject', 'Max', 'Obtained', 'Grade'].map(h => (
                    <th key={h} className="text-left p-2 font-semibold text-gray-600 border border-gray-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {r.subjects.map(s => (
                  <tr key={s.code} className="hover:bg-gray-50">
                    <td className="p-2 font-mono text-gray-600 border border-gray-200">{s.code}</td>
                    <td className="p-2 text-gray-900 border border-gray-200">{s.name}</td>
                    <td className="p-2 text-center border border-gray-200">{s.max}</td>
                    <td className="p-2 text-center font-semibold border border-gray-200">{s.obtained}</td>
                    <td className={`p-2 text-center font-bold border border-gray-200 ${s.obtained >= 80 ? 'text-green-700' : s.obtained >= 60 ? 'text-blue-700' : 'text-red-700'}`}>{s.grade}</td>
                  </tr>
                ))}
                <tr className="bg-primary-50 font-bold text-xs">
                  <td colSpan={2} className="p-2 border border-gray-200">Total</td>
                  <td className="p-2 text-center border border-gray-200">{r.totalMax}</td>
                  <td className="p-2 text-center border border-gray-200">{r.totalObtained}</td>
                  <td className="p-2 text-center text-primary-700 border border-gray-200">{r.grade}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <button className="btn-secondary text-xs py-2 flex-1 justify-center"><Download size={13} /> Marksheet</button>
          <button className="btn-outline text-xs py-2 flex-1 justify-center"><Trophy size={13} /> Certificate</button>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    const found = SAMPLE_RESULTS.find(r =>
      r.enrollmentNo.toLowerCase() === query.toLowerCase() ||
      r.studentName.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found ?? null);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom text-center">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Examination Portal</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">Check Your <span className="text-gold-400">Results</span></h1>
          <p className="text-gray-300 text-sm max-w-md mx-auto mb-8">Enter your Enrollment Number or Name to view your result and download marksheet.</p>
          <div className="max-w-xl mx-auto flex gap-3">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-11 pr-4 py-4 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                placeholder="Enrollment No. (e.g. ANITIO25001) or Name"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && search()}
              />
            </div>
            <button onClick={search} disabled={loading} className="btn-primary px-6 py-4 disabled:opacity-70">
              {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search size={16} />}
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Demo: <span className="text-gold-400 cursor-pointer font-mono" onClick={() => setQuery('ANITIO25001')}>ANITIO25001</span> or <span className="text-gold-400 cursor-pointer font-mono" onClick={() => setQuery('Priya')}>Priya</span>
          </p>
        </div>
      </div>

      <div className="container-custom py-12 max-w-3xl space-y-8">
        {searched && (result
          ? <ResultCard r={result} />
          : <div className="card p-12 text-center"><AlertCircle size={48} className="text-gray-300 mx-auto mb-4" /><h3 className="font-display text-xl text-gray-600 mb-2">No Result Found</h3><p className="text-gray-400 text-sm">No result for "<strong>{query}</strong>". Check enrollment number or contact the institute on +91 92894 38428.</p></div>
        )}

        {/* Grade Scale */}
        <div className="card p-6">
          <h3 className="font-display font-bold text-primary-900 text-lg mb-4">Grading Scale</h3>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
            {GRADE_SCALE.map(({ grade, range, label }) => (
              <div key={grade} className="text-center bg-gray-50 rounded-xl p-3">
                <div className={`text-xl font-bold font-display mb-1 ${
                  grade === 'O' ? 'text-green-600' : grade === 'A+' ? 'text-emerald-600' :
                  grade === 'A' ? 'text-blue-600' : grade === 'B+' ? 'text-indigo-600' :
                  grade === 'B' ? 'text-purple-600' : grade === 'C' ? 'text-yellow-600' : 'text-red-600'
                }`}>{grade}</div>
                <div className="text-[10px] text-gray-500">{range}%</div>
                <div className="text-[9px] text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Trophy size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Recently Published Results</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• DCA Final Examination – March 2025 Batch → Published</li>
                <li>• Advanced Excel & MIS – March 2025 → Published</li>
                <li>• Web Development Batch – Results expected shortly</li>
              </ul>
              <p className="text-xs text-blue-500 mt-2">For result queries: <a href="tel:+919289438428" className="font-semibold underline">+91 92894 38428</a> or <a href="mailto:anitioinstitute@gmail.com" className="font-semibold underline">anitioinstitute@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
