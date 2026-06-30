export default function AdvancedExcelMISLandingPage() {
  const modules = [
    'Excel Fundamentals & Advanced Interface',
    'Data Cleaning & Formatting Techniques',
    'Advanced Formulas (VLOOKUP, XLOOKUP, INDEX-MATCH)',
    'Logical & Financial Functions',
    'Pivot Tables & Pivot Charts',
    'MIS Dashboard Creation',
    'Data Visualization Techniques',
    'Power Query for Data Transformation',
    'Power Pivot & Data Modeling',
    'Automated Reporting Systems',
    'Excel Macros (VBA Basics)',
    'MIS Report Design for Business',
    'Real-Time Business Reporting',
    'Final MIS Project Development'
  ];

  const highlights = [
    'Industry-Oriented MIS Training',
    '100% Practical Excel Work',
    'Corporate Reporting Skills',
    'Advanced Dashboard Creation',
    'Job Ready Certification',
    'Real Business Case Studies',
    'Offline & Online Classes',
    'Lifetime Learning Support'
  ];

  const careers = [
    'MIS Executive',
    'Data Analyst',
    'Business Analyst',
    'Reporting Analyst',
    'Excel Specialist',
    'Operations Executive',
    'Finance Reporting Assistant',
    'MIS Manager (Junior Level)'
  ];

  return (
    <>
      <head>
        <title>Advanced Excel & MIS Reporting Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Learn Advanced Excel, MIS Reporting, Dashboards, Pivot Tables, Power Query, VBA basics, and corporate reporting skills with practical training and job support."
        />

        <meta
          name="keywords"
          content="Advanced Excel Course, MIS Reporting Course, Excel Dashboard Training, Data Analysis Excel, Power Query Training, MIS Executive Course"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Advanced Excel & MIS Reporting Course" />
        <meta property="og:description" content="Master Advanced Excel, MIS Reporting, Dashboards, and Data Analysis with real-world projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/excel-mis-banner.jpg" />

        <link rel="canonical" href="https://www.anitioinstitute.com/advanced-excel-mis-reporting-course" />
      </head>

      <main className="bg-gray-50 text-gray-900">

        {/* HERO */}
        <section className="bg-gradient-to-r from-green-900 via-emerald-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div>
              <span className="bg-emerald-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Data & Reporting Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                Advanced Excel & MIS Reporting
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Master Advanced Excel, MIS Dashboards, Data Analysis, Power Query,
                and Business Reporting for corporate jobs.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-emerald-400 text-black px-8 py-4 rounded-2xl font-bold">
                  Enroll Now
                </button>
                <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black">
                  Download Syllabus
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div><h3 className="text-3xl font-bold">14+</h3><p className="text-gray-300">Modules</p></div>
                <div><h3 className="text-3xl font-bold">100%</h3><p className="text-gray-300">Practical</p></div>
                <div><h3 className="text-3xl font-bold">Live</h3><p className="text-gray-300">Projects</p></div>
                <div><h3 className="text-3xl font-bold">5000+</h3><p className="text-gray-300">Students</p></div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
              <p className="text-center text-gray-600 mb-6">Start your Excel career today</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              className="rounded-3xl shadow-2xl"
              alt="Excel MIS Training"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">Why Advanced Excel & MIS?</h2>
              <p className="text-gray-600 mb-4">
                Advanced Excel and MIS Reporting are essential skills for data-driven corporate jobs.
              </p>
              <p className="text-gray-600">
                Learn dashboards, automation, reporting systems, and data analysis used in companies.
              </p>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold">Course Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {modules.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-emerald-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold">Program Highlights</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {highlights.map((h, i) => (
              <div key={i} className="bg-emerald-600 text-white p-6 rounded-2xl">
                {h}
              </div>
            ))}
          </div>
        </section>

        {/* CAREERS */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold">Career Opportunities</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <p className="text-emerald-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Become Excel Expert Today</h2>
          <p className="mb-8">Master MIS Reporting & Data Analysis Skills</p>
          <button className="bg-emerald-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">IT & Professional Training Institute</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>📞 9289438428</p>
              <p>📞 9971969158</p>
              <p>✉ anitioinstitute@gmail.com</p>
              <p>🌐 urlwww.anitioinstitute.comhttps://www.anitioinstitute.com</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>YouTube</p>
              <p>Twitter / X</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
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
    </>
  );
}
