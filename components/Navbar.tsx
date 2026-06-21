"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E1E3F]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-bold text-lg tracking-wide">MAJE INVESTMENTS</span>
          <span className="text-[#C9A84C] text-xs tracking-widest uppercase">SBLC & Proof of Funds</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-white/80 hover:text-white text-sm transition-colors">Services</Link>
          <Link href="#about" className="text-white/80 hover:text-white text-sm transition-colors">About</Link>
          <Link href="#testimonials" className="text-white/80 hover:text-white text-sm transition-colors">Testimonials</Link>
          <Link
            href="#contact"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0E1E3F] border-t border-white/10 px-4 pb-4 flex flex-col gap-4">
          <Link href="#services" className="text-white/80 pt-4 text-sm" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#about" className="text-white/80 text-sm" onClick={() => setOpen(false)}>About</Link>
          <Link href="#testimonials" className="text-white/80 text-sm" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link href="#contact" className="bg-[#2563EB] text-white text-sm font-semibold px-5 py-2 rounded text-center" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
