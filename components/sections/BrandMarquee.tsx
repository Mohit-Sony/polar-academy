import Image from "next/image";

const brands = [
  { name: "Walmart", src: "/images/logo-walmart-white.svg" },
  { name: "Logitech", src: "/images/logo-logitech-white.svg" },
  { name: "InVision", src: "/images/logo-invision-white.svg" },
  { name: "Yahoo", src: "/images/logo-yahoo-white.svg" },
  { name: "Monday.com", src: "/images/logo-monday-white.svg" },
];

// Duplicate for seamless loop
const allBrands = [...brands, ...brands, ...brands];

export default function BrandMarquee() {
  return (
    <section className="bg-[#0c0d0e] py-10 overflow-hidden">
      <div className="flex" aria-label="Trusted by leading companies">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {allBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={36}
                className="h-8 w-auto object-contain filter invert brightness-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
