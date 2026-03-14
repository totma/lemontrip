'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeLabels, siteConfig, type Locale } from '@/data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/routes', label: 'Routes' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/booking', label: 'Booking' },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f7fbff]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/15">
            LT
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-slate-900">LEMONTRIP</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Hokkaido Charter</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.22em] transition ${
                  active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-500">
            {siteConfig.locales.map((locale) => (
              <span key={locale} className={locale === siteConfig.defaultLocale ? 'font-semibold text-slate-900' : ''}>
                {localeLabels[locale as Locale]}
              </span>
            ))}
          </div>
          <Link href="/booking" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
            Reserve Now
          </Link>
        </div>
      </div>
    </header>
  );
}
