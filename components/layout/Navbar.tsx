"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  {
    label: "Courses",
    href: "#courses",
    dropdown: [
      { label: "Development", sub: "Develop professional skills", href: "#" },
      { label: "Business", sub: "Advance your business", href: "#" },
      { label: "Design", sub: "Design skills & concepts", href: "#" },
      { label: "Marketing", sub: "New age marketing skills", href: "#" },
    ],
  },
  { label: "Instructors", href: "#" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-[0_2px_30px_rgba(0,0,0,0.08)] ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-xl flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="EduLearn home">
          <Image
            src="/images/logo-polar.png"
            alt="Polar JEE Academy"
            width={160}
            height={44}
            priority
            className="w-[140px] md:w-[160px] h-auto object-contain"
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
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 text-slate-700 hover:text-slate-900"
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
          {/* Phone */}
          <a
            href="tel:18002220000"
            className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-slate-700 hover:text-slate-900"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            1 800 222 000
          </a>

          {/* Search */}
          <button
            className="transition-colors duration-200 text-slate-700 hover:text-slate-900"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

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
          className="lg:hidden p-2 transition-colors text-slate-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="container-xl py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 border-l-2 border-slate-200 pl-4 mb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label} — {item.sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-200 mt-2">
              <a href="tel:18002220000" className="block px-4 py-3 text-sm font-semibold text-slate-800">
                📞 1 800 222 000
              </a>
              <Link
                href="#courses"
                className="btn-yellow w-full text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
