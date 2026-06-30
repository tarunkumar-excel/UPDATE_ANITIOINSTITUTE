export default function AdobeAfterEffectsCoursePage() {
  const modules = [
    'Introduction to Adobe After Effects',
    'Interface & Workspace Setup',
    'Animation Principles',
    'Motion Graphics Design',
    'Keyframe Animation',
    'Text Animation Techniques',
    'Logo Animation Projects',
    'Visual Effects (VFX) Basics',
    'Green Screen & Chroma Key',
    '3D Layers & Camera Animation',
    'Transitions & Cinematic Effects',
    'Audio Sync & Sound Effects',
    'Social Media Video Editing',
    'YouTube Intro & Outro Design',
    'Portfolio Development',
    'Freelancing & Career Guidance'
  ];

  const features = [
    '100% Practical Training',
    'Live Motion Graphics Projects',
    'Industry Expert Trainers',
    'Professional Adobe Software Training',
    'Certification After Completion',
    'Placement Assistance',
    'Online & Offline Classes',
    'Recorded Sessions Access',
    'Freelancing Support',
    'Lifetime Student Guidance'
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* SEO Meta Tags */}
      <head>
        <title>Adobe After Effects Course | ANITIO Information Technology and Skill Development LLP</title>

        <meta
          name="description"
          content="Join the Professional Adobe After Effects Course at ANITIO Information Technology and Skill Development LLP. Learn motion graphics, VFX, logo animation, cinematic effects, video editing, and build a successful creative career."
        />

        <meta
          name="keywords"
          content="Adobe After Effects Course, Motion Graphics Training, VFX Course, Video Editing Course, Logo Animation, Cinematic Effects, After Effects Training"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Adobe After Effects Course - ANITIO Institute"
        />

        <meta
          property="og:description"
          content="Professional Adobe After Effects Training with Certification and Placement Assistance."
        />

        <meta property="og:type" content="website" />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Professional Adobe After Effects Course
            </h1>

            <p className="text-lg mb-6 text-purple-100">
              Learn motion graphics, visual effects, cinematic editing, logo
              animation, and professional video production using Adobe After
              Effects with practical live projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.anitioinstitute.com"
                target="_blank"
                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
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
              src="https://images.unsplash.com/photo-1574717024453-3540564e6b7d?q=80&w=1200&auto=format&fit=crop"
              alt="Adobe After Effects Course"
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
              This Adobe After Effects Course is designed for students,
              designers, video editors, freelancers, YouTubers, and creative
              professionals who want to master motion graphics and VFX.
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
                  Learn professional animation and editing skills with hands-on practical projects.
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
              Complete Adobe After Effects Training Program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-purple-50 border border-purple-100 p-5 rounded-2xl hover:bg-purple-100 transition"
              >
                <h3 className="font-semibold text-lg text-purple-700">
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
              alt="After Effects Students"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose ANITIO Institute?
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>✔ Industry Experienced Trainers</li>
              <li>✔ Live Motion Graphics Projects</li>
              <li>✔ Professional VFX Training</li>
              <li>✔ Portfolio Development Support</li>
              <li>✔ Placement & Freelancing Guidance</li>
              <li>✔ Affordable Fees Structure</li>
              <li>✔ Online + Offline Learning Options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Start Your Motion Graphics Career Today
          </h2>

          <p className="text-xl mb-8 text-purple-100">
            Learn professional Adobe After Effects skills with ANITIO
            Information Technology and Skill Development LLP.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9289438428"
              className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition"
            >
              Call: 9289438428
            </a>

            <a
              href="mailto:anitioinstitute@gmail.com"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-purple-700 transition"
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
              Professional IT & Creative Skill Development Institute offering
              industry-focused multimedia and animation training programs.
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
