export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What foundation programs do you offer?",
    answer:
      "We offer comprehensive, highly structured programs: SANKALP for JEE Advanced Foundation, VIJAY for NEET Crash Course & Preparation, and LAKSHYA for robust Class 11/12 Foundation building.",
  },
  {
    id: 2,
    question: "Who will be teaching the classes?",
    answer:
      "Your classes will be led by our expert foundation team, including Sardar Singh Ranwa (Chemistry), Rajendra Jat (Mathematics), and Bhagwan Ram Raad (Physics). Together, they bring decades of top-tier coaching experience from Sikar.",
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
