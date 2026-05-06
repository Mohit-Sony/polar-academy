"use client";

import { useState } from "react";

export default function CTABanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.course) {
      setSubmitted(true);
      // Reset form (optional)
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
          Admissions Open
        </div>

        {/* Heading */}
        <h2 className="text-white mb-4 max-w-2xl mx-auto">
          Enroll Now for the{" "}
          <span className="text-[#D5D52B]">Upcoming Batch.</span>
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Secure your spot today. Fill out the form below to begin your journey with our expert faculty.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D5D52B] focus:bg-white/15 transition-all"
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D5D52B] focus:bg-white/15 transition-all"
              />
            </div>
            
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D5D52B] focus:bg-white/15 transition-all"
            />
            
            <select
              id="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#D5D52B] focus:bg-white/15 transition-all appearance-none"
              style={{ color: formData.course ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
            >
              <option value="" disabled className="text-slate-900">Select a Course</option>
              <option value="JEE Advanced" className="text-slate-900">JEE Advanced Foundation</option>
              <option value="NEET" className="text-slate-900">NEET Crash Course</option>
              <option value="Foundation" className="text-slate-900">Class 11/12 Foundation</option>
            </select>

            <button
              type="submit"
              className="btn-yellow w-full justify-center mt-2"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-[#D5D52B]/20 border border-[#D5D52B]/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#D5D52B] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#313E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[#D5D52B] font-bold text-xl mb-2">Application Received!</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Thank you, {formData.name}. Our admissions team will contact you shortly at {formData.phone} regarding the {formData.course} course.
            </p>
          </div>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/50 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#D5D52B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Secure Data
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#D5D52B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            100% Privacy Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
