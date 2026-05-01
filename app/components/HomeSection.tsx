import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white max-w-7xl mx-auto">
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
        <div className="flex-1 pt-10 md:translate-y-11 md:pl-10">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-500 leading-tight">
            Secure Your <br />
            Transactions with <br /> <span className="font-extrabold">PodTrust</span>
          </h1>
          <p className="text-gray-600 md:pt-10 pt-5 mb-8 text-sm sm:text-base ">
            Experience peace of mind in every transaction with PodTrust.
            Our innovative escrow service ensures that your payments are safe <br /> and your products are delivered as promised.
          </p>

          {/* FEATURES */}
          <div className="flex gap-3 mb-8 w-full">

          <div className="md:w-[40%] w-[60%] bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <Image 
              src="/podtrust.png"
              alt="Podtrust Logo"
              width={22}
              height={22}
            />
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              100% Fraud Protection
            </span>
          </div>

          <div className="w-[40%] bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <Image 
              src="/handshake.png"
              alt="Handshake"
              width={27}
              height={27}
            />
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              Dispute Resolution
            </span>
          </div>

      </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className=" text-white px-6 py-3 rounded-lg bg-[#0032A6] hover:bg-blue-700 transition font-medium">
              Get Started
            </button>
            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg font-medium hover:bg-grey-100 transition">
              <Image 
              src="/play.png"
              alt="Play Logo"
              width={25}
              height={25}
              />
              How It Works
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1 flex items-center md:justify-end md:pr-2">
          <Image
            src="/homePhoneMockup.png"
            alt="Mobile app mockup"
            width={400}
            height={500}
            className="w-full max-w-md md:max-w-137 h-auto"
          />
        </div>
      </section>
      <div className="flex flex-wrap items-center sm:px-0 gap-4 mt-4 px-4 justify-center md:justify-start">
        <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg w-full sm:w-auto justify-center">
            <Image 
              src="/Apple.png"
              alt="Apple icon"
              width={25}
              height={25}
              className="w-5 h-5"
            />

          <div className="leading-tight text-left">
            <p className="text-[10px] md:text-xs">Download on the</p>
            <p className="text-sm md:text-base font-semibold">Apple Store</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg w-full sm:w-auto justify-center">
            <Image 
              src="/Playstore.png"
              alt="Playstore logo"
              width={25}
              height={25}
              className="w-5 h-5"
            />
          <div className="leading-tight text-left">
            <p className="text-[10px] md:text-xs">GET IT ON</p>
            <p className="text-sm font-semibold md:text-base">Google Playstore</p>
          </div>
        </div>
      </div>
    </main>
  );
}