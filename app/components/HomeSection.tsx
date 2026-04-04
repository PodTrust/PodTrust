import Image from "next/image";
import { Apple, Play, Handshake } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section 
        className="max-w-7xl mx-auto mt-10 px-6 py-[-10px] pb-20 flex flex-col md:flex-row 
                  items-center md:justify-between gap-10 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url('/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        >
        
        {/* LEFT SIDE - Text */}
        <div className="flex-1 pt-10 md:pt-0 md:pl-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300 leading-tight">
            Secure Your <br />
            Transactions with <br /> <span>PodTrust</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Experience peace of mind in every transaction with PodTrust.
            Our innovative escrow service ensures that your payments are safe and your products are delivered as promised.
          </p>

          {/* FEATURES */}
          <div className="flex gap-3 mb-8 w-full">

          <div className="w-[60%] bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <Image 
              src="/podtrust.png"
              alt="Podtrust Logo"
              width={20}
              height={20}
            />
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              100% Fraud Protection
            </span>
          </div>

          <div className="w-[40%] bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-full">
              <Handshake className="text-white w-5 h-5" />
            </div>
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              Dispute Resolution
            </span>
          </div>

      </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Get Started
            </button>
            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg font-medium hover:bg-grey-100 transition">
              <div className="bg-blue-100 p-2 rounded-full">
                <Play className="text-blue-600 w-4 h-4" />
              </div>
              How It Works
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1">
          <Image
            src="/phone-mockup.png"
            alt="Mobile app mockup"
            width={400}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </section>
      <div className="flex items-center gap-4 ml-9 mt-6">
        <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg">
          <Apple size={20} />

          <div className="leading-tight">
            <p className="text-[10px]">Download on the</p>
            <p className="text-sm font-semibold">Apple Store</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg">
          <Play size={20} />
          <div className="leading-tight">
            <p className="text-[10px]">GET IT ON</p>
            <p className="text-sm font-semibold">Google Playstore</p>
          </div>
        </div>
      </div>
    </main>
  );
}