'use client';

const NOTICES = [
  '🎓 New Batches Starting Soon — Basic Computer, Excel, Web Dev, Python, Tally & more!',
  '🚀 Full Stack Web Development with Placement Support — Limited Seats!',
  '🤖 NEW: AI & Machine Learning Course Launched — Enroll Now!',
  '💳 Online Fee Payment Available — Pay via UPI, Net Banking or Card',
  '🏫 Franchise Opportunity: Start Your Own Computer Institute with ANITIO!',
  '📱 Online & Offline Courses Available — Learn From Anywhere!',
  '🎉 Special Discount on Early Enrollment — Contact Us Today!',
  '📍 H-20 Sewak Park, Dwarka Mor Metro Station, Pillar No. 772, New Delhi',
];

export default function NewsTicker() {
  return (
    <div className="bg-primary-700 text-white text-xs py-2 overflow-hidden">
      <div className="flex items-center gap-4">
        <span className="bg-gold-500 text-primary-950 font-bold px-3 py-1 text-[10px] uppercase tracking-wider whitespace-nowrap flex-shrink-0 ml-4">
          📢 NEWS
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker flex gap-16 whitespace-nowrap">
            {[...NOTICES, ...NOTICES].map((n, i) => (
              <span key={i} className="text-white/90">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
