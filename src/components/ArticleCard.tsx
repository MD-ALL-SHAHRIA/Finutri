import { cn } from "@/lib/utils"; 
import { ArrowRight, BookOpen } from "lucide-react"; 
import Link from "next/link";

interface ArticleProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageBgColor: string;
  badge?: "NEW" | "POPULAR";
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  readTime,
  date,
  imageBgColor,
  badge,
}: ArticleProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md overflow-hidden">
      
      <div
        className={`relative h-48 w-full ${imageBgColor} p-6 flex items-end`}
      >
        {badge && (
          <span
            className={cn(
              "absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide shadow-sm",
             
              category === "Seasonal Care"
                ? "bg-white font-semibold text-[#0b2c24]"
                : badge === "NEW"
                ? "bg-[#34d399] text-white"
                : "bg-[#fef08a] text-[#0b2c24]"
            )}
          >
            {badge}
          </span>
        )}

        
        <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
          <BookOpen className="h-6 w-6 text-brand-primary" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pt-10 pb-6">
        
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-gray-500">
          <span className="text-emerald-600">{category}</span>
          <div className="flex items-center gap-1">
            
            {readTime}
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-5 flex-1">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t-2 border-gray-200 pt-4">
          <span className="text-xs text-gray-700">{date}</span>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:gap-2 transition-all"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
