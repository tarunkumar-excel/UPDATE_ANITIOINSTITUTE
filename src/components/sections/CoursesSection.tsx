import Link from 'next/link';
import { ArrowRight, Clock, Star, Users, Wifi, Building2, Monitor } from 'lucide-react';
import { featuredCourses } from '@/data/courses';

const MODE_ICONS: Record<string, React.ElementType> = { online: Wifi, offline: Building2, hybrid: Monitor };
const MODE_COLORS: Record<string, string> = {
  online: 'bg-green-100 text-green-700',
  offline: 'bg-blue-100 text-blue-700',
  hybrid: 'bg-purple-100 text-purple-700',
};

export default function CoursesSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-subtitle">30+ Programs Available</div>
            <h2 className="section-title">Featured <span className="text-primary-600">Courses</span></h2>
          </div>
          <Link href="/courses" className="btn-outline py-2.5 text-sm flex-shrink-0">
            View All Courses <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredCourses.map(course => {
            const ModeIcon = MODE_ICONS[course.mode];
            return (
              <Link key={course.id} href={`/courses/${course.slug}`}
                className="card border border-transparent hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-5 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{course.icon}</div>
                    <div className="flex flex-col gap-1 items-end">
                      {course.badge && <span className="badge bg-gold-100 text-gold-700 text-[10px]">{course.badge}</span>}
                      {course.isNew && <span className="badge bg-red-100 text-red-600 text-[10px]">NEW</span>}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-sm leading-snug group-hover:text-primary-700 transition-colors">{course.title}</h3>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-gray-500"><Clock size={11} /> {course.duration}</div>
                    {course.rating && (
                      <div className="flex items-center gap-1 text-amber-500 font-semibold">
                        <Star size={11} fill="currentColor" /> {course.rating}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full ${MODE_COLORS[course.mode]}`}>
                      <ModeIcon size={10} /> {course.mode}
                    </span>
                    {course.students && (
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Users size={10} /> {course.students.toLocaleString()}+
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <span className="font-bold text-primary-700 text-base">₹{course.price.toLocaleString()}</span>
                      <span className="text-[10px] text-gray-400 line-through ml-1.5">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/courses" className="btn-primary py-3 px-8">
            Browse All 30+ Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
