export default function ADCA_Course_LandingPage() {
  const modules = [
    'Computer Fundamentals & IT Concepts',
    'Advanced Windows & Operating Systems',
    'MS Word Advanced & Professional Formatting',
    'Advanced Excel (Formulas, Charts, Dashboard)',
    'MS PowerPoint Professional Presentation Design',
    'Internet, Email & Cloud Computing Basics',
    'Typing Mastery & Productivity Tools',
    'Tally Prime with Accounting & GST Basics',
    'Database Management (SQL / MS Access)',
    'Programming Basics (C / Python Introduction)',
    'Web Designing Basics (HTML, CSS)',
    'Cyber Security & Ethical Internet Usage',
    'Advanced Office Automation Projects',
    'Final Project + Certification Assessment'
  ];

  const highlights = [
    'Advanced Diploma Level Certification',
    '100% Practical Lab Training',
    'Industry Oriented Curriculum',
    'Job Ready Skill Development',
    'Real Time Project Experience',
    'Offline & Online Learning Mode',
    'Expert Faculty Training',
    'Lifetime Learning Support'
  ];

  const careers = [
    'Software Support Executive',
    'Data Entry Operator',
    'Computer Operator',
    'Office Executive',
    'Account Assistant',
    'Web Assistant',
    'IT Support Staff',
    'Freelancer (Tech & Data Services)'
  ];

  return (
    <>
      <head>
        <title>ADCA – Advanced Diploma in Computer Applications | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Join ADCA Advanced Diploma in Computer Applications and learn Advanced Excel, Tally, Programming Basics, Web Designing, Database, MS Office and job-ready IT skills."
        />

        <meta
          name="keywords"
          content="ADCA Course, Advanced Diploma Computer Applications, Computer Course, Tally GST Training, Excel Advanced Course, Web Designing Basics"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="ADCA Course - Advanced Diploma in Computer Applications" />
        <meta property="og:description" content="Learn Advanced Computer Applications with programming basics, Tally, Excel, and IT skills." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/adca-course-banner.jpg" />

        <link rel="canonical" href="https://www.anitioinstitute.com/adca-course" />
      </head>

      <main className="bg-gray-50 text-gray-900">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-purple-900 via-indigo-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div>
              <span className="bg-purple-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Advanced Diploma Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                ADCA – Advanced Diploma in Computer Applications
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Master Advanced Computer Applications including Excel, Tally, Programming Basics,
                Web Designing, Database Management and IT Skills.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-purple-400 text-black px-8 py-4 rounded-2xl font-bold">
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
              <p className="text-center text-gray-600 mb-6">Start your ADCA career today</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-purple-700 text-white py-4 rounded-xl font-bold">
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
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              className="rounded-3xl shadow-2xl"
              alt="ADCA Course"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">What is ADCA?</h2>
              <p className="text-gray-600 mb-4">
                ADCA (Advanced Diploma in Computer Applications) is a complete professional IT course for advanced computer skills.
              </p>
              <p className="text-gray-600">
                It includes programming basics, web designing, Tally, Excel, database management, and office automation.
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
                <h3 className="text-purple-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
              <div key={i} className="bg-purple-600 text-white p-6 rounded-2xl">
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
                <p className="text-purple-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Start Your ADCA Journey Today</h2>
          <p className="mb-8">Become an Advanced IT Professional</p>
          <button className="bg-purple-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">IT Training Institute</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>📞 9289438428</p>
              <p>📞 9971969158</p>
              <p>✉ anitioinstitute@gmail.com</p>
              <p>🌐 www.anitioinstitute.com</p>
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
