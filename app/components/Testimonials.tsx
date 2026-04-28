"use client";

import React from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "Seller, Online Store",
    quote: "Using PodTrust transformed my transactions into a breeze!",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Manager, Tech Firm",
    quote: "I trust PodTrust for every deal I make online!",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? "text-orange-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 md:p-14">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Customer Testimonials
        </h2>

        <p className="text-gray-600 mt-3">
          PodTrust made my online selling experience seamless and secure.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div key={index}>
              
              {/* Stars */}
              <StarRating rating={item.rating} />

              {/* Quote */}
              <p className="font-semibold text-gray-800 text-lg">
                `{item.quote}`
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  👤
                </div>

                <div className="border-l pl-4">
                  <p className="font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;