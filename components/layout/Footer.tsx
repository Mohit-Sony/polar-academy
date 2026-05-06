import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Instructors", href: "#" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-slate-900 text-white pt-16 pb-8"
      style={{
        backgroundImage: "url('/images/demo-elearning-footer-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/95" />

      <div className="relative container-xl">
        {/* Top row — Logo + Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo */}
          <Link href="/" aria-label="Polar JEE Academy home">
            <div className="bg-white px-4 py-2 rounded-lg inline-block">
              <Image
                src="/images/logo-polar.png"
                alt="Polar JEE Academy"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { label: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
              { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200"
                aria-label={social.label}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row — Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Polar JEE Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
