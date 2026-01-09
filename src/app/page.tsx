"use client";

import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import { cn } from "@/lib/utils";
import Link from "next/link"; 
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Complete Guide to Elderberry for Immune Support",
    category: "Immune Health",
    readTime: "5 min read",
    excerpt:
      "Discover how elderberry has been used for centuries to support immune function and learn the science behind this powerful herbal remedy.",
    date: "Jan 15, 2025",
    imageBgColor: "bg-green-50",
    badge: "NEW" as const,
  },
  {
    id: 2,
    title: "Natural Sleep Solutions: Herbs That Help You Rest",
    category: "Sleep & Relaxation",
    readTime: "7 min read",
    excerpt:
      "Explore calming herbs like valerian root, chamomile, and passionflower that can help you achieve deeper, more restorative sleep naturally.",
    date: "Jan 12, 2025",
    imageBgColor: "bg-green-50",
  },
  {
    id: 3,
    title: "Understanding Adaptogenic Herbs for Stress Management",
    category: "Herbal Guides",
    readTime: "6 min read",
    excerpt:
      "Learn how adaptogens like ashwagandha and rhodiola help your body respond to stress and maintain balance during challenging times.",
    date: "Jan 10, 2025",
    imageBgColor: "bg-green-50",
    badge: "POPULAR" as const,
  },
  {
    id: 4,
    title: "Digestive Health: The Role of Bitter Herbs",
    category: "Digestive Wellness",
    readTime: "5 min read",
    excerpt:
      "Discover how traditional bitter herbs support digestion, improve nutrient absorption, and promote overall gut health.",
    date: "Jan 8, 2025",
    imageBgColor: "bg-green-50",
  },
  {
    id: 5,
    title: "The Science Behind Vitamin C and Immune Function",
    category: "Seasonal Care",
    readTime: "8 min read",
    excerpt:
      "Understand how vitamin C supports your immune system and why it's essential during times when your body needs extra support.",
    date: "Jan 5, 2025",
    imageBgColor: "bg-green-50",
    badge: "POPULAR" as const,
  },
  {
    id: 6,
    title: "Echinacea: Benefits, Dosage, and Usage Guidelines",
    category: "Herbal Guides",
    readTime: "6 min read",
    excerpt:
      "A comprehensive look at echinacea, one of the most researched immune-supporting herbs, including how to use it effectively.",
    date: "Jan 3, 2025",
    imageBgColor: "bg-green-50",
  },
];

const categories = [
  "All Topics",
  "Immune Health",
  "Sleep & Relaxation",
  "Digestive Wellness",
  "Seasonal Care",
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-brand-light/50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-4 flex gap-2">
            <span className="rounded-full bg-emerald-400 px-3 py-1 font-semibold text-xs text-black">
              WELLNESS RESOURCES
            </span>
            <span className="rounded-full bg-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
              Expert-reviewed content
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Health Tips & Herbal Guides
          </h1>
          <p className="max-w-2xl text-lg text-gray-900">
            Discover evidence-based wellness advice, herbal remedy guides, and
            health tips from our team of pharmacists and herbal medicine
            experts.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="container mx-auto py-12 px-4 lg:px-8">
        {/* Filters - Updated to Mint/Dark Green style with interactivity */}
        <div className="mb-10 flex flex-wrap gap-2 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                activeCategory === cat
                  ? "bg-[#166534] text-white shadow-md" // Active state
                  : "bg-[#e6f4f1] text-[#166534] hover:bg-[#d1fae5]" // Inactive state
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Header for Grid */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="text-sm text-gray-500 mt-1">6 articles available</p>
          </div>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-emerald-600 hover:underline md:block"
          >
            View all articles →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}