"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openPricing, setOpenPricing] = useState (false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-[0_4px_50px_rgba(0,0,210,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE - Logo */}
        <div className="shrink-0 flex items-center">
          <Image src="/PodTrust-Logo.png" alt="podtrust logo" width={121} height={53} loading="eager"/>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-black font-medium">
          <Link className="hover:text-blue-600" href="/">Home</Link>
          <Link className="hover:text-blue-600"  href="/about">About Us</Link>
          <Link className="hover:text-blue-600" href="/#how-it-works">How It Works</Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600">
              Pricing
            </span>

            {/* DROPDOWN PANEL */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-105 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              
              {/* HEADER */}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Competitive Pricing
              </h4>

              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Our fees start at a flat rate of ₦500 for smaller transactions.  
                For larger volumes, enjoy reduced percentage-based rates.
              </p>

              {/* PRICING LIST */}
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Up to ₦17,300</span>
                  <span className="font-medium">₦500 flat</span>
                </div>

                <div className="flex justify-between">
                  <span>₦17,301 to ₦100,000</span>
                  <span className="font-medium">2.9%</span>
                </div>

                <div className="flex justify-between">
                  <span>₦100,001 to ₦3,000,000</span>
                  <span className="font-medium">2.4%</span>
                </div>

                <div className="flex justify-between">
                  <span>₦3,000,001 above</span>
                  <span className="font-medium">1.9%</span>
                </div>
              </div>

            </div>
          </div>
          <Link className="hover:text-blue-600" href="/faqs">FAQs</Link>
        </div>

        {/* RIGHT SIDE - DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="px-4 py-2 bg-white text-black border-black border text-[12px] rounded-lg transform transition-transform duration-200 hover:scale-105">
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-[#0032A6] text-white text-[12px] px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105"
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
          <Link href="/" className="block hover:text-blue-600" onClick={() => {setIsOpen(false); setIsOpen(false)}}>Home</Link>
          <Link href="/#about-pod" className="block hover:text-blue-600" onClick={() => {setIsOpen(false); setIsOpen(false)}}>About Us</Link>
          <Link href="/#how-it-works" className="block hover:text-blue-600" onClick={() => {setIsOpen(false); setIsOpen(false)}}>How It Works</Link>
          <div>
            <button
              onClick={() => setOpenPricing(!openPricing)}
              className="w-full text-left hover:text-blue-600"
            >
              Pricing
            </button>

            {openPricing && (
              <div className="mt-2 bg-gray-50 rounded-lg p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Up to ₦17,300</span>
                  <span>₦500</span>
                </div>
                <div className="flex justify-between">
                  <span>₦17,301 to ₦100,000</span>
                  <span>2.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>₦100,001 to ₦3,000,000</span>
                  <span>2.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>₦3,000,001 above</span>
                  <span>1.9%</span>
                </div>
              </div>
            )}
          </div>
          <Link href="/faqs" className="block hover:text-blue-600" onClick={() => {setIsOpen(false); setOpenPricing(false);}}>FAQs</Link>
          <hr />
          <Link 
            href="/signin" 
            className="block bg-white border-black border text-black px-4 py-2 rounded-lg text-center"
          >
            Sign In
          </Link>
          
          <Link
            href="/get-started"
            className="block bg-[#0032A6] text-white px-4 py-2 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
