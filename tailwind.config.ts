import type { Config } from "tailwindcss";

// Single-color LIGHT theme: Tech Blue family.
// Professional, interactive, with 3D / animation utilities.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // All shades of one Tech Blue family.
          purple: "#1E3A8A",      // primary brand — deep blue
          purpleDark: "#0B1729",  // navy near-black — footer
          purpleLight: "#3B82F6", // mid blue — accents
          pink: "#2563EB",        // CTA / highlight blue (vibrant)
          pinkLight: "#60A5FA",   // light blue — soft surfaces
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        "scroll-fade": "scrollFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "blob-1": "blob 14s ease-in-out infinite",
        "blob-2": "blob 18s ease-in-out infinite reverse",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollFade: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(37,99,235,0)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
      },
      perspective: {
        "500": "500px",
        "1000": "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
