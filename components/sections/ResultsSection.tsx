"use client";

import { useState } from "react";
import Image from "next/image";

const boyNames = [
  "Aarav Sharma", "Rohan Patel", "Karan Desai", "Vikram Reddy", 
  "Rahul Kumar", "Aryan Chauhan", "Ishaan Joshi", "Kabir Das"
];
const girlNames = [
  "Priya Singh", "Sneha Gupta", "Neha Verma", "Aditi Rao", 
  "Ananya Jain", "Kavya Menon", "Riya Malhotra"
];

const fathers = [
  "Rajesh Sharma", "Amit Singh", "Suresh Patel", "Vineet Gupta", "Sanjay Desai",
  "Rakesh Verma", "Anil Reddy", "Prakash Rao", "Ashok Kumar", "Manoj Jain",
  "Ravi Chauhan", "Sandeep Menon", "Tarun Joshi", "Deepak Malhotra", "Sunil Das"
];

const generateStudents = (year: string) => {
  return Array.from({ length: 15 }).map((_, i) => {
    const isBoy = i % 2 === 0;
    const nameIndex = Math.floor(i / 2);
    const name = isBoy ? boyNames[nameIndex % boyNames.length] : girlNames[nameIndex % girlNames.length];
    const photo = isBoy ? `/images/students/m${(nameIndex % 8) + 1}.png` : `/images/students/w${(nameIndex % 8) + 1}.png`;
    
    return {
      id: parseInt(year) * 100 + i,
      name,
      fatherName: fathers[i % fathers.length],
      rank: `AIR ${Math.floor(Math.random() * 500) + 1}`,
      exam: i % 2 === 0 ? "JEE Advanced" : "NEET",
      photo,
      with12th: i % 3 === 0,
    };
  });
};

const resultsData = {
  "2024": generateStudents("2024"),
  "2023": generateStudents("2023"),
};

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof resultsData>("2024");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabChange = (year: keyof typeof resultsData) => {
    setActiveTab(year);
    setIsExpanded(false); // Reset expansion when switching tabs
  };

  const getVisibilityClass = (idx: number) => {
    if (isExpanded) return "flex";
    if (idx >= 15) return "hidden";
    if (idx >= 12) return "hidden xl:flex";
    if (idx >= 9) return "hidden md:flex";
    if (idx >= 8) return "hidden sm:flex";
    return "flex";
  };

  const getButtonVisibilityClass = () => {
    const items = resultsData[activeTab];
    if (isExpanded) return "flex";
    let classes = "flex ";
    if (items.length <= 15) classes += "xl:hidden ";
    if (items.length <= 12) classes += "md:hidden ";
    if (items.length <= 9) classes += "sm:hidden ";
    if (items.length <= 8) classes += "hidden ";
    return classes.trim();
  };

  return (
    <section className="section-padding bg-slate-50" id="results">
      <div className="container-xl">
        <div className="mb-12">
          <h2 className="mb-4">
            Previous Year <span className="text-orange-400">Results</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            Celebrating the outstanding achievements of our students who have consistently
            secured top ranks in competitive exams.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start gap-4 mb-10">
          {(Object.keys(resultsData) as Array<keyof typeof resultsData>).map((year) => (
            <button
              key={year}
              onClick={() => handleTabChange(year)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm border-2 ${
                activeTab === year
                  ? "bg-orange-300 text-slate-900 border-orange-300 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* Modern Cards Grid */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 bg-slate-100">
            {resultsData[activeTab].map((student, index) => (
              <div
                key={student.id}
                className={`group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:z-10 transition-all duration-300 flex-col relative bg-white ${getVisibilityClass(index)}`}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500">
                  {/* Theme matching glow behind the person */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-orange-400/20 blur-2xl rounded-full z-0 group-hover:bg-orange-400/30 transition-colors duration-500"></div>

                  {student.with12th && (
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase z-20 shadow-sm border border-white/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                      With 12th
                    </div>
                  )}
                  
                  {/* Image wrapper with top padding to zoom out */}
                  <div className="absolute inset-x-0 bottom-0 top-4 z-10">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      fill
                      className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{student.name}</h3>
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-5 font-medium line-clamp-2">
                    D/o {student.fatherName}
                  </p>
                  
                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-slate-600 font-bold text-sm">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      {student.exam}
                    </div>
                    
                    <div className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md group-hover:bg-orange-400 group-hover:text-slate-900 transition-colors duration-300">
                      {student.rank}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className={`justify-center mt-12 ${getButtonVisibilityClass()}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3.5 rounded-full text-[15px] font-bold border-2 border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center gap-2"
          >
            {isExpanded ? (
              <>
                Show Less
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
              </>
            ) : (
              <>
                View All Results
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
