import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Tech Jackstones",
  description:
    "Digital transformation, AI-powered solutions, cloud transformation, and product engineering — built around your business outcomes.",
};

const solutions = [
  {
    title: "Digital Transformation",
    icon: "🔄",
    desc: "Modernize your business with advanced technologies and automation. We help you re-imagine workflows, replace legacy systems, and unlock new digital revenue streams.",
    points: [
      "Legacy modernization",
      "Workflow automation",
      "Data-driven decision systems",
      "Customer experience reinvention",
    ],
  },
  {
    title: "AI-Powered Solutions",
    icon: "🤖",
    desc: "Turn data into intelligence and automate operations. From generative AI assistants to predictive models, we embed intelligence into every layer of your stack.",
    points: [
      "Generative AI & LLM apps",
      "Predictive analytics",
      "AI chatbots & copilots",
      "Intelligent process automation",
    ],
  },
  {
    title: "Cloud Transformation",
    icon: "☁️",
    desc: "Build scalable, secure, and cost-effective infrastructure. We architect, migrate, and optimize cloud environments across AWS, Azure, and GCP.",
    points: [
      "Cloud migration",
      "Cloud-native architecture",
      "Cost optimization",
      "Multi-cloud strategy",
    ],
  },
  {
    title: "Product Engineering",
    icon: "🚀",
    desc: "From idea to launch — we build scalable digital products. Strategy, design, engineering, and post-launch growth, all under one roof.",
    points: [
      "Product strategy & roadmap",
      "MVP development",
      "Scalable architecture",
      "Continuous delivery",
    ],
  },
];

export default function Solutions() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Outcome-Driven <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just deliver code — we deliver business outcomes
            through targeted, intelligent technology solutions.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow hover:shadow-2xl hover:-translate-y-1 transition group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-3xl shadow-lg mb-5 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                <p className="text-slate-600 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 text-brand-pink font-bold">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-brand-pink font-semibold text-sm hover:underline"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions tailored by industry
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Domain experience across the sectors that matter to you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { i: "🏥", n: "Healthcare" },
              { i: "🏗️", n: "Construction" },
              { i: "💰", n: "Finance" },
              { i: "🛒", n: "Retail" },
              { i: "🏭", n: "Manufacturing" },
              { i: "🎓", n: "Education" },
              { i: "🏠", n: "Real Estate" },
            ].map((x) => (
              <div
                key={x.n}
                className="bg-white p-5 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition border border-slate-100"
              >
                <div className="text-3xl mb-2">{x.i}</div>
                <div className="text-xs md:text-sm font-semibold text-slate-700">
                  {x.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-light relative overflow-hidden border-t border-brand-pink/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/40 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Ready to unlock <span className="gradient-text">your next leap?</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Tell us your business goal — we&apos;ll architect the technology
            roadmap to get you there.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-full gradient-bg text-white font-bold hover:scale-105 transition shadow-xl"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
