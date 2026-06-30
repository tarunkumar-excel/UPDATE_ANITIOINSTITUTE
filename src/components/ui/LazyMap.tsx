'use client';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function LazyMap({ height = 140, title = 'ANITIO Location' }: { height?: number; title?: string }) {
  const [loaded, setLoaded] = useState(false);
  const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.07!2d77.0527!3d28.6151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5b8db48bed%3A0xfe8e5fa04f1caf2e!2sSewak%20Park%2C%20Dwarka%20Mor%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1700000000000';

  if (!loaded) {
    return (
      <button onClick={() => setLoaded(true)}
        className="w-full flex flex-col items-center justify-center gap-2 bg-primary-800 hover:bg-primary-700 transition-colors rounded-xl cursor-pointer border border-primary-700"
        style={{ height }} aria-label="Load map">
        <MapPin size={24} className="text-gold-400" />
        <span className="text-xs text-gray-300 font-medium">Click to load map</span>
      </button>
    );
  }

  return (
    <iframe src={MAP_SRC} width="100%" height={height} loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full border-0 rounded-xl" title={title} />
  );
}
