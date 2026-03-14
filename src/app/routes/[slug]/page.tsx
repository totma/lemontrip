import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routeMap, routes } from '@/data/routes';

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routeMap[slug];

  if (!route) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[340px] lg:min-h-[560px]">
            <Image src={route.image} alt={route.title.zh} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" priority />
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.36em] text-sky-700">Route Detail</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{route.title.zh}</h1>
            <p className="mt-3 text-sm text-slate-400">{route.title.ja}</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{route.title.en}</p>
            <p className="mt-6 text-base leading-8 text-slate-600">{route.summary.zh}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Duration</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{route.duration}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Price From</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{route.priceFrom}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Season</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{route.season}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {route.highlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/booking" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                预约这条路线
              </Link>
              <Link href="/routes" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900">
                返回路线列表
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
          <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Itinerary</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">行程节奏</h2>
          <div className="mt-8 space-y-6">
            {route.itinerary.map((item) => (
              <div key={`${item.time}-${item.title}`} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                  <div className="relative min-h-[180px] md:min-h-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 220px" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.22em] text-sky-700">{item.time}</p>
                      <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-[2rem] bg-sky-50 p-8">
          <p className="text-xs uppercase tracking-[0.34em] text-sky-700">Why this route</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">路线亮点</h2>
          <div className="mt-6 space-y-3">
            {route.tags.map((tag) => (
              <div key={tag} className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-600 shadow-sm">
                #{tag}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-slate-900 p-5 text-sm leading-7 text-slate-200">
            详情页数据全部来自 `src/data/routes.ts`。如果后续替换图片、更新价格或增加行程节点，只需改这一处数据源。
          </div>
        </aside>
      </section>
    </div>
  );
}
