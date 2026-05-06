"use client";

import { useState } from "react";

interface AnnouncementBarProps {
  visible?: boolean;
  onClose?: () => void;
}

export default function AnnouncementBar({ visible = true, onClose }: AnnouncementBarProps) {
  const [internalVisible, setInternalVisible] = useState(true);

  const isVisible = onClose ? visible : internalVisible;
  const handleClose = () => {
    if (onClose) onClose();
    else setInternalVisible(false);
  };

  if (!isVisible) return null;

  const text = "✦  Admissions Open for JEE/NEET 2025-26  ✦  Enroll in SANKALP, VIJAY & LAKSHYA Batches  ✦  Learn from Top Faculty  ✦  Achieve Your Dream Rank  ✦  New Batches Starting Soon  ✦  Admissions Open for JEE/NEET 2025-26  ✦  Enroll in SANKALP, VIJAY & LAKSHYA Batches  ✦  Learn from Top Faculty  ✦  Achieve Your Dream Rank  ✦  New Batches Starting Soon";

  return (
    <div
      className="relative bg-slate-900 text-white overflow-hidden py-2.5"
      role="banner"
      aria-label="Announcement"
    >
      <div className="flex whitespace-nowrap">
        <div className="flex w-max animate-marquee">
          <span className="text-xs font-medium tracking-wide text-slate-300 pr-12">{text}</span>
          <span className="text-xs font-medium tracking-wide text-slate-300 pr-12">{text}</span>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
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
