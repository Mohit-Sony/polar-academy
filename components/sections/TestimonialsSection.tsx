"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="section-padding bg-[#F7F7F7]" id="testimonials">
      <div className="container-xl">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="section-label">Students feedback</span>
            <h2>Trusted by genius people.</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-[#828C8A] max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictum nec.
            </p>
            {/* Nav buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border-2 border-[#313E3B] flex items-center justify-center text-[#313E3B] hover:bg-[#313E3B] hover:text-white transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full bg-[#313E3B] flex items-center justify-center text-white hover:bg-[#D5D52B] hover:text-[#313E3B] transition-all duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] lg:flex-[0_0_calc(100%_-_0px)] min-w-0">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === selectedIndex
                  ? "w-8 h-2.5 bg-[#313E3B]"
                  : "w-2.5 h-2.5 bg-[#313E3B]/20 hover:bg-[#313E3B]/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
