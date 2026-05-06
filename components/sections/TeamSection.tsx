import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Ananya Sharma",
    role: "Physics Expert",
    image: "/images/demo-elearning-01.png",
    experience: "15+ Years",
  },
  {
    name: "Rahul Verma",
    role: "Mathematics Head",
    image: "/images/demo-elearning-03.webp",
    experience: "12+ Years",
  },
  {
    name: "Priya Kapoor",
    role: "Chemistry Senior Faculty",
    image: "/images/demo-elearning-04.webp",
    experience: "10+ Years",
  },
  {
    name: "Vikram Singh",
    role: "Biology Specialist",
    image: "/images/demo-elearning-06.webp",
    experience: "14+ Years",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-slate-50" id="team">
      <div className="container-xl">
        <div className="text-center mb-16">
          <span className="section-label">Our Faculty</span>
          <h2 className="mb-4">
            Explore Our <span className="text-orange-500">Expert Team</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Learn from the best educators in the country, dedicated to mentoring
            and guiding you toward academic excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-[280px] w-full bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-semibold">
                    {member.experience} Experience
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
