export default function DCA_Course_LandingPage() {
  const modules = [
    'Computer Fundamentals & IT Basics',
    'Operating System (Windows & Basics)',
    'MS Word Advanced Documentation',
    'MS Excel (Formulas, Charts & Data Analysis)',
    'MS PowerPoint Professional Presentations',
    'Internet & Email Applications',
    'Typing Mastery & Productivity Skills',
    'Tally Basics with Accounting Introduction',
    'Database Fundamentals (MS Access / SQL Basics)',
    'Computer Networking Basics',
    'Cyber Security Awareness',
    'Practical Office Projects',
    'Resume & Job Readiness Skills',
    'Final Project & Certification'
  ];

  const highlights = [
    'Diploma Level Professional Course',
    '100% Practical Training',
    'Job Oriented Curriculum',
    'Industry Recognized Certification',
    'Beginner to Advanced Learning Path',
    'Offline & Online Classes',
    'Real Office Project Training',
    'Lifetime Support'
  ];

  const careers = [
    'Data Entry Operator',
    'Computer Operator',
    'Office Executive',
    'Back Office Assistant',
    'Clerical Staff',
    'Account Assistant',
    'Administrative Support Staff',
    'Freelance Data Operator'
  ];

  return (
    <>
      <head>
        <title>DCA – Diploma in Computer Applications | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>
        <meta
          name="description"
          content="Join DCA Diploma in Computer Applications and learn MS Office, Excel, Word, PowerPoint, Internet, Tally basics, database, and job-ready computer skills with practical training."
        />
        <meta
          name="keywords"
          content="DCA Course, Diploma in Computer Applications, Computer Diploma, MS Office Course, Tally Training, Computer Operator Course"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="DCA Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP" />
        <meta property="og:description" content="Learn Diploma in Computer Applications with MS Office, Tally, Internet, Excel, and practical IT skills." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/dca-course-banner.jpg" />
        <link rel="canonical" href="https://www.anitioinstitute.com/dca-diploma-in-computer-applications" />
      </head>

      <main className="bg-gray-50 text-gray-900">
        {/* HERO */}
        <section className="bg-gradient-to-r from-indigo-900 via-blue-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Professional Diploma Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                DCA – Diploma in Computer Applications
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Learn complete computer applications, MS Office, Tally basics, Excel, Word, PowerPoint, Internet & job-ready skills.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold">
                  Enroll Now
                </button>
                <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black">
                  Download Syllabus
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold">14+</h3>
                  <p className="text-gray-300">Modules</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">100%</h3>
                  <p className="text-gray-300">Practical</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Job</h3>
                  <p className="text-gray-300">Ready</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">5000+</h3>
                  <p className="text-gray-300">Students</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
              <p className="text-center text-gray-600 mb-6">Start your computer diploma journey</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-indigo-700 text-white py-4 rounded-xl font-bold">
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              className="rounded-3xl shadow-2xl"
              alt="DCA Course"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">What is DCA?</h2>
              <p className="text-gray-600 mb-4">
                DCA (Diploma in Computer Applications) is a job-oriented computer course designed for beginners.
              </p>
              <p className="text-gray-600">
                It covers MS Office, Internet, Tally basics, Excel, Word, PowerPoint, and essential office automation skills.
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
                <h3 className="text-indigo-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
              <div key={i} className="bg-indigo-600 text-white p-6 rounded-2xl">
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
                <p className="text-indigo-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Start Your DCA Journey Today</h2>
          <p className="mb-8">Become computer literate and job ready</p>
          <button className="bg-indigo-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">Computer Training Institute</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>📞 9289438428</p>
              <p>📞 9971969158</p>
              <p>✉ anitioinstitute@gmail.com</p>
              <p>🌐 urlwww.anitioinstitute.comhttps://www.anitioinstitute.com</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>YouTube</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <p>Help Center</p>
              <p>Privacy Policy</p>
              <p>Terms</p>
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
