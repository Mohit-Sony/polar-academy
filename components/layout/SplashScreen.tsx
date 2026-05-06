"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = "hidden";
    
    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Completely remove component from DOM
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-white flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-pulse">
        <div className="text-4xl md:text-5xl font-bold tracking-wide flex flex-col items-center text-slate-900">
          <span>KAUTILYA</span>
          <span className="text-orange-500 text-xl md:text-2xl tracking-normal mt-2">IIT ACADEMY</span>
        </div>
      </div>
    </div>
  );
}
