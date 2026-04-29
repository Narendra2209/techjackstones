import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Tech Jackstones",
  description:
    "What our clients say about working with Tech Jackstones — a reliable technology partner delivering scalable solutions and excellent support.",
};

const testimonials = [
  {
    quote:
      "A reliable technology partner delivering scalable solutions and excellent support. The team is responsive, technically strong, and a pleasure to work with.",
    name: "Rohit Sharma",
    role: "CTO, Healthcare SaaS",
    initials: "RS",
  },
  {
    quote:
      "Their AI-driven approach helped us automate processes and improve efficiency. We saw measurable ROI within the first quarter of deployment.",
    name: "Anjali Verma",
    role: "VP Engineering, FinTech",
    initials: "AV",
  },
  {
    quote:
      "From discovery to deployment, the team felt like an extension of ours. Transparent process, on-time delivery, and exceptional code quality.",
    name: "Marcus Lee",
    role: "Founder, E-commerce Startup",
    initials: "ML",
  },
  {
    quote:
      "We needed to scale our engineering team fast. Tech Jackstones onboarded senior developers within two weeks — and they hit the ground running.",
    name: "Priya Iyer",
    role: "Head of Product, EdTech",
    initials: "PI",
  },
  {
    quote:
      "The cloud migration they led saved us 40% on infrastructure costs while improving uptime. Strategic, careful, and effective.",
    name: "David Chen",
    role: "Director of IT, Manufacturing",
    initials: "DC",
  },
  {
    quote:
      "Their UI/UX team transformed our product. Conversions went up 30% in the first month. Best design partnership we've had.",
    name: "Sara Mathew",
    role: "CMO, SaaS Platform",
    initials: "SM",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Trusted by <span className="gradient-text">Founders &amp; Engineering Leaders</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Real words from real clients we&apos;ve had the privilege to build
            with.
          </p>
        </div>
      </section>

      {/* FEATURED QUOTE */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-7xl text-brand-pink/30 mb-2">&ldquo;</div>
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-6">
            A reliable technology partner delivering scalable solutions and
            excellent support.
          </p>
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold shadow-lg">
              RS
            </div>
            <div className="text-left">
              <div className="font-semibold">Rohit Sharma</div>
              <div className="text-sm text-slate-500">CTO, Healthcare SaaS</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="py-12 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow border border-slate-100 hover:shadow-xl transition flex flex-col"
              >
                <div className="text-brand-pink text-4xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 text-sm flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat n="4.9/5" l="Average Rating" />
          <Stat n="98%" l="Would Recommend" />
          <Stat n="92%" l="Repeat Engagements" />
          <Stat n="50+" l="Happy Clients" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-light relative overflow-hidden border-t border-brand-pink/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/40 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Want to be our <span className="gradient-text">next success story?</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let&apos;s build something remarkable together.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-full gradient-bg text-white font-bold hover:scale-105 transition shadow-xl"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">
        {n}
      </div>
      <div className="text-sm text-slate-600 mt-1">{l}</div>
    </div>
  );
}
