"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What problem does PodTrust solve?",
    answer:
      "PodTrust eliminates fraud in online transactions by acting as a secure escrow between buyers and sellers.",
  },
  {
    question: "How does PodTrust prevent fraud?",
    answer:
      "PodTrust holds payment in escrow until the buyer confirms delivery, protecting both parties.",
  },
  {
    question: "Can I use PodTrust with people I don’t know?",
    answer:
      "Yes. PodTrust acts as a neutral third party, making it safe to transact with strangers online.",
  },
  {
    question: "What happens in case of disputes?",
    answer:
      "PodTrust provides dispute resolution using transaction history, milestones, and communication logs.",
  },
  {
    question: "Is PodTrust only for big platforms?",
    answer:
      "No. It works for social media deals, freelance jobs, and direct peer-to-peer transactions.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gray-50 min-h-screen">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-purple-600 text-sm mb-3">
            Digital trust solutions
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Frequently asked questions
          </h2>

          {/* CONTACT CARD */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Still have questions?
            </h3>

            <p className="text-gray-500 mb-6">
              Can’t find the answer you’re looking for? Send us an email and we’ll get back to you.
            </p>

            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Send email
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (ACCORDION) */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm cursor-pointer"
              onClick={() => toggle(index)}
            >
              
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-800">
                  {item.question}
                </h4>

                <span className="text-purple-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              {activeIndex === index && (
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}