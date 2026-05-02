"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 px-6 overflow-hidden bg-white">
      
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
        <p className="text-[#003BB3] text-xs font-semibold uppercase tracking-widest mb-4">
          How PodTrust Works
        </p>
        <h2 className="text-2xl md:text-[32px] font-bold leading-tight text-black px-4">
          Our secure escrow process is designed to be simple, transparent, and
          foolproof. Heres how we protect your transactions from start to finish.
        </h2>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto relative">
        
        {/* THE CURVED LINE (Desktop Only) */}
        <div className="absolute top-0 w-full h-[1200px] pointer-events-none hidden md:block">
          <Image
            src="/stripeline.png"
            alt=""
            width={1200}
            height={1500}
            className="w-auto h-full object-contain opacity-100 scale-110 origin-top-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 items-start">
          
          {/* LEFT COLUMN - STEPS 1, 2, 3 */}
          <div className="space-y-24 relative z-10 md:mt-18">
            
            {/* STEP 1 */}
            <motion.div {...fadeInUp} className="md:pl-24">
              <div className="flex items-start gap-8 mb-3">
                <h3 className="text-2xl md:text-[38px] font-bold text-[#003BB3] leading-tight">
                  Initialize <br /> Transaction
                </h3>
                <span className="w-10 h-10 shrink-0 md:mt-1 md:h-14 md:w-14 md:text-2xl items-center flex justify-center rounded-full bg-blue-50 text-[#003BB3] font-bold text-lg">1</span>
              </div>
              <p className="text-gray-500 md:pt-2 text-sm md:text-base leading-relaxed max-w-80">
                Buyer or seller starts a deal and sets terms, price, and delivery details. 
                Transaction is created with clear milestones and expectations.
              </p>
            </motion.div>

            {/* STEP 2 */}
            <motion.div {...fadeInUp} className="md:pl-24 md:mt-75">
              <div className="flex items-start gap-8 mb-3">
                <h3 className="text-2xl md:text-[38px] font-bold text-[#003BB3] leading-tight">
                  Payment <br /> Release
                </h3>
                <span className="w-10 h-10 shrink-0 md:mt-1 md:h-14 md:w-14 md:text-2xl flex items-center justify-center rounded-full bg-blue-50 text-[#003BB3] font-bold text-lg">2</span>
              </div>
              <p className="text-gray-500 md:pt-2 text-sm md:text-base leading-relaxed max-w-80">
                Once buyer confirms satisfaction, payment is instantly released to seller. 
                Transaction complete with full protection.
              </p>
            </motion.div>

            {/* STEP 3 */}
            <motion.div {...fadeInUp} className="md:pl-24 md:mt-52">
              <div className="flex items-start gap-8 mb-3">
                <h3 className="text-2xl md:text-[38px] font-bold text-[#003BB3] leading-tight">
                  Delivery & <br /> Verification
                </h3>
                <span className="w-10 h-10 md:h-14 md:w-14 md:text-2xl flex items-center justify-center rounded-full bg-blue-50 text-[#003BB3] font-bold text-lg">3</span>
              </div>
              <p className="text-gray-500 md:pt-2 shrink-0 md:mt-1 text-sm md:text-base leading-relaxed max-w-80">
                Seller delivers product/service. Buyer inspects and confirms satisfaction 
                through our verification process.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - PHONE & STEP 4 */}
          <div className="flex flex-col items-center md:items-start md:pl-42 md:pt-22 relative z-20">
            
            {/* PHONE MOCKUP */}
            <div className="mb-16 md:mb-20">
              <Image
                src="/HomeScreenMockup.png"
                alt="App Preview"
                width={340}
                height={680}
                className="w-70 md:w-[320px] h-auto drop-shadow-xl"
              />
            </div>

            {/* STEP 4 - Positioned directly under phone */}
            <motion.div {...fadeInUp} className="md:pl-4 w-full max-w-[320px]">
              <div className="flex items-start gap-8 mb-3">
                <h3 className="text-2xl md:text-[38px] font-bold text-[#003BB3] leading-tight">
                  Payment <br /> Release
                </h3>
                <span className="w-10 h-10 shrink-0 md:mt-1 md:h-14 md:w-14 md:text-2xl flex items-center justify-center rounded-full bg-blue-50 text-[#003BB3] font-bold text-lg">4</span>
              </div>
              <p className="text-gray-500 md:pt-2 text-sm md:text-base leading-relaxed">
                Once buyer confirms satisfaction, payment is instantly released to seller. 
                Transaction complete with full protection.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-20 md:mt-82">
        <button className="bg-[#003BB3] text-white px-10 py-4 rounded-md font-bold text-sm tracking-wide hover:bg-blue-800 transition-colors">
          Start Your First Secure Transaction
        </button>
      </div>
    </section>
  );
}