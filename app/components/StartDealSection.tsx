"use client";

import Image from "next/image";
import React from "react";

const StartDealSection = () => {
  return (
    <section className="bg-[#F0F8FF] px-6 pb-20">
      <div
        className="
          max-w-6xl mx-auto
          rounded-3xl
          bg-linear-to-r from-blue-700 via-blue-600 to-indigo-700
          text-white
          overflow-hidden
        "
      >
        <div className="grid md:grid-cols-2 items-center gap-10 p-10 md:p-14">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start Your First Deal Now
            </h2>

            <p className="mt-4 text-blue-100 max-w-md">
              Join PodTrust and experience safe, reliable transactions
              for all your buying and selling needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Started
              </button>

              <button className="flex items-center gap-2 bg-white/15 border border-white/40 px-6 py-3 rounded-lg hover:bg-white/25 transition">
                {/* Play Icon */}
                <span className="flex items-center justify-center w-6 h-6 bg-white text-blue-700 rounded-full text-sm">
                  ▶
                </span>
                How It Works
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/phone.png"   // <-- put your phone image in /public
              alt="PodTrust App"
              width={420}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartDealSection;