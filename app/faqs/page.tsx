"use client";

import { useState } from "react";

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
      note: "Fees can be split between buyer and seller (50/50, buyer pays all, or seller pays all)."
    }
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

            <button className="bg-[#0032A6] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
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
                <div className="text-gray-500 mt-3 text-sm leading-relaxed space-y-3">
                  
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : (
                    <>
                      <p>{item.answer.intro}</p>

                      <ul className="space-y-2">
                        {item.answer.fees.map((fee: string, i: number) => (
                          <li key={i} className="flex gap-2 items-start min-w-0">
                            <span className="mt-1">•</span>
                            <span className="break-words">
                              {fee}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <p>{item.answer.outro}</p>
                      <p>{item.answer.note}</p>
                    </>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}