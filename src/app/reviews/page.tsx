export default function ReviewsPage() {
  const touristReviews = [
    {
      name: '张女士',
      from: '中国上海',
      date: '2024年2月',
      rating: 5,
      trip: '富良野·美瑛一日游',
      comment: '司机非常专业，准时到达酒店接我们。一路上给我们介绍景点，还帮我们拍了很多美照。车很干净舒适，强烈推荐！',
      avatar: 'bg-pink-500'
    },
    {
      name: 'John Smith',
      from: '美国纽约',
      date: '2024年1月',
      rating: 5,
      trip: '新千岁机场接送',
      comment: 'Excellent service! The driver was waiting for us at the airport with a sign. Very professional and the car was spotless. Highly recommend for airport transfers.',
      avatar: 'bg-blue-500'
    },
    {
      name: '李先生',
      from: '中国北京',
      date: '2023年12月',
      rating: 5,
      trip: '小樽一日游',
      comment: '第一次来北海道，选择了包车服务非常明智。司机师傅很热情，带我们去了很多网红打卡点，还推荐了当地美食。价格透明，没有隐藏费用。',
      avatar: 'bg-green-500'
    },
    {
      name: '王女士',
      from: '中国广州',
      date: '2023年11月',
      rating: 5,
      trip: '札幌市内观光',
      comment: '带着老人和孩子出行，包车真的太方便了。司机很有耐心，行程安排得很合理。车上还准备了儿童座椅和饮用水，服务很贴心。',
      avatar: 'bg-purple-500'
    },
    {
      name: 'Sarah Johnson',
      from: '英国伦敦',
      date: '2023年10月',
      rating: 5,
      trip: '登别·洞爷湖',
      comment: 'Amazing experience! Our driver spoke good English and was very knowledgeable about the area. The hot spring tour was perfectly organized. Will definitely use this service again.',
      avatar: 'bg-yellow-500'
    },
    {
      name: '陈先生',
      from: '中国深圳',
      date: '2023年9月',
      rating: 5,
      trip: '多日定制行程',
      comment: '5天4晚的北海道深度游，全程包车。司机师傅非常专业，对路线很熟悉。帮我们规划了最优路线，还推荐了很多当地特色餐厅。非常满意！',
      avatar: 'bg-red-500'
    }
  ];

  const corporateReviews = [
    {
      company: 'XX科技公司',
      event: '年度团建活动',
      participants: '30人',
      date: '2024年1月',
      comment: '为我们公司的年度团建提供了3台车的包车服务。司机准时、专业，车辆干净舒适。行程安排得很好，员工反馈非常满意。',
      services: ['商务接待', '团队包车', '行程定制']
    },
    {
      company: 'XX国际会议',
      event: '国际学术会议',
      participants: '50人',
      date: '2023年11月',
      comment: '为国际会议提供了机场接送和会议期间的用车服务。服务非常专业，准点率100%，外语司机沟通顺畅。',
      services: ['机场接送', 'VIP接待', '多语言服务']
    },
    {
      company: 'XX旅行社',
      event: '长期合作伙伴',
      participants: '长期合作',
      date: '2020年至今',
      comment: '作为我们在北海道的长期合作伙伴，一直提供稳定可靠的包车服务。车队规模大，车型齐全，服务质量始终如一。',
      services: ['团队包车', '定制行程', '长期合作']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">客户评价</h1>
          <p className="text-xl opacity-90">真实客户反馈，值得信赖的服务</p>
        </div>
      </section>

      {/* Tourist Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">游客评价</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {touristReviews.map((review, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${review.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.from}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {review.trip} · {review.date}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">企业客户案例</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {corporateReviews.map((review, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-8 shadow-lg">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{review.company}</h3>
                  <span className="bg-[#C4A35A] text-white px-3 py-1 rounded-full text-sm">
                    {review.event}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>👥 {review.participants}</span>
                  <span>📅 {review.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.comment}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {review.services.map((service, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-[#1B3A5C] mb-2">5000+</div>
              <div className="text-gray-600">服务客户</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1B3A5C] mb-2">98%</div>
              <div className="text-gray-600">满意度</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1B3A5C] mb-2">9年</div>
              <div className="text-gray-600">服务经验</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1B3A5C] mb-2">100%</div>
              <div className="text-gray-600">准点率</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">成为我们的下一位满意客户</h2>
          <p className="text-xl mb-8 opacity-90">立即预订，体验专业服务</p>
          <button className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">
            立即预订
          </button>
        </div>
      </section>
    </div>
  );
}
