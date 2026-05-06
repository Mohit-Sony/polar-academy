"use client";

import { useState } from "react";
import Image from "next/image";

const resultsData = {
  "2024": [
    { id: 1, name: "Aarav Sharma", rank: "AIR 15", exam: "JEE Advanced", photo: "/images/demo-elearning-01.png" },
    { id: 2, name: "Priya Singh", rank: "AIR 42", exam: "JEE Advanced", photo: "/images/demo-elearning-03.webp" },
    { id: 3, name: "Rohan Patel", rank: "AIR 89", exam: "JEE Main", photo: "/images/demo-elearning-04.webp" },
    { id: 4, name: "Sneha Gupta", rank: "AIR 112", exam: "NEET", photo: "/images/demo-elearning-06.webp" },
  ],
  "2023": [
    { id: 5, name: "Karan Desai", rank: "AIR 28", exam: "JEE Advanced", photo: "/images/demo-elearning-03.webp" },
    { id: 6, name: "Neha Verma", rank: "AIR 56", exam: "JEE Main", photo: "/images/demo-elearning-06.webp" },
    { id: 7, name: "Vikram Reddy", rank: "AIR 94", exam: "NEET", photo: "/images/demo-elearning-04.webp" },
    { id: 8, name: "Aditi Rao", rank: "AIR 135", exam: "JEE Advanced", photo: "/images/demo-elearning-01.png" },
  ],
};

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof resultsData>("2024");

  return (
    <section className="section-padding bg-white" id="results">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Our Legacy</span>
          <h2 className="mb-4">
            Previous Year <span className="text-orange-500">Results</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Celebrating the outstanding achievements of our students who have consistently
            secured top ranks in competitive exams.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {(Object.keys(resultsData) as Array<keyof typeof resultsData>).map((year) => (
            <button
              key={year}
              onClick={() => setActiveTab(year)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === year
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData[activeTab].map((student) => (
            <div
              key={student.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-[240px] w-full bg-slate-100">
                <Image
                  src={student.photo}
                  alt={student.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {student.exam}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{student.name}</h3>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                  Rank: {student.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
