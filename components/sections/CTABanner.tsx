"use client";

import { useState } from "react";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/demo-elearning-bg-05.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#313E3B]/88" />

      {/* Decorative dots pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(213,213,43,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container-xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D5D52B]/20 text-[#D5D52B] border border-[#D5D52B]/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-[#D5D52B] rounded-full animate-pulse" />
          Now Enrolling
        </div>

        {/* Heading */}
        <h2 className="text-white mb-4 max-w-2xl mx-auto">
          Admission is open for the{" "}
          <span className="text-[#D5D52B]">next year batch.</span>
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Secure your spot today. Early applicants receive an exclusive scholarship
          and priority course selection.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              id="cta-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D5D52B] focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="btn-yellow flex-shrink-0 justify-center"
            >
              Get started now
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-[#D5D52B]/20 border border-[#D5D52B]/30 rounded-xl p-6">
            <div className="w-12 h-12 bg-[#D5D52B] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#313E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[#D5D52B] font-bold text-lg">You&apos;re on the list!</p>
            <p className="text-white/60 text-sm mt-1">We&apos;ll be in touch soon with your enrolment details.</p>
          </div>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/50 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#D5D52B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No spam, ever
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#D5D52B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            30-day money-back guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#D5D52B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Unsubscribe anytime
          </span>
        </div>
      </div>
    </section>
  );
}
