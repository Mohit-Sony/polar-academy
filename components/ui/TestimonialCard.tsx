import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-8 items-start">
      {/* Avatar Column */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#D5D52B]/20">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#EF991F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-[#313E3B] text-lg leading-relaxed font-medium mb-6 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div>
          <p className="font-bold text-[#313E3B] text-base">{testimonial.name}</p>
          <p className="text-sm text-[#828C8A]">
            {testimonial.role}
            {testimonial.company && (
              <span className="text-[#D5D52B] font-semibold"> @ {testimonial.company}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
