import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export default function BlogSection() {
  return (
    <section className="section-padding bg-[#F3F8F8]" id="blog">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Stay informed</span>
            <h2>Latest articles</h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-[#313E3B] hover:text-[#D5D52B] transition-colors whitespace-nowrap"
          >
            Explore all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
