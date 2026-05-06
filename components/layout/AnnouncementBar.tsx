"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const text = "✦  56+ Pre-built websites now available  ✦  New courses added every week  ✦  Get 30% off your first course  ✦  Join 17 million learners worldwide  ✦  Certified instructors from top universities  ✦  56+ Pre-built websites now available  ✦  New courses added every week  ✦  Get 30% off your first course  ✦  Join 17 million learners worldwide  ✦  Certified instructors from top universities";

  return (
    <div
      className="relative bg-slate-900 text-white overflow-hidden py-2.5"
      role="banner"
      aria-label="Announcement"
    >
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          <span className="text-xs font-medium tracking-wide text-slate-300 pr-12">{text}</span>
          <span className="text-xs font-medium tracking-wide text-slate-300 pr-12">{text}</span>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
        aria-label="Close announcement"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
