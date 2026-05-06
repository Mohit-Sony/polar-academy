export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I get started with an online course?",
    answer:
      "Getting started is simple. Create a free account, browse our catalogue of 260+ courses, enrol in the one that fits your goals, and begin learning immediately. Courses are fully self-paced so you can start and stop as your schedule allows.",
  },
  {
    id: 2,
    question: "Are the courses accredited or certified?",
    answer:
      "Yes. Upon completion of each course, you receive a verifiable certificate of completion. Many of our programs are also affiliated with industry bodies and universities, providing credentials that are recognised by employers worldwide.",
  },
  {
    id: 3,
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. Every course on our platform is designed to be completed at your own pace. There are no fixed deadlines for self-paced courses. You can revisit lessons, rewatch video content, and work through projects on your own schedule.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. We also offer monthly subscription plans and team pricing for organisations looking to upskill their workforce.",
  },
  {
    id: 5,
    question: "Is there a refund policy?",
    answer:
      "We offer a full 30-day money-back guarantee on all course purchases, no questions asked. If you're not completely satisfied with your learning experience, contact our support team within 30 days of purchase for a full refund.",
  },
];
