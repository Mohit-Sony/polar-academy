"use client";

import { useState } from "react";
import Image from "next/image";

type Student = {
  id: number;
  name: string;
  institute: string;
  rank: string;
  exam: string;
  photo: string;
  with12th: boolean;
  year: string;
  iitGroup: string;
};

const alumni: Student[] = [
  // IIT Bombay
  { id: 1,  name: "Manish Khileri",     institute: "IIT Bombay",       rank: "AIR 12",   exam: "JEE Advanced", photo: "/images/students/m1.png", with12th: false, year: "2024", iitGroup: "IIT Bombay" },
  { id: 2,  name: "Mohit Kumar",        institute: "IIT Bombay",       rank: "AIR 98",   exam: "JEE Advanced", photo: "/images/students/m2.png", with12th: true,  year: "2024", iitGroup: "IIT Bombay" },
  { id: 3,  name: "Devanshu Jangid",    institute: "IIT Bombay",       rank: "AIR 134",  exam: "JEE Advanced", photo: "/images/students/m3.png", with12th: false, year: "2024", iitGroup: "IIT Bombay" },
  { id: 4,  name: "Lokesh Jangir",      institute: "IIT Bombay",       rank: "AIR 210",  exam: "JEE Advanced", photo: "/images/students/m4.png", with12th: true,  year: "2023", iitGroup: "IIT Bombay" },
  { id: 5,  name: "Tushar Prajapat",    institute: "IIT Bombay",       rank: "AIR 287",  exam: "JEE Advanced", photo: "/images/students/m5.png", with12th: false, year: "2023", iitGroup: "IIT Bombay" },
  { id: 6,  name: "Ayushi Sharma",      institute: "IIT Bombay",       rank: "AIR 312",  exam: "JEE Advanced", photo: "/images/students/w1.png", with12th: false, year: "2023", iitGroup: "IIT Bombay" },
  { id: 7,  name: "Gaurav",             institute: "IIT Bombay",       rank: "AIR 388",  exam: "JEE Advanced", photo: "/images/students/m6.png", with12th: true,  year: "2023", iitGroup: "IIT Bombay" },
  // IIT Delhi
  { id: 8,  name: "Manan Singal",       institute: "IIT Delhi",        rank: "AIR 496",  exam: "JEE Advanced", photo: "/images/students/m7.png", with12th: false, year: "2024", iitGroup: "IIT Delhi" },
  { id: 9,  name: "Ankit Bansiwal",     institute: "IIT Delhi",        rank: "AIR 89",   exam: "JEE Advanced", photo: "/images/students/m8.png", with12th: false, year: "2024", iitGroup: "IIT Delhi" },
  { id: 10, name: "Nirmal Yadav",       institute: "IIT Delhi",        rank: "AIR 156",  exam: "JEE Advanced", photo: "/images/students/m1.png", with12th: true,  year: "2024", iitGroup: "IIT Delhi" },
  { id: 11, name: "Nishant Saini",      institute: "IIT Delhi",        rank: "AIR 203",  exam: "JEE Advanced", photo: "/images/students/m2.png", with12th: false, year: "2023", iitGroup: "IIT Delhi" },
  { id: 12, name: "Aditya Garg",        institute: "IIT Delhi",        rank: "AIR 341",  exam: "JEE Advanced", photo: "/images/students/m3.png", with12th: false, year: "2023", iitGroup: "IIT Delhi" },
  { id: 13, name: "Hemant Meghwal",     institute: "IIT Delhi",        rank: "AIR 418",  exam: "JEE Advanced", photo: "/images/students/m4.png", with12th: true,  year: "2023", iitGroup: "IIT Delhi" },
  // IIT Kanpur
  { id: 14, name: "Yash Sharma",        institute: "IIT Kharagpur",    rank: "AIR 185",  exam: "JEE Advanced", photo: "/images/students/m5.png", with12th: false, year: "2024", iitGroup: "IIT Kanpur" },
  { id: 15, name: "Harshit Balwada",    institute: "IIT Kanpur",       rank: "AIR 267",  exam: "JEE Advanced", photo: "/images/students/m6.png", with12th: true,  year: "2024", iitGroup: "IIT Kanpur" },
  { id: 16, name: "Sumit Kumar",        institute: "IIT Kanpur",       rank: "AIR 312",  exam: "JEE Advanced", photo: "/images/students/m7.png", with12th: false, year: "2023", iitGroup: "IIT Kanpur" },
  { id: 17, name: "Himanshu Choudhary", institute: "IIT Kanpur",       rank: "AIR 389",  exam: "JEE Advanced", photo: "/images/students/m8.png", with12th: false, year: "2023", iitGroup: "IIT Kanpur" },
  { id: 18, name: "Sourabh Sankhala",   institute: "IIT Kanpur",       rank: "AIR 421",  exam: "JEE Advanced", photo: "/images/students/m1.png", with12th: true,  year: "2023", iitGroup: "IIT Kanpur" },
  // NIT & Others
  { id: 19, name: "Chanchal Khyalia",   institute: "IIT Kharagpur",    rank: "AIR 178",  exam: "JEE Advanced", photo: "/images/students/w2.png", with12th: false, year: "2024", iitGroup: "NIT & Others" },
  { id: 20, name: "Rajat Singh",        institute: "NIT Surathkal",    rank: "AIR 1245", exam: "JEE Main",     photo: "/images/students/m2.png", with12th: false, year: "2024", iitGroup: "NIT & Others" },
  { id: 21, name: "Nandini Maru",       institute: "NIT Rourkela",     rank: "AIR 1890", exam: "JEE Main",     photo: "/images/students/w3.png", with12th: false, year: "2024", iitGroup: "NIT & Others" },
  { id: 22, name: "Himanshu Gurjar",    institute: "MNIT Jaipur",      rank: "AIR 2134", exam: "JEE Main",     photo: "/images/students/m3.png", with12th: true,  year: "2023", iitGroup: "NIT & Others" },
  { id: 23, name: "Vishnu Bijarniya",   institute: "IIIT Allahabad",   rank: "AIR 2567", exam: "JEE Main",     photo: "/images/students/m4.png", with12th: false, year: "2023", iitGroup: "NIT & Others" },
  { id: 24, name: "Bhanupriya",         institute: "NIT Warangal",     rank: "AIR 3021", exam: "JEE Main",     photo: "/images/students/w4.png", with12th: true,  year: "2023", iitGroup: "NIT & Others" },
  { id: 25, name: "Jasveer",            institute: "DTU Delhi",        rank: "AIR 2890", exam: "JEE Main",     photo: "/images/students/m5.png", with12th: false,  year: "2024", iitGroup: "NIT & Others" },
];

const yearTabs = ["2024", "2023"] as const;
const iitTabs  = ["IIT Bombay", "IIT Delhi", "IIT Kanpur", "NIT & Others"] as const;
type ViewMode  = "year" | "iit";

const stats = [
  { value: "800+",      label: "JEE Advanced Qualifiers" },
  { value: "AIR 12",   label: "Top Rank Achieved" },
  { value: "6+",       label: "Old IITs Covered" },
  { value: "Since 2017", label: "Established" },
];

export default function ResultsSection() {
  const [viewMode,   setViewMode]   = useState<ViewMode>("year");
  const [yearTab,    setYearTab]    = useState<typeof yearTabs[number]>("2024");
  const [iitTab,     setIitTab]     = useState<typeof iitTabs[number]>("IIT Bombay");
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleStudents = viewMode === "year"
    ? alumni.filter((s) => s.year === yearTab)
    : alumni.filter((s) => s.iitGroup === iitTab);

  const displayed = isExpanded ? visibleStudents : visibleStudents.slice(0, 15);

  const handleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setIsExpanded(false);
  };

  return (
    <section className="section-padding bg-slate-50" id="results">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-10">
          <h2 className="mb-4">
            IIT Selections That{" "}
            <span className="text-orange-400">Speak For Themselves</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            800+ students qualified for JEE Advanced since 2018. Our alumni have secured seats
            in IIT Bombay, Delhi, Kanpur, Kharagpur, Roorkee and many more premier institutes.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-900 rounded-2xl px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-orange-400">{s.value}</span>
              <span className="text-sm text-white/60 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-slate-500 font-medium">View by:</span>
          <div className="flex bg-white border border-slate-200 rounded-full p-1 shadow-sm gap-1">
            {(["year", "iit"] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => handleViewMode(mode)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  viewMode === mode
                    ? "bg-slate-900 text-white shadow"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {mode === "year" ? "Year" : "IIT Institute"}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {viewMode === "year"
            ? yearTabs.map((y) => (
                <button
                  key={y}
                  onClick={() => { setYearTab(y); setIsExpanded(false); }}
                  className={`px-7 py-3 rounded-full font-bold text-sm transition-all border-2 shadow-sm ${
                    yearTab === y
                      ? "bg-orange-400 text-slate-900 border-orange-400 shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  Batch {y}
                </button>
              ))
            : iitTabs.map((iit) => (
                <button
                  key={iit}
                  onClick={() => { setIitTab(iit); setIsExpanded(false); }}
                  className={`px-7 py-3 rounded-full font-bold text-sm transition-all border-2 shadow-sm ${
                    iitTab === iit
                      ? "bg-orange-400 text-slate-900 border-orange-400 shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {iit}
                </button>
              ))}
        </div>

        {/* Cards Grid */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 bg-slate-100">
            {displayed.map((student) => (
              <div
                key={student.id}
                className="group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:z-10 transition-all duration-300 flex flex-col relative bg-white"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500">
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-orange-400/20 blur-2xl rounded-full z-0 group-hover:bg-orange-400/30 transition-colors duration-500" />
                  {student.with12th && (
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase z-20 shadow-sm border border-white/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      With 12th
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 top-4 z-10">
                    <Image
                      src={student.photo}
                      alt={student.name}
                      fill
                      className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-900 leading-tight">{student.name}</h3>
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs text-orange-500 font-semibold mb-4">{student.institute}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-medium text-slate-500">{student.exam}</span>
                    <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow group-hover:bg-orange-400 group-hover:text-slate-900 transition-colors duration-300">
                      {student.rank}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        {visibleStudents.length > 15 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3.5 rounded-full text-[15px] font-bold border-2 border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center gap-2"
            >
              {isExpanded ? (
                <>Show Less <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg></>
              ) : (
                <>View All Results <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg></>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
