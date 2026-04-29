"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 px-5 py-3 rounded-full text-slate-900 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/40 focus:border-brand-pink"
        />
        <button
          type="submit"
          className="btn-glow px-6 py-3 rounded-full gradient-bg text-white font-semibold transition"
        >
          Subscribe
        </button>
      </form>
      {done && (
        <p className="mt-4 text-sm text-brand-pink font-semibold">
          ✓ Subscribed! Check your inbox.
        </p>
      )}
    </>
  );
}
