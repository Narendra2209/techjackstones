import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Tech Jackstones",
  description:
    "Our 7-step development process — discovery, planning, design, development, testing, deployment, and support — built around transparency, agility, and timely delivery.",
};

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We start by understanding your business goals, users, and constraints. Outcome: a shared definition of success.",
    deliverables: ["Stakeholder interviews", "Goal alignment", "Success metrics"],
  },
  {
    n: "02",
    title: "Planning",
    desc: "We translate the vision into a concrete roadmap — scope, timeline, team, and budget.",
    deliverables: ["Project roadmap", "Sprint plan", "Risk register"],
  },
  {
    n: "03",
    title: "Design",
    desc: "User experience, interface design, and technical architecture — all aligned with business outcomes.",
    deliverables: ["Wireframes", "UI mockups", "System architecture"],
  },
  {
    n: "04",
    title: "Development",
    desc: "Agile sprints, working software every two weeks, transparent demos, continuous feedback.",
    deliverables: ["Sprint demos", "Code reviews", "Working software"],
  },
  {
    n: "05",
    title: "Testing",
    desc: "Automated, manual, performance, and security testing — quality is built in, not bolted on.",
    deliverables: ["Test coverage reports", "QA sign-off", "Security audit"],
  },
  {
    n: "06",
    title: "Deployment",
    desc: "We ship to production with confidence — monitored, automated, and rolled back if needed.",
    deliverables: ["CI/CD pipeline", "Production launch", "Monitoring setup"],
  },
  {
    n: "07",
    title: "Support",
    desc: "Post-launch maintenance, optimization, and continuous improvement.",
    deliverables: ["24/7 monitoring", "SLA-backed support", "Continuous updates"],
  },
];

export default function Process() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-bg text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,white_2px,transparent_2px)] bg-[length:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-5 border border-white/20">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            How We Build Software
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Transparency, agility, and timely delivery — every project, every
            sprint.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-6 md:gap-8">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white flex items-center justify-center font-bold shadow-lg">
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-pink/40 to-transparent mt-3" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow hover:shadow-xl transition">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">
                      {s.desc}
                    </p>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Deliverables
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-3 py-1 text-xs rounded-full bg-brand-pink/10 text-brand-pink font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principles that guide every project
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Principle
              icon="🤝"
              title="Transparency"
              desc="Daily standups, sprint demos, real-time dashboards — you always know what's happening."
            />
            <Principle
              icon="⚡"
              title="Agility"
              desc="Two-week sprints, working software early, course-correct as we learn."
            />
            <Principle
              icon="⏰"
              title="Timely Delivery"
              desc="Realistic timelines we hit. No surprises, no excuses."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            We&apos;ll walk you through Phase 1 — Discovery — at no cost.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-white text-brand-purple font-bold hover:bg-slate-100 hover:scale-105 transition shadow-xl"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}

function Principle({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-7 rounded-2xl shadow text-center border border-slate-100 hover:shadow-lg transition">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl shadow-lg">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
