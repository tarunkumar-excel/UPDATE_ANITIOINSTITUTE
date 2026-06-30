import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diploma in Office Management | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP",
  description:
    "12 Month Diploma in Office Management. Registration Fee ₹500, Maintenance Charge ₹1500, Package Fee ₹18000. ISO Certified & MSME Certified Organization.",
  keywords: [
    "Diploma in Office Management",
    "Office Administration Course",
    "Office Management Diploma",
    "ANITIO Institute",
    "Computer and Office Management"
  ],
};

export default function DiplomaOfficeManagementPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Diploma in Office Management</h1>
          <p className="text-xl mb-6">12 Month Professional Diploma Program</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">ISO Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">MSME Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Industry Focused Training</span>
          </div>

          <h2 className="text-2xl font-semibold">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Fee Structure</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border p-6 rounded-xl">
            <h3>Registration Fee</h3>
            <p className="text-3xl font-bold">₹500</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3>Maintenance Charge</h3>
            <p className="text-3xl font-bold">₹1,500</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3>Package Fee</h3>
            <p className="text-3xl font-bold">₹18,000</p>
          </div>

          <div className="border p-6 rounded-xl bg-blue-50">
            <h3>Total Fee</h3>
            <p className="text-3xl font-bold">₹20,000</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Complete Course Content</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Computer Fundamentals",
              "Business Communication",
              "MS Word Advanced",
              "MS Excel Advanced",
              "MS PowerPoint",
              "Internet & Email Management",
              "Google Workspace",
              "Office Administration",
              "Office Documentation",
              "Record & File Management",
              "Customer Relationship Management",
              "HR Management Basics",
              "Payroll Management",
              "Inventory & Stock Management",
              "Accounting Fundamentals",
              "Data Entry & Reporting",
              "Meeting & Event Coordination",
              "Professional Etiquette",
              "Leadership & Team Coordination",
              "Project Work & Final Assessment"
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
          <li>Office Manager</li>
          <li>Administrative Officer</li>
          <li>Operations Executive</li>
          <li>HR Assistant</li>
          <li>Back Office Executive</li>
          <li>Office Coordinator</li>
          <li>Documentation Executive</li>
          <li>Administration Executive</li>
        </ul>
      </section>

      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Admissions Open</h2>

          <p>Contact: 9289438428, 9971969158</p>
          <p>Email: anitioinstitute@gmail.com</p>
          <p>Website: www.anitioinstitute.com</p>

          <p className="mt-6 font-semibold">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </p>
        </div>
      </section>
    </main>
  );
}
