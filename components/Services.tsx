import Image from "next/image";

const services = [
  {
    icon: "/images/home_finance_offer_icon_1-1.png",
    title: "Collateral Program",
    description:
      "Need collateral for your next project? Maje Investments can provide you with your own deposit account in your own name that can be pledged to your lender to increase the LTV of your project.",
  },
  {
    icon: "/images/home_finance_offer_icon_2-1.png",
    title: "Permanent Takeout Commitment Letter",
    description:
      "Our provider has been serving builders and developers for over 15 years, and can offer you the best rates and terms of any permanent take-out provider in the US.",
  },
  {
    icon: "/images/home_finance_offer_icon_3-1.png",
    title: "SBLC & Proof of Funds",
    description:
      "From $1,000,000 to $900 million. All funds seasoned. New lower rates. Funds are in a bank account in your name. No piggyback accounts. Our service is guaranteed.",
  },
  {
    icon: "/images/home_finance_offer_icon_4-1.png",
    title: "Loan Service",
    description:
      "We can provide you with your own deposit account in your own name that can be pledged to your lender to increase the LTV of your project. Competitive rates for all loan types.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1E3F]">
            How We Can Help You
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Comprehensive financial instruments and collateral solutions tailored
            to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-slate-100 hover:border-[#2563EB]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mb-5 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#0E1E3F] mb-3 text-base leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
