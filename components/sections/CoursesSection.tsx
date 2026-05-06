import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

const stats = [
  { value: "3",              label: "Structured Programs" },
  { value: "Class VIII–XII+", label: "All Stages Covered" },
  { value: "JEE + BITSAT",   label: "Exams Targeted" },
  { value: "K SAT",          label: "Scholarship Available" },
];

export default function CoursesSection() {
  return (
    <section className="section-padding bg-slate-800 relative overflow-hidden" id="courses">

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Orange/Amber glows — Kautilya brand */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 divide-x divide-white/5">
        <div /><div /><div /><div /><div /><div />
      </div>

      {/* Thick ring shape */}
      <div className="absolute bottom-[10%] left-[-150px] w-[400px] h-[400px] z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.1)" strokeWidth="60" />
        </svg>
      </div>

      {/* Right Circle */}
      <div className="absolute top-[10%] right-0 w-[500px] h-[500px] rounded-full bg-white/5 z-0 pointer-events-none opacity-40 translate-x-[30%]" />

      {/* Floating dots */}
      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-orange-400 z-0 animate-float" />
      <div className="absolute bottom-[20%] right-[20%] w-2.5 h-2.5 rounded-full bg-amber-300 z-0 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container-xl relative z-10">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-4" style={{ color: "#FFFFFF" }}>
            Programs Built for{" "}
            <span className="text-orange-400">IIT JEE Success</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            Structured multi-tier programs from Class VIII to XII Passed. Each program is
            designed to build from fundamentals to full JEE mastery.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-xl font-bold text-orange-400">{s.value}</span>
              <span className="text-sm text-white/50 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Course Grid — all 3 at once, no tabs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="#k-sat"
            className="inline-flex items-center gap-2 bg-orange-400 text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-orange-300 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Register for K SAT
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
