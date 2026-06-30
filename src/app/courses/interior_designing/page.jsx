export default function InteriorDesigningCoursePage() {
  const courseModules = [
    'Introduction to Interior Designing',
    'Space Planning & Layout Design',
    'Color Theory & Material Selection',
    'Furniture & Lighting Design',
    'Residential Interior Design',
    'Commercial Interior Design',
    'AutoCAD for Interior Designing',
    '3D Visualization & Rendering',
    'SketchUp & Design Tools',
    'Project Estimation & Budgeting',
    'Client Presentation Techniques',
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
        <title>Interior Designing Course | ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP</title>

        <meta
          name="description"
          content="Join the professional Interior Designing Course by ANITIO INFORMATION TECHNOLOGY AND SKILL DEVELOPMENT LLP. Learn space planning, AutoCAD designing, 3D visualization, furniture design, residential and commercial interior designing with practical projects."
        />

        <meta
          name="keywords"
          content="Interior Designing Course, Interior Design Training, AutoCAD Interior Design, 3D Visualization, Space Planning, Residential Design"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://www.anitioinstitute.com" />
      </head>

      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-500 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight mb-6">
                Professional Interior Designing Course
              </h1>

              <p className="text-lg text-gray-100 mb-6">
                Learn professional interior designing, space planning, furniture concepts,
                3D visualization, and modern residential & commercial design techniques.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.anitioinstitute.com"
                  className="bg-white text-orange-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
                >
                  Enroll Now
                </a>

                <a
                  href="tel:9289438428"
                  className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-orange-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt="Interior Designing Course"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Interior Designing Course?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Learn industry-standard interior design techniques with live projects,
              modern software tools, and practical residential & commercial designing training.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Professional Design Training</h3>
                <p>Learn space planning, furniture design, lighting concepts, and design aesthetics.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Industry Software Tools</h3>
                <p>Master AutoCAD, SketchUp, 3D rendering, and visualization tools.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Certification & Placement Support</h3>
                <p>Create professional portfolios and receive career guidance after training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules */}
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
                'Interior Designer',
                'Space Planner',
                'Furniture Designer',
                '3D Visualization Artist'
              ].map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-600 to-red-500 text-white p-6 rounded-2xl shadow-lg"
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
