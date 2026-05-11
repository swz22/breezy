"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Isn't air already free?",
    a: "Technically, yes. But is free air really the air you want to be breathing? Our air comes with a receipt, and that's called peace of mind.",
  },
  {
    q: "What if I forget to breathe?",
    a: "That's actually a medical concern and not something we can help with. But our Power Inhaler plan does include breathing reminders via push notification every 4 seconds.",
  },
  {
    q: "Can I cancel anytime?",
    a: "You can cancel your subscription anytime! You'll just need to fill out a 23-page form, attend an exit interview with our Air Retention Specialist, and solve a CAPTCHA that's actually a lung capacity test.",
  },
  {
    q: "Is this a real product?",
    a: "This is a test site for A/B testing and other experiments. But honestly, at this point in tech, would you really be surprised if someone funded this? We've seen worse on Product Hunt.",
  },
  {
    q: "Do you have an API?",
    a: "Yes! Our REST API supports GET /air and POST /exhale endpoints. Rate limited to 12 breaths per minute (we recommend not exceeding this in production or in life).",
  },
];

const team = [
  { emoji: "🧑‍🔬", name: "Dr. Windham Puffs", role: "Chief Air Officer" },
  { emoji: "👩‍💼", name: "Brianna Gasp", role: "Head of Nostril Strategy" },
  { emoji: "🧔", name: "Marcus Inhale", role: "VP of Atmospheric Curation" },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFaq(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <main>
      {/* BRAND STORY */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(186,230,253,0.5), transparent), #f0f9ff",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">
            About Breezy
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
            We Sell Air.
            <br />
            <em className="not-italic bg-gradient-to-br from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Unironically.
            </em>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            Breezy was founded in 2026 on one radical idea: what if the thing keeping humans alive
            was also a subscription product? We took a perfectly free natural resource, added
            artisanal branding, and raised $12M in Series A funding. Silicon Valley is a remarkable
            place.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            Today we serve over 12,847 breathers across 47 countries, each receiving the same air
            they would have gotten anyway — but with a monthly receipt and a sense of
            accomplishment.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed">
            Our mission is simple: to make breathing feel like a choice. A premium choice. Your
            choice.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">
            The Team
          </div>
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-14">
            The Lungs Behind the Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-serif font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-50 py-24 px-6" id="faq">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">FAQ</div>
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Questions We Made Up</h2>
          <p className="text-slate-500 text-lg mb-14">
            Transparent answers to the questions literally nobody asked.
          </p>
          <div className="text-left">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-200">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center py-5 text-left font-bold text-slate-800 text-base hover:text-sky-500 transition-colors"
                >
                  {faq.q}
                  <span
                    className="text-sky-500 text-2xl ml-4 transition-transform duration-200 flex-shrink-0"
                    style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 text-slate-500 text-sm leading-7"
                  style={{
                    maxHeight: openIndex === i ? "200px" : "0",
                    paddingBottom: openIndex === i ? "16px" : "0",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif font-black text-4xl mb-4">Still have questions?</h2>
          <p className="text-slate-500 text-lg mb-8">
            Our support team responds within 1 business breath. Usually.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/30"
            >
              View Pricing →
            </Link>
            <a
              href="mailto:air@breezy.io"
              className="bg-white text-slate-700 font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
