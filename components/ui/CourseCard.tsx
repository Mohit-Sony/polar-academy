import Image from "next/image";
import { Course } from "@/data/courses";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 relative overflow-hidden group border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full min-h-[400px]">
      
      {/* Top Section */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {course.badges.map((badge, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                i === 0
                  ? "bg-blue-50 text-blue-700 border border-blue-100"
                  : i === 1
                  ? "bg-purple-50 text-purple-700 border border-purple-100"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-100"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A192F] mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
          {course.description}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors duration-300"
          >
            <span className="border-b-2 border-transparent group-hover:border-blue-600 pb-0.5 transition-all">
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

      {/* Decorative Background Element */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Student Image Area (Optional, positioned elegantly if images exist) */}
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-bottom-right pointer-events-none">
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
