export const metadata = {
  title: 'Email Marketing Course | ANITIO Information Technology and Skill Development LLP',
  description:
    'Learn professional Email Marketing with ANITIO Information Technology and Skill Development LLP. Master email campaigns, automation, lead generation, Mailchimp, conversion optimization, and digital marketing strategies.',
  keywords: [
    'Email Marketing Course',
    'Email Marketing Training',
    'Mailchimp Course',
    'Digital Marketing Institute',
    'Email Automation',
    'Lead Generation Training',
    'Email Campaign Management',
    'ANITIO Institute',
  ],
  authors: [{ name: 'ANITIO Information Technology and Skill Development LLP' }],
  openGraph: {
    title: 'Email Marketing Course | ANITIO Institute',
    description:
      'Professional Email Marketing Training with Live Projects, Automation, Lead Generation and Certification.',
    url: 'https://www.anitioinstitute.com',
    siteName: 'ANITIO Institute',
    locale: 'en_IN',
    type: 'website',
  },
};

const courseModules = [
  'Introduction to Email Marketing',
  'Email Marketing Fundamentals',
  'Lead Generation Techniques',
  'Audience Segmentation',
  'Email Campaign Strategy',
  'Mailchimp Training',
  'Email Automation Setup',
  'Landing Page Optimization',
  'Newsletter Design',
  'Copywriting for Emails',
  'Email Funnel Creation',
  'CRM Integration',
  'Analytics & Performance Tracking',
  'A/B Testing Techniques',
  'Affiliate Email Marketing',
  'Live Email Marketing Projects',
];

const highlights = [
  '100% Practical Training',
  'Live Projects & Assignments',
  'Professional Certification',
  'Online & Offline Classes',
  'Industry Expert Trainers',
  'Career Guidance & Support',
  'Interview Preparation',
  'Lifetime Support',
];

export default function EmailMarketingLandingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-yellow-300 font-semibold mb-4">
              Professional Digital Marketing Training
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Email Marketing Course
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Learn Email Marketing from basic to advanced level with practical
              training, automation tools, campaign strategies, lead generation
              and live projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.anitioinstitute.com"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-2xl transition"
              >
                Enroll Now
              </a>

              <a
                href="tel:9289438428"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-2xl transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Course Highlights
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl p-4 text-center font-semibold shadow"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Learn Email Marketing?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Email Marketing is one of the highest ROI digital marketing
              strategies used by businesses worldwide. Learn how to create
              professional campaigns, automate customer journeys and generate
              leads effectively.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This course includes practical training with industry tools,
              campaign optimization, analytics tracking and live projects.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Course Modules</h3>

            <div className="grid gap-4">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-cyan-50 border border-cyan-100 p-4 rounded-xl font-medium"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Skills You Will Master
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get practical industry-level skills for Email Marketing,
              automation and lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Email Campaigns</h3>

              <p className="text-gray-700 leading-relaxed">
                Learn to create engaging newsletters, promotional emails and
                automated customer campaigns.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Automation Tools</h3>

              <p className="text-gray-700 leading-relaxed">
                Master Mailchimp, automation workflows, drip campaigns and CRM
                integration.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Analytics & ROI</h3>

              <p className="text-gray-700 leading-relaxed">
                Understand open rates, click-through rates, A/B testing and
                campaign optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Career Opportunities After This Course
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              'Email Marketing Executive',
              'Digital Marketing Specialist',
              'CRM Executive',
              'Automation Specialist',
              'Lead Generation Expert',
              'Content Strategist',
              'Freelancer',
              'Affiliate Marketer',
            ].map((career, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 font-semibold"
              >
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-black">
            Start Your Email Marketing Journey Today
          </h2>

          <p className="text-lg text-black mb-8">
            Join ANITIO Information Technology and Skill Development LLP and
            learn professional Email Marketing with practical implementation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9289438428"
              className="bg-black text-white px-6 py-3 rounded-2xl font-semibold"
            >
              Call: 9289438428
            </a>

            <a
              href="tel:9971969158"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
            >
              Call: 9971969158
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ANITIO Information Technology and Skill Development LLP
            </h3>

            <p className="leading-relaxed text-gray-400">
              Professional IT and Digital Marketing training institute offering
              career-focused courses with practical implementation and industry
              exposure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3">
              <li>Phone: 9289438428</li>
              <li>Phone: 9971969158</li>
              <li>Email: anitioinstitute@gmail.com</li>
              <li>Website: www.anitioinstitute.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-white"
              >
                YouTube
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 ANITIO Information Technology and Skill Development LLP. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
