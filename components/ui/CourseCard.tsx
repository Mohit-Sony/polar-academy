import Image from "next/image";
import { Course } from "@/data/courses";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

const accentMap: Record<string, { badge: string; bullet: string; hover: string; link: string }> = {
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    bullet: "bg-emerald-400",
    hover: "group-hover:text-emerald-600",
    link: "group-hover:border-emerald-500",
  },
  orange: {
    badge: "bg-orange-50 text-orange-700 border border-orange-100",
    bullet: "bg-orange-400",
    hover: "group-hover:text-orange-500",
    link: "group-hover:border-orange-500",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border border-blue-100",
    bullet: "bg-blue-400",
    hover: "group-hover:text-blue-600",
    link: "group-hover:border-blue-500",
  },
};

export default function CourseCard({ course }: CourseCardProps) {
  const accent = accentMap[course.accentColor] ?? accentMap.orange;

  return (
    <div className="bg-white rounded-3xl p-8 relative overflow-hidden group border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full min-h-[460px]">

      {/* Top Section */}
      <div className="relative z-10 flex-grow flex flex-col">

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {course.badges.map((badge, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${accent.badge}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
          {course.subtitle}
        </p>

        {/* Title */}
        <h3 className={`text-2xl md:text-3xl font-extrabold text-[#0A192F] mb-4 transition-colors duration-300 ${accent.hover}`}>
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 mb-8 flex-grow">
          {course.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent.bullet}`} />
              {h}
            </li>
          ))}
        </ul>

        {/* Action */}
        <div className="mt-auto">
          <Link
            href="#k-sat"
            className={`inline-flex items-center gap-2 text-sm font-bold text-[#0A192F] transition-colors duration-300 ${accent.hover}`}
          >
            <span className={`border-b-2 border-transparent pb-0.5 transition-all ${accent.link}`}>
              Explore Program
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Student Image */}
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-bottom-right pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-contain object-bottom drop-shadow-xl"
            sizes="(max-width: 768px) 160px, 160px"
          />
        </div>
      </div>
    </div>
  );
}
