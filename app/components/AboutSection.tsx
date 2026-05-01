"use client";

import Image from "next/image";

export default function Problems() {

  const problems = [
    {
      title: "Fraud Prevention",
      text: "Enable transactions between parties with no prior relationship by acting as a neutral, trusted third party that protects both sides.",
      icon: "/icons/icon1.png",
      bg: "bg-[#F8EFE9]",
    },
    {
      title: "Trust Building",
      text: "Enable transactions between parties with no prior relationship by acting as a neutral, trusted third party that protects both sides.",
      icon: "/icons/icon2.png",
      bg: "bg-[#E8F1F8]",
    },
    {
      title: "Dispute Resolution",
      text: "Fair mediation for disputes over product delivery or service completion with documented communication and transaction history.",
      icon: "/icons/icon3.png",
      bg: "bg-[#F2F2F2]",
    },
    {
      title: "Payment Protection",
      text: "Sellers receive payments only after buyers confirm product delivery or service completion.",
      icon: "/icons/payment.png",
      bg: "bg-[#EAF7EE]",
    },
    {
      title: "Platform Independence",
      text: "Protect transacions outside major platforms like eBay or Upwork, icluding social media sales and direct deals",
      icon: "/icons/payment.png",
      bg: "bg-[#EAF7EE]",
    },
    {
      title: "Clear Communication",
      text: "Structure transactions with defined terms, milestones and progress updates to prevent misunderstandings.",
      icon: "/icons/payment.png",
      bg: "bg-[#EAF7EE]",
    },
    {
      title: "Global Commerce",
      text: "Protect transactions outside major platforms like eBay or Upwork, including social media sales and direct deals.",
      icon: "/icons/payment.png",
      bg: "bg-[#EAF7EE]",
    },
  ];

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
  ];

  return (
    <section id="about-pod" className="py-24 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <p className="text-orange-500 font-medium mb-4">
          Problems We Solve
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
          Digital transactions are risky without proper protection. PodTrust eliminates these critical pain points in online commerce.
        </h2>
      </div>

      {/* Cards Scroll */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-6 w-max animate-[scrollRight_25s_linear_infinite]">

          {[...problems, ...problems].map((item, index) => (
            <div
              key={index}
              className={`w-64 h-64 p-6 rounded-2xl ${item.bg} flex flex-col justify-between`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="mb-3"
              />

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Logos Scroll */}
      <div className="mt-20 overflow-hidden">
        <div className="flex gap-12 items-center w-max animate-[scrollLeft_25s_linear_infinite]">

          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="partner"
              width={120}
              height={40}
              className="opacity-60"
            />
          ))}

        </div>
      </div>

      <style jsx>{`
        .animate-scroll-right {
          animation: scrollRight 50s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 50s linear infinite;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0)
          }
        }
        
         @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%)
          }
        }
      `}

      </style>
    </section>
  );
}