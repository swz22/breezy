"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");
  const [stepsRef, stepsInView] = useInView(0.2);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 3200);
  }

  function handleSignup() {
    if (email && email.includes("@")) {
      showToast("🎉 Welcome to Breezy! Check your inbox (or just inhale).");
      setEmail("");
    } else {
      showToast("⚠️ Please enter a valid email. We need it for... air reasons.");
    }
  }

  const features = [
    {
      icon: "🏔️",
      bg: "#dbeafe",
      title: "Mountain-Sourced™",
      desc: "Each batch is harvested at peak altitude by our trained Air Sommeliers using proprietary glass jars.",
    },
    {
      icon: "🧬",
      bg: "#fce7f3",
      title: "DNA-Matched Blends",
      desc: "Our AI analyzes your 23andMe data to craft a bespoke nitrogen-oxygen ratio. Patent pending.",
    },
    {
      icon: "🌿",
      bg: "#d1fae5",
      title: "Carbon-Neutral Carbon",
      desc: "We offset our CO₂ by thinking really hard about trees. It's basically the same thing.",
    },
    {
      icon: "⚡",
      bg: "#fef3c7",
      title: "Instant Delivery",
      desc: 'Our patented "Open a Window" technology ensures same-second delivery anywhere on Earth.',
    },
    {
      icon: "🔬",
      bg: "#ede9fe",
      title: "Lab-Verified Purity",
      desc: "Every batch is tested by scientists who definitely exist and are not just our intern in a lab coat.",
    },
    {
      icon: "🤝",
      bg: "#ffe4e6",
      title: "Community Breathing",
      desc: "Join our Discord of 50k+ breathers. Share tips, techniques, and which nostril you prefer.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Take Our Quiz",
      desc: "Answer 47 deeply personal questions so we can recommend the air you were already breathing.",
    },
    {
      num: "2",
      title: 'We "Curate"',
      desc: "Our team spends 0 minutes hand-selecting the exact same air from our warehouse (the sky).",
    },
    {
      num: "3",
      title: "Breathe & Subscribe",
      desc: "Inhale, exhale, repeat. If you stop, it's not our fault but also please don't cancel.",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(186,230,253,0.5), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(139,92,246,0.08), transparent), #f0f9ff",
        }}
      >
        <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-4 py-1.5 text-xs font-semibold text-sky-700 mb-6 shadow-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          Now serving 47 countries
        </div>
        <h1 className="font-serif font-black text-5xl md:text-7xl max-w-4xl mb-5 leading-tight">
          Premium{" "}
          <em className="not-italic bg-gradient-to-br from-sky-500 to-violet-500 bg-clip-text text-transparent">
            Artisanal Air
          </em>
          , Delivered Fresh
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-9">
          Hand-curated atmospheric blends sourced from the world&apos;s finest altitudes. Because
          you deserve air with <em>character</em>.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/pricing"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/30"
          >
            Start Breathing Better →
          </Link>
          <button
            onClick={() => showToast('📺 Playing: "The Art of Nothing" (3 min)')}
            className="bg-white text-slate-700 font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all"
          >
            ▶ Watch the Story
          </button>
        </div>
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex">
            {[
              { emoji: "🧑", bg: "#fcd34d" },
              { emoji: "👩", bg: "#a5f3fc" },
              { emoji: "🧔", bg: "#c4b5fd" },
              { emoji: "👱", bg: "#fda4af" },
              { emoji: "👩‍🦰", bg: "#86efac" },
            ].map((a, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white -ml-2.5 first:ml-0 flex items-center justify-center text-sm"
                style={{ background: a.bg }}
              >
                {a.emoji}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            <strong className="text-slate-800">12,847</strong> breathers joined this month
          </p>
        </div>
      </section>

      {/* LOGOS */}
      <div className="py-12 px-6 text-center border-y border-sky-100 bg-white">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
          Trusted by industry leaders who breathe
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-35">
          {["Lungify", "AirBnBreeze", "OxyCorp", "NostrilTech", "GaspWorks"].map((name) => (
            <span key={name} className="font-serif font-bold text-xl text-slate-700">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="bg-white py-24 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">
            Why Breezy
          </div>
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">
            Air, but make it ✨ premium ✨
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mb-14">
            We ruined a perfectly free resource by adding a subscription model. You&apos;re welcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-9 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: f.bg, width: 52, height: 52 }}
                >
                  {f.icon}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-sky-50 py-24 px-6" id="how">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">
            How It Works
          </div>
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">
            Three steps to better breathing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-14">
            It&apos;s so simple, you&apos;ve probably been doing it wrong your whole life.
          </p>

          {/* Timeline */}
          <div
            ref={stepsRef}
            className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 px-6"
          >
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-7 left-20 right-20 h-0.5 bg-gradient-to-r from-sky-400 to-violet-500 z-0" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex-1 flex flex-col items-center text-center px-4 relative z-10 group"
                style={{
                  opacity: stepsInView ? 1 : 0,
                  transform: stepsInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 150}ms, transform 0.5s ease ${i * 150}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-white font-bold text-xl flex items-center justify-center mb-5 shadow-lg shadow-sky-500/25 group-hover:scale-110 group-hover:shadow-sky-500/40 transition-all duration-300 relative z-20">
                  {step.num}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-sky-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-white py-24 px-6" id="signup">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-slate-900 rounded-2xl px-10 py-16 text-white">
            <h2 className="font-serif font-black text-4xl mb-3">Ready to breathe different?</h2>
            <p className="text-slate-300 mb-8">
              Join 12,847 breathers. Get weekly air quality insights and exclusive nostril tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@breathe.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:border-sky-400 transition-colors text-sm"
              />
              <button
                onClick={handleSignup}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe Free →
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              No spam. Just air. Unsubscribe by holding your breath for 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-xl text-sm animate-fade-in">
          {toast}
        </div>
      )}
    </main>
  );
}
