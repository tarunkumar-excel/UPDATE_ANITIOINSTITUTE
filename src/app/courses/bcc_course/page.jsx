export default function BCCCourseLandingPage() {
  const modules = [
    'Introduction to Computer & IT Basics',
    'Operating System (Windows) Basics',
    'MS Word - Document Creation',
    'MS Excel - Spreadsheet Basics',
    'MS PowerPoint - Presentations',
    'Internet & Email Basics',
    'Typing Skills & Keyboard Practice',
    'File Management & Folder System',
    'Computer Security Basics',
    'Digital Payments & Online Services',
    'Basic Troubleshooting',
    'Practical Office Applications',
    'Project Work & Assignments',
    'Final Practical Examination'
  ];

  const highlights = [
    'Beginner Friendly Course',
    '100% Practical Training',
    'Government & Private Job Useful Skills',
    'Certificate Support',
    'Offline & Online Classes',
    'Job Oriented Curriculum',
    'Real-Life Office Practice',
    'Lifetime Support'
  ];

  const careers = [
    'Data Entry Operator',
    'Office Assistant',
    'Computer Operator',
    'Clerical Staff',
    'Receptionist',
    'Back Office Executive',
    'Freelancer (Typing & Data Entry)',
    'Junior Computer Operator'
  ];

  return (
    <>
      <head>
        <title>
          Basic Computer Course (BCC) | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
        </title>

        <meta
          name="description"
          content="Join Basic Computer Course (BCC) and learn MS Office, Internet, Email, Windows, Typing, and essential computer skills for jobs and daily use."
        />

        <meta
          name="keywords"
          content="BCC Course, Basic Computer Course, MS Office Training, Computer Basics, Data Entry Course, Computer Training Institute"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Basic Computer Course (BCC) | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP"
        />

        <meta
          property="og:description"
          content="Learn Computer Basics, MS Word, Excel, PowerPoint, Internet & Email with practical training."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/bcc-course-banner.jpg" />

        <link
          rel="canonical"
          href="https://www.anitioinstitute.com/basic-computer-course-bcc"
        />
      </head>

      <main className="bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="bg-indigo-400 text-black px-5 py-2 rounded-full text-sm font-semibold uppercase">
                Computer Fundamentals Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                Basic Computer Course (BCC)
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Learn essential computer skills like MS Office, Internet, Email,
                Typing, and Windows for jobs, exams, and daily use.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-indigo-400 hover:bg-indigo-500 text-black px-8 py-4 rounded-2xl font-bold">
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
                  <p className="text-gray-300">Ready Skills</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">5000+</h3>
                  <p className="text-gray-300">Students</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
              <p className="text-center text-gray-600 mb-6">Start your computer learning journey</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>

                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
              className="rounded-3xl shadow-2xl"
              alt="BCC Training"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">Learn Computer Basics Easily</h2>
              <p className="text-gray-600 mb-4">
                This BCC course is designed for beginners who want to learn computer fundamentals for jobs and daily use.
              </p>
              <p className="text-gray-600">
                Gain confidence in MS Office, internet usage, typing, and essential office work skills.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold">Course Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {modules.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-indigo-700">{String(i + 1).padStart(2, '0')}</h3>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
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

        {/* Careers */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold">Career Opportunities</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <p className="font-semibold text-indigo-700">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Start Learning Today</h2>
          <p className="mb-8">Join Basic Computer Course and become job ready</p>
          <button className="bg-indigo-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-bold text-xl">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">Computer & IT Training Institute</p>
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
