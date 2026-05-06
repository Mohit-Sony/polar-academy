"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 260, suffix: "+", label: "Courses Available" },
  { value: 5340, suffix: "+", label: "Active Students" },
  { value: 260, suffix: "+", label: "Expert Tutors" },
  { value: 5340, suffix: "+", label: "Alumni Network" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#313E3B]" id="about">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center py-12 px-6"
            >
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="w-6 h-0.5 bg-[#D5D52B] mb-2" />
              <p className="text-sm font-medium text-white/60 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
