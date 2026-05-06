"use client";

import { useState } from "react";
import Image from "next/image";

const subjectColors: Record<string, string> = {
  Physics:     "bg-blue-50 text-blue-700 border-blue-100",
  Mathematics: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Chemistry:   "bg-purple-50 text-purple-700 border-purple-100",
};

const faculty = [
  { name: "Dr. Rajesh Sharma",      subject: "Physics",     alumni: "IIT Bombay",    exp: "12 Years", image: "/images/faculty-m2.png" },
  { name: "Prof. Amit Choudhary",   subject: "Mathematics", alumni: "IIT Delhi",     exp: "9 Years",  image: "/images/faculty-m1.png" },
  { name: "Dr. Priya Verma",        subject: "Chemistry",   alumni: "IIT Kanpur",    exp: "7 Years",  image: "/images/faculty-f1.png" },
  { name: "Prof. Vikram Patel",     subject: "Physics",     alumni: "IIT Roorkee",   exp: "10 Years", image: "/images/faculty-m3.png" },
  { name: "Dr. Kavita Joshi",       subject: "Mathematics", alumni: "IIT Kharagpur", exp: "8 Years",  image: "/images/faculty-f2.png" },
  { name: "Prof. Suresh Meena",     subject: "Chemistry",   alumni: "NIT Jaipur",    exp: "6 Years",  image: "/images/faculty-m1.png" },
  { name: "Dr. Neha Gupta",         subject: "Physics",     alumni: "IIT BHU",       exp: "9 Years",  image: "/images/faculty-f1.png" },
  { name: "Prof. Rohit Bairwa",     subject: "Mathematics", alumni: "IIT Guwahati",  exp: "7 Years",  image: "/images/faculty-m2.png" },
  { name: "Dr. Anita Sharma",       subject: "Chemistry",   alumni: "NIT Surathkal", exp: "5 Years",  image: "/images/faculty-f2.png" },
  { name: "Prof. Sanjay Kumar",     subject: "Physics",     alumni: "IIT Bombay",    exp: "11 Years", image: "/images/faculty-m3.png" },
];

const VISIBLE = 4; // cards visible at once on desktop

export default function TeamSection() {
  const [current, setCurrent] = useState(0);

  const maxIndex = faculty.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="section-padding bg-white overflow-hidden" id="team">
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="mb-3">
              Our <span className="text-orange-400">Esteemed</span> Faculty Members
            </h2>
            <p className="text-slate-500 max-w-xl text-base leading-relaxed">
              Guided by IIT &amp; NIT alumni with 5–12 years of JEE coaching experience. 
              Every instructor here has mastered the same exam your child is preparing for.
            </p>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-4 px-4 -my-10 py-10 sm:-mx-6 sm:px-6">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 6px)))` }}
          >
            {faculty.map((member) => {
              const badgeClass = subjectColors[member.subject] ?? "bg-slate-50 text-slate-700 border-slate-100";
              return (
                <div
                  key={member.name}
                  className="group flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex flex-col bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.13)] transition-all duration-300 overflow-hidden border border-white"
                >
                  {/* Photo — fills top portion, rounded inside card */}
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden rounded-3xl m-2.5 mb-0" style={{ width: "calc(100% - 20px)" }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-2 flex-grow">
                    {/* Name + verified tick */}
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 leading-tight">{member.name}</h3>
                      <svg className="w-4 h-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {member.subject} Expert · {member.alumni} Alumni
                    </p>

                    {/* Stats row + button */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                      {/* Stats */}
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${badgeClass}`}>
                          {member.subject}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{member.exp}</span>
                      </div>
                      {/* Enquire pill */}
                      <button className="flex items-center gap-1 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full group-hover:bg-orange-400 group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap">
                        Enquire
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-orange-400" : "w-2 bg-slate-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
