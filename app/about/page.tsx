import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="bg-[#0A0F1C] min-h-screen py-20 px-4">

      <div className="max-w-5xl mx-auto bg-[#111827] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)]">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          The PodTrust Advantage: Revolutionizing Digital Commerce Integrity
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed">
          In an era where digital commerce is moving away from centralized marketplaces toward decentralized social selling and peer-to-peer (P2P) interactions, the trust gap has never been wider. <span className="text-white font-semibold">PodTrust</span> serves as the definitive infrastructure for secure transactions, integrating rigorous financial escrow with end-to-end logistics to ensure that every promise made is a promise kept.
        </p>

        {/* SECTION TITLE */}
        <h2 className="text-xl font-semibold text-white mb-8">
          Critical Problem Solvability & Strategic Impact
        </h2>

        <div className="space-y-10 text-gray-400 text-sm leading-relaxed">

          {/* 1 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              1. Mitigation of Transactional Fraud
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> The Payment-First or Product-First dilemma creates a stalemate where one party must assume 100% of the risk.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust functions as a strategic buffer. By neutralizing the financial incentive for bad actors, we shift the focus from risk management to value exchange. Our escrow protocol ensures funds are only released upon verifiable proof of fulfillment, protecting the capital of the buyer and the inventory of the seller simultaneously.</p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              2. Institutionalizing Trust in Fragmented Markets
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Social media commerce (Instagram, WhatsApp, TikTok) lacks the native protection of legacy e-commerce giants, leaving users vulnerable.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust provides a Trust-as-a-Service layer. We act as a neutral third-party validator, allowing small-scale sellers and freelancers to command the same level of consumer confidence as a multi-national corporation.</p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              3. Sophisticated Dispute Arbitration
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Standard bank chargebacks are blunt instruments that often penalize the wrong party, while he-said-she-said arguments stall business momentum.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> Our platform introduces a data-driven mediation framework. By utilizing documented milestones, delivery timestamps, and communication logs, PodTrust offers a fair, evidence-based resolution process that minimizes legal friction and protects reputations.</p>
          </div>

          {/* 4 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              4. Seller Liquidity & Payment Guarantee
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Cash-on-delivery (COD) models are plagued by high rejection rates and logistics losses, while Post-Pay models lead to chronic non-payment.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust offers sellers verified proof of funds. Before a seller commits resources or ships inventory, they receive confirmation that the buyers capital is secured in escrow. This eliminates the risk of buyers remorse or ghosting after delivery.</p>
          </div>

          {/* 5 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              5. Platform-Agnostic Utility
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Users are often forced to stay within restrictive ecosystems (like Upwork or eBay) just to remain safe, paying high fees for the privilege.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust is built for the Open Web. Whether you are closing a deal on X, via direct DM, or through a freelance agreement, our infrastructure is portable. We provide marketplace-grade safety without geographical or platform-specific limitations.</p>
          </div>

          {/* 6 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              6. Operational Transparency & Milestone Tracking
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> The Black Box of shipping and fulfillment, where neither party is certain of the transaction status once the payment is sent.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> We structure transactions with defined terms and progress updates. By integrating payment status with clear milestones, PodTrust ensures a transparent audit trail, reducing miscommunication and setting professional expectations from day one.</p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              7. Logistical Synchronization (Closing the Fulfillment Loop)
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Most escrow services are purely financial, leaving a blind spot between the payment being held and the physical movement of goods.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust integrates end-to-end logistics tracking into the escrow trigger. By syncing with courier data or proprietary pickup/delivery records, we ensure the transaction progress is tied to physical reality. This prevents phantom shipments and ensures sellers are rewarded only when the logistics chain confirms delivery.</p>
          </div>

          {/* 8 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              8. Global Transaction Security & Compliance
            </h3>
            <p><span className="text-gray-300 font-medium">The Problem:</span> Cross-border deals involve currency issues, time zones, and legal uncertainty, while small businesses often lack robust audit trails for off-platform sales.</p>
            <p><span className="text-blue-400 font-medium">The Professional Solution:</span> PodTrust provides a unified, neutral process for international deals, helping users navigate global transactions with confidence. Furthermore, every transaction generates a comprehensive digital ledger—including time-stamped proof of payment and delivery—simplifying bookkeeping and financial compliance for independent entrepreneurs.</p>
          </div>

        </div>

        {/* MISSION & VISION */}
        <div className="mt-16 space-y-6">

          <div className="bg-[#0A0F1C] border border-gray-800 p-6 rounded-2xl">
            <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2"><ArrowRight size={18}/> Mission Statement</h4>
            <p className="text-gray-400">
              To build trust in the digital economy by making every online transaction—big or small—safe, transparent, and fair for buyers and sellers everywhere.
            </p>
          </div>

          <div className="bg-[#0A0F1C] border border-gray-800 p-6 rounded-2xl">
            <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2"><ArrowRight size={18}/> Vision Statement</h4>
            <p className="text-gray-400">
              To become the go-to global platform for secure, hassle-free online deals, empowering individuals, freelancers, and small businesses to trade confidently across any channel or location.
            </p>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-12 p-6 bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-gray-800 rounded-2xl">
          <p className="text-gray-300 text-sm leading-relaxed">
            PodTrust is not just a payment gateway; it is a trust ecosystem. By solving these eight critical bottlenecks, we provide the security of a global marketplace with the flexibility of a private handshake. We give social media sellers and independent contractors the professional infrastructure they need to scale their businesses safely and without limits.
          </p>
        </div>

      </div>
    </section>
  );
}