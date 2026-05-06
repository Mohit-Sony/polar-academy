export interface BlogPost {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  author: string;
  excerpt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/demo-elearning-07.webp",
    category: "Education",
    date: "12 Jan 2026",
    title: "Admission is open for the next year batch",
    author: "Colene Doole",
    excerpt:
      "Discover the new admission process for the upcoming year and learn how to secure your spot in our most popular programs before applications close.",
    slug: "admission-open-next-year-batch",
  },
  {
    id: 2,
    image: "/images/demo-elearning-08.webp",
    category: "Career",
    date: "08 Feb 2026",
    title: "How online learning is reshaping the future of work",
    author: "Martin Fox",
    excerpt:
      "Remote-first companies are now prioritising candidates with verifiable online credentials. Here's how to position yourself for the future job market.",
    slug: "online-learning-reshaping-future-of-work",
  },
  {
    id: 3,
    image: "/images/demo-elearning-09.webp",
    category: "Skills",
    date: "22 Mar 2026",
    title: "Top 10 in-demand skills to learn in 2026",
    author: "Sarah Chen",
    excerpt:
      "From AI & machine learning to UX writing, we break down the most valuable skills to invest in this year — based on job market data from 50+ industries.",
    slug: "top-10-skills-2026",
  },
];
