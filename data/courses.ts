export interface Course {
  id: number;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  badges: string[];
  description: string;
  highlights: string[];
  accentColor: string;
}

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/students/m1.png",
    category: "Pre-Foundation",
    title: "PRE-FOUNDATION",
    subtitle: "Early Head Start",
    badges: ["Class VIII, IX, X"],
    description:
      "Build an unshakeable foundation in Physics, Chemistry and Mathematics before the JEE race begins. Our Pre-Foundation program conditions young minds to think analytically and solve problems with confidence.",
    highlights: [
      "PCM fundamentals + Board prep",
      "Logical reasoning & aptitude training",
      "NTSE / Olympiad guidance",
      "K SAT scholarship eligible",
    ],
    accentColor: "emerald",
  },
  {
    id: 2,
    image: "/images/students/w1.png",
    category: "Foundation",
    title: "FOUNDATION",
    subtitle: "Dual Power Prep",
    badges: ["Class XI & XII"],
    description:
      "Simultaneously crack JEE and excel in your Board exams. This program covers the complete JEE syllabus alongside 12th Board preparation, with dedicated remedial sessions to strengthen weak areas.",
    highlights: [
      "JEE Main + Advanced full syllabus",
      "12th Board exam preparation",
      "Remedial & doubt-clearing sessions",
      "Regular mock tests & DPPs",
    ],
    accentColor: "orange",
  },
  {
    id: 3,
    image: "/images/students/m2.png",
    category: "Target",
    title: "TARGET",
    subtitle: "Dropper Intensive",
    badges: ["Class XII Passed", "One Year"],
    description:
      "One focused year to crack IIT JEE and BITSAT. This intensive dropper program starts from scratch, follows a strict time-bound schedule, and is designed to maximise your rank in the next attempt.",
    highlights: [
      "JEE Advanced + BITSAT coverage",
      "Starts from absolute basics",
      "Strict schedule & accountability",
      "IIT-NIT alumni mentorship",
    ],
    accentColor: "blue",
  },
];
