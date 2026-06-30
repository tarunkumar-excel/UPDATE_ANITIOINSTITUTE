import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate in Tally ERP 9 / Tally Prime | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP',
  description: '3 Month Certificate in Tally ERP 9 / Tally Prime. Registration Fee ₹500, Maintenance Charge ₹2000, Package Fee ₹6000.',
};

export default function TallyCoursePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Certificate in Tally ERP 9 / Tally Prime</h1>
          <p className="text-xl">3 Month Professional Certification Program</p>
          <p className="mt-4">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</p>
          <p>ISO Certified & MSME Certified Organization</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Fee Structure</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded-xl p-5">Registration Fee<br/>₹500</div>
          <div className="border rounded-xl p-5">Maintenance Charge<br/>₹2,000</div>
          <div className="border rounded-xl p-5">Package Fee<br/>₹6,000</div>
          <div className="border rounded-xl p-5 bg-green-50">Total Fee<br/>₹8,500</div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Complete Course Content</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li>Introduction to Accounting</li>
            <li>Tally ERP 9 Fundamentals</li>
            <li>Tally Prime Interface</li>
            <li>Company Creation</li>
            <li>Ledger & Group Creation</li>
            <li>Voucher Entry</li>
            <li>GST Accounting</li>
            <li>Inventory Management</li>
            <li>Bank Reconciliation</li>
            <li>Payroll Management</li>
            <li>Taxation Basics</li>
            <li>Financial Reports</li>
            <li>Balance Sheet</li>
            <li>Profit & Loss Reports</li>
            <li>Data Backup & Security</li>
            <li>Practical Projects</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <ul className="list-disc pl-6">
            <li>Accounts Executive</li>
            <li>Tally Operator</li>
            <li>GST Assistant</li>
            <li>Accounts Assistant</li>
            <li>Billing Executive</li>
            <li>Office Accountant</li>
          </ul>
        </div>
      </section>

      <footer className="bg-green-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Admissions Open</h2>
        <p>Contact: 9289438428, 9971969158</p>
        <p>Website: www.anitioinstitute.com</p>
        <p>Email: anitioinstitute@gmail.com</p>
      </footer>
    </main>
  );
}
