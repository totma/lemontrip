export async function generateStaticParams() {
  return [
    { slug: 'sapporo-city' },
    { slug: 'otaru' },
  ];
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 示例线路详情
  const routeData: Record<string, any> = {
    'sapporo-city': {
      name: '札幌市内观光',
      duration: '6小时',
      season: '全年',
      price: '¥35,000起',
      itinerary: [
        { time: '09:00', location: '酒店接客', description: '司机准时到达您的酒店' },
        { time: '09:30', location: '时计台', description: '札幌地标建筑，拍照留念' },
        { time: '10:00', location: '大通公园', description: '市中心绿地，四季景色各异' },
        { time: '11:30', location: '白色恋人公园', description: '参观工厂，品尝甜点' },
        { time: '13:00', location: '午餐时间', description: '推荐当地特色餐厅' },
        { time: '14:30', location: '场外市场', description: '新鲜海鲜，购物天堂' },
        { time: '15:30', location: '返回酒店', description: '结束愉快的一天' }
      ],
      notes: [
        '价格包含：6小时包车费用、司机服务费、车辆保险',
        '价格不含：景点门票、餐费、停车费',
        '可根据您的需求调整行程顺序',
        '建议携带：相机、舒适的鞋子、防晒用品'
      ]
    },
    'otaru': {
      name: '小樽一日游',
      duration: '8小时',
      season: '全年',
      price: '¥45,000起',
      itinerary: [
        { time: '08:30', location: '酒店接客', description: '从札幌出发' },
        { time: '09:30', location: '小樽运河', description: '浪漫的运河景色' },
        { time: '10:30', location: '堺町通', description: '玻璃工艺品街' },
        { time: '12:00', location: '午餐', description: '品尝小樽寿司' },
        { time: '13:30', location: '北一硝子馆', description: '精美玻璃制品' },
        { time: '15:00', location: '天狗山', description: '俯瞰小樽全景' },
        { time: '16:30', location: '返回札幌', description: '结束行程' }
      ],
      notes: [
        '价格包含：8小时包车费用、高速费、司机服务费',
        '价格不含：景点门票、餐费、缆车费',
        '冬季路况可能影响行程时间',
        '建议预留购物时间'
      ]
    }
  };

  const route = routeData[slug] || routeData['sapporo-city'];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{route.name}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span>⏱️ {route.duration}</span>
            <span>📅 {route.season}</span>
            <span className="text-[#C4A35A] font-bold">{route.price}</span>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">行程安排</h2>
          <div className="max-w-3xl mx-auto">
            {route.itinerary.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-20 text-[#1B3A5C] font-bold text-lg">
                  {item.time}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.location}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">路线地图</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-200 to-blue-400 h-96 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            地图占位区域
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">注意事项</h2>
          <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <ul className="space-y-2">
              {route.notes.map((note: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好出发了吗？</h2>
          <p className="text-xl mb-8 opacity-90">立即预订，开启您的北海道之旅</p>
          <button className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">
            立即询价
          </button>
        </div>
      </section>
    </div>
  );
}
