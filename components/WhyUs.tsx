import {
  Landmark,
  ShieldCheck,
  Lock,
  Globe,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const points: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    Icon: Landmark,
    title: "Funds in Your Name",
    description:
      "Your funds are held in a bank account exclusively in your name — no shared or piggyback accounts.",
  },
  {
    Icon: ShieldCheck,
    title: "Fully Seasoned Funds",
    description:
      "All funds are fully seasoned and ready for verification. No delays, no excuses.",
  },
  {
    Icon: Lock,
    title: "Guaranteed Service",
    description:
      "We stand behind every transaction. Our service is guaranteed or your money back.",
  },
  {
    Icon: Globe,
    title: "Global Reach",
    description:
      "We serve clients worldwide with instruments accepted by major banks across all jurisdictions.",
  },
  {
    Icon: TrendingUp,
    title: "15+ Years Experience",
    description:
      "Over 15 years in international trade finance — we have the expertise to deliver.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Competitive Rates",
    description:
      "Best-in-class pricing with transparent terms. No hidden fees, no surprises.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1E3F]">
            The Maje Investments Difference
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            We deliver financial instruments that are transparent, verified, and
            structured entirely around your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map(({ Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0E1E3F] mb-1">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#0E1E3F] p-8 sm:p-12 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Range
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            SBLC & Proof of Funds from $1M to $900M
          </h3>
          <p className="text-white/70 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you need a $1 million proof of funds or a $900 million
            Standby Letter of Credit, Maje Investments has the capacity and
            network to deliver — fast, verified, and guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
