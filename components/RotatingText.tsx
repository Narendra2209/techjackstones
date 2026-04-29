"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

/**
 * Rotates through a list of words in place, with a slide-up + fade transition.
 * Reserves the maximum word width to prevent layout shift.
 */
export default function RotatingText({
  words,
  intervalMs = 2400,
  className = "",
}: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      className={`inline-grid align-baseline ${className}`}
      style={{ gridTemplateAreas: '"stack"' }}
      aria-live="polite"
    >
      {/* Invisible widest word reserves the row width */}
      <span
        aria-hidden
        className="invisible whitespace-nowrap"
        style={{ gridArea: "stack" }}
      >
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      {words.map((w, idx) => (
        <span
          key={w}
          style={{ gridArea: "stack" }}
          className={`whitespace-nowrap transition-all duration-500 ${
            idx === i
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
