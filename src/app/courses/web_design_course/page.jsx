export default function WebDesignCourseLandingPage() {
  const modules = [
    'Introduction to Web Design & Internet Basics',
    'HTML5: Structure of Web Pages',
    'CSS3: Styling & Layout Design',
    'Responsive Design with Media Queries',
    'Bootstrap 5 Framework Mastery',
    'Flexbox & CSS Grid Layout',
    'Website UI Components Design',
    'Landing Page Design Techniques',
    'Forms, Tables & Web Elements',
    'Basic JavaScript for Interactivity',
    'Website Hosting & Deployment',
    'SEO Basics for Web Designers',
    'Real Client Website Project',
    'Portfolio Website Development'
  ];

  const highlights = [
    '100% Practical Web Design Training',
    'HTML, CSS & Bootstrap Mastery',
    'Mobile Responsive Website Design',
    'Real Live Projects & Practice',
    'Beginner to Advanced Level Course',
    'Job Ready Web Design Skills',
    'Freelancing Opportunity Guidance',
    'Lifetime Learning Support'
  ];

  const careers = [
    'Web Designer',
    'Frontend Developer',
    'UI Designer',
    'HTML Developer',
    'Bootstrap Developer',
    'Freelance Web Designer',
    'WordPress Designer (Basic)',
    'Website Maintenance Executive'
  ];

  return (
    <>
      <head>
        <title>Web Design Course (HTML, CSS & Bootstrap) | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Learn Web Design with HTML, CSS, Bootstrap, Responsive Design, UI Layouts and build professional websites with real projects and hands-on training."
        />

        <meta
          name="keywords"
          content="Web Design Course, HTML CSS Bootstrap Course, Website Designing Training, Frontend Design Course, Responsive Web Design"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Web Design Course - HTML CSS Bootstrap Training" />
        <meta property="og:description" content="Become a professional web designer with HTML, CSS, Bootstrap and responsive design skills." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/web-design-course-banner.jpg" />

        <link rel="canonical" href="https://www.anitioinstitute.com/web-design-course" />
      </head>

      <main className="bg-gray-50 text-gray-900">

        {/* HERO */}
        <section className="bg-gradient-to-r from-orange-900 via-pink-700 to-black text-white py-24 px-6 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div>
              <span className="bg-orange-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
                Web Designing Program
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
                Web Design (HTML, CSS & Bootstrap)
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Learn modern website designing with HTML5, CSS3, Bootstrap and responsive layouts to build professional websites.
              </p>

              <div className="flex gap-5 flex-wrap">
                <button className="bg-orange-400 text-black px-8 py-4 rounded-2xl font-bold">
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
              <p className="text-center text-gray-600 mb-6">Start your Web Design career</p>

              <form className="space-y-5">
                <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
                <input className="w-full border p-4 rounded-xl" placeholder="Email" />
                <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
                <select className="w-full border p-4 rounded-xl">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold">
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
              src="https://images.unsplash.com/photo-1547658719-da2b51169166"
              className="rounded-3xl shadow-2xl"
              alt="Web Design Training"
            />

            <div>
              <h2 className="text-4xl font-bold mb-6">Why Web Design Course?</h2>
              <p className="text-gray-600 mb-4">
                Web Design is the foundation of every website. Learn how to create beautiful and responsive websites.
              </p>
              <p className="text-gray-600">
                HTML, CSS and Bootstrap are essential skills for every modern web designer.
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
                <h3 className="text-orange-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
              <div key={i} className="bg-orange-600 text-white p-6 rounded-2xl">
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
                <p className="text-orange-700 font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Become a Web Designer</h2>
          <p className="mb-8">Build beautiful websites with HTML, CSS & Bootstrap</p>
          <button className="bg-orange-500 px-10 py-4 rounded-2xl font-bold">
            Apply Now
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
              <p className="text-gray-400 mt-4">Web Design Training Institute</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Details</h4>
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
