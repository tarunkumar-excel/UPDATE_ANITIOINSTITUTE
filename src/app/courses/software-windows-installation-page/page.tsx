import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate in Software & Windows Installation | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP",
  description:
    "2 Month Certificate in Software & Windows Installation. Registration Fee ₹500, Maintenance Charge ₹1500, Package ₹3000. ISO Certified & MSME Certified Organization.",
  keywords: [
    "Software Installation Course",
    "Windows Installation Course",
    "Computer Hardware Course",
    "ANITIO Institute",
    "IT Training Delhi",
  ],
};

export default function SoftwareWindowsInstallationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">
            Certificate in Software & Windows Installation
          </h1>
          <p className="text-xl mb-6">
            2 Month Professional Certification Program
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">ISO Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">MSME Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Practical Training</span>
          </div>

          <h2 className="text-2xl font-semibold">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </h2>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="tel:9289438428" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
              Call Now
            </a>
            <a href="https://www.anitioinstitute.com" className="border border-white px-6 py-3 rounded-lg">
              Visit Website
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Fee Structure</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border p-6 rounded-xl"><h3>Registration Fee</h3><p className="text-3xl font-bold">₹500</p></div>
          <div className="border p-6 rounded-xl"><h3>Maintenance Charge</h3><p className="text-3xl font-bold">₹1,500</p></div>
          <div className="border p-6 rounded-xl"><h3>Package Fee</h3><p className="text-3xl font-bold">₹3,000</p></div>
          <div className="border p-6 rounded-xl bg-blue-50"><h3>Total</h3><p className="text-3xl font-bold">₹5,000</p></div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Complete Course Content</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Computer Fundamentals",
              "Windows 10 & 11 Installation",
              "Bootable USB Creation",
              "Disk Partition Management",
              "Driver Installation",
              "MS Office Installation",
              "Software Setup & Configuration",
              "System Maintenance",
              "Antivirus & Security",
              "Backup & Recovery",
              "Networking Basics",
              "Troubleshooting & Projects",
            ].map((item) => (
              <div key={item} className="bg-white p-5 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Computer Technician</li>
          <li>Desktop Support Engineer</li>
          <li>IT Support Executive</li>
          <li>Hardware & Software Technician</li>
          <li>Freelance Computer Service Professional</li>
        </ul>
      </section>

      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Admissions Open</h2>
          <p className="mb-6">Limited Seats Available</p>

          <p>Contact: 9289438428, 9971969158</p>
          <p>Email: anitioinstitute@gmail.com</p>
          <p>Website: www.anitioinstitute.com</p>
        </div>
      </section>
    </main>
  );
}
