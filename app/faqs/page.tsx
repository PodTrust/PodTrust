"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is PodTrust?",
    answer:
      "PodTrust is a secure escrow platform that protects both buyers and sellers in online transactions. funds are held in escrow until both parties confirm satisfaction, ensuring safe and fair deals.",
  },
  {
    question: "How does escrow work?",
    answer:
      "When you create a deal, the buyer deposits funds into our secure escrow account. The seller delivers the item/service, once the buyer confirms receipt and satisfaction, the funds are released to the seller.",
  },
  {
    question: "What does PodTrust charge?",
    answer: {
      intro: "PodTrust uses a tiered fee structure:",
      fees: [
        "₦0 - ₦17,300: Flat fee of ₦500",
        "₦17,301 - ₦100,000: 2.9% of deal amount",
        "₦100,001 - ₦3,000,000: 2.4% of deal amount",
        "₦3,000,001 and above: 1.9% of deal amount",
      ],
      outro: "Plus a 1% escrow protection fee on all deals.",
      note: "Fees can be split between buyer and seller (50/50, buyer pays all, or seller pays all).",
    },
  },
  {
    question: "What happens in case of disputes?",
    answer:
      "If a dispute arises, funds remain locked in escrow. Our team reviews evidence from both parties within 72 hours and makes a fair decision based on the provided documentation and deal terms.",
  },
  {
    question: "How long does delivery tracking take?",
    answer:
      "Delivery tracking updates in real-time. You'll receive notifications when your item is picked up, in transit, and delivered. Estimated delivery times vary by courier (1-5 days).",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes! All funds are held in insured escrow accounts. We use bank-level encryption and security measures to protect your money and personal information.",
  },
  {
    question: "How do i withdraw funds?",
    answer:
      "Go to Account > Withdraw Funds. Enter the amount and your bank/mobile money details. Withdrawals are processed within 24-48 hours.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-4xl shadow-sm p-8 md:p-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F3F0F7] px-3 py-1 rounded-full mb-6">
            <div className="w-4 h-4 bg-[#0032A6] rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 border-t border-l border-white"></div>
            </div>
            <span className="text-[#0032A6] text-xs font-medium">PodTrust</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">
            Frequently Asked <span className="text-[#0032A6]">Questions</span>
          </h2>
          
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              Your trust matters to us. Explore detailed answers to common questions and understand how PodTrust keeps things Secure.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-200 rounded-2xl border border-gray-100 ${
                  isOpen ? "bg-[#F9F8FF]" : "bg-[#F9F9FB]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`text-sm font-medium transition-colors ${isOpen ? "text-[#1A1A1A]" : "text-[#4A4A4A]"}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? "bg-[#0032A6] text-white" : "bg-[#E0DEEF] text-[#0032A6]"
                  }`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-400 text-xs leading-relaxed">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      <div className="space-y-3">
                        <p>{item.answer.intro}</p>
                        <ul className="space-y-1 ml-2">
                          {item.answer.fees.map((fee, i) => (
                            <li key={i} className="flex gap-2">
                              <span>•</span>
                              <span>{fee}</span>
                            </li>
                          ))}
                        </ul>
                        <p>{item.answer.outro}</p>
                        <p className="italic">{item.answer.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}