"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  /** Optional suffix appended to the rendered number (e.g. "+", "%"). */
  suffix?: string;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
  /** Animation duration in ms. */
  durationMs?: number;
  className?: string;
};

/**
 * Counts up from 0 to `end` once the element scrolls into view.
 * Uses requestAnimationFrame with an ease-out curve for a natural feel.
 */
export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  durationMs = 1800,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              setN(Math.round(end * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
