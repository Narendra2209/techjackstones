"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to your backend / email service here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  }

  return (
    <>
      {/* HERO */}
      <section className="section-light py-20 md:py-28 relative overflow-hidden border-b border-brand-pink/10">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-5 border border-brand-pink/20">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Let&apos;s build something amazing together. Tell us about your
            project — we&apos;ll get back within one business day.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">Reach Us</h2>
              <p className="text-slate-600">
                We&apos;re here to help you build, scale, and innovate. Drop us a
                line and our team will respond quickly.
              </p>
            </div>

            <div className="space-y-5">
              <Info icon="📍" title="Location" desc="India / Global" />
              <Info icon="📧" title="Email" desc="info@techjackstones.com" />
              <Info icon="📞" title="Phone" desc="+91 XXXXX XXXXX" />
              <Info
                icon="🕘"
                title="Working Hours"
                desc="Mon – Sat, 9am – 7pm IST"
              />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 border border-brand-pink/20">
              <h3 className="font-semibold mb-2">📞 Free Discovery Call</h3>
              <p className="text-sm text-slate-600">
                Book a 30-minute call with our solutions team — we&apos;ll walk
                through your goals and propose a roadmap at no cost.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-pink hover:text-white flex items-center justify-center text-xs font-semibold transition shadow-sm"
                  >
                    {s.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xl space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold mb-1">Tell Us About Your Project</h2>
              <p className="text-slate-500 text-sm">
                Fill in the details below and we&apos;ll be in touch.
              </p>
            </div>

            {submitted && (
              <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm border border-green-200">
                ✓ Thanks! Your message has been received. We&apos;ll get back
                shortly.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
                placeholder="Your name"
              />
              <Field
                label="Company"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                placeholder="Company name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
                placeholder="you@example.com"
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+91 ..."
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700">
                  Service Interested In
                </label>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition"
                >
                  <option value="">Select a service</option>
                  <option>Custom Software Development</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>AI / Machine Learning</option>
                  <option>Cloud &amp; DevOps</option>
                  <option>Hire Developers</option>
                  <option>UI / UX Design</option>
                  <option>Testing &amp; QA</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700">
                  Estimated Budget
                </label>
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition"
                >
                  <option value="">Select range</option>
                  <option>&lt; $5,000</option>
                  <option>$5,000 – $25,000</option>
                  <option>$25,000 – $100,000</option>
                  <option>$100,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-700">
                Message *
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell us about your project, goals, timeline..."
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold hover:opacity-90 hover:shadow-lg transition shadow"
            >
              Send Message
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting, you agree to be contacted by Tech Jackstones.
              We&apos;ll never share your info.
            </p>
          </form>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Quick
            icon="💼"
            title="Hire Developers"
            desc="Scale your team with vetted talent."
            href="/hire-developers"
          />
          <Quick
            icon="🚀"
            title="Start a Project"
            desc="From idea to production-ready software."
            href="/services"
          />
          <Quick
            icon="📞"
            title="Free Consultation"
            desc="A 30-min call to align on goals."
            href="#"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked
            </h2>
            <p className="text-slate-600">
              Quick answers to questions we hear often.
            </p>
          </div>
          <div className="space-y-4">
            <FAQ
              q="How quickly can you start?"
              a="For most engagements, we can kick off discovery within 5–7 business days. Hire-developer engagements typically start within 1–2 weeks."
            />
            <FAQ
              q="Do you sign NDAs?"
              a="Yes, always. We sign mutual NDAs before any project-specific discussion."
            />
            <FAQ
              q="What's your engagement model?"
              a="We offer full-time dedicated teams, part-time experts, and fixed-scope project engagements — whichever fits your stage best."
            />
            <FAQ
              q="Do you offer post-launch support?"
              a="Yes. SLA-backed maintenance, monitoring, and continuous improvement plans are available with every engagement."
            />
            <FAQ
              q="Where are your developers based?"
              a="Primarily India, with global delivery capabilities and timezone overlap support for US/EU clients."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-lg shadow shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-slate-600 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-slate-700">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition"
      />
    </div>
  );
}

function Quick({
  icon,
  title,
  desc,
  href,
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition border border-slate-100"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </a>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow transition">
      <summary className="cursor-pointer p-5 flex items-center justify-between font-semibold list-none">
        <span>{q}</span>
        <span className="text-brand-pink text-xl transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-slate-600 text-sm">{a}</div>
    </details>
  );
}
