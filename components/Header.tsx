"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
  { href: "/services#software", label: "Custom Software" },
  { href: "/services#web", label: "Web Development" },
  { href: "/services#mobile", label: "Mobile Apps" },
  { href: "/services#ai", label: "AI / ML" },
  { href: "/services#cloud", label: "Cloud & DevOps" },
  { href: "/services#outsourcing", label: "IT Outsourcing" },
  { href: "/services#design", label: "UI / UX Design" },
  { href: "/services#qa", label: "Testing & QA" },
];

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: services },
  { href: "/solutions", label: "Solutions" },
  { href: "/hire-developers", label: "Hire Developers" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Tech Jackstones — Home"
        >
          <Image
            src="/logo.png"
            alt="Tech Jackstones"
            width={180}
            height={48}
            priority
            className="h-9 md:h-11 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l, index) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));

            if (l.dropdown) {
              return (
                <div key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    className={`text-sm font-medium transition flex items-center gap-1 ${active
                        ? "text-brand-pink"
                        : "text-slate-700 hover:text-brand-pink"
                      }`}
                  >
                    {l.label}
                    <svg
                      className="w-3 h-3 transition-transform group-hover:rotate-180"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 min-w-[220px]">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-gradient-to-r hover:from-brand-purple/5 hover:to-brand-pink/5 hover:text-brand-pink transition"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition relative ${active
                    ? "text-brand-pink"
                    : "text-slate-700 hover:text-brand-pink"
                  }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right-side CTA (desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex shrink-0 px-5 py-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg transition"
        >
          Get a Quote
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <div key={l.href}>
                {l.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServices(!mobileServices)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
                    >
                      <span>{l.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""
                          }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    {mobileServices && (
                      <div className="ml-3 pl-3 border-l-2 border-brand-pink/30 space-y-1">
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 text-sm text-brand-pink font-semibold"
                        >
                          All Services
                        </Link>
                        {l.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-pink"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-3 rounded-lg font-medium transition ${pathname === l.href
                        ? "bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 text-brand-pink"
                        : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {l.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}