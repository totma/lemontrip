import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { routes } from '@/data/routes';
import { siteConfig } from '@/data/site';
import { vehicles } from '@/data/vehicles';

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(237,247,255,0.82),rgba(230,240,248,0.94))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-700">Private Charter in Hokkaido</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              北海道包车路线展示网站
              <span className="block text-slate-500">日式简约 · 冬季雪景 · 多语言接待</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              LemonTrip 聚焦高质感北海道包车出行。支持中文 / 日本語 / English 浏览，适合亲子、情侣、小团体和摄影客户快速了解路线与车辆安排。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/routes" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                浏览全部路线
              </Link>
              <Link href="/booking" className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900">
                进入预约页面
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">{siteConfig.socialProof.routes}</p>
                <p className="mt-1 text-sm text-slate-600">精选路线</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">{siteConfig.socialProof.languages}</p>
                <p className="mt-1 text-sm text-slate-600">多语言支持</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">{siteConfig.socialProof.years}+</p>
                <p className="mt-1 text-sm text-slate-600">本地接待经验</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur lg:mt-0">
            <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Multilingual Preview</p>
            <div className="mt-6 space-y-6">
              {routes.slice(0, 3).map((route) => (
                <div key={route.slug} className="rounded-3xl border border-slate-100 bg-white p-5">
                  <p className="text-sm text-slate-500">{route.title.zh}</p>
                  <p className="mt-1 text-sm text-slate-400">{route.title.ja}</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{route.title.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Routes"
          title="5 条北海道包车路线，一眼看懂节奏与气质"
          description="首页聚焦代表路线卡片，方便客户快速做第一轮筛选。每条路线均支持跳转到详情页查看亮点、行程与适合人群。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => (
            <Link key={route.slug} href={`/routes/${route.slug}`} className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${route.image})` }} />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                  <span>{route.duration}</span>
                  <span>{route.priceFrom}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{route.title.zh}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{route.summary.zh}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {route.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">#{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vehicles"
            title="两种主力车型，覆盖小团体与多人出行"
            description="使用占位图展示车辆风格与容量。后续替换真实照片时，只需更新数据文件即可。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-lg shadow-slate-900/5">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${vehicle.image})` }} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-900">{vehicle.name}</h3>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-700">{vehicle.seats}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{vehicle.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-slate-900 px-8 py-10 text-white lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-14">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-sky-200">Booking Entry</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">把咨询入口做得足够清晰，用户更容易下单。</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              LemonTrip 将咨询渠道集中在一个预约入口页，明确出发日期、人数、行李数、目标路线与联系方式，方便后续人工接待或接入表单系统。
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
            <div className="space-y-3 text-sm text-slate-200">
              <p>• 首屏快速 CTA</p>
              <p>• 路线详情页内嵌预约按钮</p>
              <p>• 车辆页承接多人团队咨询</p>
              <p>• 联系方式：电话 / WeChat / LINE / Email</p>
            </div>
            <Link href="/booking" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
              打开预约入口
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
