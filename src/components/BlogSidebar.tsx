import { Mail } from "lucide-react";

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      {/* Author Widget */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-700 text-2xl font-extrabold text-white">
          DR
        </div>
        <h3 className="text-lg font-extrabold text-gray-900 mb-4">
          Dr. Rachel Martinez
        </h3>
        <p className="text-xs font-medium text-grey-500 mb-4">
          Clinical Pharmacist
        </p>
        <p className="mb-6 text-semibold text-gray-500">
          Dr. Martinez is a licensed clinical pharmacist with over 15 years of
          experience in integrative medicine and herbal therapeutics.
        </p>
        <button className="w-full rounded-full bg-emerald-50 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100">
          View All Articles
        </button>
      </div>

      {/* Related Articles Widget */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
        <h3 className="mb-6 text-lg font-extrabold leading-relaxed text-gray-900 font-sans">
          Related Articles
        </h3>
        <div className="space-y-6">
          
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 shadow-md transition-all hover:shadow-md">
            
            <div className="h-24 w-full bg-sky-100"></div>
            {/* Content Area */}
            <div className="p-5 bg-white">
              <span className="mb-2 block text-[10px] font-bold tracking-widest text-emerald-600">
                Sleep & Relaxation
              </span>
              <h4 className="mb-2 line-clamp-2 text-sm font-bold leading-tight text-gray-900 group-hover:text-emerald-700">
                Natural Sleep Solutions: Herbs That Help You Rest
              </h4>
              <p className="text-xs text-gray-400">7 min read</p>
            </div>
          </div>

          
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 shadow-md transition-all hover:shadow-md">
            
            <div className="h-24 w-full bg-purple-100"></div>
            {/* Content Area */}
            <div className="p-5 bg-white">
              <span className="mb-2 block text-[10px] font-bold tracking-widest text-emerald-600">
                Herbal Guides
              </span>
              <h4 className="mb-2 line-clamp-2 text-sm font-bold leading-tight text-gray-900 group-hover:text-emerald-700">
                Understanding Adaptogenic Herbs for Stress
              </h4>
              <p className="text-xs text-gray-400">6 min read</p>
            </div>
          </div>

         
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 shadow-md transition-all hover:shadow-md">
           
            <div className="h-24 w-full bg-orange-100"></div>
           
            <div className="p-5 bg-white">
              <span className="mb-2 block text-[10px] font-bold  tracking-widest text-emerald-600">
                Seasonal Care
              </span>
              <h4 className="mb-2 line-clamp-2 text-sm font-bold leading-tight text-gray-900 group-hover:text-emerald-700">
                Preparing Your Immune System for Cold Season
              </h4>
              <p className="text-xs text-gray-400">8 min read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="rounded-2xl bg-[#e6f4f1] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <Mail className="h-5 w-5 text-emerald-700" />
        </div>
        <h3 className="mb-2 text-lg font-extrabold text-gray-900">
          Get Weekly Tips
        </h3>
        <p className="mb-6 text-xs font-semibold text-emerald-700">
          Subscribe for expert wellness advice delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="mb-3 w-full rounded-lg border border-gray-300 bg-[#e6f4f1] px-4 py-2.5 text-xs outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />
        <button className="w-full rounded-full bg-emerald-700 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-800">
          Subscribe
        </button>
      </div>
    </aside>
  );
}