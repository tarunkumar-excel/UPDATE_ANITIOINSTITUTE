export const metadata = {
  title: 'Affiliate Marketing Course | ANITIO Information Technology and Skill Development LLP',
  description:
    'Join the professional Affiliate Marketing Course by ANITIO Information Technology and Skill Development LLP. Learn SEO, blogging, social media marketing, affiliate networks, paid ads, and earn online with live projects and certification.',
  keywords: [
    'Affiliate Marketing Course',
    'Affiliate Marketing Training',
    'Digital Marketing Institute',
    'SEO Training',
    'Blogging Course',
    'Affiliate Marketing India',
    'Online Earning Course',
    'ANITIO Institute',
  ],
  authors: [{ name: 'ANITIO Information Technology and Skill Development LLP' }],
  openGraph: {
    title: 'Affiliate Marketing Course | ANITIO Institute',
    description:
      'Professional Affiliate Marketing Course with Live Projects, SEO Training, Blogging, Social Media Marketing and Certification.',
    url: 'https://www.anitioinstitute.com',
    siteName: 'ANITIO Institute',
    locale: 'en_IN',
    type: 'website',
  },
};

const modules = [
  'Introduction to Affiliate Marketing',
  'Affiliate Networks & Platforms',
  'SEO Optimization Techniques',
  'Keyword Research & Blogging',
  'Content Marketing Strategy',
  'YouTube Affiliate Marketing',
  'Social Media Marketing',
  'Facebook & Instagram Promotion',
  'Email Marketing',
  'Google Analytics & Tracking',
  'Paid Ads for Affiliate Marketing',
  'Landing Page Optimization',
  'Conversion Rate Optimization',
  'AI Tools for Affiliate Marketing',
  'Live Affiliate Projects',
  'Freelancing & Online Earning',
];

const benefits = [
  '100% Practical Training',
  'Live Affiliate Marketing Projects',
  'SEO & Traffic Generation Skills',
  'Professional Certification',
  'Online & Offline Classes',
  'Career & Freelancing Guidance',
  'Interview Preparation',
  'Lifetime Learning Support',
];

export default function AffiliateMarketingLandingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-yellow-300 font-semibold mb-4">
              Professional Digital Marketing Training
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Affiliate Marketing Course
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Learn Affiliate Marketing from basics to advanced level with
              practical projects, SEO training, blogging, paid ads, content
              marketing and social media growth strategies.
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
              {benefits.map((item, index) => (
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
              Why Learn Affiliate Marketing?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Affiliate Marketing is one of the fastest-growing online earning
              industries. This course helps students, freelancers, bloggers,
              entrepreneurs and professionals learn how to generate traffic,
              promote products and earn commissions online.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our training includes practical implementation, real affiliate
              projects, SEO techniques, social media strategies and advanced
              monetization methods.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Course Modules</h3>

            <div className="grid gap-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 p-4 rounded-xl font-medium"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              What You Will Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get industry-level knowledge with practical implementation and
              career-focused training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">SEO & Blogging</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn keyword research, blog creation, SEO optimization and
                traffic generation techniques.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Social Media Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Master Facebook, Instagram, YouTube and content promotion for
                affiliate sales.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Paid Ads Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn Google Ads, Facebook Ads and conversion optimization for
                affiliate campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Career Opportunities After This Course
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              'Affiliate Marketer',
              'SEO Executive',
              'Content Marketer',
              'Social Media Manager',
              'Blogger',
              'Freelancer',
              'YouTube Creator',
              'Digital Marketing Executive',
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
            Start Your Affiliate Marketing Career Today
          </h2>

          <p className="text-lg text-black mb-8">
            Join ANITIO Information Technology and Skill Development LLP and
            learn practical Affiliate Marketing with live projects and expert
            guidance.
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
          © 2026 ANITIO Information Technology and Skill Development LLP. All
          Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
