"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-serif font-black text-2xl text-white mb-3">
              <span className="bg-gradient-to-br from-sky-400 to-violet-500 bg-clip-text text-transparent">
                Breezy
              </span>
              ™
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Making the world&apos;s most abundant resource feel exclusive since 2026.
              Venture-backed. Carbon-confused.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#features" className="text-sm hover:text-sky-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-sky-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm hover:text-sky-400 transition-colors">
                  About (It&apos;s Air)
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Air EULA
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                  Nostril Waiver
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-wrap justify-between items-center gap-3 text-xs">
          <span>&copy; 2026 Breezy</span>
          <span>Venture-backed. Carbon-confused. Nostril-optimized.</span>
        </div>
      </div>
    </footer>
  );
}
