import Image from "next/image";

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
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 flex flex-col md:flex-row items-center">
            Secure Your
            
            Transactions with <br /> <span className="text-blue-600">PodTrust</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Experience peace of mind in every transaction with PodTrust.
            Our innovative escrow service ensures that your payments are safe and your products are delivered as promised.
          </p>

          {/* FEATURES */}
          <div className="flex gap-3 mb-8 w-full">

          <div className="w-[65%] sm:w-auto bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <span className="text-blue-600 font-bold text-sm sm:text-basez">🛡️</span>
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              100% Fraud Protection
            </span>
          </div>

          <div className="w-[35%] sm:w-auto bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <span className="text-blue-600 font-bold">⚖️</span>
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
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
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
    </main>
  );
}