export const metadata = {
  title: "Skill Development & Job-Oriented Training | ANITIO INSTITUTE",
  description:
    "Join Skill Development & Job-Oriented Training program. Learn practical computer, accounting, IT, and career skills for jobs and freelancing.",
  keywords:
    "Skill Development Course, Job Oriented Training, Computer Training Institute, Career Skills India, ANITIO Institute",
  robots: "index, follow",
  openGraph: {
    title: "Skill Development & Job-Oriented Training",
    description:
      "Industry-focused skill development program for job-ready training and career growth.",
    type: "website",
    url: "https://www.anitioinstitute.com/skill-development",
  },
};

export default function SkillDevelopmentPage() {
  const modules = [
    "Basic Computer Fundamentals",
    "MS Office (Word, Excel, PowerPoint)",
    "Internet & Digital Skills",
    "Typing & Data Entry Practice",
    "Accounting Basics & Tally Introduction",
    "Communication & Interview Skills",
    "Resume Building & Job Preparation",
    "Digital Workplace Skills",
    "Basic Graphic Designing Introduction",
    "Email & Professional Communication",
    "Job Search Strategies",
    "Practical Office Projects",
    "Mock Interviews & Assessment",
    "Final Certification Program"
  ];

  const highlights = [
    "Job-Oriented Practical Training",
    "Beginner Friendly Program",
    "Industry Required Skills",
    "100% Practical Learning",
    "Interview Preparation",
    "Certificate on Completion",
    "Freelancing & Job Support",
    "Career Guidance Support"
  ];

  const careers = [
    "Office Assistant",
    "Data Entry Operator",
    "Computer Operator",
    "Receptionist",
    "Accounts Assistant",
    "Back Office Executive",
    "Freelancer",
    "Junior Executive"
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-700 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-indigo-400 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
              Career Skill Program
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
              Skill Development & Job-Oriented Training
            </h1>

            <p className="text-lg text-gray-200 mt-6">
              Build job-ready skills in computers, communication, accounting, and office tools for a successful career.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-indigo-400 text-black px-6 py-3 rounded-xl font-bold">
                Enroll Now
              </button>
              <button className="border px-6 py-3 rounded-xl">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-4">
              Free Career Counselling
            </h2>

            <form className="space-y-4">
              <input className="w-full border p-3 rounded-xl" placeholder="Full Name" />
              <input className="w-full border p-3 rounded-xl" placeholder="Email" />
              <input className="w-full border p-3 rounded-xl" placeholder="Phone" />
              <select className="w-full border p-3 rounded-xl">
                <option>Select Training Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">About This Program</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          This skill development program is designed to make students job-ready by providing practical training in computer, office tools, communication, and career skills.
        </p>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Training Modules</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-indigo-700 font-bold">
                {String(i + 1).padStart(2, "0")}
              </h3>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Program Highlights</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, i) => (
            <div key={i} className="bg-indigo-600 text-white p-6 rounded-2xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CAREER */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Career Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {careers.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-indigo-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h2 className="text-5xl font-bold">Start Your Career Journey Today</h2>
        <p className="mt-4">Learn job-ready skills with expert training</p>
        <button className="mt-6 bg-indigo-500 px-8 py-4 rounded-xl font-bold">
          Apply Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="font-bold text-xl">
              ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
            </h3>
            <p className="text-gray-400 mt-3">
              Skill Development Institute
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p>📞 9289438428</p>
            <p>📞 9971969158</p>
            <p>✉ anitioinstitute@gmail.com</p>
            <p>🌐 www.anitioinstitute.com</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Social Media</h4>
            <a className="block" href="https://facebook.com">Facebook</a>
            <a className="block" href="https://instagram.com">Instagram</a>
            <a className="block" href="https://linkedin.com">LinkedIn</a>
            <a className="block" href="https://youtube.com">YouTube</a>
            <a className="block" href="https://x.com">X</a>
          </div>

          <div>
            <h4 className="font-bold mb-3">Support</h4>
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
