export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl opacity-90">专业、安全、贴心的北海道包车服务</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">北海道プレミアムトラベル株式会社</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              我们是一家专注于北海道地区高端包车服务的专业公司，成立于2015年。多年来，我们为来自世界各地的游客提供了安全、舒适、贴心的包车服务，赢得了客户的一致好评。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我们的团队由经验丰富的司机和专业的客服人员组成，熟悉北海道的每一条道路和每一个景点。无论是机场接送、市内观光，还是多日定制行程，我们都能为您提供最优质的服务。
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">我们的理念</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">安心</h3>
              <p className="text-gray-600">
                合法资质、全面保险、严格的车辆维护，让您的旅程无忧无虑
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">安全</h3>
              <p className="text-gray-600">
                专业司机、安全驾驶、实时监控，您的安全是我们的首要任务
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">快适</h3>
              <p className="text-gray-600">
                舒适车辆、贴心服务、灵活行程，让您的旅行更加愉快
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">公司信息</h2>
          <div className="max-w-3xl mx-auto bg-white border rounded-lg p-8 shadow">
            <div className="space-y-4">
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">公司名称</span>
                <span>北海道プレミアムトラベル株式会社<br/>Hokkaido Premium Travel Co., Ltd.</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">成立时间</span>
                <span>2015年4月</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">注册地址</span>
                <span>〒060-0000 北海道札幌市中央区北X条西X丁目X-X</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">营业许可</span>
                <span>一般旅客自動車運送事業<br/>北海道陸運局認可 第XXXX号</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">保险</span>
                <span>对人赔偿：无限额<br/>对物赔偿：1亿日元</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">车队规模</span>
                <span>20台各类车辆</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">服务区域</span>
                <span>北海道全域</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">我们的团队</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">专业司机团队</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 全员持有二種免許（营业性驾驶执照）</li>
                  <li>• 平均驾龄10年以上</li>
                  <li>• 熟悉北海道路况和景点</li>
                  <li>• 定期安全培训和考核</li>
                  <li>• 部分司机具备外语能力</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">客服团队</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 中文、日文、英文客服</li>
                  <li>• 7×24小时在线支持</li>
                  <li>• 专业行程规划建议</li>
                  <li>• 快速响应客户需求</li>
                  <li>• 贴心的售后服务</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">合作伙伴</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              我们与多家知名酒店、旅行社、企业建立了长期合作关系
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
                  合作伙伴 {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">选择我们，开启美好旅程</h2>
          <p className="text-xl mb-8 opacity-90">专业团队，用心服务每一位客户</p>
          <button className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
}
