export default function AdobePremiereProCoursePage() {
  const courseModules = [
    'Introduction to Adobe Premiere Pro',
    'Video Editing Interface & Tools',
    'Timeline Editing Techniques',
    'Cinematic Video Editing',
    'Color Correction & Color Grading',
    'Audio Editing & Sound Mixing',
    'Transitions & Effects',
    'Green Screen Editing',
    'YouTube Video Production',
    'Instagram Reels & Shorts Editing',
    'Export Settings & Rendering',
    'Live Projects & Portfolio Building'
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
        <title>Adobe Premiere Pro Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Join the professional Adobe Premiere Pro Course by ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP. Learn cinematic video editing, color grading, YouTube editing, reels editing, transitions, and professional video production with practical training."
        />

        <meta
          name="keywords"
          content="Adobe Premiere Pro Course, Video Editing Training, Premiere Pro Classes, YouTube Editing, Color Grading Course, Reels Editing"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://www.anitioinstitute.com" />
      </head>

      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-600 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight mb-6">
                Adobe Premiere Pro Professional Course
              </h1>

              <p className="text-lg text-gray-100 mb-6">
                Master professional video editing, cinematic transitions, audio mixing,
                color grading, and content production using Adobe Premiere Pro.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.anitioinstitute.com"
                  className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
                >
                  Enroll Now
                </a>

                <a
                  href="tel:9289438428"
                  className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                alt="Adobe Premiere Pro Course"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Premiere Pro Course?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Learn industry-standard video editing skills with live practical projects,
              cinematic editing workflows, and professional content creation techniques.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Professional Editing Skills</h3>
                <p>Master timeline editing, transitions, cinematic cuts, and visual storytelling.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Live Project Training</h3>
                <p>Create YouTube videos, social media reels, ads, and cinematic projects.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Certification & Placement</h3>
                <p>Build a strong portfolio and receive career guidance after course completion.</p>
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
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
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
                'Video Editor',
                'YouTube Video Editor',
                'Post Production Specialist',
                'Content Creator'
              ].map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{career}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
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
