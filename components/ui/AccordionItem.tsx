"use client";

import { useState } from "react";
import { FAQ } from "@/data/faq";

interface AccordionItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-[#E4E4E4] last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${faq.id}`}
        aria-controls={`faq-content-${faq.id}`}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? "text-[#D5D52B]" : "text-[#313E3B] group-hover:text-[#313E3B]"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#313E3B] rotate-45"
              : "bg-[#F7F7F7] rotate-0 group-hover:bg-[#E4E4E4]"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-[#313E3B]"}`}
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
        <p className="pb-5 text-[#828C8A] leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}
