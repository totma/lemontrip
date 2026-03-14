import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">LemonTrip</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Private snow-road journeys across Hokkaido.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Designed for families, couples, and small groups who want a calm, reliable, and photogenic charter experience.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Explore</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/routes" className="block hover:text-slate-900">Route Collection</Link>
            <Link href="/vehicles" className="block hover:text-slate-900">Vehicle Lineup</Link>
            <Link href="/booking" className="block hover:text-slate-900">Booking Entry</Link>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>WeChat: {siteConfig.contact.wechat}</p>
            <p>LINE: {siteConfig.contact.line}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
