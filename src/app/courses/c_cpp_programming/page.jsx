export default function CCPlusPlusProgrammingCourseLandingPage() {
  const modules = [
    "Introduction to Programming & Problem Solving",
    "C Language Fundamentals (Syntax, Variables, Data Types)",
    "Operators & Control Statements",
    "Loops (for, while, do-while)",
    "Functions & Recursion",
    "Arrays & Strings",
    "Pointers in C",
    "Structures & Memory Management",
    "File Handling in C",
    "Introduction to C++ Programming",
    "OOP Concepts (Class, Object, Encapsulation)",
    "Inheritance & Polymorphism",
    "Constructors & Destructors",
    "STL Basics (C++)",
    "Problem Solving & DSA Basics",
    "Mini Projects in C & C++",
    "Debugging & Code Optimization",
    "Final Certification Project"
  ];

  const highlights = [
    "Complete C & C++ Mastery",
    "100% Practical Coding Training",
    "Strong Logic Building Skills",
    "Real-Time Projects",
    "Interview Preparation",
    "Freelancing Skill Development",
    "Beginner to Advanced Level",
    "Industry-Oriented Curriculum"
  ];

  const careers = [
    "Software Developer",
    "C/C++ Programmer",
    "System Engineer",
    "Game Developer (Basic)",
    "Embedded Systems Developer",
    "Backend Developer (Entry Level)",
    "Technical Support Engineer",
    "Freelance Developer"
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* SEO NOTE: Add this metadata in Next.js app router (app/layout.js or page.js metadata export) */}

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-800 to-black text-white py-24 px-6 relative">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <div>
            <span className="bg-blue-400 text-black px-5 py-2 rounded-full text-sm font-bold uppercase">
              Programming Certification
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6">
              C & C++ Programming Course
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Master C & C++ programming with real-world projects, logic building and strong programming fundamentals.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="bg-blue-400 text-black px-8 py-4 rounded-2xl font-bold">
                Enroll Now
              </button>
              <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-black rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-center mb-4">Free Demo Class</h2>
            <p className="text-center text-gray-600 mb-6">Start your coding journey today</p>

            <form className="space-y-5">
              <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
              <input className="w-full border p-4 rounded-xl" placeholder="Email" />
              <input className="w-full border p-4 rounded-xl" placeholder="Phone" />
              <select className="w-full border p-4 rounded-xl">
                <option>Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About the Course</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            This C & C++ programming course builds a strong foundation in programming, logic building, and software development skills.
          </p>
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
              <h3 className="text-blue-700 font-bold">{String(i + 1).padStart(2, '0')}</h3>
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
            <div key={i} className="bg-blue-600 text-white p-6 rounded-2xl">
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
              <p className="text-blue-700 font-semibold">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">Become a Programmer Today</h2>
        <p className="mb-8">Build strong coding fundamentals with C & C++</p>
        <button className="bg-blue-500 px-10 py-4 rounded-2xl font-bold">
          Apply Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold">ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</h3>
            <p className="text-gray-400 mt-4">Programming Training Institute</p>
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
  );
}
