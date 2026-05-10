"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar */}
      <div className="bg-slate-900 flex justify-end items-center px-8 h-9 gap-6 border-b border-white/10">
        <a
          href="#"
          className="text-white/70 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors"
        >
          📱 Breezy App
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors"
        >
          📅 Consultations
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors"
        >
          📞 1-888-AIR-GOOD
        </a>
      </div>

      {/* Mid Bar */}
      <div className="bg-slate-800 flex justify-between items-center px-8 h-14 border-b border-white/10">
        <Link
          href="/"
          className="font-serif font-black text-2xl text-white flex items-center gap-2"
        >
          <span className="bg-gradient-to-br from-sky-400 to-violet-500 bg-clip-text text-transparent">
            Breezy
          </span>
          ™
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          <a
            href="#"
            className="text-white/75 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            Locations
          </a>
          <a
            href="#"
            className="text-white/75 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            Rewards Club
          </a>
          <Link
            href="/pricing"
            className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded transition-colors"
          >
            Book Air
          </Link>
        </div>
        <button
          className="lg:hidden flex flex-col items-center justify-center w-11 h-11 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Main Nav */}
      <div className="hidden lg:flex bg-slate-700 items-center px-8 h-12">
        <div className="flex items-center gap-2 mr-6 text-white text-sm font-bold uppercase tracking-wide">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-xs">
            📍
          </div>
          SUMMIT
        </div>
        <div className="flex items-center h-full">
          <Link
            href="/#features"
            className="text-white/85 hover:text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest px-5 h-full flex items-center border-x border-white/10 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how"
            className="text-white/85 hover:text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest px-5 h-full flex items-center border-r border-white/10 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-white/85 hover:text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest px-5 h-full flex items-center border-r border-white/10 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/pricing#testimonials"
            className="text-white/85 hover:text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest px-5 h-full flex items-center border-r border-white/10 transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="text-white/85 hover:text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest px-5 h-full flex items-center border-r border-white/10 transition-colors"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col items-center pt-28 overflow-y-auto">
          <Link
            href="/#features"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/pricing#testimonials"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            Reviews
          </Link>
          <div className="w-4/5 max-w-xs h-px bg-white/10 my-2" />
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-white text-base font-semibold uppercase tracking-widest py-5 px-8 text-center w-full max-w-sm hover:bg-white/5 transition-colors"
          >
            Pricing
          </Link>
        </div>
      )}
    </div>
  );
}
