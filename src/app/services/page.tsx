import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '服务项目 - 北海道包车服务总览',
  description: '提供机场接送、观光包车、商务VIP等多种北海道包车服务,满足不同出行需求',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'airport',
      title: '机场接送服务',
      icon: '✈️',
      description: '新千岁机场/旭川机场专业接送,准时可靠',
      features: ['24小时服务', '航班延误免费等待', '免费儿童座椅', '行李协助'],
      suitable: '商务出差、家庭旅游、团体接送',
      priceFrom: '¥8,000',
      vehicles: ['豪华轿车', '商务MPV', '豪华面包车'],
      link: '/services/airport',
    },
    {
      id: 'sightseeing',
      title: '北海道观光包车',
      icon: '🗻',
      description: '一日游/多日游定制行程,深度体验北海道',
      features: ['灵活路线', '中文导游', '景点推荐', '美食指引'],
      suitable: '家庭游、情侣游、摄影爱好者',
      priceFrom: '¥25,000',
      vehicles: ['商务MPV', '豪华面包车', '中型巴士'],
      link: '/services/sightseeing',
    },
    {
      id: 'vip',
      title: '商务VIP服务',
      icon: '💼',
      description: '企业接待、会议用车、高端定制服务',
      features: ['专属司机', '商务车型', '保密协议', '灵活调度'],
      suitable: '企业客户、商务会议、高端接待',
      priceFrom: '¥35,000',
      vehicles: ['豪华轿车', '商务MPV'],
      link: '/services/vip',
    },
    {
      id: 'ski',
      title: '滑雪场接送',
      icon: '⛷️',
      description: '二世古/富良野/留寿都滑雪场专线',
      features: ['雪具运输', '早晚接送', '多日套餐', '酒店直达'],
      suitable: '滑雪爱好者、冬季运动团队',
      priceFrom: '¥30,000',
      vehicles: ['商务MPV', '豪华面包车'],
      link: '/services/sightseeing',
    },
    {
      id: 'custom',
      title: '定制包车服务',
      icon: '🎯',
      description: '根据您的需求量身定制专属行程',
      features: ['完全定制', '专业规划', '弹性时间', '特殊需求'],
      suitable: '特殊需求、长期包车、大型团队',
      priceFrom: '面议',
      vehicles: ['全车型可选'],
      link: '/contact',
    },
    {
      id: 'photo',
      title: '摄影包车服务',
      icon: '📸',
      description: '专为摄影爱好者设计的包车路线',
      features: ['最佳拍摄点', '灵活停留', '日出日落', '季节推荐'],
      suitable: '摄影师、摄影团队、风光爱好者',
      priceFrom: '¥28,000',
      vehicles: ['商务MPV', '豪华面包车'],
      link: '/services/sightseeing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">服务项目</h1>
          <p className="text-xl text-gray-200">多样化的包车服务,满足您的各种出行需求</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card">
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">服务特色</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-accent mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">适合人群</h3>
                    <p className="text-sm text-gray-700">{service.suitable}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">可用车型</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                          {vehicle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-600">起价</span>
                    <p className="text-2xl font-bold text-accent">{service.priceFrom}</p>
                  </div>
                  <Link href={service.link} className="btn-primary">
                    了解详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务保障</h2>
          <p className="section-subtitle text-center">专业团队为您提供优质服务</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '合法资质', desc: '北海道陆运局正规认证', icon: '📜' },
              { title: '专业司机', desc: '10年以上驾驶经验', icon: '👨‍✈️' },
              { title: '保险齐全', desc: '全额商业保险保障', icon: '🛡️' },
              { title: '24小时服务', desc: '随时响应您的需求', icon: '⏰' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">需要帮助选择合适的服务?</h2>
          <p className="text-xl mb-8 text-gray-200">联系我们的专业顾问,为您量身定制出行方案</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              立即咨询
            </Link>
            <Link href="/fleet" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
              查看车型
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
