"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-[0_4px_50px_rgba(0,0,210,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE - Logo */}
        <div className="shrink-0 flex items-center">
          <Image src="/PodTrust-Logo.png" alt="podtrust logo" width={121} height={53} />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-black font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faqs">FAQs</Link>
        </div>

        {/* RIGHT SIDE - DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="px-4 py-2 bg-white text-black border-black border text-[12px] rounded-lg transform transition-transform duration-200 hover:scale-105">
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-[#0000FF] text-white text-[12px] px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white px-6 pt-5 pb-4 space-y-4 shadow-md z-50">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/how-it-works" className="block">How It Works</Link>
          <Link href="/pricing" className="block">Pricing</Link>
          <Link href="/faqs" className="block">FAQs</Link>
          <hr />
          <Link 
            href="/signin" 
            className="block bg-white border-black border text-black px-4 py-2 rounded-lg text-center"
          >
            Sign In
          </Link>
          
          <Link
            href="/get-started"
            className="block bg-[#0000FF] text-white px-4 py-2 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
