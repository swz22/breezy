'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [toast, setToast] = useState('')

  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(''), 3200)
  }

  const plans = [
    {
      name: 'Casual Breather',
      desc: 'For the air-curious',
      price: '9',
      features: [
        'Up to 23,000 breaths/day',
        'Standard atmospheric blend',
        'Email support (we may reply)',
        '1 nostril optimization',
      ],
      cta: 'Get Started',
      popular: false,
      onClick: () => showToast('🫁 Welcome aboard, Casual Breather!'),
    },
    {
      name: 'Power Inhaler',
      desc: 'For serious oxygen enthusiasts',
      price: '29',
      features: [
        'Unlimited breaths',
        '3 premium altitude blends',
        'Priority support (we will reply)',
        'Dual-nostril optimization',
        'Monthly Air Report™',
      ],
      cta: 'Start Free Trial',
      popular: true,
      onClick: () => showToast('🎉 Power Inhaler activated! Take a deep breath.'),
    },
    {
      name: 'Enterprise Lung',
      desc: 'For teams that breathe together',
      price: '99',
      features: [
        'Everything in Power Inhaler',
        'Dedicated Air Account Manager',
        'Custom scent profiles',
        'SSO (Single Sniff-On)',
        'SLA: 99.9% oxygen uptime',
      ],
      cta: 'Contact Sales',
      popular: false,
      onClick: () => showToast('📞 Our Air Sales team will reach out within 1 business breath.'),
    },
  ]

  const stats = [
    { value: '12M+', label: 'Breaths facilitated' },
    { value: '99.97%', label: 'Oxygen uptime SLA' },
    { value: '47', label: 'Countries served' },
    { value: '0', label: 'Customers who stopped breathing*' },
  ]

  const testimonials = [
    {
      stars: 5,
      quote: 'I\'ve been breathing for 34 years and never knew I was doing it wrong. Breezy changed everything. My left nostril has never been more optimized.',
      name: 'Jordan P.',
      role: 'VP of Inhaling, Lungify',
      avatar: '🧑',
      bg: '#fcd34d',
    },
    {
      stars: 5,
      quote: 'We switched our entire office to Breezy Enterprise. Productivity is the same but morale is confusingly higher. 10/10 would subscribe to air again.',
      name: 'Sam K.',
      role: 'COO, NostrilTech',
      avatar: '👩',
      bg: '#c4b5fd',
    },
    {
      stars: 4,
      quote: 'Four stars because I briefly forgot to breathe and it wasn\'t covered under the warranty. Otherwise, flawless product. The Mountain Blend slaps.',
      name: 'Taylor R.',
      role: 'Professional Breather',
      avatar: '🧔',
      bg: '#86efac',
    },
  ]

  return (
    <main>

      {/* PRICING */}
      <section className="bg-white py-24 px-6" id="pricing">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">Pricing</div>
          <h1 className="font-serif font-black text-4xl md:text-5xl mb-4">Choose your atmosphere</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-14">
            All plans include unlimited access to Earth&apos;s atmosphere (terms apply).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border rounded-2xl p-9 text-left hover:-translate-y-1 transition-all ${
                  plan.popular
                    ? 'border-sky-400 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400'
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-violet-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif font-bold text-2xl mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>
                <div className="font-serif font-black text-5xl mb-6">
                  <sup className="text-xl align-super">$</sup>
                  {plan.price}
                  <sub className="text-base font-sans font-normal text-slate-500">/mo</sub>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="text-emerald-500 font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={plan.onClick}
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-20 px-6 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-16">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif font-black text-5xl mb-1">{s.value}</div>
              <div className="text-sm opacity-85">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-900 py-24 px-6" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Testimonials</div>
          <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-4">
            Don&apos;t take our word for it
          </h2>
          <p className="text-slate-300 text-lg mb-14">Real reviews from real breathers. Probably.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="text-amber-400 tracking-widest mb-4">
                  {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                </div>
                <blockquote className="text-slate-200 text-sm leading-7 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: t.bg }}
                  >
                    {t.avatar}
                  </span>
                  <div>
                    <strong className="block text-white text-sm">{t.name}</strong>
                    <span className="text-slate-400 text-xs">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-xl text-sm">
          {toast}
        </div>
      )}

    </main>
  )
}
