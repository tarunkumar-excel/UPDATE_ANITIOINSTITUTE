import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy – ANITIO' };
export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Legal</div>
          <h1 className="font-display font-bold text-4xl">Privacy Policy</h1>
          <p className="text-gray-300 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-3xl">
        <div className="card p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          {[
            { title: '1. Information We Collect', body: 'We collect personal information such as name, phone number, email address, and course preferences when you fill out inquiry forms, enroll in courses, or contact us. We also collect usage data to improve our website.' },
            { title: '2. How We Use Your Information', body: 'Your information is used to: respond to your inquiries, process admissions, send course updates and notifications, improve our services, and comply with legal obligations. We do not sell your data to third parties.' },
            { title: '3. Data Security', body: 'We implement appropriate security measures to protect your personal information. However, no method of internet transmission is 100% secure and we cannot guarantee absolute security.' },
            { title: '4. WhatsApp & Communication', body: 'By providing your phone number, you consent to receiving WhatsApp messages and calls from ANITIO regarding your inquiry, admission status, course updates and important notices.' },
            { title: '5. Cookies', body: 'Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, though this may affect website functionality.' },
            { title: '6. Contact Us', body: 'For any privacy-related queries, contact us at anitioinstitute@gmail.com or call +91 92894 38428. Address: H-20, Sewak Park, Dwarka More, Uttam Nagar, New Delhi.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-primary-900 text-base mb-2">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
