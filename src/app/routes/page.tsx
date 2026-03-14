import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { routes } from '@/data/routes';

export default function RoutesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Route Library"
        title="所有路线"
        description="5 条包车路线全部数据化管理，支持后续继续扩展更多季节版路线或专题页面。"
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {routes.map((route) => (
          <article key={route.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
            <div className="grid md:grid-cols-[0.95fr_1.05fr]">
              <div className="min-h-72 bg-cover bg-center" style={{ backgroundImage: `url(${route.image})` }} />
              <div className="p-7">
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                  <span>{route.duration}</span>
                  <span>•</span>
                  <span>{route.season}</span>
                  <span>•</span>
                  <span>{route.priceFrom}</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">{route.title.zh}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{route.summary.zh}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {route.highlights.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item}</span>
                  ))}
                </div>
                <Link href={`/routes/${route.slug}`} className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                  查看详情
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
