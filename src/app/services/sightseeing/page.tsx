import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '北海道观光包车 - 定制您的专属行程',
  description: '提供北海道一日游、多日游观光包车服务,灵活定制行程,中文司机导游',
};

export default function SightseeingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🗻</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">北海道观光包车</h1>
          <p className="text-xl text-gray-200">定制专属行程,深度体验北海道之美</p>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '一日游包车', duration: '8-10小时', price: '¥25,000起', desc: '适合短期游客,精选经典景点' },
              { title: '多日游包车', duration: '2-7天', price: '¥55,000起', desc: '深度游览,灵活安排行程' },
              { title: '半日游包车', duration: '4-6小时', price: '¥15,000起', desc: '时间紧凑,快速游览' },
            ].map((type, idx) => (
              <div key={idx} className="card text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-2">{type.duration}</p>
                <p className="text-3xl font-bold text-accent mb-4">{type.price}</p>
                <p className="text-gray-700">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Routes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">季节推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                season: '春季 (4-5月)',
                icon: '🌸',
                routes: ['札幌-小樽赏樱', '函馆五稜郭公园', '松前公园樱花'],
                highlights: '樱花盛开,气候宜人',
              },
              {
                season: '夏季 (6-8月)',
                icon: '🌻',
                routes: ['富良野薰衣草', '美瑛拼布之路', '知床半岛'],
                highlights: '花田绚烂,避暑胜地',
              },
              {
                season: '秋季 (9-11月)',
                icon: '🍁',
                routes: ['定山溪红叶', '大雪山国立公园', '层云峡'],
                highlights: '红叶满山,秋高气爽',
              },
              {
                season: '冬季 (12-3月)',
                icon: '⛷️',
                routes: ['二世古滑雪', '札幌雪祭', '流冰观光'],
                highlights: '白雪皑皑,冰雪世界',
              },
            ].map((season, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">{season.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">{season.season}</h3>
                </div>
                <p className="text-accent font-semibold mb-3">{season.highlights}</p>
                <h4 className="font-semibold text-primary mb-2">推荐线路:</h4>
                <ul className="space-y-1">
                  {season.routes.map((route, ridx) => (
                    <li key={ridx} className="text-gray-700 flex items-center">
                      <span className="text-accent mr-2">•</span>
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">热门线路</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '札幌-小樽一日游', time: '8小时', price: '¥25,000', spots: ['小樽运河', '音乐盒堂', '北一硝子'] },
              { name: '富良野-美瑛花田', time: '10小时', price: '¥30,000', spots: ['富田农场', '四季彩之丘', '青池'] },
              { name: '登别-洞爷湖温泉', time: '2天', price: '¥55,000', spots: ['登别地狱谷', '洞爷湖', '昭和新山'] },
              { name: '函馆夜景观光', time: '6小时', price: '¥20,000', spots: ['函馆山', '金森仓库', '五稜郭'] },
              { name: '旭山动物园', time: '8小时', price: '¥28,000', spots: ['旭山动物园', '旭川拉面村', '雪之美术馆'] },
              { name: '道东三湖巡游', time: '3天', price: '¥85,000', spots: ['阿寒湖', '摩周湖', '屈斜路湖'] },
            ].map((route, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold text-primary mb-2">{route.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>⏱️ {route.time}</span>
                  <span className="text-accent font-bold text-lg">{route.price}</span>
                </div>
                <h4 className="font-semibold text-sm text-primary mb-2">主要景点:</h4>
                <ul className="space-y-1 mb-4">
                  {route.spots.map((spot, sidx) => (
                    <li key={sidx} className="text-sm text-gray-700">• {spot}</li>
                  ))}
                </ul>
                <Link href="/routes" className="btn-outline w-full text-center block">
                  查看详情
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '灵活路线', desc: '根据需求调整行程', icon: '🗺️' },
              { title: '中文导游', desc: '专业讲解无障碍沟通', icon: '🗣️' },
              { title: '景点推荐', desc: '本地人才知道的秘境', icon: '⭐' },
              { title: '美食指引', desc: '品尝地道北海道美食', icon: '🍜' },
            ].map((feature, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">价格说明</h2>
          <div className="card">
            <h3 className="font-bold text-primary mb-4">包车费用包含:</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ 车辆使用费(含油费、过路费、停车费)</li>
              <li>✓ 司机服务费</li>
              <li>✓ 车辆保险</li>
              <li>✓ 免费儿童座椅</li>
              <li>✓ 车载WiFi</li>
            </ul>

            <h3 className="font-bold text-primary mb-4">费用不包含:</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✗ 景点门票</li>
              <li>✗ 餐饮费用</li>
              <li>✗ 住宿费用</li>
              <li>✗ 个人消费</li>
            </ul>

            <h3 className="font-bold text-primary mb-4">附加费用:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 超时费: ¥3,000/小时</li>
              <li>• 深夜服务(22:00-06:00): 加收20%</li>
              <li>• 多日游司机住宿: 客户承担或¥8,000/晚</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">开始定制您的北海道之旅</h2>
          <p className="text-xl mb-8 text-gray-200">告诉我们您的需求,我们为您规划完美行程</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              定制行程
            </Link>
            <Link href="/routes" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
              查看更多线路
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
