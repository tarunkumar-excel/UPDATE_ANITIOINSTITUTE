export default function MarketingAnalyticsCoursePage() {
  const modules = [
    'Introduction to Marketing Analytics',
    'Digital Marketing Fundamentals',
    'Google Analytics GA4',
    'Google Tag Manager',
    'Website Traffic Analysis',
    'SEO Analytics & Reporting',
    'Social Media Analytics',
    'Campaign Performance Tracking',
    'Conversion Rate Optimization',
    'Customer Behavior Analysis',
    'Excel for Marketing Analytics',
    'Data Visualization & Dashboards',
    'Facebook & Instagram Analytics',
    'YouTube Analytics',
    'Marketing ROI Measurement',
    'Live Projects & Case Studies'
  ];

  const features = [
    '100% Practical Training',
    'Live Analytics Projects',
    'Industry Expert Trainers',
    'SEO & Google Analytics Training',
    'Professional Certification',
    'Placement Assistance',
    'Online & Offline Classes',
    'Recorded Sessions Access',
    'Freelancing & Internship Guidance',
    'Lifetime Student Support'
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* SEO Meta Tags */}
      <head>
        <title>Marketing Analytics Course | ANITIO Information Technology and Skill Development LLP</title>

        <meta
          name="description"
          content="Join the Professional Marketing Analytics Course at ANITIO Information Technology and Skill Development LLP. Learn Google Analytics, SEO Analytics, Social Media Analytics, Data Visualization, Campaign Tracking, and Marketing ROI analysis."
        />

        <meta
          name="keywords"
          content="Marketing Analytics Course, Google Analytics Training, SEO Analytics, Data Analytics Course, Digital Marketing Analytics, GA4 Course, Social Media Analytics"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Marketing Analytics Course - ANITIO Institute"
        />

        <meta
          property="og:description"
          content="Professional Marketing Analytics Training with Certification and Placement Assistance."
        />

        <meta property="og:type" content="website" />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 via-teal-700 to-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Professional Marketing Analytics Course
            </h1>

            <p className="text-lg mb-6 text-gray-200">
              Learn Google Analytics, SEO reporting, campaign tracking, social
              media analytics, data visualization, and become a professional
              Marketing Analytics expert with practical training.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.anitioinstitute.com"
                target="_blank"
                className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Enroll Now
              </a>

              <a
                href="tel:9289438428"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-emerald-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Marketing Analytics Course"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Course */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About This Course</h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              This Marketing Analytics Course is designed for students,
              marketers, entrepreneurs, freelancers, and professionals who want
              to master data-driven marketing strategies and analytics tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>

                <p className="text-gray-600">
                  Learn advanced analytics skills with practical implementation and live reporting.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Course Modules</h2>

            <p className="text-gray-600 text-lg">
              Complete Marketing Analytics Training Program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl hover:bg-emerald-100 transition"
              >
                <h3 className="font-semibold text-lg text-emerald-700">
                  {module}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Marketing Analytics Students"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose ANITIO Institute?
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>✔ Industry Experienced Trainers</li>
              <li>✔ Live Analytics Projects</li>
              <li>✔ Practical Data Analysis Training</li>
              <li>✔ Google Analytics & GA4 Training</li>
              <li>✔ Placement & Freelancing Support</li>
              <li>✔ Affordable Course Fees</li>
              <li>✔ Online + Offline Learning Options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-emerald-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Become a Marketing Analytics Expert
          </h2>

          <p className="text-xl mb-8 text-emerald-100">
            Learn professional analytics skills and build your career in digital
            marketing with ANITIO Information Technology and Skill Development LLP.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9289438428"
              className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition"
            >
              Call: 9289438428
            </a>

            <a
              href="mailto:anitioinstitute@gmail.com"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-emerald-700 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ANITIO Information Technology and Skill Development LLP
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Professional IT & Digital Marketing Training Institute offering
              industry-focused courses with practical learning and career support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3">
              <li>📞 9289438428</li>
              <li>📞 9971969158</li>
              <li>🌐 www.anitioinstitute.com</li>
              <li>✉ anitioinstitute@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex flex-col gap-3">
              <a href="https://facebook.com" target="_blank" className="hover:text-white">
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" className="hover:text-white">
                Instagram
              </a>

              <a href="https://youtube.com" target="_blank" className="hover:text-white">
                YouTube
              </a>

              <a href="https://linkedin.com" target="_blank" className="hover:text-white">
                LinkedIn
              </a>

              <a href="https://twitter.com" target="_blank" className="hover:text-white">
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 ANITIO Information Technology and Skill Development LLP. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
