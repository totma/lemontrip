import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            北海道プレミアムトラベル
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-accent">
            安心・安全・快適な北海道の旅
          </p>
          <p className="text-xl mb-12 text-gray-200">
            专业包车服务 | 多语言司机 | 透明报价 | 合法资质
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              立即询价
            </Link>
            <Link href="/fleet" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              查看车型
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">快捷服务入口</h2>
          <p className="section-subtitle text-center">选择适合您的包车服务</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '机场接送', desc: '新千岁/旭川机场专业接送服务', icon: '✈️', link: '/services/airport' },
              { title: '市内包车', desc: '札幌市内及周边观光包车', icon: '🚗', link: '/services/sightseeing' },
              { title: '多日定制', desc: '2-7天深度游定制行程', icon: '📅', link: '/services/sightseeing' },
              { title: '滑雪接送', desc: '二世古/富良野滑雪场接送', icon: '⛷️', link: '/services/sightseeing' },
              { title: '商务VIP', desc: '企业接待/会议用车服务', icon: '💼', link: '/services/vip' },
              { title: '摄影亲子', desc: '家庭游/摄影专属包车', icon: '📸', link: '/services/sightseeing' },
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="card group hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="mt-4 text-accent font-semibold flex items-center">
                  了解详情
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">为什么选择我们</h2>
          <p className="section-subtitle text-center">专业、安全、贴心的北海道包车服务</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '多语言司机', desc: '中文/日语/英语流利沟通', icon: '🗣️' },
              { title: '本地经验', desc: '10年以上北海道导游经验', icon: '🏔️' },
              { title: '透明报价', desc: '无隐藏费用,明码标价', icon: '💰' },
              { title: '合法资质', desc: '北海道陆运局正规认证', icon: '✅' },
              { title: '定制行程', desc: '根据需求灵活调整路线', icon: '🗺️' },
              { title: '快速响应', desc: '24小时内确认预约', icon: '⚡' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">车型概览</h2>
          <p className="section-subtitle text-center">多种车型满足不同需求</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '豪华轿车', seats: '1-4人', luggage: '2-3件', price: '¥15,000起/天' },
              { name: '商务MPV', seats: '5-7人', luggage: '4-5件', price: '¥25,000起/天' },
              { name: '豪华面包车', seats: '8-9人', luggage: '6-8件', price: '¥35,000起/天' },
              { name: '中型巴士', seats: '10-20人', luggage: '10+件', price: '¥50,000起/天' },
            ].map((vehicle, idx) => (
              <div key={idx} className="card">
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚙</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>👥 {vehicle.seats}</p>
                  <p>🧳 {vehicle.luggage}</p>
                </div>
                <p className="text-accent font-bold text-lg mb-4">{vehicle.price}</p>
                <Link href="/fleet" className="btn-outline w-full text-center block">
                  查看详情
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">热门线路</h2>
          <p className="section-subtitle text-center">精选北海道经典路线</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '札幌-小樽一日游', duration: '8小时', season: '全年', price: '¥25,000起' },
              { name: '富良野-美瑛花田之旅', duration: '10小时', season: '夏季', price: '¥30,000起' },
              { name: '登别-洞爷湖温泉', duration: '2天1夜', season: '全年', price: '¥55,000起' },
              { name: '函馆夜景观光', duration: '6小时', season: '全年', price: '¥20,000起' },
              { name: '二世古滑雪接送', duration: '全天', season: '冬季', price: '¥35,000起' },
              { name: '道东三湖巡游', duration: '3天2夜', season: '夏秋', price: '¥85,000起' },
            ].map((route, idx) => (
              <Link key={idx} href="/routes" className="card group hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-accent-light to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-7xl">🗻</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{route.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>⏱️ {route.duration}</span>
                  <span>🌸 {route.season}</span>
                </div>
                <p className="text-accent font-bold text-lg">{route.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/routes" className="btn-primary">
              查看全部线路
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">预约流程</h2>
          <p className="text-xl text-center mb-12 text-gray-300">简单四步,轻松预约</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: '提交需求', desc: '填写出行信息和需求' },
              { step: '2', title: '顾问确认', desc: '专属顾问24小时内联系' },
              { step: '3', title: '报价方案', desc: '收到详细报价和行程' },
              { step: '4', title: '出行服务', desc: '司机准时接送,安心出行' },
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">客户评价</h2>
          <p className="section-subtitle text-center">听听客户的真实反馈</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '张女士', from: '上海', rating: 5, comment: '司机非常专业,中文沟通无障碍。行程安排合理,玩得很开心!' },
              { name: '李先生', from: '北京', rating: 5, comment: '车辆干净舒适,司机准时守信。价格透明,没有额外收费。强烈推荐!' },
              { name: 'Wang Family', from: '台北', rating: 5, comment: '带着老人和小孩出行,司机很贴心。还推荐了很多当地美食,非常满意!' },
            ].map((review, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.from}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-outline">
              查看更多评价
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">合作伙伴</h2>
          <p className="section-subtitle text-center">值得信赖的品牌</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 bg-gray-100 rounded-lg">
                <span className="text-gray-400 font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">开始规划您的北海道之旅</h2>
          <p className="text-xl mb-8 text-gray-200">专业团队为您提供一站式包车服务</p>
          <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-12 rounded-lg text-lg inline-block transition-colors">
            立即询价
          </Link>
        </div>
      </section>
    </div>
  );
}
