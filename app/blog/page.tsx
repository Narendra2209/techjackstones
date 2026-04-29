import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog | Tech Jackstones",
  description:
    "Insights on AI, software development, digital transformation, cloud computing, and business automation from the Tech Jackstones team.",
};

const categories = [
  "AI & Future Tech",
  "Software Development",
  "Digital Transformation",
  "Cloud Computing",
  "Business Automation",
];

const featured = {
  title: "How Generative AI Is Reshaping Enterprise Software in 2026",
  excerpt:
    "From copilots to RAG-powered assistants, generative AI is moving from novelty to backbone. Here's how forward-looking enterprises are integrating it into core workflows.",
  category: "AI & Future Tech",
  author: "Tech Jackstones Team",
  date: "Apr 22, 2026",
  readTime: "6 min read",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
};

const posts = [
  {
    title: "Microservices vs. Modular Monolith: A 2026 Decision Framework",
    excerpt:
      "Microservices aren't always the answer. Here's a practical framework to decide which architecture fits your team and stage.",
    category: "Software Development",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "5 Cloud Cost Optimization Wins in the First 90 Days",
    excerpt:
      "Real tactics — right-sizing, reserved instances, lifecycle policies, observability, and FinOps culture — that compound to 30%+ savings.",
    category: "Cloud Computing",
    date: "Apr 8, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Why Most Digital Transformations Fail (And How to Beat the Odds)",
    excerpt:
      "Digital transformation isn't about technology — it's about the operating model. The patterns we see in transformations that actually stick.",
    category: "Digital Transformation",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Automation That Pays: Where to Start in Mid-Sized Businesses",
    excerpt:
      "Skip the hype. Here are the four automation initiatives that consistently deliver clear ROI in the first six months.",
    category: "Business Automation",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Building Your First RAG-Powered AI Assistant",
    excerpt:
      "A pragmatic walkthrough — from data prep and chunking to retrieval, prompting, and evaluation. Code samples included.",
    category: "AI & Future Tech",
    date: "Mar 10, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Insights, <span className="gradient-text">Trends &amp; How-Tos</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Practical perspectives on AI, software development, and digital
            transformation — written by practitioners.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-slate-200 bg-white py-6 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow cursor-pointer">
              All
            </span>
            {categories.map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer transition"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl border border-slate-100 shadow hover:shadow-2xl transition overflow-hidden">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purpleDark/40 to-transparent" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block self-start px-3 py-1 text-xs font-semibold rounded-full bg-brand-pink/10 text-brand-pink mb-4">
                FEATURED · {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                href="#"
                className="inline-flex self-start items-center gap-2 text-brand-pink font-semibold hover:gap-3 transition-all"
              >
                Read article →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* POST GRID */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-brand-pink mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-lg mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1">
                    {p.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span>{p.date}</span>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 section-light relative overflow-hidden border-t border-brand-pink/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/40 blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Get insights <span className="gradient-text">delivered</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            One thoughtful email per week on AI, engineering, and digital
            transformation. No spam — ever.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
