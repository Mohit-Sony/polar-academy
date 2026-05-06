"use client";

import { useState } from "react";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/faq";
import { Phone, Mail } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Have questions?
            </div>
            
            <h2 className="mb-6 text-3xl md:text-[2.5rem] leading-tight font-extrabold text-slate-900 tracking-tight">
              Frequently asked{" "}
              <span className="text-orange-500">questions.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10 text-lg">
              Can&apos;t find the answer you&apos;re looking for? Our friendly support team at Kautilya IIT Academy is
              here to help you make the right choice for your preparation.
            </p>

            {/* Contact options */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors shadow-md">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call us directly</p>
                  <a href="tel:+918875023160" className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                    +91 88750 23160
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Need support?</p>
                  <a href="mailto:kiitsikar@gmail.com" className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                    kiitsikar@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-xl shadow-slate-200/40">
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
