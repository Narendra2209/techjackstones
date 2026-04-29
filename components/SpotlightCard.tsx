"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A card with a soft radial spotlight that follows the cursor.
 * Sets two CSS variables (--mx, --my) on the root so a child layer
 * can render the gradient. Respects prefers-reduced-motion via CSS.
 */
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative group/spotlight overflow-hidden h-full ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx) var(--my), rgba(37,99,235,0.12), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
