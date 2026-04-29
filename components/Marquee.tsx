type Props = {
  items: string[];
  /** Seconds per full loop. Lower = faster. Default 30. */
  speed?: number;
  className?: string;
};

/**
 * Seamless auto-scrolling marquee. Renders items twice in a row,
 * sliding the track from 0% → -50% so the second copy is invisible
 * at the moment the loop restarts.
 */
export default function Marquee({ items, speed = 30, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      // Mask the edges with a gradient fade so items don't pop in/out abruptly
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-brand-pink hover:text-brand-pink hover:-translate-y-0.5 transition whitespace-nowrap"
          >
            {it}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
