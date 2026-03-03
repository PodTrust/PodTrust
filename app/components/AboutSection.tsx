"use client"; // needed for animation (optional)
import ProblemCard from "./ProblemCardProps";

export default function AboutPage() {
  const cards = [
    {
      title: "🛡️ Fraud Prevention",
      desc: "Enable safe transactions with a neutral, trusted third party.",
    },
    {
      title: "🤝 Trust Building",
      desc: "Build confidence with transparent escrow processes.",
    },
    {
      title: "⚖️ Dispute Resolution",
      desc: "Fair mediation with documented communication.",
    },
    {
      title: "💳 Payment Security",
      desc: "Funds are locked until both parties confirm satisfaction.",
    },
  ];

  return (
    <main className="bg-[#F0F8FF] py-20 overflow-hidden">

      {/* SECTION TITLE */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Problems We Solve
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Digital transactions are risky without proper protection.
          PodTrust eliminates these critical pain points in online commerce.
        </p>
      </div>

      {/* SCROLLING CARDS */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6  animate-scroll">

          {/* Map the cards */}
          {cards.map((card, i) => (
            <ProblemCard key={i} title={card.title} desc={card.desc} />
          ))}

          {/* Duplicate for smooth infinite scroll */}
          {cards.map((card, i) => (
            <ProblemCard key={`dup-${i}`} title={card.title} desc={card.desc} />
          ))}

        </div>
      </div>
    </main>
  );
}