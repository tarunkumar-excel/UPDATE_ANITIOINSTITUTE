import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diploma in Excel Data Analysis | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP',
  description: '8 Month Diploma in Excel Data Analysis. Registration Fee ₹500, Maintenance Charge ₹3000, Package Fee ₹24000.',
};

export default function DiplomaExcelDataAnalysis() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Diploma in Excel Data Analysis</h1>
          <p className="text-xl">8 Month Professional Diploma Program</p>
          <p className="mt-4">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</p>
          <p>ISO Certified & MSME Certified Organization</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Fee Structure</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border p-5 rounded-xl">Registration Fee<br/>₹500</div>
          <div className="border p-5 rounded-xl">Maintenance Charge<br/>₹3,000</div>
          <div className="border p-5 rounded-xl">Package Fee<br/>₹24,000</div>
          <div className="border p-5 rounded-xl">Total Fee<br/>₹27,500</div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Course Content</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li>Excel Fundamentals</li>
            <li>Advanced Excel</li>
            <li>Data Cleaning</li>
            <li>Data Validation</li>
            <li>Pivot Tables</li>
            <li>Pivot Charts</li>
            <li>Dashboards</li>
            <li>Power Query</li>
            <li>Power Pivot</li>
            <li>VLOOKUP, XLOOKUP</li>
            <li>INDEX & MATCH</li>
            <li>MIS Reporting</li>
            <li>Data Visualization</li>
            <li>KPI Reporting</li>
            <li>Business Analytics</li>
            <li>Live Projects</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <ul className="list-disc pl-6">
            <li>Data Analyst</li>
            <li>MIS Executive</li>
            <li>Reporting Analyst</li>
            <li>Business Analyst Associate</li>
            <li>Excel Specialist</li>
          </ul>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Admissions Open</h2>
        <p>Contact: 9289438428, 9971969158</p>
        <p>Email: anitioinstitute@gmail.com</p>
        <p>Website: www.anitioinstitute.com</p>
      </footer>
    </main>
  );
}
