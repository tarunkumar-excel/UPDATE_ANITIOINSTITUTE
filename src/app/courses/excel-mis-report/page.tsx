import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate in Excel MIS Report',
  description: '3 Month Excel MIS Report Course',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-5xl font-bold">Certificate in Excel MIS Report</h1>
      <p>Duration: 3 Months</p>
      <p>Registration Fee: ₹500</p>
      <p>Maintenance Charge: ₹2500</p>
      <p>Package Fee: ₹7500</p>
      <p>Total Fee: ₹10500</p>

      <h2>ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h2>
      <p>ISO Certified & MSME Certified Organization</p>

      <h3>Course Modules</h3>
      <ul>
        <li>Excel Fundamentals</li>
        <li>Advanced Excel Functions</li>
        <li>VLOOKUP, HLOOKUP, XLOOKUP</li>
        <li>Pivot Tables</li>
        <li>MIS Reporting</li>
        <li>Dashboard Creation</li>
        <li>Charts & Graphs</li>
        <li>KPI Reports</li>
      </ul>

      <h3>Contact</h3>
      <p>9289438428, 9971969158</p>
      <p>www.anitioinstitute.com</p>
      <p>anitioinstitute@gmail.com</p>
    </main>
  );
}
