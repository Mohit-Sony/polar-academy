export interface Course {
  id: number;
  image: string;
  category: string; // e.g., "Engineering", "Medical", "Prefoundation"
  title: string;
  badges: string[];
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/students/m1.png",
    category: "Engineering",
    title: "SANKALP",
    badges: ["Target-2027", "Two Years", "JEE"],
    description: "For Class X to XI Moving Students. A comprehensive 2-year foundation program designed to build strong core concepts, enhance problem-solving skills, and ensure top ranks in JEE.",
  },
  {
    id: 2,
    image: "/images/students/w1.png",
    category: "Engineering",
    title: "VIJAY",
    badges: ["Target-2027", "Two Years", "JEE"],
    description: "For Class XI to XII Moving Students. An intensive program focused on rigorous syllabus coverage, advanced concept mastery, and strategic exam preparation for ultimate success.",
  },
  {
    id: 3,
    image: "/images/students/m2.png",
    category: "Engineering",
    title: "LAKSHYA",
    badges: ["Target-2026", "One Year", "JEE"],
    description: "For Class XII Passed Students. A high-impact, fast-tracked target program focusing on extensive revision, mock tests, and maximizing your competitive exam scores.",
  },
  {
    id: 4,
    image: "/images/students/w2.png",
    category: "Medical",
    title: "SANKALP",
    badges: ["Target-2027", "Two Years", "NEET"],
    description: "For Class X to XI Moving Students. A comprehensive 2-year foundation program designed to build strong core concepts, enhance problem-solving skills, and ensure top ranks in NEET.",
  },
  {
    id: 5,
    image: "/images/students/m3.png",
    category: "Medical",
    title: "VIJAY",
    badges: ["Target-2027", "Two Years", "NEET"],
    description: "For Class XI to XII Moving Students. An intensive program focused on rigorous syllabus coverage, advanced concept mastery, and strategic exam preparation for ultimate success.",
  },
  {
    id: 6,
    image: "/images/students/w3.png",
    category: "Medical",
    title: "LAKSHYA",
    badges: ["Target-2026", "One Year", "NEET"],
    description: "For Class XII Passed Students. A high-impact, fast-tracked target program focusing on extensive revision, mock tests, and maximizing your competitive exam scores.",
  },
];
