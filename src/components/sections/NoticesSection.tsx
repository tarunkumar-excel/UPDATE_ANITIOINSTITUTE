'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight, X } from 'lucide-react';

const NOTICES = [
  { id: 1, tag: 'Admission', color: 'bg-green-100 text-green-700', text: 'New batches starting for DCA, Advanced Excel & Web Development. Limited seats available!', date: 'June 2025' },
  { id: 2, tag: 'Result',    color: 'bg-blue-100 text-blue-700',   text: 'March 2025 examination results published. Check your result online.', date: 'May 2025', link: '/results' },
  { id: 3, tag: 'Exam',      color: 'bg-purple-100 text-purple-700',text: 'Online exam for enrolled students is now live. Login to attempt your exam.', date: 'June 2025', link: '/exam' },
  { id: 4, tag: 'Holiday',   color: 'bg-orange-100 text-orange-700',text: 'Institute will remain closed on 15 Aug (Independence Day). Batches resume from 16 Aug.', date: 'Aug 2025' },
  { id: 5, tag: 'New Course', color: 'bg-red-100 text-red-700',    text: 'NEW: AI & Machine Learning course launched! Enroll now for early-bird discount.', date: 'June 2025', link: '/courses?category=ai' },
];

export default function NoticesSection() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const visible = NOTICES.filter(n => !dismissed.includes(n.id));
  if (!visible.length) return null;
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-4">
      <div className="container-custom">
        <div className="flex items-start gap-3">
          <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
            <Bell size={15} className="text-amber-600 animate-bounce" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Notices</span>
          </div>
          <div className="flex-1 space-y-1.5">
            {visible.map(n => (
              <div key={n.id} className="flex items-start gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${n.color}`}>{n.tag}</span>
                <span className="text-xs text-gray-700 flex-1 leading-relaxed">{n.text}</span>
                {n.link && (
                  <Link href={n.link} className="text-xs text-primary-600 font-semibold flex items-center gap-0.5 flex-shrink-0 hover:underline">
                    View <ChevronRight size={11} />
                  </Link>
                )}
                <button onClick={() => setDismissed(p => [...p, n.id])} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
