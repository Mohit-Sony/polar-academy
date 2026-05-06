import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden pt-28 pb-10 flex flex-col justify-center">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 0. Soft Light Blue Glows for "Jolliness" */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none z-0"></div>

      {/* 1. Grid Lines - Exactly 6 columns */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 divide-x divide-white/5">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* 2. Left 'O' Shape (Thick Ring) */}
      <div className="absolute top-[10%] left-[-200px] w-[600px] h-[600px] z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          <circle cx="300" cy="300" r="220" stroke="rgba(255,255,255,0.1)" strokeWidth="100" />
        </svg>
      </div>

      {/* 3. Center Right Large Green Circle */}
      <div className="absolute top-[15%] right-0 w-[700px] h-[700px] rounded-full bg-white/5 z-0 pointer-events-none opacity-60 translate-x-[20%]"></div>

      {/* 4. Right Yellow 'O' Shape (Thick Ring) */}
      <div className="absolute top-[20%] right-[-250px] w-[500px] h-[500px] z-0 pointer-events-none animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <circle cx="250" cy="250" r="170" stroke="url(#yellow_grad)" strokeWidth="140" />
          <defs>
            <linearGradient id="yellow_grad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fdba74" />
              <stop offset="1" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Floating Yellow Dots */}
      <div className="absolute top-[25%] left-[38%] w-2 h-2 rounded-full bg-orange-300 z-0 animate-float"></div>
      <div className="absolute top-[20%] right-[30%] w-2.5 h-2.5 rounded-full bg-orange-300 z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">

        {/* Left: Text Content */}
        <div className="max-w-xl">
          <h1 className="mb-8 leading-[1.1] animate-fadeInUp font-bold tracking-tight text-5xl md:text-6xl lg:text-[4.8rem]" style={{ color: '#FFFFFF' }}>
Sikar’s Most Trusted JEE Foundation Program
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[440px] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Structured learning. Proven methods. Exceptional results.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link href="#courses" className="btn-yellow px-8 py-3.5 !rounded-full text-slate-900 font-bold hover:bg-white hover:border-white transition-all shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire Now
            </Link>


          </div>

          {/* <div className="flex gap-12 md:gap-20 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">260+</p>
              <div className="h-[2px] w-12 bg-orange-300 my-2"></div>
              <p className="text-white/60 text-sm font-medium">Tutors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">5340+</p>
              <div className="h-[2px] w-12 bg-orange-300 my-2"></div>
              <p className="text-white/60 text-sm font-medium">Students</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)]">280+</p>
              <div className="h-[2px] w-12 bg-orange-300 my-2"></div>
              <p className="text-white/60 text-sm font-medium">Courses</p>
            </div>
          </div> */}
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
        <svg className="w-5 h-5 text-slate-900 mb-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
