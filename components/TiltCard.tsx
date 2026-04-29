"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees (default 8) */
  max?: number;
  /** Lift on hover in px (default 6) */
  lift?: number;
};

/**
 * 3D mouse-tracking tilt card.
 * Wraps children — applies a perspective transform that follows the cursor.
 * Pure CSS / RAF, no library deps.
 */
export default function TiltCard({
  children,
  className = "",
  max = 8,
  lift = 6,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max * 2;
    const ry = (x - 0.5) * max * 2;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-${lift}px) translateZ(0)`;
    });
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0) translateZ(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
