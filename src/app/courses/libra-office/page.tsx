// ======================================================
// FILE: app/courses/libra-office/page.tsx
// ======================================================

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "LIBRA OFFICE Course | ANITIO Information Technology and Skill Development LLP",
  description:
    "Join LIBRA OFFICE Course at ANITIO Institute. Learn Writer, Calc, Impress, Base, Draw and complete office productivity tools with certification.",
  keywords: [
    "LIBRA OFFICE Course",
    "LibreOffice Training",
    "Office Course",
    "Computer Course",
    "LibreOffice Writer",
    "LibreOffice Calc",
    "ANITIO Institute",
  ],
  openGraph: {
    title: "LIBRA OFFICE Course - ANITIO Institute",
    description:
      "Professional LIBRA OFFICE training with practical projects and certification.",
    url: "https://www.anitioinstitute.com",
    siteName:
      "ANITIO Information Technology and Skill Development LLP",
    locale: "en_IN",
    type: "website",
  },
};

const features = [
  "LibreOffice Writer",
  "LibreOffice Calc",
  "LibreOffice Impress",
  "LibreOffice Base",
  "LibreOffice Draw",
  "Office Productivity",
  "Practical Assignments",
  "Certificate Included",
];

export default function LibraOfficePage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Professional Computer Course
            </span>

            <h1 className="text-5xl font-extrabold mt-6 leading-tight">
              LIBRA OFFICE Course
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Master LibreOffice tools including Writer, Calc, Impress,
              Base and Draw with practical training and certification.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#admission"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold transition"
              >
                Enroll Now
              </Link>

              <Link
                href="tel:9289438428"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Call Now
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-black">
            <h2 className="text-2xl font-bold mb-6">
              Course Highlights
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 p-4 rounded-xl text-center font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="LIBRA OFFICE Course"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About LIBRA OFFICE Course
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              LIBRA OFFICE is a powerful free office suite used worldwide.
              This course helps students, professionals, office staff,
              and beginners learn office productivity tools professionally.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <span>✅</span>
                <p>100% Practical Training</p>
              </div>

              <div className="flex gap-3">
                <span>✅</span>
                <p>Industry Standard Curriculum</p>
              </div>

              <div className="flex gap-3">
                <span>✅</span>
                <p>Professional Certificate</p>
              </div>

              <div className="flex gap-3">
                <span>✅</span>
                <p>Job Assistance Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              What You Will Learn
            </h2>

            <p className="text-gray-600 mt-4">
              Complete LIBRA OFFICE Professional Training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Introduction to LibreOffice",
              "Writer Document Formatting",
              "Calc Spreadsheet Functions",
              "Charts & Reports",
              "Presentation Design",
              "Database Management",
              "Drawing Tools",
              "Office Productivity Skills",
              "Project Work",
            ].map((module) => (
              <div
                key={module}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h3 className="font-bold text-xl">
                  {module}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ADMISSION SECTION */}
      <section
        id="admission"
        className="py-20 bg-gradient-to-r from-indigo-700 to-blue-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Start Your Computer Career Today
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Admissions Open for LIBRA OFFICE Course
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <a
              href="tel:9289438428"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Call: 9289438428
            </a>

            <a
              href="tel:9971969158"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Call: 9971969158
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              ANITIO Institute
            </h3>

            <p className="text-gray-400">
              ANITIO Information Technology and Skill Development LLP
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p>📞 9289438428</p>
            <p>📞 9971969158</p>
            <p>📧 anitioinstitute@gmail.com</p>
            <p>🌐 www.anitioinstitute.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Instagram
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-yellow-400"
              >
                YouTube
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-yellow-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2026 ANITIO Information Technology and Skill Development LLP
        </div>
      </footer>

    </main>
  );
}
