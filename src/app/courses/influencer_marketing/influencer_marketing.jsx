export default function InfluencerMarketingCoursePage() {
  const courseModules = [
    'Introduction to Influencer Marketing',
    'Instagram Growth Strategies',
    'YouTube Brand Collaborations',
    'Facebook & Meta Promotions',
    'Influencer Outreach Techniques',
    'Affiliate & Brand Partnership',
    'Content Creation & Viral Strategy',
    'Personal Branding',
    'Social Media Analytics',
    'Paid Collaboration Campaigns',
    'Reels & Shorts Marketing',
    'Live Project Training'
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Influencer Marketing Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>
        <meta
          name="description"
          content="Join the best Influencer Marketing Course by ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP. Learn Instagram Marketing, YouTube Collaborations, Personal Branding, Paid Promotions, Affiliate Marketing and more."
        />
        <meta
          name="keywords"
          content="Influencer Marketing Course, Instagram Marketing, YouTube Marketing, Social Media Marketing, Digital Marketing Course, Influencer Branding"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.anitioinstitute.com" />
      </head>

      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight mb-6">
                Professional Influencer Marketing Course
              </h1>
              <p className="text-lg mb-6 text-gray-100">
                Learn how to build powerful social media brands, collaborate with companies,
                grow followers organically, and earn through influencer marketing.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.anitioinstitute.com"
                  className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
                >
                  Enroll Now
                </a>

                <a
                  href="tel:9289438428"
                  className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Influencer Marketing Training"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose This Course?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Build your online presence and become a successful influencer with practical training,
              real-world projects, and advanced social media strategies.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">100% Practical Training</h3>
                <p>Hands-on live projects and campaign execution training.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Industry Expert Mentors</h3>
                <p>Learn from professionals working in influencer and digital marketing industries.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Certification & Placement</h3>
                <p>Get certification support and career guidance after course completion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Course Modules
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold">{module}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Career Opportunities
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Influencer Manager',
                'Social Media Executive',
                'Brand Collaboration Expert',
                'Content Creator'
              ].map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{career}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Contact Us
              </h2>

              <p className="text-lg mb-4">
                <strong>Institute:</strong> ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
              </p>

              <p className="mb-3">
                <strong>Phone:</strong> 9289438428, 9971969158
              </p>

              <p className="mb-3">
                <strong>Email:</strong> anitioinstitute@gmail.com
              </p>

              <p className="mb-3">
                <strong>Website:</strong>{' '}
                <a
                  href="https://www.anitioinstitute.com"
                  className="text-yellow-400 hover:underline"
                >
                  www.anitioinstitute.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Follow Us
              </h2>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 text-center py-6">
          <p>
            © 2026 ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
