"use client";

import { FAQ } from "@/data/faq";

interface AccordionItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${faq.id}`}
        aria-controls={`faq-content-${faq.id}`}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? "text-orange-500" : "text-slate-900 group-hover:text-orange-400"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-orange-500 rotate-45 text-white shadow-md"
              : "bg-slate-100 rotate-0 text-slate-500 group-hover:bg-slate-200"
          }`}
        >
          <svg
            className="w-4 h-4 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-content-${faq.id}`}
        role="region"
        aria-labelledby={`faq-btn-${faq.id}`}
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        <p className="pb-5 text-slate-600 leading-relaxed text-sm md:text-base pr-8">{faq.answer}</p>
      </div>
    </div>
  );
}
