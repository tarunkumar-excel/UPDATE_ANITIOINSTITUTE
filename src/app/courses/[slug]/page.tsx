import { getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">
          {course.icon} {course.title}
        </h1>

        <p className="mt-3 text-gray-400">
          {course.description}
        </p>

        <div className="mt-6">
          <p>Duration: {course.duration}</p>
          <p>Mode: {course.mode}</p>
          <p>Level: {course.level}</p>
        </div>

        <div className="mt-6">
          <p className="text-green-400 text-2xl">
            ₹{course.price}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold">
            Eligibility
          </h2>

          <p>
            {course.eligibility}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold">
            Career Options
          </h2>

          <ul>
            {course.careers?.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}