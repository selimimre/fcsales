import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Financial-Services-lowres-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0E1E3F]/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Trusted Since 2010 · 15+ Years of Service
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          SBLC &amp; Proof of Funds<br />
          <span className="text-[#C9A84C]">Global Provider</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Maje Investments is one of the leading global financial services providers.
          We deliver premium SBLC &amp; Proof of Funds solutions from{" "}
          <strong className="text-white">$1M to $900M</strong> — funds held in a bank account
          in your name, fully seasoned, no piggyback accounts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#services"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Our Services
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "$1M–$900M", label: "Range" },
            { value: "15+", label: "Years Active" },
            { value: "100%", label: "Funds Guaranteed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#C9A84C]">{stat.value}</div>
              <div className="text-white/60 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
