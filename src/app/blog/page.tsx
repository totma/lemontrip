export default function BlogPage() {
  const posts = [
    {
      title: '北海道包车 vs 自驾：哪个更适合你？',
      slug: 'charter-vs-self-drive',
      date: '2024年3月1日',
      category: '旅行攻略',
      excerpt: '计划北海道之旅？不知道选择包车还是自驾？本文详细对比两种方式的优缺点，帮你做出最佳选择。',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      title: '新千岁机场到二世古最佳交通方式',
      slug: 'chitose-to-niseko',
      date: '2024年2月28日',
      category: '交通指南',
      excerpt: '冬季滑雪季，如何从新千岁机场快速舒适地到达二世古？包车、巴士、JR全方位对比。',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      title: '富良野最佳赏花时间与路线推荐',
      slug: 'furano-flower-season',
      date: '2024年2月25日',
      category: '季节攻略',
      excerpt: '薰衣草、向日葵、波斯菊...富良野的花海什么时候最美？一日游路线如何安排？',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600'
    },
    {
      title: '冬季北海道包车注意事项',
      slug: 'winter-charter-tips',
      date: '2024年2月20日',
      category: '实用贴士',
      excerpt: '冬季道路结冰、暴雪天气...包车出行需要注意什么？如何确保安全舒适？',
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
    },
    {
      title: '小樽一日游完美攻略',
      slug: 'otaru-one-day-guide',
      date: '2024年2月15日',
      category: '线路推荐',
      excerpt: '从札幌出发，如何在一天内玩转小樽？运河、玻璃工艺、寿司...不容错过的景点全在这里。',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    },
    {
      title: '带孩子游北海道：包车的10个优势',
      slug: 'family-travel-with-charter',
      date: '2024年2月10日',
      category: '亲子旅行',
      excerpt: '带着老人和孩子旅行，为什么包车是最佳选择？儿童座椅、灵活行程、舒适空间...',
      image: 'bg-gradient-to-br from-green-400 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">旅行攻略</h1>
          <p className="text-xl opacity-90">北海道旅行实用信息与包车指南</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className={`h-48 ${post.image} flex items-center justify-center text-white text-xl font-bold p-4 text-center`}>
                  {post.title}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#C4A35A] text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-[#1B3A5C]">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[#1B3A5C] font-semibold hover:text-[#2C5282] transition">
                    阅读全文 →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">文章分类</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['旅行攻略', '交通指南', '季节攻略', '实用贴士', '线路推荐', '亲子旅行', '美食推荐', '住宿指南'].map((cat, idx) => (
              <button key={idx} className="bg-white border-2 border-[#1B3A5C] text-[#1B3A5C] px-6 py-3 rounded-lg font-semibold hover:bg-[#1B3A5C] hover:text-white transition">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">订阅我们的攻略</h2>
            <p className="text-lg mb-6 opacity-90">
              获取最新的北海道旅行资讯和包车优惠信息
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-[#C4A35A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition whitespace-nowrap">
                订阅
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
