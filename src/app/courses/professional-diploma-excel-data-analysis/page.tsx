import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Diploma in Excel Data Analysis | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP',
  description: '12 Month Professional Diploma in Excel Data Analysis. Registration Fee ₹500, Maintenance Charge ₹3500, Package Fee ₹42000.',
};

export default function ProfessionalDiplomaExcelDataAnalysis() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Professional Diploma in Excel Data Analysis</h1>
          <p className="text-xl">12 Month Industry-Oriented Diploma Program</p>
          <p className="mt-4">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</p>
          <p>ISO Certified & MSME Certified Organization</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Fee Structure</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded-xl p-5">Registration Fee<br/>₹500</div>
          <div className="border rounded-xl p-5">Maintenance Charge<br/>₹3,500</div>
          <div className="border rounded-xl p-5">Package Fee<br/>₹42,000</div>
          <div className="border rounded-xl p-5 bg-blue-50">Total Fee<br/>₹46,000</div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Complete Course Content</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li>Excel Fundamentals</li>
            <li>Advanced Excel</li>
            <li>Data Cleaning & Transformation</li>
            <li>VLOOKUP, XLOOKUP, INDEX & MATCH</li>
            <li>Pivot Tables & Pivot Charts</li>
            <li>Power Query</li>
            <li>Power Pivot</li>
            <li>Dashboard Design</li>
            <li>MIS Reporting</li>
            <li>KPI Reporting</li>
            <li>Data Visualization</li>
            <li>Business Analytics</li>
            <li>Forecasting Techniques</li>
            <li>Automation Concepts</li>
            <li>Project Reports</li>
            <li>Live Industry Projects</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <ul className="list-disc pl-6">
            <li>Data Analyst</li>
            <li>MIS Executive</li>
            <li>Business Analyst Associate</li>
            <li>Reporting Analyst</li>
            <li>Excel Dashboard Developer</li>
            <li>Operations Analyst</li>
          </ul>
        </div>
      </section>

      <footer className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Admissions Open</h2>
        <p>Contact: 9289438428, 9971969158</p>
        <p>Website: www.anitioinstitute.com</p>
        <p>Email: anitioinstitute@gmail.com</p>
      </footer>
    </main>
  );
}
