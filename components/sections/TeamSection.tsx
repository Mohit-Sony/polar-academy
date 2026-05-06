import Image from "next/image";
import { ArrowRight, Settings } from "lucide-react";

const teamMembers = [
  {
    name: "Sardar Singh Ranwa",
    role: "Chemistry",
    image: "/images/team/sardar-singh-ranwa.png",
    experience: "9 Years",
    qualifications: "Founder",
  },
  {
    name: "Rajendra Jat",
    role: "Mathematics",
    image: "/images/team/rajendra-jat.png",
    experience: "9 years",
    qualifications: "Founder",
  },
  {
    name: "Bhagwan Ram Raad",
    role: "Physics",
    image: "/images/team/bhagwan-ram-raad.png",
    experience: "9 years",
    qualifications: "Founder",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#f8fafc]" id="team">
      <div className="container-xl mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-4xl text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-extrabold text-slate-900 mb-4 tracking-tight">
            The Foundation Team
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col gap-5">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#1a4b8f] rounded-[2rem] overflow-hidden">
                {/* White Gear Icon (Background layer) */}
                <div className="absolute right-[-1.5rem] bottom-16 opacity-30">
                  <Settings size={140} className="text-white" strokeWidth={1} />
                </div>

                {/* Person Image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[90%] z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Dark Blue Curved Fold (Foreground layer) */}
                <svg
                  className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24 text-[#0f356b] z-20"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  preserveAspectRatio="none"
                >
                  <path d="M100 0 C50 0, 0 50, 0 100 L100 100 Z" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium">
                  {member.qualifications !== "-" ? member.qualifications : member.role}
                </p>
                <p className="text-xs md:text-sm font-bold text-slate-600 mt-2">
                  Exp: {member.experience}
                </p>
                <button className="flex items-center gap-2 text-[#1a4b8f] text-sm font-semibold mt-2 group-hover:text-blue-700 transition-colors w-fit">
                  Read more
                  <span className="bg-[#1a4b8f] text-white rounded-full p-1 group-hover:bg-[#00cf5d] transition-colors shadow-sm">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
