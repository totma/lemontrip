import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '机场接送服务 - 新千岁/旭川机场专业接送',
  description: '提供新千岁机场、旭川机场专业接送服务,24小时服务,准时可靠,透明报价',
};

export default function AirportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✈️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">机场接送服务</h1>
            <p className="text-xl text-gray-200">新千岁/旭川机场专业接送,准时可靠,安心出行</p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '24小时服务', desc: '全天候接送服务', icon: '⏰' },
              { title: '航班监控', desc: '实时跟踪航班动态', icon: '📡' },
              { title: '免费等待', desc: '航班延误免费等待', icon: '⏳' },
              { title: '举牌接机', desc: '专业举牌服务', icon: '🪧' },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务机场</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">新千岁机场 (CTS)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>接机流程:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>司机在到达大厅举牌等候</li>
                  <li>协助搬运行李</li>
                  <li>前往停车场上车</li>
                  <li>直达目的地酒店</li>
                </ol>
                <p className="mt-4"><strong>主要目的地:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>札幌市区: ¥8,000起</li>
                  <li>小樽: ¥12,000起</li>
                  <li>二世古: ¥25,000起</li>
                  <li>富良野: ¥35,000起</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">旭川机场 (AKJ)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>接机流程:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>司机在到达大厅举牌等候</li>
                  <li>协助搬运行李</li>
                  <li>前往停车场上车</li>
                  <li>直达目的地酒店</li>
                </ol>
                <p className="mt-4"><strong>主要目的地:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>旭川市区: ¥6,000起</li>
                  <li>富良野: ¥15,000起</li>
                  <li>美瑛: ¥12,000起</li>
                  <li>层云峡: ¥18,000起</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">参考价格</h2>
          <p className="section-subtitle text-center">以下为单程价格,往返可享9折优惠</p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">路线</th>
                  <th className="px-6 py-4 text-center">豪华轿车<br/>(1-4人)</th>
                  <th className="px-6 py-4 text-center">商务MPV<br/>(5-7人)</th>
                  <th className="px-6 py-4 text-center">豪华面包车<br/>(8-9人)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { route: '新千岁机场 → 札幌市区', sedan: '¥8,000', mpv: '¥12,000', van: '¥18,000' },
                  { route: '新千岁机场 → 小樽', sedan: '¥12,000', mpv: '¥18,000', van: '¥25,000' },
                  { route: '新千岁机场 → 二世古', sedan: '¥25,000', mpv: '¥35,000', van: '¥45,000' },
                  { route: '旭川机场 → 旭川市区', sedan: '¥6,000', mpv: '¥9,000', van: '¥15,000' },
                  { route: '旭川机场 → 富良野', sedan: '¥15,000', mpv: '¥22,000', van: '¥30,000' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary">{row.route}</td>
                    <td className="px-6 py-4 text-center">{row.sedan}</td>
                    <td className="px-6 py-4 text-center">{row.mpv}</td>
                    <td className="px-6 py-4 text-center">{row.van}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-primary mb-3">价格说明:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 以上价格为单程参考价,实际价格以最终报价为准</li>
              <li>• 往返预订可享9折优惠</li>
              <li>• 深夜时段(22:00-06:00)加收20%服务费</li>
              <li>• 免费等待时间:国际航班90分钟,国内航班60分钟</li>
              <li>• 超时等待费:¥2,000/小时</li>
              <li>• 免费提供儿童座椅(需提前预约)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: '如何预约机场接送?', a: '可通过网站、电话、微信、LINE等方式提前预约,建议至少提前24小时预订。' },
              { q: '航班延误怎么办?', a: '我们会实时监控航班动态,航班延误免费等待,无需额外费用。' },
              { q: '可以临时改变目的地吗?', a: '可以,但需要提前告知司机并重新计算费用。' },
              { q: '行李超重怎么办?', a: '如有大量行李,建议预订时说明,我们会安排合适车型。' },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">预约机场接送服务</h2>
          <p className="text-xl mb-8 text-gray-200">专业司机,准时可靠,让您的旅程从机场开始就安心舒适</p>
          <Link href="/contact" className="btn-accent">
            立即预约
          </Link>
        </div>
      </section>
    </div>
  );
}
