import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Master concepts quickly",
    desc: "Learn from top educators who break down complex problems into easy-to-understand steps.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Strategic Exam Preparation",
    desc: "Gain insights into exam patterns and learn the best strategies to maximize your score.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-[#F3F8F8]" id="experts">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Images */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px]">
              {/* Main image */}
              <div className="absolute left-0 top-0 w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/demo-elearning-01.png"
                  alt="Online learning platform"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>

              {/* Secondary image */}
              <div className="absolute right-0 bottom-0 w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/demo-elearning-bg-04.webp"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute right-8 top-8 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 bg-[#D5D52B] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#313E3B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#828C8A] leading-tight">Student Rating</p>
                  <p className="text-sm font-bold text-[#313E3B]">4.9 / 5.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="section-label">Expert Guidance</span>
            <h2 className="mb-6">
              Learn From{" "}
              <em className="not-italic text-[#D5D52B]">Top Experts.</em>
            </h2>
            <p className="text-[#828C8A] mb-10 text-lg leading-relaxed">
              We bring world-class educators directly to your screen. Whether you&apos;re
              preparing for JEE, NEET, or strengthening your foundational knowledge, our
              experts guide you every step of the way.
            </p>

            {/* Feature list */}
            <div className="space-y-6 mb-10">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#313E3B] text-[#D5D52B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#313E3B] mb-1">{feat.title}</h3>
                    <p className="text-sm text-[#828C8A] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#courses" className="btn-primary">
              Explore courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
