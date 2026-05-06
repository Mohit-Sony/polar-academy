export interface Course {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  tag?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/demo-elearning-courses-01.webp",
    category: "Business",
    categoryColor: "#EF991F",
    title: "Business accounting and taxation fundamental",
    instructor: "Colene Doole",
    rating: 4.8,
    reviewCount: 1240,
    price: "$59",
    originalPrice: "$99",
    tag: "Bestseller",
  },
  {
    id: 2,
    image: "/images/demo-elearning-courses-02.webp",
    category: "Finance",
    categoryColor: "#2946F3",
    title: "Finance fundamentals of management and planning",
    instructor: "Martin Fox",
    rating: 4.7,
    reviewCount: 980,
    price: "$79",
    originalPrice: "$129",
  },
  {
    id: 3,
    image: "/images/demo-elearning-courses-03.webp",
    category: "Development",
    categoryColor: "#D5D52B",
    title: "Introduction to application design and development",
    instructor: "Sarah Chen",
    rating: 4.9,
    reviewCount: 2150,
    price: "$69",
    tag: "New",
  },
  {
    id: 4,
    image: "/images/demo-elearning-courses-04.webp",
    category: "Science",
    categoryColor: "#313E3B",
    title: "Genetic testing and sequencing technique",
    instructor: "Dr. James Wright",
    rating: 4.6,
    reviewCount: 730,
    price: "$89",
    originalPrice: "$149",
  },
  {
    id: 5,
    image: "/images/demo-elearning-courses-05.webp",
    category: "Design",
    categoryColor: "#EF991F",
    title: "Introduction to web design and visualization",
    instructor: "Emma Rodriguez",
    rating: 4.8,
    reviewCount: 1870,
    price: "$49",
    tag: "Popular",
  },
  {
    id: 6,
    image: "/images/demo-elearning-courses-06.webp",
    category: "Language",
    categoryColor: "#2946F3",
    title: "Improve your english vocabulary and language",
    instructor: "Amanda Lee",
    rating: 4.5,
    reviewCount: 560,
    price: "$39",
    originalPrice: "$69",
  },
];
