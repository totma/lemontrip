import SectionHeading from '@/components/SectionHeading';
import { vehicles } from '@/data/vehicles';

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Vehicle Showcase"
        title="车辆展示"
        description="当前使用占位图呈现车型氛围。后续只需要替换 data 文件中的图片链接，即可同步更新全站。"
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {vehicles.map((vehicle) => (
          <section key={vehicle.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${vehicle.image})` }} />
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">{vehicle.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{vehicle.summary}</p>
                </div>
                <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
                  <p>Seats: {vehicle.seats}</p>
                  <p className="mt-1">Luggage: {vehicle.luggage}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {vehicle.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
