"use client";

import React from "react";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Initialize Transaction",
    description:
      "Buyer or seller starts a deal and sets terms, price, and delivery details. Transaction is created with clear milestones and expectations.",
  },
  {
    title: "Secure Payment",
    description:
      "PodTrust securely locks the agreed amount from the buyer’s wallet until the transaction is complete.",
  },
  {
    title: "Delivery & Verification",
    description:
      "Seller delivers product/service. Buyer inspects and confirms satisfaction through our verification process.",
  },
  {
    title: "Payment Release",
    description:
      "Once buyer confirms satisfaction, payment is instantly released to seller. Transaction complete with full protection.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F0F8FF] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How PodTrust Works
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our secure escrow process is designed to be simple, transparent,
          and foolproof. how we protect your transactions from start
          to finish.
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 text-left
                         border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button
            className="
              bg-blue-700 hover:bg-blue-800
              text-white font-medium
              px-8 py-3 rounded-lg
              transition duration-200
              shadow-sm
            "
          >
            Start Your First Secure Transaction
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;