import Link from "next/link";

export const metadata = {
  title:
    "MS Office Course | Anitio Information Technology and Skill Development LLP",
  description:
    "Join the professional MS Office course at Anitio Information Technology and Skill Development LLP. Learn Word, Excel, PowerPoint, Outlook with practical training and certification.",

  keywords: [
    "MS Office Course",
    "Excel Training",
    "PowerPoint Course",
    "Word Training",
    "Computer Institute",
    "Delhi Institute",
    "Anitio Institute",
  ],

  openGraph: {
    title: "MS Office Course | Anitio Institute",
    description:
      "Professional MS Office training with certification and practical learning.",
    url: "https://www.anitioinstitute.com",
    siteName: "Anitio Institute",
    type: "website",
  },
};

export default function MSOfficePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Master MS Office with Practical Training
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Learn Microsoft Word, Excel, PowerPoint, Outlook and improve your
            job skills with hands-on training at Anitio Institute.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Enroll Now
            </a>

            <a
              href="https://www.anitioinstitute.com"
              target="_blank"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Course Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "MS Word Mastery",
              "Advanced Excel",
              "PowerPoint Presentation",
              "Email & Outlook",
              "Typing Practice",
              "Certificate Included",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {item}
                </h3>
                <p className="text-gray-600 mt-2">
                  Practical training with real-world examples.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>

            <ul className="mt-6 space-y-3 text-lg">
              <li>✔ Practical Training</li>
              <li>✔ Experienced Trainers</li>
              <li>✔ Job-Oriented Course</li>
              <li>✔ Affordable Fees</li>
              <li>✔ Certification Support</li>
            </ul>
          </div>

          <div className="bg-blue-700 text-white p-10 rounded-3xl">
            <h3 className="text-2xl font-bold">Institute Details</h3>

            <div className="mt-4 space-y-2">
              <p><b>Institute:</b> Anitio Information Technology & Skill Development LLP</p>
              <p><b>Phone:</b> 9289438428, 9971969158</p>
              <p><b>Email:</b> anitioinstitute@gmail.com</p>
              <p><b>Website:</b> www.anitioinstitute.com</p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">Enroll Today</h2>

        <p className="mt-4 text-gray-600">
          Start your MS Office career journey now.
        </p>

        <div className="mt-6 space-y-3">
          <p className="text-xl font-semibold">
            📞 9289438428 | 9971969158
          </p>

          <p>📧 anitioinstitute@gmail.com</p>

          <a
            href="https://www.anitioinstitute.com"
            target="_blank"
            className="inline-block mt-4 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800"
          >
            Visit Official Website
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 Anitio Institute. All rights reserved.
      </footer>

    </main>
  );
}