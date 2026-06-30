export default function DigitalMarketingMasterProgramPreview() {
  const modules = [
    'SEO Optimization',
    'Google Ads PPC',
    'Meta Facebook Ads',
    'Instagram Marketing',
    'YouTube Marketing',
    'Content Marketing',
    'Affiliate Marketing',
    'Email Marketing',
    'Canva Graphic Design',
    'AI Marketing Tools',
    'Blogging & WordPress',
    'Freelancing & Client Handling',
  ];

  const benefits = [
    '100% Practical Training',
    'Live Campaign Projects',
    'Industry Expert Trainers',
    'Online & Offline Classes',
    'Google Certification Guidance',
    'Placement Assistance',
    'Interview Preparation',
    'Portfolio Development',
    'Freelancing Guidance',
  ];

  const careers = [
    'Digital Marketing Executive',
    'SEO Specialist',
    'Google Ads Expert',
    'Social Media Manager',
    'Content Marketer',
    'Affiliate Marketer',
    'YouTube Strategist',
    'Freelance Digital Marketer',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-100 text-gray-800">
      <section className="bg-gradient-to-r from-purple-900 to-pink-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Admission Open 2026
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              DIGITAL MARKETING
              <span className="block text-yellow-300">
                MASTER PROGRAM
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
              Learn SEO, Google Ads, Meta Ads, YouTube Marketing,
              Content Marketing, AI Marketing Tools, Blogging,
              and Freelancing with practical live projects.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold shadow-xl transition">
                Apply Now
              </button>

              <button className="border border-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-2xl font-semibold transition">
                Download Brochure
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Online & Offline Classes',
                'Live Projects',
                'Professional Certificate',
                'Placement Assistance',
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

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
            <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">
              Enquiry Form
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-xl"
              />

              <select className="w-full border p-4 rounded-xl">
                <option>Select Program</option>
                <option>Crash Course</option>
                <option>Certificate Course</option>
                <option>Diploma Course</option>
                <option>Master Diploma</option>
              </select>

              <button className="w-full bg-purple-900 hover:bg-purple-800 text-white py-4 rounded-xl font-bold shadow-lg transition">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-900 mb-14">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-50 to-purple-100 rounded-3xl p-6 shadow-lg"
              >
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold">{module}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-900 mb-14">
            Why Choose ANITIO?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-14">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-50 to-purple-100 rounded-3xl shadow-lg p-6 font-semibold"
              >
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">
            ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
          </h3>

          <p className="mb-2">📞 +91 92894 38428</p>
          <p className="mb-2">📧 anitioinstitute@gmail.com</p>
          <p className="mb-6">🌐 www.anitioinstitute.com</p>

          <div className="flex justify-center flex-wrap gap-4">
            {[
              'Facebook',
              'Instagram',
              'LinkedIn',
              'YouTube',
              'Telegram',
              'Snapchat',
              'Pinterest',
              'Threads',
              'WhatsApp',
            ].map((social, index) => (
              <span
                key={index}
                className="bg-white/10 px-4 py-2 rounded-xl"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
