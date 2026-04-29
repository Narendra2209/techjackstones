import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Jackstones",
  description:
    "End-to-end technology services: custom software, web & mobile development, AI/ML, cloud & DevOps, IT outsourcing, UI/UX design, and QA testing.",
};

const services = [
  {
    id: "software",
    icon: "💻",
    title: "Custom Software Development",
    desc: "We design and develop tailored software solutions aligned with your business goals.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Enterprise Applications",
      "SaaS Platforms",
      "CRM / ERP Systems",
      "Product Development",
    ],
  },
  {
    id: "web",
    icon: "🌐",
    title: "Web Application Development",
    desc: "We build robust, secure, and scalable web applications using modern technologies.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Business Websites",
      "E-commerce Platforms",
      "Web Portals",
      "Progressive Web Apps",
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    desc: "Delivering high-performance mobile apps across platforms.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Native (Android & iOS)",
      "Cross-platform Apps",
      "UI/UX Design",
      "App Modernization",
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "Artificial Intelligence & Machine Learning",
    desc: "We leverage AI to automate and optimize business processes.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Generative AI Solutions",
      "Predictive Analytics",
      "AI Chatbots",
      "Intelligent Automation",
    ],
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud & DevOps Services",
    desc: "Cloud-native architecture, migration, and scalable infrastructure.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Cloud Migration",
      "Infrastructure Setup",
      "CI/CD Pipelines",
      "DevOps Automation",
    ],
  },
  {
    id: "outsourcing",
    icon: "👥",
    title: "IT Outsourcing & Dedicated Teams",
    desc: "Flexible models to scale your team efficiently.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Offshore Development Teams",
      "Staff Augmentation",
      "Managed IT Services",
      "Project-based Engagements",
    ],
  },
  {
    id: "design",
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Beautiful, usable, conversion-driven product experiences.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "User Research",
      "Wireframing & Prototyping",
      "Product Design",
      "Experience Optimization",
    ],
  },
  {
    id: "qa",
    icon: "🛡️",
    title: "Testing & QA",
    desc: "Comprehensive testing ensuring performance, security, and reliability.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=70&auto=format&fit=crop",
    points: [
      "Automation Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            End-to-End <span className="gradient-text">Technology Services</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From discovery to deployment, we deliver every layer of the modern
            technology stack with engineering excellence and business outcomes
            in mind.
          </p>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="border-b border-slate-200 bg-white sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:bg-brand-pink/10 hover:text-brand-pink whitespace-nowrap transition"
              >
                {s.icon} {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
            >
              <div>
                <span className="inline-block text-xs font-bold text-brand-pink mb-2">
                  {String(i + 1).padStart(2, "0")} / {services.length}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl shadow-lg">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-brand-pink font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-pink font-semibold hover:gap-3 transition-all"
                >
                  Discuss your project →
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl gradient-bg p-1 shadow-2xl">
                  <div className="relative bg-white rounded-3xl h-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Soft gradient wash for depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-transparent pointer-events-none" />
                    {/* Floating icon badge */}
                    <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center text-3xl shadow-lg">
                      {s.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-light relative overflow-hidden border-t border-brand-pink/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/40 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Don&apos;t see <span className="gradient-text">what you need?</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We tailor engagements to your specific business outcomes. Tell us
            your goal — we&apos;ll architect the path.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-full gradient-bg text-white font-bold hover:scale-105 transition shadow-xl"
          >
            Talk to a Consultant
          </Link>
        </div>
      </section>
    </>
  );
}
