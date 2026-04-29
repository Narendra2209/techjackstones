import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tech Jackstones",
  description:
    "We are a next-generation IT solutions company focused on delivering innovative, scalable, and intelligent digital products.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Building Tomorrow&apos;s <span className="gradient-text">Digital Products</span> Today
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A next-generation IT solutions company focused on delivering
            innovative, scalable, and intelligent digital products.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-4">
              WHO WE ARE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              An end-to-end{" "}
              <span className="gradient-text">technology partner</span>
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We are a next-generation IT solutions company focused on
              delivering innovative, scalable, and intelligent digital products.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With years of expertise in software engineering, AI, and digital
              transformation, we partner with businesses to drive growth and
              efficiency — across startups and enterprises, in every industry.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop"
                alt="Tech Jackstones team collaborating in a modern office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purpleDark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <div className="text-3xl font-extrabold gradient-text">200+</div>
              <div className="text-xs text-slate-600 font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <div className="text-3xl font-extrabold gradient-text">98%</div>
              <div className="text-xs text-slate-600 font-medium">
                Client Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              MISSION &amp; VISION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">What drives us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow border border-slate-100 hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl mb-5 shadow-lg">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that drive innovation, efficiency, and long-term success.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow border border-slate-100 hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-2xl mb-5 shadow-lg">
                🌟
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a globally trusted technology partner delivering
                intelligent, scalable, and impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principles we live by
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Value num="01" title="Innovation" desc="We push boundaries with emerging technologies and creative thinking." />
            <Value num="02" title="Integrity" desc="We do business honestly — transparent process, transparent pricing, transparent results." />
            <Value num="03" title="Excellence" desc="We hold our work to the highest standards of craft and delivery." />
            <Value num="04" title="Collaboration" desc="We work as an extension of your team, not as detached vendors." />
            <Value num="05" title="Customer Success" desc="Your outcomes are our success metrics." />
            <Value num="06" title="Continuous Learning" desc="The tech world evolves fast — so do we, every quarter." />
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A structured, agile approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Five disciplined phases that ensure high-quality, scalable, and
              reliable solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { n: "1", t: "Discovery & Requirements" },
              { n: "2", t: "Design & Architecture" },
              { n: "3", t: "Development & Integration" },
              { n: "4", t: "Testing & QA" },
              { n: "5", t: "Deployment & Support" },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition relative"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold flex items-center justify-center shadow-lg">
                  {s.n}
                </div>
                <div className="font-semibold text-sm">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/process"
              className="inline-block px-6 py-3 rounded-full border-2 border-brand-purple text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition"
            >
              View Detailed Process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-light relative overflow-hidden border-t border-brand-pink/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/40 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Let&apos;s build something <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            From idea to launch — we&apos;re your end-to-end technology partner.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-full gradient-bg text-white font-bold hover:scale-105 transition shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

function Value({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative bg-slate-50 p-8 rounded-2xl border-l-4 border-brand-pink hover:shadow-lg hover:bg-white transition">
      <div className="absolute top-4 right-6 text-5xl font-extrabold text-slate-200">
        {num}
      </div>
      <h3 className="font-bold text-xl mb-3 relative">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed relative">{desc}</p>
    </div>
  );
}
