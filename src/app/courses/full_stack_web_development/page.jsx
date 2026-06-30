export default function FullStackWebDevelopmentLandingPage() {
  const modules = [
    'HTML5, CSS3 & Responsive Design',
    'JavaScript Fundamentals & ES6+',
    'React.js Frontend Development',
    'Next.js Full Stack Framework',
    'Node.js & Express.js Backend',
    'REST API Development',
    'MongoDB / SQL Database Integration',
    'Authentication & Authorization (JWT)',
    'State Management (Redux / Context API)',
    'Git & GitHub Version Control',
    'Deployment (Vercel / Netlify / AWS)',
    'Real World Projects (Portfolio + E-commerce)',
    'System Design Basics',
    'Final Full Stack Capstone Project'
  ];

  const highlights = [
    'Industry Ready Full Stack Curriculum',
    '100% Project Based Learning',
    'Frontend + Backend Mastery',
    'Real Client Projects',
    'Placement Assistance',
    'Freelancing Guidance',
    'Live Coding Sessions',
    'Lifetime Learning Support'
  ];

  const careers = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Node.js Developer',
    'Web Application Developer',
    'Software Engineer',
    'Freelance Web Developer'
  ];

  return (
    <>
      <head>
        <title>
          Full Stack Web Development Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
        </title>

        <meta
          name="description"
          content="Learn Full Stack Web Development with React, Next.js, Node.js, MongoDB, APIs, authentication, deployment and real-world projects. Become job ready developer."
        />

        <meta
          name="keywords"
          content="Full Stack Development Course, Web Development Training, React Course, Next.js Course, Node.js Training, MongoDB Course"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Full Stack Web Development Course" />
        <meta property="og:description" content="Master frontend + backend development with real projects and industry training." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/fullstack-course-banner.jpg" />

        <link rel="canonical" href="https://www.anitioinstitute.com/full-stack-web-development-course" />
      </head>

      <main className="bg-gray-50 text-gray-900">

        {/* HERO */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div>
              <span className="bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Full Stack Developer Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                Full Stack Web Development
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Learn React, Next.js, Node.js, MongoDB, APIs, authentication, and deployment
                with real-world projects and job-ready skills.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold">
                  Enroll Now
                </button>
                <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black">
                  Download Syllabus
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div><h3 className="text-3xl font-bold">14+</h3><p className="text-gray-300">Modules</p></div>
                <div><h3 className="text-3xl font-bold">100%</h3><p className="text-gray-300">Project Based</p></div>
                <div><h3 className="text-3xl font-bold">Live</h3><p className="text-gray-300">Projects</p></div>
                <div><h3 className="text-3xl font-bold">5000+</h3><p className="text-gray-300">Students</p></div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
              <p className="text-center text-gray-600 mb-6">Start your developer journey</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold">
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
              alt="Full Stack Development"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">Why Full Stack Development?</h2>
              <p className="text-gray-600 mb-4">
                Full Stack Developers are highly demanded in the IT industry for building complete web applications.
              </p>
              <p className="text-gray-600">
                You will learn both frontend and backend technologies with real project experience.
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
                <h3 className="text-cyan-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
              <div key={i} className="bg-cyan-600 text-white p-6 rounded-2xl">
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
                <p className="text-cyan-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Become a Full Stack Developer</h2>
          <p className="mb-8">Build real-world web applications and get hired</p>
          <button className="bg-cyan-500 px-10 py-4 rounded-2xl font-bold">
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
              <p>🌐 urlwww.anitioinstitute.comhttps://www.anitioinstitute.com</p>
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
