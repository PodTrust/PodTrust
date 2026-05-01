"use client";

import Image from "next/image";

export default function HowItWorks() {

  return (
    <section id="how-it-works" className="relative py-32 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <p className="text-blue-600 font-medium mb-4">
          How PodTrust Works
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Our secure escrow process is designed to be simple, transparent,
          and foolproof. Here is how we protect your transactions from
          start to finish.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE (Steps 1,2,3) */}
        <div className="relative space-y-28">

          {/* CURVED STRIPE */}
          <Image
            src="/stripeline.png"
            alt="flow line"
            width={1000}
            height={1200}
            className="absolute top-0 -translate-x-10 w-auto left-25 -z-10 hidden md:block h-300 max-w-375 object-contain"
          />

          {/* STEP 1 */}
          <div className="md:pl-35">
            <div className="md:pt-20 flex items-center gap-4 mb-4">

              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                Initialize <br/> Transaction
              </h3>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-700 font-bold md:text-3xl">
                1
              </div>

            </div>

            <p className="text-gray-600 text-sm break-words leading-relaxed">
              Buyer or seller starts a deal and sets terms, price,
              and delivery details. Transaction is created with
              clear milestones and expectations.
            </p>
          </div>


          {/* STEP 2 */}
          <div className="md:p-35">
            <div className="flex items-center gap-4 mb-4">

              <h3 className="text-3xl font-bold text-blue-700">
                Payment Protection
              </h3>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-700 font-bold md:text-3xl">
                2
              </div>

            </div>

            <p className="text-gray-600 max-w-sm leading-relaxed">
              Buyer deposits funds into PodTrust escrow. The funds
              are securely held until the delivery conditions are met.
            </p>
          </div>


          {/* STEP 3 */}
          <div className="md:pl-35">
            <div className="flex items-center gap-4 mb-4">

              <h3 className="text-3xl font-bold text-blue-700">
                Delivery & <br /> Verification
              </h3>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-700 font-bold text-lg">
                3
              </div>

            </div>

            <p className="text-gray-600 max-w-sm leading-relaxed">
              Seller delivers product or service. Buyer verifies
              completion and confirms satisfaction through our
              verification system.
            </p>
          </div>

        </div>


        {/* PHONE CENTER */}
       
        <div className="flex flex-col mt-16 md:mt-20 right-36 mr-24 md:absolute">
          <Image
            src="/HomeScreenMockup.png"
            alt="PodTrust app"
            width={370}
            height={670}
            className="w-full max-w-55 md:max-w-85 h-auto mx-auto"
          />
        </div>


        {/* RIGHT SIDE (Step 4) */}
        <div className="flex flex-col mr-50 md:pt-200">

          <div className="max-w-sm">
            <div className="flex items-center justify-between mb-4">

              <h3 className="text-3xl font-bold text-blue-700">
                Payment <br /> Release
              </h3>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-700 font-bold text-lg">
                4
              </div>

            </div>

            <p className="text-gray-600 max-w-sm leading-relaxed">
              Once the buyer confirms satisfaction, the payment
              is instantly released to the seller. The transaction
              completes with full protection for both parties.
            </p>
          </div>

        </div>

      </div>


      {/* CTA BUTTON */}
      <div className="flex justify-center mt-50">
        <button className="bg-blue-700 text-white px-10 py-4 rounded-lg font-medium hover:scale-105 transition">
          Start Your First Secure Transaction
        </button>
      </div>

    </section>
  );
}