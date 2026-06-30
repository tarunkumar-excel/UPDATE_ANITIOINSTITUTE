import Link from 'next/link';
import { ArrowRight, Home, BookOpen, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="text-8xl font-display font-bold text-primary-200 mb-4">404</div>
        <h1 className="font-display font-bold text-3xl text-primary-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Browse our courses or get in touch with us.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home size={15} /> Go Home</Link>
          <Link href="/courses" className="btn-secondary"><BookOpen size={15} /> All Courses</Link>
          <Link href="/contact" className="btn-outline"><Phone size={15} /> Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
