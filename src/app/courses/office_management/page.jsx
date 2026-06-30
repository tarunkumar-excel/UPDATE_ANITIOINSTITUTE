// Next.js + Tailwind CSS SEO Friendly Landing Page

export default function FullStackWebDevelopmentPage() {
  const courseModules = [
    'HTML5 & CSS3',
    'JavaScript ES6+',
    'React JS Development',
    'Next.js Framework',
    'Tailwind CSS',
    'Node.js & Express.js',
    'MongoDB Database',
    'REST API Development',
    'Git & GitHub',
    'Responsive Website Design',
    'Deployment & Hosting',
    'Interview Preparation',
  ];

  const benefits = [
    '100% Practical Training',
    'Live Projects & Assignments',
    'Industry Expert Trainers',
    'Online & Offline Classes',
    'Portfolio Development',
    'Placement Assistance',
    'Interview Preparation',
    'SEO Friendly Development',
    'Freelancing Guidance',
  ];

  const careers = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React JS Developer',
    'Next.js Developer',
    'Web Designer',
    'MERN Stack Developer',
    'Freelance Web Developer',
  ];

  return (
    <>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                Admission Open 2026
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                FULL STACK WEB
                <span className="block text-yellow-300">DEVELOPMENT COURSE</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
                Learn modern website development with HTML, CSS, JavaScript,
                React JS, Next.js, Node.js, MongoDB, APIs, and deployment with
                practical training and live projects.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold shadow-xl transition duration-300">
                  Apply Now
                </button>

                <button className="border border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-2xl font-semibold transition duration-300">
                  Download Brochure
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                {[
                  'Online & Offline Classes',
                  'Live Projects',
                  'Professional Certificate',
                  'Placement Support',
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

            {/* Admission Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                Enquiry Form
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <select className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select Course</option>
                  <option>Crash Course</option>
                  <option>Certificate Course</option>
                  <option>Diploma Course</option>
                  <option>Master Diploma</option>
                </select>

                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-bold shadow-lg transition duration-300">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Full Stack Development Course
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              This Full Stack Web Development Course is specially designed for
              students, job seekers, and professionals who want to become
              modern web developers. Learn frontend and backend technologies
              with practical projects and industry-oriented training.
            </p>
          </div>
        </section>

        {/* Fees Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14">
              Course Duration & Fees
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Crash Course',
                  duration: '3 Months',
                  fee: '₹18,000',
                },
                {
                  title: 'Certificate Course',
                  duration: '6 Months',
                  fee: '₹35,000',
                },
                {
                  title: 'Diploma Course',
                  duration: '1 Year',
                  fee: '₹60,000',
                },
                {
                  title: 'Master Diploma',
                  duration: '2 Years',
                  fee: '₹95,000',
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {course.title}
                  </h3>

                  <p className="text-lg mb-2">⏳ {course.duration}</p>

                  <p className="text-4xl font-extrabold text-indigo-700 mb-4">
                    {course.fee}
                  </p>

                  <p className="text-sm text-gray-600 mb-6">
                    Online & Offline Classes Available
                  </p>

                  <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 px-6 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14">
              Course Modules
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                >
                  <div className="text-5xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {module}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14">
              Why Choose ANITIO?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl p-6 shadow-lg"
                >
                  <p className="text-lg font-semibold">✅ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 px-6 bg-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14">
              Career Opportunities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careers.map((career, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 font-semibold hover:shadow-2xl transition duration-300"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us Today
              </h2>

              <p className="text-lg leading-relaxed mb-8 text-gray-100">
                Start your career in Full Stack Web Development with practical
                coding training and live industry projects.
              </p>

              <div className="space-y-4 text-lg">
                <p>📍 Delhi, India</p>
                <p>📞 +91 92894 38428</p>
                <p>📞 Alternate: +91 99719 69158</p>
                <p>🌐 www.anitioinstitute.com</p>
                <p>📧 anitioinstitute@gmail.com</p>

                <div className="pt-4 flex flex-wrap gap-4 text-base">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    YouTube
                  </a>

                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    Telegram
                  </a>

                  <a
                    href="https://snapchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition"
                  >
                    Snapchat
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
              <h3 className="text-3xl font-bold text-center text-blue-900 mb-6">
                Admission Open Now
              </h3>

              <p className="text-center text-gray-600 mb-8">
                Limited Seats Available
              </p>

              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl text-lg font-bold shadow-lg transition duration-300">
                Apply For Admission
              </button>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Best Full Stack Web Development Institute in Delhi
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP provides
              professional web development training with practical coding,
              responsive website development, React JS applications, backend API
              development, database management, deployment, and freelancing
              guidance.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Students learn industry-ready web development technologies with
              hands-on projects, portfolio development, and interview
              preparation for software and IT companies.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-10 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-4">
              ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
            </h3>

            <div className="space-y-2 text-gray-300 mb-6">
              <p>📞 +91 92894 38428 | Alternate: +91 99719 69158</p>
              <p>📧 anitioinstitute@gmail.com</p>
              <p>🌐 www.anitioinstitute.com</p>

              <div className="flex justify-center flex-wrap gap-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  YouTube
                </a>

                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Telegram
                </a>

                <a
                  href="https://snapchat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Snapchat
                </a>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP.
              All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
