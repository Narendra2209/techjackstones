import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white text-slate-700 mt-auto overflow-hidden border-t border-brand-pink/15">
      {/* Subtle pink glow blobs for depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-pink/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-brand-pinkLight/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 md:grid-cols-2 gap-10">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="TechJackstones home" className="inline-block mb-4">
            <Image
              src="/icon-bg.png"
              alt="TechJackstones"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-sm">
            AI-Driven Software &amp; IT Services Company. End-to-End Technology
            Partner for businesses building scalable, intelligent digital
            products.
          </p>
          <div className="flex gap-3">
            <Social label="LinkedIn" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </Social>
            <Social label="Twitter" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Social>
            <Social label="Instagram" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </Social>
            <Social label="YouTube" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23.5 6.2a3 3 0 00-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 002.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 002.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
              </svg>
            </Social>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-brand-purpleDark">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <FLink href="/about">About Us</FLink>
            <FLink href="/process">Our Process</FLink>
            <FLink href="/portfolio">Portfolio</FLink>
            <FLink href="/testimonials">Testimonials</FLink>
            <FLink href="/blog">Blog</FLink>
            <FLink href="/contact">Contact</FLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-brand-purpleDark">Services</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <FLink href="/services#software">Custom Software</FLink>
            <FLink href="/services#web">Web Development</FLink>
            <FLink href="/services#mobile">Mobile Apps</FLink>
            <FLink href="/services#ai">AI &amp; Machine Learning</FLink>
            <FLink href="/services#cloud">Cloud &amp; DevOps</FLink>
            <FLink href="/services#qa">Testing &amp; QA</FLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-brand-purpleDark">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <ContactLine icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            }>India / Global</ContactLine>
            <ContactLine icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
              </svg>
            }>info@techjackstones.com</ContactLine>
            <ContactLine icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
              </svg>
            }>+91 XXXXX XXXXX</ContactLine>
            <ContactLine icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
            }>Mon – Sat, 9am – 7pm IST</ContactLine>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-purpleLight text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      <div className="relative border-t border-slate-200 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} Tech Jackstones. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-brand-pink">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-pink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="hover:text-brand-pink transition">
        {children}
      </Link>
    </li>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white hover:scale-110 flex items-center justify-center transition-all duration-300"
    >
      {children}
    </a>
  );
}

function ContactLine({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}

