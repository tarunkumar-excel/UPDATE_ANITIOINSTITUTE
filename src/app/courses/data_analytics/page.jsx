export default function DataAnalyticsCoursePage() {
  const modules = [
    "Advanced Excel",
    "Data Cleaning",
    "Data Visualization",
    "Power BI",
    "SQL Database",
    "Python for Data Analytics",
    "Statistics & Reporting",
    "Dashboard Development",
    "Business Intelligence",
    "Machine Learning Basics",
    "Project Work",
    "Interview Preparation",
  ];

  const benefits = [
    "100% Practical Training",
    "Live Projects",
    "Online & Offline Classes",
    "Industry Expert Trainers",
    "Placement Assistance",
    "Professional Certification",
    "Flexible Batch Timings",
    "Portfolio Development",
    "Interview Preparation",
  ];

  const careers = [
    "Data Analyst",
    "Business Analyst",
    "MIS Executive",
    "Power BI Developer",
    "SQL Analyst",
    "Excel Expert",
    "Reporting Analyst",
    "Dashboard Developer",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-100 text-gray-800">
      <section className="bg-gradient-to-r from-cyan-900 to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Admission Open 2026
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              DATA ANALYTICS
              <span className="block text-yellow-300">
                PROFESSIONAL COURSE
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
              Learn modern Data Analytics tools including Advanced Excel,
              Power BI, SQL, Python, Dashboard Development, and Reporting.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold shadow-xl transition">
                Apply Now
              </button>

              <button className="border border-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-2xl font-semibold transition">
                Download Brochure
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Online & Offline Classes",
                "Live Projects",
                "Professional Certificate",
                "Placement Assistance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
            <h2 className="text-3xl font-bold text-center text-cyan-900 mb-6">
              Enquiry Form
            </h2>

            <form className="space-y-5">
              <input type="text" placeholder="Enter Your Name" className="w-full border p-4 rounded-xl" />
              <input type="tel" placeholder="Mobile Number" className="w-full border p-4 rounded-xl" />
              <input type="email" placeholder="Email Address" className="w-full border p-4 rounded-xl" />

              <select className="w-full border p-4 rounded-xl">
                <option>Select Course Type</option>
                <option>Crash Course</option>
                <option>Certificate Course</option>
                <option>Diploma Course</option>
                <option>Master Diploma</option>
              </select>

              <button className="w-full bg-cyan-900 hover:bg-cyan-800 text-white py-4 rounded-xl font-bold shadow-lg transition">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6">
            About Data Analytics Course
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            The Data Analytics Professional Course is specially designed for
            students, job seekers, and professionals who want to build careers
            in analytics, reporting, dashboard development, and business intelligence.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-900 mb-14">
            Course Duration & Fees
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Crash Course", duration: "3 Months", fee: "₹18,000" },
              { title: "Certificate Course", duration: "6 Months", fee: "₹35,000" },
              { title: "Diploma Course", duration: "1 Year", fee: "₹60,000" },
              { title: "Master Diploma", duration: "2 Years", fee: "₹95,000" },
            ].map((course, index) => (
              <div key={index} className="bg-gradient-to-b from-cyan-50 to-blue-100 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-cyan-900 mb-4">{course.title}</h3>
                <p className="text-lg mb-2">⏳ {course.duration}</p>
                <p className="text-4xl font-extrabold text-blue-700 mb-4">{course.fee}</p>
                <button className="w-full bg-cyan-900 hover:bg-cyan-800 text-white py-3 rounded-2xl font-semibold">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-900 mb-14">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold">{module}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-900 mb-14">
            Why Choose ANITIO?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-3xl p-6 shadow-lg">
                <p className="text-lg font-semibold">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-14">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6 font-semibold hover:shadow-2xl transition">
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
