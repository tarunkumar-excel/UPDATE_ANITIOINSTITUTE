'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Rahul Sharma',     course: 'Full Stack Web Development', rating: 5, text: 'ANITIO changed my career! The practical training approach is excellent. I got placed as a Junior Developer within 2 months of completing the course. Faculty is very supportive.', city: 'Uttam Nagar' },
  { name: 'Priya Gupta',      course: 'Advanced Excel & MIS',        rating: 5, text: 'The Excel course is outstanding. I learned Power BI, Pivot Tables, VLOOKUP and MIS reporting. Got promoted at my job immediately after! Best institute in Dwarka More.', city: 'Janakpuri' },
  { name: 'Ankur Verma',      course: 'DCA – Diploma',               rating: 5, text: 'Completed DCA and got government job. The syllabus is comprehensive and practical. ANITIO certificate is well-recognized. Highly recommend to everyone.', city: 'Dwarka' },
  { name: 'Sneha Kapoor',     course: 'Tally Prime + GST',           rating: 5, text: 'Best Tally course in Delhi! Learned complete GST filing, payroll, TDS. Now working as accountant with ₹25k salary. Thank you ANITIO team!', city: 'Uttam Nagar' },
  { name: 'Mohit Kumar',      course: 'Python Programming',           rating: 5, text: 'Online course was very smooth. Trainers explain complex concepts so simply. Got Python certification and cracked IT company interview. Amazing experience!', city: 'Gurugram' },
  { name: 'Anjali Singh',     course: 'Graphic Designing',            rating: 5, text: 'Learned Photoshop and CorelDRAW professionally. Now running my own design studio! The practical projects during the course prepared me for real clients.', city: 'Vikaspuri' },
  { name: 'Rohan Mishra',     course: 'Digital Marketing',            rating: 5, text: 'Online batch was excellent. Covered SEO, Meta Ads, Google Ads, content strategy. Got freelance clients during the course itself. 100% worth it!', city: 'Faridabad' },
  { name: 'Deepika Yadav',    course: 'Data Analytics',               rating: 5, text: 'The hybrid mode worked perfectly for me. Some days attended centre, other days online. Result was the same — landed a Data Analyst job within 3 months!', city: 'Noida' },
];

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-subtitle">Student Success Stories</div>
          <h2 className="section-title mb-2">What Our <span className="text-primary-600">Students Say</span></h2>
          <p className="text-gray-500 text-sm">5,000+ success stories and counting</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8 min-h-[280px]">
          {visible.map(({ name, course, rating, text, city }) => (
            <div key={name} className="card p-6 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700 text-sm flex-shrink-0">
                  {name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{name}</div>
                  <div className="text-[10px] text-gray-400">{course} · {city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary-500 hover:text-primary-600 disabled:opacity-30 transition-colors">
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? 'bg-primary-700' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
          <button onClick={() => setPage(p => Math.min(pages - 1, p + 1))} disabled={page === pages - 1}
            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary-500 hover:text-primary-600 disabled:opacity-30 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
