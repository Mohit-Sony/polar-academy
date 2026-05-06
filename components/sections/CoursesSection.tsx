import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesSection() {
  return (
    <section className="section-padding bg-white" id="courses">
      <div className="container-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">What we offer</span>
            <h2>Popular courses</h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-[#313E3B] hover:text-[#D5D52B] transition-colors whitespace-nowrap"
          >
            Explore all courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All courses", "Business finance", "Advanced design", "Web development", "Data visualization"].map(
            (tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  i === 0
                    ? "bg-[#313E3B] text-white shadow-md"
                    : "bg-[#F7F7F7] text-[#828C8A] hover:bg-[#313E3B] hover:text-white"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Course Grid — 3×2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="#" className="btn-outline">
            Explore all courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
