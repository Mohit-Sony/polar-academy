"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge",
        { y: 20, opacity: 0, duration: 0.6, delay: 0.1 }
      )
      .from(".hero-title", 
        { y: 50, opacity: 0, duration: 1 },
        "-=0.3"
      )
      .from(".hero-subtitle", 
        { y: 30, opacity: 0, duration: 0.8 }, 
        "-=0.6"
      )
      .from(".hero-social-proof",
        { y: 20, opacity: 0, duration: 0.7 },
        "-=0.5"
      )
      .from(".hero-btn-group", 
        { y: 30, opacity: 0, duration: 0.8 }, 
        "-=0.5"
      )
      .from(".hero-image-wrapper", 
        { x: 50, opacity: 0, duration: 1.2 }, 
        "-=0.8"
      );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen bg-slate-900 overflow-hidden pt-28 pb-10 flex flex-col justify-center">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 0. Saffron / Orange Glows — Kautilya brand palette */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-400/10 blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-orange-400/8 blur-[100px] pointer-events-none z-0"></div>

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

      {/* 3. Center Right Large Circle */}
      <div className="absolute top-[15%] right-0 w-[700px] h-[700px] rounded-full bg-white/5 z-0 pointer-events-none opacity-60 translate-x-[20%]"></div>

      {/* 4. Right Saffron 'O' Shape (Thick Ring) */}
      <div className="absolute top-[20%] right-[-250px] w-[500px] h-[500px] z-0 pointer-events-none animate-float opacity-20" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <circle cx="250" cy="250" r="170" stroke="url(#saffron_grad)" strokeWidth="140" />
          <defs>
            <linearGradient id="saffron_grad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Floating Saffron Dots */}
      <div className="absolute top-[25%] left-[38%] w-2 h-2 rounded-full bg-orange-400 z-0 animate-float"></div>
      <div className="absolute top-[20%] right-[30%] w-2.5 h-2.5 rounded-full bg-amber-300 z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">

        {/* Left: Text Content */}
        <div className="max-w-xl">

          {/* Social Proof Chips — IIT selections */}
          {/* <div className="hero-social-proof flex flex-wrap gap-2 mb-6">
            {["IIT Bombay", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee"].map((iit) => (
              <span
                key={iit}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-xs font-semibold tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                {iit}
              </span>
            ))}
          </div> */}

          <h1 className="hero-title mb-8 leading-[1.1] font-bold tracking-tight text-5xl md:text-6xl lg:text-[4.8rem]" style={{ color: '#FFFFFF' }}>
Best IIT JEE Coaching in Sikar
          </h1>

          <p className="hero-subtitle text-white/70 text-lg leading-relaxed mb-10 max-w-[480px]">
            800+ JEE Advanced qualifiers since 2018. Backed by IIT &amp; NIT alumni faculty. Trusted by thousands of Rajasthan students.
          </p>

          <div className="hero-btn-group flex flex-wrap items-center gap-4 mb-16">
            {/* Primary CTA — Apply for K SAT */}
            <Link
              href="#k-sat"
              className="btn-yellow px-8 py-3.5 !rounded-full text-slate-900 font-bold hover:bg-white hover:border-white transition-all shadow-lg hover:shadow-xl"
            >
              Apply for K SAT
            </Link>

            {/* Secondary CTA — Explore Courses */}
            <Link
              href="#courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Explore Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Right: Hero Image */}
        <div className="hero-image-wrapper relative hidden lg:flex items-end justify-end h-[600px] w-full">
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
