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
          className="flex-1 px-5 py-3 rounded-full text-slate-900 border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-white text-brand-purple font-semibold hover:bg-slate-100 transition"
        >
          Subscribe
        </button>
      </form>
      {done && (
        <p className="mt-4 text-sm text-white/90">
          ✓ Subscribed! Check your inbox.
        </p>
      )}
    </>
  );
}
