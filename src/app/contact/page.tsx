'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的咨询！我们会在24小时内回复您。');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl opacity-90">随时为您提供咨询和预订服务</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">在线咨询</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">姓名 *</label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">邮箱 *</label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">电话</label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">出行日期</label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">人数</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                      value={formData.people}
                      onChange={(e) => setFormData({...formData, people: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-2">需求描述 *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    placeholder="请描述您的行程需求、目的地、特殊要求等..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg font-semibold hover:bg-[#2C5282] transition"
                >
                  提交咨询
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📞 电话</h3>
                  <p className="text-lg mb-2">+81-11-XXX-XXXX</p>
                  <p className="text-sm text-gray-600">工作时间：9:00-21:00 (JST)</p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📧 邮箱</h3>
                  <p className="text-lg">info@hokkaido-premium-travel.com</p>
                  <p className="text-sm text-gray-600 mt-2">24小时内回复</p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">💬 即时通讯</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded">LINE</span>
                      <span>@hokkaido-charter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded">WhatsApp</span>
                      <span>+81-XX-XXXX-XXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-700 text-white px-3 py-1 rounded">微信</span>
                      <span>HokkaidoCharter</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📍 地址</h3>
                  <p className="text-lg mb-2">〒060-0000</p>
                  <p>北海道札幌市中央区北X条西X丁目X-X</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">办公地点</h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-300 to-blue-500 h-96 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            地图占位区域
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">营业时间</h2>
          <div className="max-w-2xl mx-auto bg-white border rounded-lg p-8 shadow">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">周一至周五</span>
                <span>9:00 - 21:00</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">周六周日</span>
                <span>9:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">紧急联系</span>
                <span>24小时在线</span>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-700">
                💡 提示：建议提前3-7天预约，旺季（7-8月、12-2月）建议提前2周预约
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
