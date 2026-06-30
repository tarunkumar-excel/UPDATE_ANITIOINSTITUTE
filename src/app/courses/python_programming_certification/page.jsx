export default function PythonProgrammingCertificationLandingPage() {
  const modules = [
    'Python Basics & Syntax',
    'Data Types, Variables & Operators',
    'Control Flow (If-Else, Loops)',
    'Functions & Modules',
    'Data Structures (List, Tuple, Set, Dictionary)',
    'File Handling in Python',
    'Object-Oriented Programming (OOP)',
    'Error Handling & Exceptions',
    'Working with Libraries (NumPy Basics)',
    'Pandas for Data Handling Basics',
    'Introduction to APIs',
    'Mini Projects (Calculator, Student Management System)',
    'Web Basics with Python (Flask Intro)',
    'Final Certification Project'
  ];

  const highlights = [
    'Beginner to Advanced Python Training',
    '100% Practical Coding Sessions',
    'Real World Python Projects',
    'Data Analysis & Automation Skills',
    'Job Oriented Curriculum',
    'Freelancing Skill Development',
    'Live Instructor Support',
    'Certificate on Completion'
  ];

  const careers = [
    'Python Developer',
    'Software Developer',
    'Automation Engineer',
    'Data Analyst (Entry Level)',
    'Backend Developer',
    'Scripting Specialist',
    'AI/ML Beginner Path',
    'Freelance Python Developer'
  ];

  return (
    <>
      <head>
        <title>Python Programming Certification Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Learn Python Programming from basics to advanced with projects, OOP, file handling, data structures, and real-world applications. Become job ready Python developer."
        />

        <meta
          name="keywords"
          content="Python Course, Python Programming Certification, Learn Python, Python Training, Python Developer Course"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Python Programming Certification Course" />
        <meta property="og:description" content="Master Python programming with hands-on projects and real-world skills." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/python-course-banner.jpg" />

        <link rel="canonical" href="https://www.anitioinstitute.com/python-programming-certification" />
      </head>

      <main className="bg-gray-50 text-gray-900">

        {/* HERO */}
        <section className="bg-gradient-to-r from-yellow-700 via-orange-600 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div>
              <span className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Python Certification Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                Python Programming Certification
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Learn Python from basics to advanced concepts with real-world projects, automation, and backend development skills.
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
                <div><h3 className="text-3xl font-bold">14+</h3><p className="text-gray-300">Modules</p></div>
                <div><h3 className="text-3xl font-bold">100%</h3><p className="text-gray-300">Practical</p></div>
                <div><h3 className="text-3xl font-bold">Live</h3><p className="text-gray-300">Projects</p></div>
                <div><h3 className="text-3xl font-bold">5000+</h3><p className="text-gray-300">Students</p></div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
              <p className="text-center text-gray-600 mb-6">Start your Python journey</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold">
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
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              className="rounded-3xl shadow-2xl"
              alt="Python Programming"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">Why Learn Python?</h2>
              <p className="text-gray-600 mb-4">
                Python is one of the most powerful and beginner-friendly programming languages used in AI, web development, and automation.
              </p>
              <p className="text-gray-600">
                It is widely used in industries like data science, machine learning, web development, and software engineering.
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
                <h3 className="text-yellow-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
              <div key={i} className="bg-yellow-600 text-white p-6 rounded-2xl">
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
                <p className="text-yellow-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Become a Python Developer</h2>
          <p className="mb-8">Start coding your future with Python programming</p>
          <button className="bg-yellow-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">Programming & IT Training Institute</p>
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
              <a href="https://facebook.com" className="block">Facebook</a>
              <a href="https://instagram.com" className="block">Instagram</a>
              <a href="https://linkedin.com" className="block">LinkedIn</a>
              <a href="https://youtube.com" className="block">YouTube</a>
              <a href="https://x.com" className="block">X (Twitter)</a>
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
