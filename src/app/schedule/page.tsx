import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Phone, Mail, ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = { title: 'Batch Schedule – ANITIO IT & Skill Development' };

const BATCHES = [
  { time: '7:00 AM – 9:00 AM',   slot: 'Early Morning Batch', type: 'Weekdays', ideal: 'Working professionals, students with afternoon college' },
  { time: '9:00 AM – 11:00 AM',  slot: 'Morning Batch',        type: 'Weekdays', ideal: 'Students, housewives, job seekers' },
  { time: '11:00 AM – 1:00 PM',  slot: 'Mid-Morning Batch',    type: 'Weekdays', ideal: 'Students and general learners' },
  { time: '2:00 PM – 4:00 PM',   slot: 'Afternoon Batch',      type: 'Weekdays', ideal: 'Students, homeworkers, beginners' },
  { time: '4:00 PM – 6:00 PM',   slot: 'Evening Batch',        type: 'Weekdays', ideal: 'School/college students after class' },
  { time: '6:00 PM – 8:00 PM',   slot: 'Late Evening Batch',   type: 'Weekdays', ideal: 'Working professionals' },
  { time: '9:00 AM – 1:00 PM',   slot: 'Weekend Batch',        type: 'Sat–Sun',  ideal: 'Working professionals, busy learners' },
];

const COURSES_SCHEDULE = [
  { course: 'Basic Computer / DCA',      duration: '3–6 months', nextBatch: 'Starting soon', seats: 8 },
  { course: 'Advanced Excel & MIS',      duration: '2 months',   nextBatch: 'Starting soon', seats: 6 },
  { course: 'Web Development',           duration: '6 months',   nextBatch: 'Starting soon', seats: 5 },
  { course: 'Python Programming',        duration: '4 months',   nextBatch: 'Starting soon', seats: 7 },
  { course: 'Tally Prime + GST',         duration: '3 months',   nextBatch: 'Starting soon', seats: 9 },
  { course: 'Graphic Designing',         duration: '3 months',   nextBatch: 'Starting soon', seats: 5 },
  { course: 'Data Analysis',             duration: '4 months',   nextBatch: 'Starting soon', seats: 6 },
  { course: 'Skill Development',         duration: '2 months',   nextBatch: 'Starting soon', seats: 10 },
];

export default function SchedulePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Timings</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">Batch <span className="text-gold-400">Schedule</span></h1>
          <p className="text-gray-300 text-sm max-w-xl">Multiple batch timings available to suit students, working professionals and homemakers. Choose the batch that fits your schedule.</p>
        </div>
      </div>
      <div className="container-custom py-12 space-y-12">

        {/* Batch timings */}
        <div>
          <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 flex items-center gap-2"><Clock size={22} className="text-primary-600" /> Available Batch Timings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BATCHES.map(({ time, slot, type, ideal }) => (
              <div key={slot} className="card p-5 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-gold text-[10px]">{type}</span>
                </div>
                <div className="font-display font-bold text-primary-900 text-lg mb-1">{time}</div>
                <div className="font-semibold text-gray-800 text-sm mb-2">{slot}</div>
                <div className="text-xs text-gray-500 leading-relaxed">Best for: {ideal}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Course batches */}
        <div>
          <h2 className="font-display font-bold text-2xl text-primary-900 mb-6 flex items-center gap-2"><Calendar size={22} className="text-primary-600" /> Course Batch Availability</h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    {['Course', 'Duration', 'Next Batch', 'Available Seats', 'Action'].map(h => (
                      <th key={h} className="text-left p-4 font-semibold text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COURSES_SCHEDULE.map(({ course, duration, nextBatch, seats }, i) => (
                    <tr key={course} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-gray-900">{course}</td>
                      <td className="p-4 text-gray-600">{duration}</td>
                      <td className="p-4"><span className="badge-green">{nextBatch}</span></td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden max-w-[80px]">
                            <div className="h-full bg-primary-600 rounded-full" style={{ width: `${(seats / 12) * 100}%` }} />
                          </div>
                          <span className="text-xs text-gray-600">{seats} left</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Link href="/contact" className="btn-primary text-xs py-1.5 px-3">Enroll <ArrowRight size={11} /></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-primary-900 text-2xl mb-2">Want to Confirm Your Seat?</h3>
          <p className="text-gray-600 text-sm mb-6">Contact us to book your preferred batch timing. Seats are limited per batch.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+919289438428" className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm">
              <Phone size={15} /> +91 92894 38428
            </a>
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm">
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-primary text-sm">Book via Form <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
