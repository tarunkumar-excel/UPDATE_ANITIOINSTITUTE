import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms & Conditions – ANITIO' };
export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Legal</div>
          <h1 className="font-display font-bold text-4xl">Terms & Conditions</h1>
          <p className="text-gray-300 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-3xl">
        <div className="card p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          {[
            { title: '1. Enrollment & Admission', body: 'Admission to ANITIO courses is subject to availability of seats. The institute reserves the right to reschedule or cancel courses due to insufficient enrollment. Confirmed admissions are binding.' },
            { title: '2. Fee & Refund Policy', body: 'Course fees are payable at the time of enrollment. Fees once paid are non-refundable except in cases where the institute cancels a course. Partial refunds may be considered on a case-by-case basis within 7 days of enrollment.' },
            { title: '3. Attendance & Participation', body: 'Students must maintain a minimum of 75% attendance to be eligible for certification. The institute reserves the right to withhold certificates for students with poor attendance or misconduct.' },
            { title: '4. Code of Conduct', body: 'Students are expected to maintain discipline and respect for faculty and fellow students. The institute reserves the right to expel students for misconduct without refund.' },
            { title: '5. Certification', body: 'Certificates will be issued only upon successful completion of the course including assessments. ANITIO certificates are issued by the institute and recognized in the industry for the stated programs.' },
            { title: '6. Limitation of Liability', body: 'ANITIO does not guarantee employment upon course completion. Placement support is provided as a value-added service. The institute is not liable for any direct or indirect damages arising from course participation.' },
            { title: '7. Changes to Terms', body: 'ANITIO reserves the right to update these terms at any time. Students will be notified of material changes. Continued enrollment constitutes acceptance of the updated terms.' },
            { title: '8. Contact', body: 'For queries: anitioinstitute@gmail.com | +91 92894 38428 | H-20, Sewak Park, Dwarka More, Uttam Nagar, New Delhi.' },
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
