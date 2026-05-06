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
      className="relative py-24 overflow-hidden bg-slate-900"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none z-0"></div>

      {/* Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 divide-x divide-white/5">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <div className="relative container-xl text-center z-10">
        {/* Badge */}
 

        {/* Heading */}
        <h2 className="text-white mb-4 max-w-2xl mx-auto font-bold tracking-tight">
          Enroll Now for the{" "}
          <span className="text-orange-300">Upcoming Batch.</span>
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Secure your spot today. Fill out the form below to begin your journey with our expert faculty.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
              />
            </div>
            
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
            />
            
            <div className="relative">
              <select
                id="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                style={{ color: formData.course ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
              >
                <option value="" disabled className="text-slate-900">Select a Course</option>
                <option value="SANKALP" className="text-slate-900">SANKALP - JEE Advanced</option>
                <option value="VIJAY" className="text-slate-900">VIJAY - NEET Foundation</option>
                <option value="LAKSHYA" className="text-slate-900">LAKSHYA - Target JEE/NEET</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="btn-yellow w-full justify-center mt-4 rounded-xl py-3.5 text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 font-bold text-xl mb-2">Application Received!</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Thank you, {formData.name}. Our admissions team will contact you shortly at {formData.phone} regarding the {formData.course} program.
            </p>
          </div>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/50 text-sm font-medium">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Secure Data
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            100% Privacy Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
