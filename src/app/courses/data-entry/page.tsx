import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate in Data Entry Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP",
  description:
    "3 Month Certificate in Data Entry Course. Registration Fee ₹500, Maintenance Charge ₹1500, Package Fee ₹4500. ISO Certified & MSME Certified Organization.",
  keywords: [
    "Data Entry Course",
    "Computer Course",
    "Excel Training",
    "MS Office Course",
    "ANITIO Institute",
  ],
};

export default function DataEntryCoursePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Certificate in Data Entry
          </h1>
          <p className="text-xl mb-6">
            3 Month Professional Certification Program
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">ISO Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">MSME Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Job-Oriented Training</span>
          </div>

          <h2 className="text-2xl font-semibold">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Fee Structure</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border rounded-xl p-6">
            <h3>Registration Fee</h3>
            <p className="text-3xl font-bold">₹500</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3>Maintenance Charge</h3>
            <p className="text-3xl font-bold">₹1,500</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3>Package Fee</h3>
            <p className="text-3xl font-bold">₹4,500</p>
          </div>

          <div className="border rounded-xl p-6 bg-blue-50">
            <h3>Total</h3>
            <p className="text-3xl font-bold">₹6,500</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Complete Course Content</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Computer Fundamentals",
              "Typing Practice (English & Hindi)",
              "MS Word",
              "MS Excel",
              "MS PowerPoint",
              "Internet & Email",
              "Google Sheets",
              "Google Forms",
              "Data Collection Techniques",
              "Data Processing & Formatting",
              "Report Preparation",
              "Office Documentation",
              "Online Data Entry Workflows",
              "Accuracy & Productivity Skills",
              "Practical Projects",
              "Final Assessment & Certification",
            ].map((item) => (
              <div key={item} className="bg-white shadow rounded-xl p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Data Entry Operator</li>
          <li>Computer Operator</li>
          <li>Office Assistant</li>
          <li>Back Office Executive</li>
          <li>Documentation Executive</li>
          <li>Freelance Data Entry Professional</li>
        </ul>
      </section>

      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Admissions Open</h2>

          <p className="mb-2">Contact: 9289438428, 9971969158</p>
          <p className="mb-2">Email: anitioinstitute@gmail.com</p>
          <p className="mb-2">Website: www.anitioinstitute.com</p>

          <p className="mt-6">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </p>
        </div>
      </section>
    </main>
  );
}
