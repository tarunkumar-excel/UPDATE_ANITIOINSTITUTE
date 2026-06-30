'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Award, Building2, Clock, Star } from 'lucide-react';

const STATS = [
  { icon: Users,    value: 5000, suffix: '+', label: 'Students Trained',    color: 'text-blue-400' },
  { icon: BookOpen, value: 30,   suffix: '+', label: 'Courses Offered',     color: 'text-green-400' },
  { icon: Award,    value: 100,  suffix: '%', label: 'Placement Support',   color: 'text-gold-400' },
  { icon: Building2,value: 10,   suffix: '+', label: 'Years of Excellence', color: 'text-purple-400' },
  { icon: Clock,    value: 7,    suffix: '',  label: 'Batch Slots / Day',   color: 'text-red-400' },
  { icon: Star,     value: 4.8,  suffix: '★', label: 'Average Rating',      color: 'text-amber-400', decimal: true },
];

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        let i = 0;
        const t = setInterval(() => {
          i++;
          setCount(decimal ? parseFloat((value * (i / steps)).toFixed(1)) : Math.round(value * (i / steps)));
          if (i >= steps) clearInterval(t);
        }, 20);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, decimal]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl md:text-5xl text-white">
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-900 via-primary-950 to-primary-900 py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">By The Numbers</div>
          <h2 className="font-display font-bold text-3xl text-white">ANITIO <span className="text-gold-400">At a Glance</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map(({ icon: Icon, value, suffix, label, color, decimal }) => (
            <div key={label} className="text-center group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Icon size={24} className={color} />
              </div>
              <Counter value={value} suffix={suffix} decimal={decimal} />
              <div className="text-gray-400 text-xs mt-2 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
