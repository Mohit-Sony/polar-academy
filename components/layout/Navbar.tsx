"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "./AnnouncementBar";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; sub: string; href: string }[];
};

const navLinks: NavLink[] = [
  { 
    label: "Courses", 
    href: "#courses",
    dropdown: [
      { label: "Pre-Foundation", sub: "Class VIII, IX, X", href: "#pre-foundation" },
      { label: "Foundation", sub: "Class XI & XII", href: "#foundation" },
      { label: "Target", sub: "Class XII Passed", href: "#target" }
    ]
  },
  { label: "K SAT", href: "#k-sat" },
  { label: "Test Series", href: "#test-series" },
  { label: "Admission", href: "#admission" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <AnnouncementBar visible={announcementVisible} onClose={() => setAnnouncementVisible(false)} />
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "top-0 bg-white shadow-[0_2px_30px_rgba(0,0,0,0.08)] py-3" 
            : `bg-transparent py-5 ${announcementVisible ? 'top-[36px]' : 'top-0'}`
        }`}
      >
      <div className="container-xl flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Kautilya IIT Academy home">
          <Image 
            src="/kautilya-logo.jpg" 
            alt="Kautilya IIT Academy Logo" 
            width={160} 
            height={44}
            className="w-[140px] md:w-[160px] h-auto object-contain rounded-md"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="nav-item relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-lg font-[family-name:var(--font-chopin)] font-normal rounded-md transition-colors duration-200 ${
                  scrolled ? "!text-slate-900 hover:!text-slate-700" : "!text-white hover:!text-slate-200"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="nav-dropdown">
                  {link.dropdown.map((item) => (
                    <Link key={item.label} href={item.href} className="nav-dropdown-item">
                      <div className="w-8 h-8 bg-slate-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-orange-300 rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918875023160"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold transition-colors duration-200 hover:bg-green-100"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {/* Phone */}
          <a
            href="tel:+918875023160"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
              scrolled ? "!text-slate-900 hover:!text-slate-700" : "!text-white hover:!text-slate-200"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +91 8875023160
          </a>



          {/* CTA */}
          <Link
            href="#courses"
            className="btn-yellow text-sm whitespace-nowrap"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-900 flex flex-col transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Image 
              src="/kautilya-logo.jpg" 
              alt="Kautilya IIT Academy Logo" 
              width={160} 
              height={44}
              className="w-[140px] md:w-[160px] h-auto object-contain rounded-md"
            />
          </Link>
          <button
            className="p-2 !text-white/80 hover:!text-white transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-white/5 pb-4">
                <Link
                  href={link.href}
                  className="block text-2xl font-medium !text-white hover:!text-orange-400 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="mt-4 flex flex-col gap-3 pl-4 border-l border-white/10">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-base !text-slate-300 hover:!text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label} <span className="!text-slate-400 text-sm ml-1">— {item.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Footer Actions */}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a 
              href="https://wa.me/918875023160" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-500/10 !text-green-400 font-semibold border border-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a 
              href="tel:+918875023160" 
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 !text-white font-semibold border border-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +91 8875023160
            </a>
            <Link
              href="#courses"
              className="btn-yellow w-full text-center py-4 text-lg mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
