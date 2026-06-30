import Link from "next/link";

export const metadata = {
  title:
    "Certificate In MS-Office | Anitio Information Technology and Skill Development LLP",

  description:
    "Join Certificate In MS-Office course and learn Microsoft Word, Excel, PowerPoint, Outlook and Office productivity skills.",

  keywords: [
    "MS Office Course",
    "Certificate In MS Office",
    "Excel Course",
    "Word Training",
    "Computer Course",
    "Anitio Institute",
  ],

  openGraph: {
    title: "Certificate In MS-Office",

    description:
      "Professional Microsoft Office training with certification.",

    url: "https://www.anitioinstitute.com",

    siteName:
      "Anitio Information Technology and Skill Development LLP",

    type: "website",
  },

  alternates: {
    canonical:
      "https://www.anitioinstitute.com/courses/certificate-in-ms-office",
  },
};

const modules = [
  "Computer Fundamentals",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Outlook",
  "File Management",
  "Internet & Email",
  "Office Productivity",
];

const benefits = [
  "Professional Training",
  "Practical Assignments",
  "Certificate Included",
  "Job Ready Skills",
  "Interview Preparation",
  "Affordable Fees",
];

export default function CertificateMSOfficePage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="inline-block px-5 py-2 rounded-full bg-white/20">
            Professional Computer Course
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            Certificate In MS-Office
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Master Microsoft Office tools including Word,
            Excel, PowerPoint and Outlook with practical
            training and certification.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#admission"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Apply Now
            </a>

            <Link
              href="https://www.anitioinstitute.com"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Visit Website
            </Link>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Course Overview
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            This course helps students and professionals
            develop office productivity and computer skills
            using Microsoft Office applications.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            {[
              ["Duration", "3 Months"],
              ["Mode", "Online / Offline"],
              ["Level", "Beginner"],
              ["Certificate", "Included"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="shadow-lg rounded-2xl p-8"
              >
                <h3 className="font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-blue-700">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MODULES */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {modules.map((module) => (
              <div
                key={module}
                className="bg-white rounded-xl shadow p-6"
              >
                ✓ {module}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Why Choose This Course
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {benefits.map((item) => (
              <div
                key={item}
                className="p-8 rounded-2xl shadow"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CAREER */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {[
              "Office Executive",
              "Data Entry Operator",
              "Computer Operator",
              "Admin Assistant",
              "Back Office Executive",
              "Documentation Executive",
            ].map((job) => (
              <div
                key={job}
                className="bg-white p-6 rounded-xl shadow"
              >
                {job}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="admission"
        className="bg-black text-white py-20"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Admission & Contact
          </h2>

          <div className="mt-8 space-y-4">

            <p>
              <strong>Institute:</strong>
              <br />
              Anitio Information Technology and
              Skill Development LLP
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              +91 9289438428
              <br />
              +91 9971969158
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              anitioinstitute@gmail.com
            </p>

            <p>
              <strong>Website:</strong>
              <br />
              https://www.anitioinstitute.com
            </p>

          </div>

          {/* SOCIAL */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link href="#">
              Facebook
            </Link>

            <Link href="#">
              Instagram
            </Link>

            <Link href="#">
              LinkedIn
            </Link>

            <Link href="#">
              YouTube
            </Link>

            <Link href="#">
              Twitter / X
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-8 text-center border-t">

        © 2026 Anitio Information Technology and Skill Development LLP

      </footer>

    </main>
  );
}