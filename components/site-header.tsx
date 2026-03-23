"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-accent-500 text-base font-bold text-white shadow-panel">
            NB
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-brand-800">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-slate-500">{siteConfig.supportTagline}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-2 shadow-panel lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-brand-700 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="button-primary hidden lg:inline-flex">
          Book a Free Consultation
        </Link>
      </div>

      <div className="section-shell pb-4 lg:hidden">
        <nav
          aria-label="Mobile"
          className="grid grid-cols-5 gap-2 rounded-3xl border border-slate-200 bg-white p-2 shadow-panel"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-2 py-3 text-center text-xs font-medium ${
                  isActive ? "bg-brand-700 text-white" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
