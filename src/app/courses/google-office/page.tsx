import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate in Google Office Course | ANITIO Information Technology and Skill Development LLP",
  description:
    "Certificate in Google Office Course with Google Docs, Sheets, Slides, Forms, Drive and Workspace. ISO Certified & MSME Certified Organization.",
  keywords: [
    "Google Office Course",
    "Google Workspace Training",
    "Google Docs Course",
    "Google Sheets Course",
    "ANITIO Institute",
  ],
  openGraph: {
    title: "Certificate in Google Office Course",
    description: "Industry-oriented Google Office Certification Training",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Certificate In Google Office
          </h1>
          <p className="mt-6 text-xl">
            ANITIO Information Technology and Skill Development LLP
          </p>
          <p>ISO Certified & MSME Certified Organization</p>
          <div className="mt-8">
            <p>Duration: 3 Months</p>
            <p>Course Fee: ₹4,999</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Course Contents</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Introduction to Google Workspace</li>
          <li>Google Drive Management</li>
          <li>Google Docs Professional Formatting</li>
          <li>Google Sheets Formulas & Functions</li>
          <li>Google Slides Presentation Design</li>
          <li>Google Forms</li>
          <li>Google Meet</li>
          <li>Collaboration Tools</li>
          <li>Cloud Storage Management</li>
          <li>Project Assignments</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>ANITIO Information Technology and Skill Development LLP</p>
          <p>Phone: 9289438428, 9971969158</p>
          <p>Email: anitioinstitute@gmail.com</p>
          <p>Website: www.anitioinstitute.com</p>
        </div>
      </section>
    </main>
  );
}
