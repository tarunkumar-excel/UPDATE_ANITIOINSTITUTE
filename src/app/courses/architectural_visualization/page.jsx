export default function ArchitecturalVisualizationCoursePage() {
  const courseModules = [
    'Introduction to Architectural Visualization',
    'AutoCAD Drafting Basics',
    '3D Modeling with SketchUp',
    '3ds Max Fundamentals',
    'V-Ray Rendering Techniques',
    'Lighting & Material Design',
    'Exterior Visualization',
    'Interior Visualization',
    'Landscape & Environment Design',
    'Photorealistic Rendering',
    'Animation Walkthrough Creation',
    'Live Projects & Portfolio Development'
  ];

  const features = [
    '100% Practical Training',
    'Industry-Level Rendering Techniques',
    'Live Architectural Projects',
    'Professional Portfolio Building',
    'Certification & Placement Assistance',
    'Latest Visualization Software Training'
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
      <head>
        <title>
          Architectural Visualization Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
        </title>

        <meta
          name="description"
          content="Join the professional Architectural Visualization Course by ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP. Learn 3D modeling, V-Ray rendering, SketchUp, AutoCAD, photorealistic rendering, and architectural walkthrough creation with practical projects."
        />

        <meta
          name="keywords"
          content="Architectural Visualization Course, 3D Rendering Training, SketchUp Course, V-Ray Rendering, 3ds Max Training, Architectural Design"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Architectural Visualization Course" />

        <meta
          property="og:description"
          content="Professional Architectural Visualization training with 3D rendering and live projects."
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.anitioinstitute.com" />
      </head>

      <main className="bg-gray-50 text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-gray-800 to-blue-700 text-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Advanced 3D Visualization Training Program
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6 mb-6">
                Architectural Visualization Course
              </h1>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Learn professional architectural visualization, photorealistic rendering,
                3D modeling, walkthrough animation, and modern architectural presentation techniques.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.anitioinstitute.com"
                  className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-200 transition"
                >
                  Apply Now
                </a>

                <a
                  href="tel:9289438428"
                  className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-700 transition"
                >
                  Call: 9289438428
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                alt="Architectural Visualization"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose Our Architectural Visualization Course?
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn industry-standard rendering workflows with modern architectural software tools and live practical projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl p-8 shadow hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold mb-3">{feature}</h3>

                  <p className="text-gray-600">
                    Practical learning with real-world architectural visualization projects.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4">
                Course Modules
              </h2>

              <p className="text-lg text-gray-600">
                Comprehensive training from beginner to advanced level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseModules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100"
                >
                  <div className="text-blue-600 font-bold text-lg mb-2">
                    Module {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">{module}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Career Opportunities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Architectural Visualizer',
                '3D Rendering Artist',
                'Interior Visualization Artist',
                '3D Animation Specialist'
              ].map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-semibold">{career}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-lg">
                <p>
                  <strong>Institute:</strong> ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP
                </p>

                <p>
                  <strong>Phone:</strong> 9289438428, 9971969158
                </p>

                <p>
                  <strong>Email:</strong> anitioinstitute@gmail.com
                </p>

                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://www.anitioinstitute.com"
                    className="text-yellow-400 hover:underline"
                  >
                    www.anitioinstitute.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                Follow Us
              </h2>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
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
