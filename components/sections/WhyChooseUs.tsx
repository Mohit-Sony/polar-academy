import Image from "next/image";
import Link from "next/link";

const checkpoints = [
  "Proven Track Record in JEE & NEET",
  "Expert Faculty from Top Institutes",
  "Personalized Mentorship & Doubt Solving",
  "Comprehensive Study Material",
  "Regular Mock Tests & Analysis",
  "State-of-the-Art Infrastructure",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Decorative dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Why Choose Polar JEE Academy?
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
              Your Pathway to <span className="text-cyan-400">Top Engineering & Medical Colleges.</span>
            </h2>
            <p className="text-white/70 mb-4 text-lg leading-relaxed font-medium">
              Excellence in every step of your preparation journey.
            </p>
            <p className="text-white/50 mb-10 leading-relaxed">
              We focus on delivering top-tier education through comprehensive study materials, personalized mentorship, and rigorous testing methodologies designed to ensure your success in JEE and NEET.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {checkpoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="#courses"
              className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
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
              <div className="absolute left-0 bottom-0 w-[260px] h-[310px] rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
                <Image
                  src="/images/demo-elearning-04.webp"
                  alt="Online classroom"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>

              {/* Stat badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounded-xl p-5 shadow-2xl text-center z-10 w-[150px] border border-white/10">
                <p className="text-4xl font-extrabold text-cyan-400 mb-1">98%</p>
                <p className="text-xs text-white/70 font-medium uppercase tracking-wide">Selection Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
