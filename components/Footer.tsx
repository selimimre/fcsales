import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060E1F] text-white/50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <span className="text-white font-semibold">MAJE INVESTMENTS</span>
          <span className="ml-2">— SBLC &amp; Proof of Funds Provider</span>
        </div>
        <div className="flex gap-6">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div>© {new Date().getFullYear()} Maje Investments. All rights reserved.</div>
      </div>
    </footer>
  );
}
