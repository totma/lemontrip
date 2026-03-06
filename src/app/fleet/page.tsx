export default function FleetPage() {
  const vehicles = [
    {
      name: '豪华商务轿车',
      model: '丰田 Crown / 日产 Fuga',
      seats: '4座',
      luggage: '2-3件',
      features: ['真皮座椅', 'WiFi', '充电口', '饮用水', '雨伞'],
      price: '¥15,000起/天',
      image: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
      name: '高端MPV',
      model: '丰田 Alphard / 日产 Elgrand',
      seats: '6-7座',
      luggage: '4-6件',
      features: ['豪华座椅', '大空间', 'WiFi', '充电口', '饮用水', '儿童座椅可选'],
      price: '¥25,000起/天',
      image: 'bg-gradient-to-br from-blue-700 to-blue-900'
    },
    {
      name: '商务Van',
      model: '丰田 Hiace',
      seats: '9-10座',
      luggage: '8-10件',
      features: ['宽敞空间', '适合团队', 'WiFi', '充电口', '饮用水'],
      price: '¥30,000起/天',
      image: 'bg-gradient-to-br from-indigo-700 to-indigo-900'
    },
    {
      name: '中型巴士',
      model: '丰田 Coaster',
      seats: '20-25座',
      luggage: '15-20件',
      features: ['团体出行', '行李舱', 'WiFi', '充电口', '导游麦克风'],
      price: '¥50,000起/天',
      image: 'bg-gradient-to-br from-purple-700 to-purple-900'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">车型与价格</h1>
          <p className="text-xl opacity-90">多种车型选择，满足不同需求</p>
        </div>
      </section>

      {/* Vehicle Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className={`h-48 ${vehicle.image} flex items-center justify-center text-white text-2xl font-bold`}>
                  {vehicle.name}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.model}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-semibold">座位数：</span>{vehicle.seats}
                    </div>
                    <div>
                      <span className="font-semibold">行李容量：</span>{vehicle.luggage}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">车内配置：</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {vehicle.features.map((f, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#C4A35A] mb-4">{vehicle.price}</div>
                  <button className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg hover:bg-[#2C5282] transition">
                    立即询价
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">附加费用说明</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">高速公路费</span>
                <span>实报实销</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">停车费</span>
                <span>实报实销</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">司机住宿费（多日行程）</span>
                <span>¥8,000/晚 或客户安排</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">超时费</span>
                <span>¥3,000/小时</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">夜间加价（22:00-06:00）</span>
                <span>+30%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">外语司机</span>
                <span>+¥5,000/天</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">儿童座椅</span>
                <span>免费提供</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
