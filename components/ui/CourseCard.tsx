import Image from "next/image";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(course.rating));

  return (
    <div className="bg-white rounded-lg overflow-hidden card-hover border border-[#E4E4E4] group cursor-pointer">
      {/* Image */}
      <div className="img-overlay relative aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {course.tag && (
          <span className="absolute top-3 left-3 bg-[#D5D52B] text-[#313E3B] text-xs font-700 font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
            {course.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span
          className="text-xs font-bold uppercase tracking-widest mb-2 block"
          style={{ color: course.categoryColor }}
        >
          {course.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#313E3B] leading-snug mb-3 group-hover:text-[#D5D52B] transition-colors duration-200 line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-[#828C8A] mb-3">By {course.instructor}</p>

        {/* Divider */}
        <div className="h-px bg-[#E4E4E4] mb-4" />

        {/* Rating + Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {stars.map((filled, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill={filled ? "#EF991F" : "#E4E4E4"}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-[#828C8A]">({course.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#313E3B]">{course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-[#828C8A] line-through">{course.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
