"use client";

import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Custom Solid Caret Icon
function SolidCaret() {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 10 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[1px] opacity-80"
    >
      <path d="M5 6L0.669873 0L9.33013 0L5 6Z" />
    </svg>
  );
}

export default function Header() {
  
  const [activeLink, setActiveLink] = useState("Health Tips");

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: false },
    { name: "All Medicines", href: "#", hasDropdown: false },
    { name: "Herbal Categories", href: "#", hasDropdown: true },
    { name: "Shop by Symptom", href: "#", hasDropdown: true },
    { name: "Best Deals", href: "#", hasDropdown: false },
    { name: "Health Tips", href: "#", hasDropdown: false },
    { name: "About Finutri", href: "#", hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Notification Bar */}
      <div className="border-b border-gray-100 bg-white text-[11px] text-gray-500">
        <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
          <p className="font-medium tracking-wide">
            Free US shipping on herbal orders over $49 · Secure payments
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              Customer Support
            </Link>
            <Link
              href="#"
              className="hover:text-brand-primary transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="border-b border-gray-100 py-4">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col group leading-none">
            <div className="text-3xl font-bold tracking-tight text-brand-dark">
              Finutri<span className="text-red-500 text-4xl leading-3">.</span>
            </div>
            <span className="text-[11px] text-gray-500 font-medium mt-1 tracking-normal group-hover:text-brand-primary transition-colors">
              Herbal & Natural Pharmacy
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden max-w-lg flex-1 md:flex px-12">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for herbal medicine, ingredient..."
                className="w-full rounded-full bg-gray-50 py-2.5 pl-12 pr-4 text-sm outline-none transition-all border border-transparent focus:border-brand-primary/20 focus:bg-white focus:ring-4 focus:ring-brand-primary/10"
              />
              <Search className="absolute left-4 top-2.5 h-5 w-5 text-gray-400 group-focus-within:text-brand-primary" />
              <div className="absolute right-2 top-1.5 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-gray-700 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
                All Categories <SolidCaret />
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-500">
            <button className="hidden flex-col items-center gap-1 text-[10px] font-medium hover:text-brand-primary sm:flex">
              <Heart className="h-5 w-5" /> Wishlist
            </button>
            <button className="hidden flex-col items-center gap-1 text-[10px] font-medium hover:text-brand-primary sm:flex">
              <User className="h-5 w-5" /> Account
            </button>
            <button className="relative flex flex-col items-center gap-1 text-[10px] font-medium hover:text-brand-primary">
              <ShoppingCart className="h-5 w-5" /> Cart
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                2
              </span>
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links with Active State */}
      <nav className="hidden border-b border-gray-100 bg-white py-3 md:block">
        <div className="container mx-auto flex justify-center gap-8 text-xs font-semibold text-gray-600 px-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)} 
              className={`flex items-center gap-1 transition-all ${
                activeLink === item.name
                  ? "text-brand-primary border-b-[2px] border-brand-primary pb-3.5 -mb-3.5" 
                  : "hover:text-brand-primary text-gray-600" 
              }`}
            >
              {item.name}
              {item.hasDropdown && <SolidCaret />}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
