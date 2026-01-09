
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import {
  Calendar,
  Clock,
  Eye,
  Lightbulb,
  Mail,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      
      <div className="border-b border-gray-100 bg-white py-4">
        <div className="container mx-auto px-4 text-xs font-medium text-gray-500 lg:px-8">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Health Tips</span>
          <span className="mx-2">/</span>
          <span>Immune Health</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Complete Guide to Elderberry</span>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          <article className="lg:col-span-2">
            {/* Hero Image Area */}
            <div className="mb-8 flex h-[400px] w-full items-center justify-center rounded-3xl bg-[#f0fdf4]">
              
              <div className="text-9xl">🫐</div>
            </div>

            {/* Badges */}
            <div className="mb-6 flex gap-3">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] tracking-wide text-emerald-700 font-bold">
                Immune Health
              </span>
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                New
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              The Complete Guide to Elderberry for Immune Support
            </h1>

            {/* Author & Meta Data */}
            <div className="mb-10 flex flex-wrap items-center gap-6 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                  DR
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Dr. Rachel Martinez
                  </p>
                  <p className="text-xs text-emerald-600">
                    Clinical Pharmacist
                  </p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-gray-200 sm:block"></div>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Jan 15, 2025
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> 5 min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" /> 1.2k views
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6 text-lg leading-relaxed">
                Elderberry has been treasured for centuries as a powerful
                natural remedy for immune support. This small, dark purple berry
                from the Sambucus nigra plant contains potent antioxidants and
                vitamins that may help your body defend against seasonal
                challenges.
              </p>
              <p className="mb-8 leading-relaxed">
                In this comprehensive guide, we&apos;ll explore the science
                behind elderberry, its traditional uses, and how to incorporate
                it safely into your wellness routine.
              </p>

              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What Makes Elderberry Special?
              </h2>
              <p className="mb-4">
                Elderberries are packed with beneficial compounds that
                contribute to their immune-supporting properties:
              </p>
              <ul className="mb-8 space-y-2 pl-5">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>
                    <strong>Anthocyanins:</strong> Powerful antioxidants that
                    give elderberries their deep purple color and may help
                    reduce inflammation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>
                    <strong>Vitamin C:</strong> Essential for immune cell
                    function and collagen production.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>
                    <strong>Flavonoids:</strong> Plant compounds that support
                    overall health and cellular defense.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span>
                    <strong>Fiber:</strong> Supports digestive health and helps
                    maintain stable blood sugar levels.
                  </span>
                </li>
              </ul>

              
              <div className="mb-10 rounded-xl border-l-4 border-emerald-500 bg-[#f0fdf4] p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-800">
                    Important Safety Note
                  </h3>
                </div>
                <p className="text-sm text-emerald-800/80 px-7">
                  Raw elderberries and other parts of the elder plant contain
                  compounds that can cause nausea if consumed. Always use
                  properly prepared elderberry products from reputable sources.
                  Our elderberry supplements are made from cooked and processed
                  berries that are safe for consumption.
                </p>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Scientific Evidence
              </h2>
              <p className="mb-5 leading-relaxed">
                Multiple studies have examined elderberry&apos;s effects on
                immune health and seasonal wellness.
              </p>
              <p className="mb-5 leading-relaxed">
                A randomized, double-blind placebo-controlled study published in
                the Journal of International Medical Research found that
                elderberry extract significantly reduced the duration and
                severity of cold and flu symptoms compared to placebo.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                How to Use Elderberry
              </h2>
              <p className="mb-6">
                Elderberry is available in several convenient forms:
              </p>

              {/* Usage Grid */}
              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h4 className="mb-2 font-bold text-gray-900">Syrup</h4>
                  <p className="text-xs text-gray-500">
                    The most popular form. Take 1 tablespoon daily for
                    maintenance, or up to 3 times daily during immune
                    challenges.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h4 className="mb-2 font-bold text-gray-900">Gummies</h4>
                  <p className="text-xs text-gray-500">
                    Great for kids and adults who prefer a chewable option.
                    Follow package directions for dosage.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h4 className="mb-2 font-bold text-gray-900">Capsules</h4>
                  <p className="text-xs text-gray-500">
                    Convenient and tasteless. Standardized extract provides
                    consistent potency.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h4 className="mb-2 font-bold text-gray-900">Tea</h4>
                  <p className="text-xs text-gray-500">
                    Dried elderberries can be steeped for a soothing,
                    antioxidant-rich beverage.
                  </p>
                </div>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Final Thoughts
              </h2>
              <p className="mb-12 leading-relaxed">
                Elderberry offers a time-tested, scientifically-supported
                approach to immune wellness. Whether you&apos;re looking for
                daily immune support or want a natural option during cold and
                flu season, elderberry can be a valuable addition to your
                wellness routine.
              </p>
              <p className="mb-12 leading-relaxed">
                As with any supplement, it&apos;s best to consult with your
                healthcare provider before starting, especially if you have
                underlying health conditions or take medications.
              </p>
            </div>

            {/* CTA Box */}
            <div className="mb-12 rounded-3xl border-[3px] border-emerald-700 bg-white p-10 text-center shadow-sm">
              <h3 className="mb-3 text-xl font-extrabold text-gray-900">
                Ready to Try Elderberry?
              </h3>
              <p className="mb-8 text-sm text-gray-600">
                Explore our pharmacist-reviewed elderberry supplements.
              </p>
              <button className="rounded-full bg-emerald-700 px-10 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-800 hover:shadow-lg">
                Shop Elderberry Products
              </button>
            </div>

            {/* Share & Tags */}
            <div className="mt-12 space-y-6 border-t border-gray-100 pt-8">
              
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-bold text-gray-900">
                  Share this article:
                </span>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-200">
                    <Smartphone className="h-4 w-4" /> Copy Link
                  </button>
                  <button className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-200">
                    <Mail className="h-4 w-4" /> Email
                  </button>
                </div>
              </div>

              {/* Row 2: Tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-500 mr-1">
                  Tags:
                </span>
                <span className="rounded-full bg-[#e6f4f1] px-4 py-1.5 text-[10px] font-normal text-sm text-[#166534]">
                  Elderberry
                </span>
                <span className="rounded-full bg-[#e6f4f1] px-4 py-1.5 text-[10px] font-normal text-sm text-[#166534]">
                  Immune Support
                </span>
                <span className="rounded-full bg-[#e6f4f1] px-4 py-1.5 text-[10px] font-normal text-sm text-[#166534]">
                  Herbal Medicine
                </span>
                <span className="rounded-full bg-[#e6f4f1] px-4 py-1.5 text-[10px] font-normal text-sm text-[#166534]">
                  Winter Wellness
                </span>
              </div>
            </div>
          </article>

         
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

