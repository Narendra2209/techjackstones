import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Tech Jackstones",
  description:
    "Our portfolio of impactful AI-powered platforms, enterprise applications, mobile apps, SaaS products, and e-commerce solutions across industries.",
};

const projects = [
  {
    category: "AI Platform",
    title: "Predictive Analytics Suite for Healthcare",
    desc: "ML-powered patient risk scoring platform reducing readmission rates by 23%.",
    tags: ["Python", "TensorFlow", "AWS", "FastAPI"],
    industry: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "Enterprise App",
    title: "ERP Modernization for Manufacturing",
    desc: "Replaced legacy ERP with a cloud-native platform — 4× faster reporting.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Azure"],
    industry: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "Mobile App",
    title: "FinTech Investment Tracker",
    desc: "Cross-platform mobile app with real-time portfolio analytics for 100K+ users.",
    tags: ["Flutter", "Firebase", "GraphQL", "Stripe"],
    industry: "Finance",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "SaaS Product",
    title: "Multi-Tenant Construction PM Platform",
    desc: "End-to-end project management SaaS for construction firms across 12 countries.",
    tags: ["React", "Django", "PostgreSQL", "AWS"],
    industry: "Construction",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "E-commerce",
    title: "Headless Commerce for Fashion Retailer",
    desc: "Headless storefront with personalized recommendations — 38% conversion lift.",
    tags: ["Next.js", "Shopify", "Algolia", "Vercel"],
    industry: "Retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
  },
  {
    category: "AI Chatbot",
    title: "LLM-Powered Customer Support Assistant",
    desc: "RAG-based assistant deflecting 60% of tier-1 support tickets.",
    tags: ["OpenAI", "LangChain", "Pinecone", "Python"],
    industry: "SaaS",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Solutions That Drive <span className="gradient-text">Real Impact</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Impactful solutions across industries — AI platforms, enterprise
            applications, mobile apps, SaaS products, and e-commerce.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-200 py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <PStat n="200+" l="Projects Delivered" />
          <PStat n="50+" l="Global Clients" />
          <PStat n="15+" l="Industries" />
          <PStat n="98%" l="On-Time Delivery" />
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "All",
              "AI Platforms",
              "Enterprise Apps",
              "Mobile Apps",
              "SaaS Products",
              "E-commerce",
            ].map((c, i) => (
              <span
                key={c}
                className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                  i === 0
                    ? "bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition overflow-hidden group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purpleDark/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-purple shadow">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-brand-pink mb-2">
                    {p.industry}
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
            Want a similar <span className="gradient-text">success story?</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Tell us your goals — we&apos;ll show you how we&apos;ve solved
            similar challenges before.
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

function PStat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">
        {n}
      </div>
      <div className="text-sm text-slate-600 mt-1">{l}</div>
    </div>
  );
}
