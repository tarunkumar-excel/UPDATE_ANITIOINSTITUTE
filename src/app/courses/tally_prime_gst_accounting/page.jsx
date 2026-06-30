export const metadata = {
  title: "Tally Prime + GST & Accounting Course | ANITIO INSTITUTE",
  description:
    "Learn Tally Prime, GST, Accounting, Billing, Inventory Management and practical finance skills for job readiness.",
  keywords:
    "Tally Course, Tally Prime GST Course, Accounting Training, GST Course India, Finance Accounting Course",
  robots: "index, follow",
  openGraph: {
    title: "Tally Prime + GST & Accounting Course",
    description:
      "Master Tally Prime with GST, Accounting, Billing, and Inventory Management with practical training.",
    type: "website",
    url: "https://www.anitioinstitute.com/tally-gst-course",
  },
};

export default function TallyGSTCoursePage() {
  const modules = [
    "Introduction to Accounting Principles",
    "Basics of Tally Prime Interface",
    "Company Creation & Ledger Setup",
    "Accounting Vouchers (Payment, Receipt, Journal)",
    "GST Basics & Tax Structure",
    "GST Setup in Tally",
    "Purchase & Sales Entries with GST",
    "Inventory Management in Tally",
    "Banking & Reconciliation",
    "Payroll Management Basics",
    "Final Accounts & Reports",
    "Balance Sheet & Profit/Loss",
    "GST Return Preparation",
    "Practical Business Scenarios",
    "Final Project: Complete Accounting System"
  ];

  const highlights = [
    "100% Practical Accounting Training",
    "Tally Prime + GST Complete Course",
    "Real Business Case Studies",
    "Job-Oriented Curriculum",
    "Beginner Friendly Learning",
    "Certificate on Completion",
    "Interview Preparation",
    "Industry Standard Skills"
  ];

  const careers = [
    "Accountant",
    "Tally Operator",
    "GST Executive",
    "Billing Executive",
    "Accounts Assistant",
    "Finance Executive",
    "Office Accountant",
    "Data Entry Operator (Finance)"
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-700 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
              Accounting & GST Program
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
              Tally Prime + GST & Accounting
            </h1>

            <p className="text-lg text-gray-200 mt-6">
              Learn complete accounting, GST filing, billing and inventory management using Tally Prime.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
                Enroll Now
              </button>
              <button className="border px-6 py-3 rounded-xl">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-4">
              Free Demo Registration
            </h2>

            <form className="space-y-4">
              <input className="w-full border p-3 rounded-xl" placeholder="Full Name" />
              <input className="w-full border p-3 rounded-xl" placeholder="Email" />
              <input className="w-full border p-3 rounded-xl" placeholder="Phone" />
              <select className="w-full border p-3 rounded-xl">
                <option>Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">About This Course</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          This course provides complete knowledge of Tally Prime, GST accounting, billing, taxation and real-world finance management.
        </p>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Course Curriculum</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-blue-700 font-bold">
                {String(i + 1).padStart(2, "0")}
              </h3>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Program Highlights</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, i) => (
            <div key={i} className="bg-blue-700 text-white p-6 rounded-2xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CAREER */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Career Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {careers.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-blue-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h2 className="text-5xl font-bold">Become Accounting Professional</h2>
        <p className="mt-4">Master Tally Prime + GST + Accounting Skills</p>
        <button className="mt-6 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
          Apply Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="font-bold text-xl">
              ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
            </h3>
            <p className="text-gray-400 mt-3">Accounting Training Institute</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p>📞 9289438428</p>
            <p>📞 9971969158</p>
            <p>✉ anitioinstitute@gmail.com</p>
            <p>🌐 urlwww.anitioinstitute.comhttps://www.anitioinstitute.com</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Social Media</h4>
            <a className="block" href="https://facebook.com">Facebook</a>
            <a className="block" href="https://instagram.com">Instagram</a>
            <a className="block" href="https://linkedin.com">LinkedIn</a>
            <a className="block" href="https://youtube.com">YouTube</a>
            <a className="block" href="https://x.com">X</a>
          </div>

          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2026 ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
        </div>
      </footer>

    </main>
  );
}
