import Link from "next/link";
import { Icon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            {siteConfig.name}
          </p>
          <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-white">
            Websites, software, IT support and tutoring in one place.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            A UK-focused digital services and learning brand supporting businesses, students and
            organisations with practical technology solutions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li>
              <a href="https://facebook.com" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li className="text-slate-500">{siteConfig.domain}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 text-brand-300" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 text-brand-300" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="globe" className="h-4 w-4 text-brand-300" />
              <span>{siteConfig.domain}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
