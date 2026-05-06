import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="features">
      {/* Subtle Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D5D52B]/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#D5D52B]/10 blur-[100px] pointer-events-none z-0"></div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#D5D52B] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D5D52B]/20">
                <svg className="w-6 h-6 text-[#313E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[3.5rem] md:text-[4rem] leading-[1.05] text-[#112240] mb-10 font-bold tracking-tight">
              Excellence in education wherever and whenever.
            </h2>

            {/* Button */}
            <div className="mb-14">
              <Link href="#courses" className="inline-flex items-center gap-3 bg-[#112240] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1A365D] hover:shadow-xl transition-all duration-300">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Avatars area */}
            <div className="flex items-center gap-5">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 overflow-hidden relative shadow-md">
                  <Image src="/images/students/m1.png" alt="Expert" fill className="object-cover object-top" />
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 overflow-hidden relative shadow-md">
                  <Image src="/images/students/w1.png" alt="Expert" fill className="object-cover object-top" />
                </div>
              </div>
              <p className="text-sm font-semibold text-[#828C8A]">
                Online courses from <span className="text-[#112240] border-b-2 border-[#112240] pb-0.5">experts.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Staggered Features */}
          <div className="flex flex-col gap-16 lg:gap-12 lg:py-10 lg:pl-10">
            
            {/* Feature 01 */}
            <div className="relative pl-4 md:pl-8">
              <div className="absolute top-[-45px] left-[-20px] text-[8rem] font-bold text-gray-100 leading-none select-none z-0 font-[var(--font-heading)] opacity-60">
                01
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.35rem] font-bold text-[#112240] mb-4">Renowned & Experienced Faculties</h3>
                <p className="text-[#828C8A] text-[15px] leading-relaxed max-w-[340px] mb-6">
                  Experience quality teaching, concept building, and doubt clearing sessions. We ensure personal attention, interactive pedagogy, and timely mentorship.
                </p>
                <div className="w-10 h-[3px] bg-[#D5D52B]"></div>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="relative pl-4 md:pl-8 lg:ml-auto">
              <div className="absolute top-[-45px] left-[-20px] text-[8rem] font-bold text-gray-100 leading-none select-none z-0 font-[var(--font-heading)] opacity-60">
                02
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.35rem] font-bold text-[#112240] mb-4">Enriched Content & Assessment</h3>
                <p className="text-[#828C8A] text-[15px] leading-relaxed max-w-[340px] mb-6">
                  Access well-researched study material, periodic tests on JEE/Advanced patterns, computer-based testing, hybrid learning, and a vast video library.
                </p>
                <div className="w-10 h-[3px] bg-[#D5D52B]"></div>
              </div>
            </div>

            {/* Feature 03 */}
            <div className="relative pl-4 md:pl-8">
              <div className="absolute top-[-45px] left-[-20px] text-[8rem] font-bold text-gray-100 leading-none select-none z-0 font-[var(--font-heading)] opacity-60">
                03
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.35rem] font-bold text-[#112240] mb-4">Student Centric Approach</h3>
                <p className="text-[#828C8A] text-[15px] leading-relaxed max-w-[340px] mb-6">
                  Benefit from an exam-oriented ecosystem with robust infrastructure, reliable back-ups for missed classes, and instant resolution to grievances.
                </p>
                <div className="w-10 h-[3px] bg-[#D5D52B]"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
