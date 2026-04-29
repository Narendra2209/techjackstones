import type { Config } from "tailwindcss";

// Single-color LIGHT theme: Axis-Bank-inspired Burgundy / Pink family.
// White background, one professional highlight color (deep pink / burgundy).
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // All shades of one Burgundy/Pink family (Axis Bank reference).
          purple: "#97144D",      // primary brand — Axis burgundy
          purpleDark: "#5A0A2E",  // deepest wine — footer / headings
          purpleLight: "#C2185B", // mid pink-burgundy — accents
          pink: "#AE275F",        // CTA / highlight (vibrant burgundy-pink)
          pinkLight: "#F8BBD0",   // light pink — soft surfaces
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
          "0%,100%": { boxShadow: "0 0 0 0 rgba(151,20,77,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(151,20,77,0)" },
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
