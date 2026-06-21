import Image from "next/image";

const testimonials = [
  {
    text: "I used their credit enhancement to get a bond, great communication and they answered all my concerns and questions.",
    name: "Oltia B.",
    role: "Investor",
    photo: "/images/Screenshot-2024-11-23-at-17.54.32.png",
  },
  {
    text: "We needed an SBLC for additional collateral in a large commercial project. They came through and delivered the product as described and 3 months later we funded the deal!",
    name: "Matt B.",
    role: "Start-Up Investor",
    photo: "/images/Screenshot-2024-11-23-at-17.54.39.png",
  },
  {
    text: "Maje Investments has been a game-changer for our business. We got the instrument we needed and funded our deal.",
    name: "İsmail A.",
    role: "Founder",
    photo: "/images/Screenshot-2024-11-23-at-17.54.47.png",
  },
  {
    text: "The Standby Letter of Credit they provided was seamless, transparent, and tailored to our needs. Highly recommended for any business looking for financial assurance!",
    name: "John R.",
    role: "CEO, Global Ventures",
    photo: "/images/image.25551.3545089.jpg",
  },
  {
    text: "Maje Investments exceeded our expectations. Their team was knowledgeable, professional, and patient. The funds were verified and exactly as promised.",
    name: "Emily S.",
    role: "Founder, Stellar Imports",
    photo: "/images/image.25405.3545089.jpg",
  },
  {
    text: "Their no-piggyback policy and clear documentation made the entire process hassle-free. Our business secured multiple high-value contracts thanks to their SBLC services.",
    name: "David L.",
    role: "Managing Partner, Luxe Trade Group",
    photo: "/images/image.25433.3545089.jpg",
  },
  {
    text: "The SBLC from Maje Investments provided us with the financial stability to pursue global transactions confidently. Knowing the funds were held in our name gave us peace of mind.",
    name: "Sophia A.",
    role: "Founder",
    photo: "/images/image.25384.3545089.jpg",
  },
  {
    text: "Their team guided us through every step of the SBLC process, ensuring our funds were secured and our transactions guaranteed. Their seasoned approach made a complex process simple.",
    name: "Lena K.",
    role: "COO, Prestige Real Estate",
    photo: "/images/Screenshot-2024-11-23-at-18.34.17.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1E3F]">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-xl p-6 flex flex-col gap-4 border border-slate-100"
            >
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#0E1E3F] text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
