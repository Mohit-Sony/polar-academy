export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What programs do you offer?",
    answer:
      "We offer comprehensive, highly structured programs: PRE-FOUNDATION for Class VIII, IX, and X to solidify fundamental concepts; FOUNDATION for Class XI & XII covering school and competitive exams; and TARGET for Class XII Passed students starting from scratch with a time-bound approach.",
  },
  {
    id: 2,
    question: "Who will be teaching the classes?",
    answer:
      "Your classes will be led by our expert faculty team at Kautilya IIT Academy. With decades of top-tier coaching experience, they ensure personalized attention and expert guidance.",
  },
  {
    id: 3,
    question: "Are the programs offline or online?",
    answer:
      "We strongly believe in the power of immersive, distraction-free learning. Our primary programs are rigorous offline classroom sessions conducted at our Sikar campus, supplemented by comprehensive digital study materials for home revision.",
  },
  {
    id: 4,
    question: "How do you handle student doubts?",
    answer:
      "We maintain an optimal student-to-teacher ratio to ensure personalized attention. We conduct dedicated daily doubt-clearing counters and one-on-one mentoring sessions so no student falls behind.",
  },
  {
    id: 5,
    question: "Do you provide study materials and test series?",
    answer:
      "Yes. Every student receives our meticulously researched study modules, Daily Practice Problems (DPPs), and access to our All-India level test series that strictly follow the latest NTA and JEE Advanced exam patterns.",
  },
];
