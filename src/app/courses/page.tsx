'use client';
import { Suspense, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, Clock, Star, Wifi, Building2, Monitor } from 'lucide-react';
import { allCourses, CATEGORY_LABELS } from '@/data/courses';

const CATEGORIES = ['all', ...Object.keys(CATEGORY_LABELS)];
const MODE_ICONS: Record<string, React.ElementType> = { online: Wifi, offline: Building2, hybrid: Monitor };
const MODE_COLORS: Record<string, string> = { online: 'bg-green-100 text-green-700', offline: 'bg-blue-100 text-blue-700', hybrid: 'bg-purple-100 text-purple-700' };

function CoursesContent() {
  const params = useSearchParams();
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState<string>(params.get('category') || 'all');
  const [mode, setMode] = useState<string>(params.get('mode') || 'all');
  const [level, setLevel] = useState('all');

  const filtered = useMemo(() => allCourses.filter(c => {
    const q = search.toLowerCase();
    const ms = !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    const mc = cat === 'all' || c.category === cat;
    const mm = mode === 'all' || c.mode === mode;
    const ml = level === 'all' || c.level === level;
    return ms && mc && mm && ml;
  }), [search, cat, mode, level]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="page-hero">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">30+ Programs</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">All <span className="text-gold-400">Courses</span></h1>
          <p className="text-gray-300 text-sm max-w-xl mb-6">Online, offline and hybrid. Expert faculty, practical training, 100% placement support.</p>
          <div className="flex flex-wrap gap-2">
            {['online','offline','hybrid'].map(m => (
              <button key={m} onClick={() => setMode(m === mode ? 'all' : m)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${mode === m ? 'bg-gold-400 text-primary-950 border-gold-400' : 'border-white/30 text-white hover:border-white'}`}>
                {m.charAt(0).toUpperCase()+m.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-5 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search courses..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <select className="select-field sm:w-44" value={level} onChange={e => setLevel(e.target.value)}>
              <option value="all">All Levels</option>
              {['basic','intermediate','advanced','all-levels'].map(l => (
                <option key={l} value={l}>{l.charAt(0).toUpperCase()+l.slice(1)}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${cat === c ? 'bg-primary-700 text-white border-primary-700' : 'border-gray-200 text-gray-600 hover:border-primary-300'}`}>
                {c === 'all' ? 'All Categories' : CATEGORY_LABELS[c] || c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Filter size={14} className="text-gray-400" />
          <span className="text-sm text-gray-500">{filtered.length} course{filtered.length !== 1 ? 's' : ''} found</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(course => {
              const ModeIcon = MODE_ICONS[course.mode];
              return (
                <div key={course.id} className="card border border-transparent hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-5 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl">{course.icon}</div>
                      <div className="flex flex-col gap-1 items-end">
                        {course.badge && <span className="badge bg-gold-100 text-gold-700 text-[10px]">{course.badge}</span>}
                        {course.isNew && <span className="badge bg-red-100 text-red-600 text-[10px]">NEW</span>}
                      </div>
                    </div>
                    <h2 className="font-display font-bold text-gray-900 text-sm leading-snug">{course.title}</h2>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Clock size={11}/>{course.duration}</span>
                      {course.rating && <span className="flex items-center gap-1 text-amber-500 font-semibold"><Star size={11} fill="currentColor"/>{course.rating}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full ${MODE_COLORS[course.mode]}`}>
                        <ModeIcon size={10}/>{course.mode}
                      </span>
                      <span className="text-[10px] text-gray-400 capitalize">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div>
                        <span className="font-bold text-primary-700">₹{course.price.toLocaleString()}</span>
                        <span className="text-[10px] text-gray-400 line-through ml-1.5">₹{course.originalPrice.toLocaleString()}</span>
                      </div>
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        {Math.round((1-course.price/course.originalPrice)*100)}% OFF
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/courses/${course.slug}`} className="flex-1 text-center text-xs font-semibold text-primary-700 border border-primary-200 hover:bg-primary-50 py-2 rounded-lg transition-colors">Details</Link>
                      <Link href="/contact" className="flex-1 text-center text-xs font-semibold text-white bg-primary-700 hover:bg-primary-800 py-2 rounded-lg transition-colors">Enroll</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display font-bold text-gray-900 text-xl mb-2">No courses found</h3>
            <button onClick={() => { setSearch(''); setCat('all'); setMode('all'); setLevel('all'); }} className="btn-primary py-2.5 mt-4">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-500">Loading courses...</div></div>}>
      <CoursesContent />
    </Suspense>
  );
}
