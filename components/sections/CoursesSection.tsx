"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

const categories = ["Engineering", "Medical", "Prefoundation"];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Engineering");

  const filteredCourses = courses.filter((course) => course.category === activeCategory);

  return (
    <section className="section-padding bg-slate-800 relative overflow-hidden" id="courses">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 0. Soft Light Blue Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none z-0"></div>

      {/* 1. Grid Lines - Exactly 6 columns */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 divide-x divide-white/5">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* 2. Shapes (Thick Ring) */}
      <div className="absolute bottom-[10%] left-[-150px] w-[400px] h-[400px] z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.1)" strokeWidth="60" />
        </svg>
      </div>

      {/* Center Right Large Circle */}
      <div className="absolute top-[10%] right-0 w-[500px] h-[500px] rounded-full bg-white/5 z-0 pointer-events-none opacity-40 translate-x-[30%]"></div>
      
      {/* Floating Dots */}
      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-orange-300 z-0 animate-float"></div>
      <div className="absolute bottom-[20%] right-[20%] w-2.5 h-2.5 rounded-full bg-orange-300 z-0 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="mb-6" style={{ color: '#FFFFFF' }}>Explore Courses</h2>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-white text-slate-900 shadow-lg shadow-white/10 scale-105"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
