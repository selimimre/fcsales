"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0E1E3F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Tell us about your requirements and we will get back to you within
            24 hours with a tailored solution.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Message Received
              </h3>
              <p className="text-white/60">
                We will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] transition-colors text-sm"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] transition-colors text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] transition-colors text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2" htmlFor="amount">
                  Required Amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] transition-colors text-sm"
                  placeholder="e.g. $5,000,000"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-white/70 text-sm mb-2" htmlFor="service">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2563EB] transition-colors text-sm"
                >
                  <option value="" className="bg-[#0E1E3F]">Select a service</option>
                  <option value="SBLC" className="bg-[#0E1E3F]">SBLC (Standby Letter of Credit)</option>
                  <option value="Proof of Funds" className="bg-[#0E1E3F]">Proof of Funds</option>
                  <option value="Collateral Program" className="bg-[#0E1E3F]">Collateral Program</option>
                  <option value="Permanent Takeout Letter" className="bg-[#0E1E3F]">Permanent Takeout Commitment Letter</option>
                  <option value="Loan Service" className="bg-[#0E1E3F]">Loan Service</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-white/70 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2563EB] transition-colors text-sm resize-none"
                  placeholder="Please describe your requirements..."
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors text-base"
                >
                  {status === "sending" ? "Sending…" : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
