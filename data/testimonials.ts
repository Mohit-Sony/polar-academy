export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alexandra Johnson",
    role: "Product Designer",
    company: "Airbnb",
    avatar: "/images/demo-elearning-04.webp",
    rating: 5,
    quote:
      "The courses are incredibly well-structured and the instructors are experts in their fields. I was able to transition into a new career within just 6 months of dedicated learning.",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Software Engineer",
    company: "Google",
    avatar: "/images/demo-elearning-05.webp",
    rating: 5,
    quote:
      "EduLearn's platform made complex programming concepts approachable. The project-based curriculum helped me build a portfolio that landed me my dream job.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Manager",
    company: "Spotify",
    avatar: "/images/demo-elearning-06.webp",
    rating: 5,
    quote:
      "I've tried many online learning platforms, but none come close to the quality and support here. The community forums and live Q&A sessions are invaluable.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Data Analyst",
    company: "Netflix",
    avatar: "/images/demo-elearning-03.webp",
    rating: 5,
    quote:
      "The finance and business courses gave me a completely new perspective on how to analyse data strategically. My salary increased by 40% within a year.",
  },
];
