"use client";

import { useState } from "react";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <div className="lg:sticky lg:top-28">
            <span className="section-label">Have questions?</span>
            <h2 className="mb-6">
              Frequently asked{" "}
              <span className="text-[#D5D52B]">questions.</span>
            </h2>
            <p className="text-[#828C8A] leading-relaxed mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our friendly support team is
              here to help. Reach out via live chat, email, or phone and we&apos;ll get
              back to you within 24 hours.
            </p>

            {/* Contact options */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F7F7F7] rounded-xl">
                <div className="w-10 h-10 bg-[#313E3B] text-[#D5D52B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#828C8A] font-medium mb-0.5">Call us directly?</p>
                  <a href="tel:+12345678910" className="text-sm font-bold text-[#313E3B] hover:text-[#D5D52B] transition-colors">
                    +1 234 567 8910
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F7F7F7] rounded-xl">
                <div className="w-10 h-10 bg-[#313E3B] text-[#D5D52B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#828C8A] font-medium mb-0.5">Need support?</p>
                  <a href="mailto:hello@edulearn.com" className="text-sm font-bold text-[#313E3B] hover:text-[#D5D52B] transition-colors">
                    hello@edulearn.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="bg-[#F7F7F7] rounded-2xl p-6 lg:p-8">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
