export const metadata = {
  title: "Graphic Designing (Photoshop + CorelDRAW) Course | ANITIO INSTITUTE",
  description:
    "Learn Graphic Designing with Adobe Photoshop and CorelDRAW. Master logo design, posters, branding, and professional creative skills.",
  keywords:
    "Graphic Designing Course, Photoshop Course, CorelDRAW Course, Logo Design Training, Design Institute India",
  robots: "index, follow",
  openGraph: {
    title: "Graphic Designing Course (Photoshop + CorelDRAW)",
    description:
      "Become a professional graphic designer with Photoshop and CorelDRAW training.",
    type: "website",
    url: "https://www.anitioinstitute.com/graphic-designing-course",
  },
};

export default function GraphicDesigningCoursePage() {
  const modules = [
    "Introduction to Graphic Designing",
    "Basics of Design Principles (Color, Typography, Layout)",
    "Adobe Photoshop Interface & Tools",
    "Image Editing & Manipulation",
    "Poster & Banner Designing",
    "Logo Design Basics",
    "Photo Retouching & Effects",
    "CorelDRAW Introduction",
    "Vector Graphics & Illustration",
    "Business Card & Branding Design",
    "Advanced Logo Design Techniques",
    "Social Media Post Designing",
    "Print Media Design",
    "Portfolio Development",
    "Final Design Project"
  ];

  const highlights = [
    "100% Practical Design Training",
    "Photoshop + CorelDRAW Mastery",
    "Real Client Project Practice",
    "Creative Portfolio Development",
    "Beginner Friendly Course",
    "Freelancing Skills",
    "Industry Based Curriculum",
    "Certificate on Completion"
  ];

  const careers = [
    "Graphic Designer",
    "Logo Designer",
    "Photo Editor",
    "UI Design Assistant",
    "Freelance Designer",
    "Printing Press Designer",
    "Social Media Designer",
    "Brand Identity Designer"
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-pink-900 via-purple-700 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-pink-400 text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
              Creative Design Program
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
              Graphic Designing (Photoshop + CorelDRAW)
            </h1>

            <p className="text-lg text-gray-200 mt-6">
              Learn professional graphic design, logo creation, branding and editing using Photoshop & CorelDRAW.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-pink-400 text-black px-6 py-3 rounded-xl font-bold">
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
              Free Demo Registration
            </h2>

            <form className="space-y-4">
              <input className="w-full border p-3 rounded-xl" placeholder="Full Name" />
              <input className="w-full border p-3 rounded-xl" placeholder="Email" />
              <input className="w-full border p-3 rounded-xl" placeholder="Phone" />
              <select className="w-full border p-3 rounded-xl">
                <option>Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">About This Course</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          This course helps you become a professional graphic designer using Photoshop and CorelDRAW with real-world creative projects.
        </p>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Course Curriculum</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-pink-700 font-bold">
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
            <div key={i} className="bg-pink-600 text-white p-6 rounded-2xl">
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
              <p className="text-pink-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h2 className="text-5xl font-bold">Start Your Creative Career Today</h2>
        <p className="mt-4">Learn Photoshop + CorelDRAW + Branding Skills</p>
        <button className="mt-6 bg-pink-500 px-8 py-4 rounded-xl font-bold">
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
            <p className="text-gray-400 mt-3">Creative Design Institute</p>
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
