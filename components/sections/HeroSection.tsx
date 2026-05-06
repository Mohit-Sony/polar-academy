import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#073A2A] overflow-hidden pt-28 pb-10 flex flex-col justify-center">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 1. Grid Lines - Exactly 6 columns */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 divide-x divide-white/5">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* 2. Left 'O' Shape (Thick Ring) */}
      <div className="absolute top-[10%] left-[-200px] w-[600px] h-[600px] z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          <circle cx="300" cy="300" r="220" stroke="#125941" strokeWidth="100" />
        </svg>
      </div>

      {/* 3. Center Right Large Green Circle */}
      <div className="absolute top-[15%] right-0 w-[700px] h-[700px] rounded-full bg-[#0d4f3b] z-0 pointer-events-none opacity-60 translate-x-[20%]"></div>

      {/* 4. Right Yellow 'O' Shape (Thick Ring) */}
      <div className="absolute top-[20%] right-[-250px] w-[500px] h-[500px] z-0 pointer-events-none animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <circle cx="250" cy="250" r="170" stroke="url(#yellow_grad)" strokeWidth="140" />
          <defs>
            <linearGradient id="yellow_grad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D5D52B"/>
              <stop offset="1" stopColor="#A3A31B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Floating Yellow Dots */}
      <div className="absolute top-[25%] left-[38%] w-2 h-2 rounded-full bg-[#D5D52B] z-0 animate-float"></div>
      <div className="absolute top-[20%] right-[30%] w-2.5 h-2.5 rounded-full bg-[#D5D52B] z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        
        {/* Left: Text Content */}
        <div className="max-w-xl">
          <h1 className="mb-8 leading-[1.1] animate-fadeInUp font-bold tracking-tight text-5xl md:text-6xl lg:text-[4.8rem]" style={{ color: '#FFFFFF' }}>
            Best online <br />
            platform for <br />
            education.
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[440px] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Online courses from the world&apos;s leading experts. Join 17 million learners today.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link href="#courses" className="btn-yellow px-8 py-3.5 !rounded-full text-[#073A2A] font-bold hover:bg-white hover:border-white transition-all shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
              </svg>
              Get started
            </Link>

            <button className="flex items-center gap-2 text-white font-semibold hover:text-[#D5D52B] transition-colors group">
              How it works
              <span className="flex items-center justify-center border border-white/60 rounded-[6px] px-1.5 py-1 group-hover:border-[#D5D52B] transition-colors ml-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex gap-12 md:gap-20 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">260+</p>
              <div className="h-[2px] w-12 bg-[#D5D52B] my-2"></div>
              <p className="text-white/60 text-sm font-medium">Tutors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">5340+</p>
              <div className="h-[2px] w-12 bg-[#D5D52B] my-2"></div>
              <p className="text-white/60 text-sm font-medium">Students</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">280+</p>
              <div className="h-[2px] w-12 bg-[#D5D52B] my-2"></div>
              <p className="text-white/60 text-sm font-medium">Courses</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative hidden lg:flex items-end justify-end h-[600px] w-full animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[130%] max-w-[850px] h-[110%] z-10 pointer-events-none translate-x-[10%]">
            <Image
              src="/images/demo-elearning-hero-banner-01.webp"
              alt="Student"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>
        </div>

      </div>

      {/* --- FLOATING UI ELEMENTS --- */}

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-white rounded-t-full flex items-center justify-center shadow-lg z-20">
        <svg className="w-5 h-5 text-[#073A2A] mb-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="7" y="4" width="10" height="16" rx="5" strokeWidth="2" />
          <path d="M12 8v4" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>

      {/* Chat Bot Icon */}
      <div className="fixed right-6 bottom-6 z-50">
        <button className="w-14 h-14 bg-[#4A72FF] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(74,114,255,0.4)] hover:scale-105 transition-transform border-[3px] border-white">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

    </section>
  );
}
