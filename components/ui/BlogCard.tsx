import Image from "next/image";
import { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden card-hover border border-[#E4E4E4] group cursor-pointer">
      {/* Image */}
      <div className="img-overlay relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D5D52B] bg-[#F3F8F8] px-3 py-1 rounded-sm">
            {post.category}
          </span>
          <span className="text-xs text-[#828C8A]">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#313E3B] leading-snug mb-3 group-hover:text-[#313E3B] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#828C8A] leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-[#E4E4E4] mb-4" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#828C8A]">
            By <span className="text-[#313E3B] font-medium">{post.author}</span>
          </span>
          <span className="text-sm font-semibold text-[#313E3B] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
