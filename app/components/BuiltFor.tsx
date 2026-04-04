"use client";

import Image from "next/image";

const builtForData = [
{
title: "Social Media Marketers & Influencers",
description:
"Selling products via Instagram, TikTok, WhatsApp, YouTube, or Twitter/X through DMs or personal links.",
image: "/builtfor1.png",
bgColor: "bg-[#F5ECE6]",
buttonColor: "bg-green-600 hover:bg-green-700",
},
{
title: "Freelancers & Clients",
description:
"Hiring designers, developers, writers, or consultants online with milestone-based payments and quality assurance.",
image: "/builtfor2.png",
bgColor: "bg-[#E6F0F7]",
buttonColor: "bg-blue-600 hover:bg-blue-700",
},
{
title: "Peer-to-Peer Dealmakers",
description:
"Trading domains, digital assets, gaming accounts, NFTs, and other high-value items in unregulated markets.",
image: "/builtfor3.png",
bgColor: "bg-[#ECECEC]",
buttonColor: "bg-blue-800 hover:bg-blue-900",
},
{
title: "E-Commerce Buyers & Sellers",
description:
"Trading through online stores, Facebook Marketplace, Instagram, Telegram, Reddit, or independent shops.",
image: "/builtfor4.png",
bgColor: "bg-[#E6F4ED]",
buttonColor: "bg-green-600 hover:bg-green-700",
},
{
title: "Small Businesses & Agencies",
description:
"Trading domains, digital assets, gaming accounts, NFT and other high-value items in unregulated markets.",
image: "/builtfor5.png",
bgColor: "bg-[#F5ECE6]",
buttonColor: "bg-green-600 hover:bg-green-700",
},
{
title: "Service Providers",
description:
"Coaches, editors, photograpers and other professionals selling subjective quality services online",
image: "/builtfor6.png",
bgColor: "bg-[#E6F0F7]",
buttonColor: "bg-green-600 hover:bg-green-700",
},
];

export default function BuiltFor() {
return (
<section className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-center text-3xl font-bold mb-16 text-gray-800">  
    Who PodTrust is Built For  
  </h2>  

  <div className="space-y-12">  
    {builtForData.map((item, index) => (  
      <div  
        key={index}  
        className={`${item.bgColor} rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 sticky top-20`}  
      >  
          
        {/* TEXT SIDE */}  
        <div className="flex-1">  
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">  
            {item.title}  
          </h3>  

          <p className="text-gray-600 mb-6">  
            {item.description}  
          </p>  

          <button  
            className={`${item.buttonColor} text-white px-6 py-2 rounded-lg transition`}  
          >  
            Get Started  
          </button>  
        </div>  

        {/* IMAGE SIDE */}  
        <div className="flex-1 flex justify-center">  
          <Image  
            src={item.image}  
            alt={item.title}  
            width={350}  
            height={350}  
            className="rounded-2xl object-cover"  
          />  
        </div>  

      </div>  
    ))}  
  </div>  
</section>

);
}