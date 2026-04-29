import Link from "next/link";
import Image from "next/image";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";
import ScrollFade from "@/components/ScrollFade";

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden mesh-gradient-animated text-white">
        {/* Layered decorative effects */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-brand-pink/30 blur-3xl animate-blob-1" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-purpleLight/30 blur-3xl animate-blob-2" />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-brand-pinkLight/20 blur-3xl animate-blob-1" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left — headline + CTAs */}
          <div className="lg:col-span-7 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pinkLight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pinkLight"></span>
              </span>
              AI-Driven Software &amp; IT Services
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Transforming Ideas into{" "}
              <span className="block mt-0 relative">
                <RotatingText
                  className="text-white text-4xl md:text-6xl font-extrabold"
                  words={[
                    "Scalable Solutions",
                    "Intelligent Apps",
                    "AI Products",
                    "Cloud Platforms",
                    "Digital Wins",
                  ]}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-3 leading-relaxed max-w-xl">
              We&apos;re a global technology partner delivering end-to-end
              software, AI, and cloud services that empower businesses to
              innovate, scale, and succeed.
            </p>
            <p className="text-sm font-semibold text-brand-pinkLight tracking-wider uppercase mb-8">
              Build Faster · Scale Smarter · Innovate Continuously
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-glow px-7 py-3.5 rounded-full bg-white text-brand-purple font-semibold inline-flex items-center gap-2"
              >
                Start Your Project
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/70 transition"
              >
                Explore Services
              </Link>
            </div>

            {/* Inline stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg pt-6 border-t border-white/15">
              <HeroStat n={200} suf="+" l="Projects" />
              <HeroStat n={50} suf="+" l="Clients" />
              <HeroStat n={98} suf="%" l="Retention" />
            </div>
          </div>

          {/* Right — floating image with glass overlay & rotating accent ring */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative">
              {/* Conic ring backdrop */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] conic-ring opacity-30 blur-2xl animate-spin-slow"
                aria-hidden
              />

              <TiltCard
                max={10}
                lift={8}
                className="relative animate-float"
              >
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                    alt="Engineering team collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purpleDark/50 via-transparent to-transparent" />

                  {/* Floating glass tag — top right */}
                  <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Now Hiring
                  </div>
                </div>
              </TiltCard>

              {/* Floating glass card — bottom left */}
              <div className="absolute -bottom-6 -left-4 md:-left-12 glass-dark p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-float-slow">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white text-xl glow-ring">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    24/7 Support
                  </div>
                  <div className="text-xs text-white/70">SLA-backed</div>
                </div>
              </div>

              {/* Floating glass card — top left */}
              <div className="absolute -top-4 -left-4 md:-left-10 glass-dark p-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-pinkLight flex items-center justify-center text-white text-lg">
                  🤖
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI-Driven</div>
                  <div className="text-[11px] text-white/70">Always.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 text-xs">
          <span className="font-semibold tracking-widest uppercase">
            Scroll
          </span>
          <span className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <section className="py-10 bg-white border-y border-slate-100">
        <ScrollFade className="text-center mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Engineered with the modern stack
          </p>
        </ScrollFade>
        <Marquee
          items={[
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Azure",
            "GCP",
            "Docker",
            "Kubernetes",
            "TensorFlow",
            "PyTorch",
            "OpenAI",
            "LangChain",
            "Flutter",
            "Swift",
            "Kotlin",
            "GraphQL",
            "Redis",
            "Kafka",
            "Terraform",
          ]}
          speed={40}
        />
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollFade>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider mb-4">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A technology-driven partner focused on{" "}
              <span className="gradient-text">long-term outcomes</span>
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-lg">
              We specialize in custom software, AI solutions, cloud
              engineering, and IT services — built around innovation, quality,
              and partnership.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From startups to enterprises, we turn complex challenges into
              scalable digital solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-pink font-semibold group"
            >
              Learn more about us
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </ScrollFade>

          <div className="grid grid-cols-2 gap-5">
            <BigStat n={10} suf="+" l="Years of Experience" />
            <BigStat n={200} suf="+" l="Projects Delivered" />
            <BigStat n={50} suf="+" l="Global Clients" />
            <BigStat n={98} suf="%" l="Retention Rate" />
          </div>
        </div>
      </section>

      {/* ===================== SERVICES — BENTO GRID ===================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle tech-themed background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=70&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
          />
        </div>
        {/* Soft white wash so cards remain readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/70 to-slate-50 pointer-events-none" />
        {/* Grid pattern on top of everything */}
        <div className="absolute inset-0 grid-pattern-light opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFade className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider mb-3">
              OUR CORE SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              End-to-End Technology Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From idea to launch — we deliver every layer of the modern stack.
            </p>
          </ScrollFade>

          {/* Bento grid: asymmetric layout */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 auto-rows-[minmax(220px,auto)]">
            {/* Big featured card — spans 2 cols 2 rows */}
            <BentoFeature
              className="md:col-span-2 lg:col-span-3 lg:row-span-2"
              icon="🤖"
              title="AI & Machine Learning"
              desc="Generative AI, predictive analytics, intelligent automation, and LLM-powered apps that ship to production."
              href="/services#ai"
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=70&auto=format&fit=crop"
              accent
            />
            <Bento
              className="md:col-span-1 lg:col-span-3"
              icon="💻"
              title="Custom Software"
              desc="Enterprise apps, SaaS, CRM/ERP."
              href="/services#software"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=70&auto=format&fit=crop"
            />
            <Bento
              icon="📱"
              title="Mobile Apps"
              desc="Native & cross-platform."
              href="/services#mobile"
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=70&auto=format&fit=crop"
              className="lg:col-span-2"
            />
            <Bento
              icon="🌐"
              title="Web Apps"
              desc="Modern, fast, secure."
              href="/services#web"
              image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=70&auto=format&fit=crop"
            />
            <Bento
              icon="☁️"
              title="Cloud & DevOps"
              desc="Migration, CI/CD, infra."
              href="/services#cloud"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=70&auto=format&fit=crop"
              className="lg:col-span-2"
            />
            <Bento
              icon="🛡️"
              title="QA & Testing"
              desc="Automation. Security."
              href="/services#qa"
              image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=70&auto=format&fit=crop"
              className="lg:col-span-2"
            />
            <Bento
              icon="🎨"
              title="UI / UX Design"
              desc="Beautiful, usable, fast."
              href="/services#design"
              image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:col-span-2"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-7 py-3 rounded-full border-2 border-brand-purple text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFade>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Technical expertise.{" "}
                <span className="gradient-text">Measurable results.</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We combine deep technical depth with business understanding —
                so you don&apos;t just get code, you get outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "End-to-End Technology Partner",
                  "AI-Driven Innovation",
                  "Scalable & Secure Solutions",
                  "Agile & Transparent Process",
                  "Dedicated Development Teams",
                  "Global Delivery Model",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center text-brand-pink font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-slate-700">{p}</span>
                  </div>
                ))}
              </div>
            </ScrollFade>

            <ScrollFade
              delay={150}
              className="relative"
            >
              <div
                className="absolute -inset-3 rounded-[2rem] conic-ring opacity-15 blur-2xl animate-spin-slow"
                aria-hidden
              />
              <div className="relative aspect-square rounded-3xl bg-white shadow-3d p-10 flex flex-col justify-center space-y-6 border border-slate-100">
                <Metric label="Project Success Rate" value="98%" bar={98} />
                <Metric label="On-Time Delivery" value="95%" bar={95} />
                <Metric label="Client Retention" value="92%" bar={92} />
                <Metric label="Code Quality Score" value="A+" bar={97} />
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFade className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider mb-3">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Solutions across every sector
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Domain experience that translates into faster, more relevant
              digital products.
            </p>
          </ScrollFade>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <Industry icon="🏥" name="Healthcare" />
            <Industry icon="🏗️" name="Construction" />
            <Industry icon="💰" name="Finance" />
            <Industry icon="🛒" name="Retail" />
            <Industry icon="🏭" name="Manufacturing" />
            <Industry icon="🎓" name="Education" />
            <Industry icon="🏠" name="Real Estate" />
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFade className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider mb-3">
              CLIENT VOICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by founders &amp; engineering leaders
            </h2>
          </ScrollFade>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              text="A reliable technology partner delivering scalable solutions and excellent support."
              name="Rohit S."
              role="CTO, Healthcare SaaS"
            />
            <Testimonial
              text="Their AI-driven approach helped us automate processes and improve efficiency."
              name="Anjali V."
              role="VP Engineering, FinTech"
            />
            <Testimonial
              text="From discovery to deployment, the team felt like an extension of ours."
              name="Marcus L."
              role="Founder, E-commerce"
            />
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-24 mesh-gradient-animated text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-blob-1" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-blob-2" />
        <ScrollFade className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Ready to build your next big solution?
          </h2>
          <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Let&apos;s transform your vision into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow px-8 py-4 rounded-full bg-white text-brand-purple font-bold inline-flex items-center gap-2"
            >
              Start a Project
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/hire-developers"
              className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/10 hover:border-white/70 transition"
            >
              Hire Developers
            </Link>
          </div>
        </ScrollFade>
      </section>
    </>
  );
}

/* ============================================================
   HELPER COMPONENTS
   ============================================================ */

function HeroStat({ n, suf, l }: { n: number; suf?: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-extrabold">
        <CountUp end={n} suffix={suf} />
      </div>
      <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mt-1">
        {l}
      </div>
    </div>
  );
}

function BigStat({ n, suf, l }: { n: number; suf?: string; l: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-3d tilt-on-hover tile-spotlight">
      <div className="text-3xl md:text-4xl font-extrabold num-gradient">
        <CountUp end={n} suffix={suf} />
      </div>
      <div className="text-sm text-slate-600 mt-1">{l}</div>
    </div>
  );
}

function BentoFeature({
  icon,
  title,
  desc,
  href,
  image,
  className = "",
  accent = false,
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <SpotlightCard
      className={`bento-card rounded-3xl border border-slate-100 ${accent ? "text-white" : "bg-white"
        } ${className}`}
    >
      <Link
        href={href}
        className="relative block h-full p-8 md:p-10 rounded-3xl overflow-hidden flex flex-col justify-between"
      >
        {/* Background image */}
        {image && (
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src={image}
              alt=""
              fill
              className={`object-cover ${accent ? "opacity-80" : "opacity-100"}`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        {/* Brand-color overlay for the featured (accent) card */}
        {accent && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/60 via-brand-pink/40 to-brand-purpleLight/40 pointer-events-none" />
        )}
        {/* Lighter wash for non-accent cards (keeps text readable on the upper-left) */}
        {!accent && image && (
          <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/30 to-white/0 pointer-events-none" />
        )}

        <div className="relative">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6 ${accent
              ? "bg-white/15 backdrop-blur"
              : "bg-gradient-to-r from-brand-purple to-brand-pink text-white glow-ring"
              }`}
          >
            {icon}
          </div>
          <h3
            className={`text-2xl md:text-3xl font-bold mb-3 ${accent ? "text-white" : ""
              }`}
          >
            {title}
          </h3>
          <p
            className={`leading-relaxed ${accent ? "text-white/90" : "text-slate-600"
              }`}
          >
            {desc}
          </p>
        </div>
        <div
          className={`relative mt-6 inline-flex items-center gap-2 font-semibold text-sm ${accent ? "text-white" : "text-brand-pink"
            }`}
        >
          Learn more →
        </div>
      </Link>
    </SpotlightCard>
  );
}

function Bento({
  icon,
  title,
  desc,
  href,
  image,
  className = "",
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
  className?: string;
}) {
  return (
    <SpotlightCard
      className={`bento-card rounded-3xl bg-white border border-slate-100 ${className}`}
    >
      <Link
        href={href}
        className="relative block h-full p-6 rounded-3xl overflow-hidden flex flex-col"
      >
        {image && (
          <>
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover opacity-95"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {/* Lighter wash — readable on upper-left, image vivid on lower-right */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/20 to-white/0 pointer-events-none" />
          </>
        )}
        <div className="relative flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-xl shadow-md mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-bold mb-1.5">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed flex-1">
            {desc}
          </p>
        </div>
      </Link>
    </SpotlightCard>
  );
}

function Metric({
  label,
  value,
  bar,
}: {
  label: string;
  value: string;
  bar: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-bold gradient-text">{value}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full"
          style={{ width: `${bar}%` }}
        />
      </div>
    </div>
  );
}

function Industry({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl text-center shadow-3d tilt-on-hover border border-slate-100 group">
      <div className="text-3xl mb-2 transition-transform group-hover:scale-125 group-hover:-rotate-6">
        {icon}
      </div>
      <div className="text-xs md:text-sm font-semibold text-slate-700">
        {name}
      </div>
    </div>
  );
}

function Testimonial({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <SpotlightCard className="bento-card rounded-2xl p-7 bg-white border border-slate-100 h-full">
      <div className="text-brand-pink text-4xl leading-none mb-3">&ldquo;</div>
      <p className="text-slate-700 leading-relaxed mb-5">{text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold text-sm">
          {name
            .split(" ")
            .map((p) => p[0])
            .join("")}
        </div>
        <div>
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
    </SpotlightCard>
  );
}
