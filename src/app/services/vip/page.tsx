import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '商务VIP服务 - 企业接待专属包车',
  description: '提供高端商务用车服务,企业接待、会议用车、商务考察专属包车',
};

export default function VIPPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">商务VIP服务</h1>
          <p className="text-xl text-gray-200">专业、高效、保密的企业级用车服务</p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">VIP服务特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '专属司机', desc: '经验丰富的商务司机', icon: '👨‍💼' },
              { title: '豪华车型', desc: '高端商务车辆', icon: '🚗' },
              { title: '保密协议', desc: '签署保密协议', icon: '🔒' },
              { title: '灵活调度', desc: '随时响应需求变化', icon: '📱' },
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

      {/* Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '企业接待',
                desc: '客户接待、商务考察、工厂参观',
                features: ['机场接送', '行程规划', '多语言服务', '商务礼仪'],
                price: '¥35,000起/天',
              },
              {
                title: '会议用车',
                desc: '会议接送、展会用车、培训班车',
                features: ['准时准点', '统一调度', '多车协调', '应急预案'],
                price: '¥30,000起/天',
              },
              {
                title: '商务考察',
                desc: '企业参访、市场调研、项目考察',
                features: ['定制路线', '专业翻译', '商务助理', '资料准备'],
                price: '¥40,000起/天',
              },
              {
                title: '长期包车',
                desc: '月度/季度/年度长期用车服务',
                features: ['固定司机', '优惠价格', '优先调度', '专属服务'],
                price: '面议',
              },
            ].map((service, idx) => (
              <div key={idx} className="card">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <h4 className="font-semibold text-primary mb-2">服务内容:</h4>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="text-gray-700 flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-accent">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">VIP车型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '豪华轿车',
                model: 'Lexus LS / Mercedes S-Class',
                seats: '1-3人',
                features: ['真皮座椅', '后排娱乐', '隐私玻璃', '商务配置'],
                price: '¥35,000/天',
              },
              {
                name: '商务MPV',
                model: 'Toyota Alphard / Vellfire',
                seats: '4-6人',
                features: ['航空座椅', '电动侧门', '车载WiFi', '冰箱'],
                price: '¥40,000/天',
              },
              {
                name: '豪华面包车',
                model: 'Mercedes V-Class',
                seats: '7-8人',
                features: ['豪华内饰', '会议桌', '商务设施', '隔音系统'],
                price: '¥50,000/天',
              },
            ].map((vehicle, idx) => (
              <div key={idx} className="card">
                <div className="h-40 bg-gradient-to-br from-primary-dark to-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚙</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{vehicle.model}</p>
                <p className="text-sm text-gray-700 mb-3">👥 {vehicle.seats}</p>
                <h4 className="font-semibold text-sm text-primary mb-2">配置:</h4>
                <ul className="space-y-1 mb-4">
                  {vehicle.features.map((feature, fidx) => (
                    <li key={fidx} className="text-sm text-gray-700">• {feature}</li>
                  ))}
                </ul>
                <p className="text-xl font-bold text-accent">{vehicle.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">服务案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '某跨国企业年会接待',
                client: '世界500强企业',
                service: '3天会议用车服务',
                vehicles: '10辆商务MPV',
                feedback: '服务专业,调度高效,获得客户高度评价',
              },
              {
                title: '政府代表团考察',
                client: '某省政府代表团',
                service: '5天商务考察',
                vehicles: '豪华车队',
                feedback: '司机素质高,服务周到,圆满完成接待任务',
              },
              {
                title: '企业长期用车',
                client: '某日资企业',
                service: '年度包车服务',
                vehicles: '固定车辆+司机',
                feedback: '稳定可靠,成为企业长期合作伙伴',
              },
              {
                title: '国际展会用车',
                client: '某展览公司',
                service: '展会期间接送',
                vehicles: '多车型组合',
                feedback: '灵活应对,准时准点,保障展会顺利进行',
              },
            ].map((caseStudy, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold text-primary mb-3">{caseStudy.title}</h3>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p><strong>客户:</strong> {caseStudy.client}</p>
                  <p><strong>服务:</strong> {caseStudy.service}</p>
                  <p><strong>车辆:</strong> {caseStudy.vehicles}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic">"{caseStudy.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '专业团队', desc: '10年以上商务用车经验,服务过众多知名企业', icon: '🏆' },
              { title: '严格管理', desc: '司机经过专业培训,统一着装,规范服务', icon: '📋' },
              { title: '应急保障', desc: '24小时待命,备用车辆,确保万无一失', icon: '🚨' },
            ].map((reason, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">咨询商务VIP服务</h2>
          <p className="text-xl mb-8 text-gray-200">专业顾问为您提供定制化商务用车方案</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              立即咨询
            </Link>
            <a href="tel:+81-11-XXX-XXXX" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
              电话联系
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
