export type RouteDay = {
  time: string;
  title: string;
  detail: string;
};

export type RouteItem = {
  slug: string;
  image: string;
  duration: string;
  priceFrom: string;
  season: string;
  tags: string[];
  highlights: string[];
  itinerary: RouteDay[];
  title: {
    zh: string;
    ja: string;
    en: string;
  };
  summary: {
    zh: string;
    ja: string;
    en: string;
  };
};

export const routes: RouteItem[] = [
  {
    slug: 'asahiyama-zoo-day-tour',
    image: 'https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=1200&q=80',
    duration: '1 Day',
    priceFrom: '¥45,000',
    season: 'Winter / All season',
    tags: ['亲子', '动物园', '雪景'],
    highlights: ['企鹅散步', '旭山动物园', '上川雪景公路'],
    itinerary: [
      { time: '08:00', title: '札幌出发', detail: '酒店或民宿上门接送，北上前往旭川。' },
      { time: '10:30', title: '旭山动物园', detail: '观看企鹅散步、北极熊馆和海豹馆。' },
      { time: '14:00', title: '旭川午餐', detail: '推荐拉面村或当地定食，自由选择。' },
      { time: '16:30', title: '返回札幌', detail: '沿途可按天气临时停靠雪景点拍照。' },
    ],
    title: {
      zh: '旭山动物园一日游',
      ja: '旭山動物園 日帰りツアー',
      en: 'Asahiyama Zoo Day Tour',
    },
    summary: {
      zh: '适合亲子与冬季游客的人气路线，舒适包车往返，轻松打卡北海道代表性动物园。',
      ja: '家族旅行に人気の定番コース。快適な貸切送迎で旭山動物園をゆったり満喫。',
      en: 'A family-friendly winter favorite with private transfer to Hokkaido’s iconic zoo.',
    },
  },
  {
    slug: 'biei-furano-day-tour',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    duration: '1 Day',
    priceFrom: '¥48,000',
    season: 'Spring / Summer / Winter',
    tags: ['花海', '拼布之路', '青池'],
    highlights: ['青池', '四季彩之丘', '美瑛拼布之路'],
    itinerary: [
      { time: '08:00', title: '札幌出发', detail: '包车前往美瑛富良野地区。' },
      { time: '10:30', title: '青池 & 白须瀑布', detail: '根据季节体验蓝色池水或白雪覆盖景观。' },
      { time: '12:30', title: '富良野午餐', detail: '可安排汤咖喱、蛋包饭或牧场餐厅。' },
      { time: '14:00', title: '四季彩之丘', detail: '夏季花海、冬季雪地活动，全年适合拍照。' },
    ],
    title: {
      zh: '美瑛富良野一日游',
      ja: '美瑛・富良野 日帰りツアー',
      en: 'Biei & Furano Day Tour',
    },
    summary: {
      zh: '北海道最经典的自然风景路线之一，适合拍照、情侣、轻度亲子游客。',
      ja: '美瑛の丘と富良野の絶景を一日で巡る、写真映え抜群の人気コース。',
      en: 'One of Hokkaido’s most scenic routes, ideal for photography and relaxed sightseeing.',
    },
  },
  {
    slug: 'otaru-day-tour',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    duration: '1 Day',
    priceFrom: '¥38,000',
    season: 'All season',
    tags: ['海港', '运河', '美食'],
    highlights: ['小樽运河', '堺町通', '天狗山夜景'],
    itinerary: [
      { time: '09:00', title: '札幌出发', detail: '约1小时抵达小樽，轻松不赶路。' },
      { time: '10:30', title: '运河散策', detail: '漫步小樽运河，拍摄石仓群和雪景街道。' },
      { time: '12:00', title: '海鲜午餐', detail: '自由安排海胆盖饭、寿司或甜品店。' },
      { time: '14:00', title: '堺町通自由活动', detail: '玻璃工艺、音乐盒堂与特色伴手礼。' },
    ],
    title: {
      zh: '小樽一日游',
      ja: '小樽 日帰りツアー',
      en: 'Otaru Day Tour',
    },
    summary: {
      zh: '浪漫海港与欧风街景结合的轻松路线，适合第一次来北海道的游客。',
      ja: '運河とレトロな街並みを楽しむ、初めての北海道旅行にもぴったり。',
      en: 'A charming port-city escape blending canal views, sweets, and historic streets.',
    },
  },
  {
    slug: 'noboribetsu-lake-toya-day-tour',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    duration: '1 Day',
    priceFrom: '¥52,000',
    season: 'All season',
    tags: ['温泉', '火山地貌', '湖景'],
    highlights: ['地狱谷', '洞爷湖展望台', '温泉街'],
    itinerary: [
      { time: '08:00', title: '札幌出发', detail: '沿道央高速南下，车内可休息或观景。' },
      { time: '10:00', title: '登别地狱谷', detail: '感受火山地热与硫磺蒸汽地貌。' },
      { time: '12:00', title: '温泉街午餐', detail: '可安排温泉旅馆午餐或当地和食。' },
      { time: '14:30', title: '洞爷湖巡游', detail: '湖畔观景、拍摄雪山与湖面反光。' },
    ],
    title: {
      zh: '登别洞爷一日游',
      ja: '登別・洞爺湖 日帰りツアー',
      en: 'Noboribetsu & Lake Toya Day Tour',
    },
    summary: {
      zh: '温泉与火山湖组合路线，适合想看北海道地貌变化与冬季温泉氛围的游客。',
      ja: '地獄谷と洞爺湖を効率よく巡る、温泉好きにおすすめの一日旅。',
      en: 'A dramatic route combining volcanic valleys, hot springs, and iconic lake scenery.',
    },
  },
  {
    slug: 'eastern-hokkaido-6d5n',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    duration: '6 Days 5 Nights',
    priceFrom: '¥298,000',
    season: 'Spring / Summer / Autumn / Winter',
    tags: ['深度游', '自然', '秘境'],
    highlights: ['阿寒湖', '摩周湖', '知床', '钏路湿原'],
    itinerary: [
      { time: 'D1', title: '札幌 / 新千岁集合', detail: '接机后北上或东行，入住第一晚酒店。' },
      { time: 'D2', title: '阿寒湖周边', detail: '湖景、爱努文化与温泉体验。' },
      { time: 'D3', title: '摩周湖 & 屈斜路湖', detail: '高能见度观景日，适合长焦风景拍摄。' },
      { time: 'D4', title: '知床方向', detail: '根据季节安排观光船、五湖或流冰体验。' },
      { time: 'D5', title: '钏路湿原', detail: '自然生态观察，节奏从容。' },
    ],
    title: {
      zh: '道东6天5晚深度游',
      ja: '道東 6日5泊ディープツアー',
      en: 'Eastern Hokkaido 6D5N Journey',
    },
    summary: {
      zh: '适合二刷北海道或追求自然秘境体验的客人，路线节奏灵活，可深度定制。',
      ja: '道東の大自然をじっくり巡る長期プラン。再訪者や写真旅にも最適。',
      en: 'A slow-travel route for nature lovers seeking Hokkaido’s remote eastern landscapes.',
    },
  },
];

export const routeMap = Object.fromEntries(routes.map((route) => [route.slug, route]));
