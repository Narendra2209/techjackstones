import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Developers | Tech Jackstones",
  description:
    "Hire top-tier dedicated developers — Full Stack, AI/ML, Cloud, Mobile, and QA. Flexible full-time, part-time, and project-based engagement models.",
};

const roles = [
  {
    icon: "💻",
    title: "Full Stack Developers",
    skills: ["React / Next.js", "Node.js", "Python / Django", "PostgreSQL"],
  },
  {
    icon: "🤖",
    title: "AI / ML Engineers",
    skills: ["TensorFlow / PyTorch", "LLMs & RAG", "MLOps", "Computer Vision"],
  },
  {
    icon: "☁️",
    title: "Cloud Engineers",
    skills: ["AWS / Azure / GCP", "Kubernetes", "Terraform", "CI / CD"],
  },
  {
    icon: "📱",
    title: "Mobile App Developers",
    skills: ["iOS (Swift)", "Android (Kotlin)", "Flutter", "React Native"],
  },
  {
    icon: "🛡️",
    title: "QA Engineers",
    skills: ["Automation (Selenium/Cypress)", "API Testing", "Performance", "Security"],
  },
  {
    icon: "🎨",
    title: "UI / UX Designers",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
];

const models = [
  {
    title: "Full-Time",
    desc: "Dedicated developers working exclusively on your product, integrated with your team.",
    points: ["40 hrs/week", "Long-term engagement", "Daily standups", "Direct communication"],
    icon: "⏰",
  },
  {
    title: "Part-Time",
    desc: "Flexible hours when you need specialized expertise without a full-time commitment.",
    points: ["20 hrs/week", "Specialist skills", "Cost-effective", "Scale up/down"],
    icon: "🕒",
  },
  {
    title: "Project-Based",
    desc: "Fixed-scope, fixed-budget engagements with clear milestones and deliverables.",
    points: ["Fixed pricing", "Defined scope", "Milestone-based", "Clear timeline"],
    icon: "🎯",
  },
];

export default function HireDevelopers() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Hire Developers
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Hire Top-Tier <span className="gradient-text">Dedicated Developers</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Scale your team with experienced engineers — fast. Flexible models,
            transparent pricing, no long lock-ins.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="btn-glow px-7 py-3.5 rounded-full gradient-bg text-white font-semibold transition"
            >
              Hire Developers
            </Link>
            <Link
              href="#models"
              className="px-7 py-3.5 rounded-full border-2 border-brand-purple text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition"
            >
              View Models
            </Link>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              ROLES YOU CAN HIRE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engineering talent across every layer
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Vetted, senior, hands-on developers ready to start within 1–2
              weeks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div
                key={r.title}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl shadow-lg mb-4">
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{r.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="text-brand-pink font-semibold text-sm hover:underline"
                >
                  Hire now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section id="models" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible models that fit your stage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Pick the engagement that fits your roadmap, budget, and risk
              profile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((m) => (
              <div
                key={m.title}
                className="bg-white p-8 rounded-3xl shadow border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  {m.desc}
                </p>
                <ul className="space-y-2">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="text-brand-pink font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR DEVELOPERS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why our developers stand out
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: "🎯", t: "Top 5% Talent", d: "Rigorous screening — technical, communication, culture fit." },
              { i: "⚡", t: "Quick Onboarding", d: "Start within 1–2 weeks of finalizing the engagement." },
              { i: "🔒", t: "IP Protection", d: "NDAs, secure environments, your IP stays yours — always." },
              { i: "💬", t: "Direct Comms", d: "Slack, Teams, daily standups, your timezone." },
            ].map((x) => (
              <div
                key={x.t}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl shadow-lg">
                  {x.i}
                </div>
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-slate-600 text-sm">{x.d}</p>
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
            Ready to build <span className="gradient-text">your team?</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Tell us your needs — we&apos;ll match you with the right developers
            within 48 hours.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-full gradient-bg text-white font-bold hover:scale-105 transition shadow-xl"
          >
            Hire Developers Now
          </Link>
        </div>
      </section>
    </>
  );
}
