import Image from "next/image";
import Link from "next/link";

const checkpoints = [
  "Guaranteed and certified courses",
  "Premium learning experience",
  "Students feedback and support",
  "Flexible learning schedule",
  "World-class instructors",
  "Lifetime access to content",
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2422 0%, #313E3B 50%, #243330 100%)",
      }}
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(213,213,43,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D5D52B] mb-4">
              Why choose us
            </span>
            <h2 className="text-white mb-6 leading-tight">
              Providing amazing{" "}
              <span className="text-[#D5D52B]">online courses.</span>
            </h2>
            <p className="text-white/60 mb-4 text-lg leading-relaxed">
              Outstanding online learning
            </p>
            <p className="text-white/50 mb-10 leading-relaxed">
              We partner with leading universities and industry experts to deliver
              courses that are both rigorous and practical. Our platform is trusted
              by learners in 190+ countries.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {checkpoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D5D52B] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#313E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="#courses"
              className="inline-flex items-center gap-2 bg-[#D5D52B] text-[#313E3B] font-bold text-sm px-8 py-4 rounded-md hover:bg-white transition-colors duration-200"
            >
              Explore courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right — Images */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px]">
              {/* Main image */}
              <div className="absolute right-0 top-0 w-[310px] h-[380px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/demo-elearning-03.webp"
                  alt="Student studying"
                  fill
                  className="object-cover"
                  sizes="310px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Secondary image */}
              <div className="absolute left-0 bottom-0 w-[260px] h-[310px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D5D52B]/30">
                <Image
                  src="/images/demo-elearning-04.webp"
                  alt="Online classroom"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>

              {/* Stat badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-5 shadow-2xl text-center z-10 w-[140px]">
                <p className="text-3xl font-bold text-[#313E3B] mb-1">98%</p>
                <p className="text-xs text-[#828C8A] font-medium uppercase tracking-wide">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
