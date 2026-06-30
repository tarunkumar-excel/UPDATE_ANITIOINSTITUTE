export const metadata = {
  title: "Data Analysis with Python & Excel Course | ANITIO INFORMATION TECHNOLOGY",
  description:
    "Learn Data Analysis with Python, Excel, Pandas, NumPy, and real-world projects. Become job-ready Data Analyst with ANITIO Institute.",
  keywords:
    "Data Analysis Course, Python Excel Course, Data Analyst Training, Pandas NumPy Excel, MIS Reporting Course",
  robots: "index, follow",
  openGraph: {
    title: "Data Analysis with Python & Excel Course",
    description:
      "Master Data Analysis using Excel and Python with real-world projects and dashboards.",
    type: "website",
    url: "https://www.anitioinstitute.com/data-analysis-course",
  },
};

export default function DataAnalysisCoursePage() {
  const modules = [
    "Introduction to Data Analysis & Tools",
    "MS Excel Basics & Advanced Functions",
    "Data Cleaning & Formatting in Excel",
    "Charts, Graphs & Dashboards",
    "Introduction to Python Programming",
    "NumPy for Numerical Data",
    "Pandas for Data Analysis",
    "Data Cleaning in Python",
    "Data Visualization (Matplotlib & Seaborn)",
    "Working with CSV & Excel Files",
    "Exploratory Data Analysis (EDA)",
    "Business Case Studies",
    "Mini Projects (Excel + Python)",
    "Final Capstone Project"
  ];

  const highlights = [
    "100% Practical Training",
    "Excel + Python Combined Learning",
    "Real Industry Projects",
    "Dashboard Building Skills",
    "Job-Oriented Curriculum",
    "Beginner Friendly Course",
    "Interview Preparation",
    "Certificate on Completion"
  ];

  const careers = [
    "Data Analyst",
    "Business Analyst",
    "MIS Executive",
    "Reporting Analyst",
    "Excel Specialist",
    "Junior Data Scientist",
    "Operations Analyst",
    "Freelance Data Analyst"
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-900 via-emerald-700 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
              Data Analytics Program
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
              Data Analysis with Python & Excel
            </h1>

            <p className="text-lg text-gray-200 mt-6">
              Master Data Analysis using Excel, Python, Pandas, NumPy and build real-world dashboards & reports.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-green-400 text-black px-6 py-3 rounded-xl font-bold">
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
                <option>Choose Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold">
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
          This course helps you become a professional Data Analyst using Excel and Python.
          Learn data cleaning, visualization, dashboards and real business analytics.
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
              <h3 className="text-green-700 font-bold">
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
            <div key={i} className="bg-green-600 text-white p-6 rounded-2xl">
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
              <p className="text-green-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h2 className="text-5xl font-bold">Start Your Data Career Today</h2>
        <p className="mt-4">Learn Excel + Python + Analytics in one course</p>
        <button className="mt-6 bg-green-500 px-8 py-4 rounded-xl font-bold">
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
            <p className="text-gray-400 mt-3">
              Data Analytics Training Institute
            </p>
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
