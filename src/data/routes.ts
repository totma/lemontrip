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
    image: '/images/asahiyama-zoo/01.jpg',
    duration: '1 Day',
    priceFrom: '¥45,000 起 / 车',
    season: 'Winter / All season',
    tags: ['亲子', '动物园', '企鹅散步'],
    highlights: ['企鹅散步', '北极熊馆', '海豹馆', '旭川雪景公路'],
    itinerary: [
      { time: '08:00', title: '札幌市区出发', detail: '酒店或民宿上门接送，走道央高速北上，冬季全程包车更省心。' },
      { time: '10:30', title: '旭山动物园核心参观', detail: '重点观看企鹅散步、北极熊馆、海豹馆与企鹅馆，适合亲子和第一次来北海道的客人。' },
      { time: '13:30', title: '旭川午餐', detail: '可灵活安排旭川拉面村、成吉思汗或当地定食，避免跟团赶时间。' },
      { time: '15:00', title: '雪景公路 / 田野补景', detail: '返程途中可按天气停靠雪原、树林或服务区拍照，补充北海道冬日氛围感。' },
      { time: '18:00', title: '返回札幌', detail: '送回酒店，适合作为北海道亲子行程中的轻松一日安排。' },
    ],
    title: {
      zh: '旭山动物园一日游',
      ja: '旭山動物園 日帰りツアー',
      en: 'Asahiyama Zoo Day Tour',
    },
    summary: {
      zh: '结合携程与马蜂窝常见北海道亲子包车线路整理，核心看点是企鹅散步、北极熊馆和冬季雪景公路。一日包车常见参考约 2,500-4,500 元/车，适合带老人小孩、不想换乘的客人。',
      ja: '旭山動物園の人気展示を中心に、冬の雪景色ドライブも楽しめる定番の貸切日帰りコース。小さなお子さま連れや三世代旅行にも向いています。',
      en: 'A private day trip built around Asahiyama Zoo’s iconic penguin walk, polar bear exhibits, and scenic winter roads—ideal for families who want comfort and flexibility.',
    },
  },
  {
    slug: 'biei-furano-day-tour',
    image: '/images/biei-furano/01.jpg',
    duration: '1 Day',
    priceFrom: '¥48,000 起 / 车',
    season: 'Spring / Summer / Winter',
    tags: ['青池', '白须瀑布', '拍照路线'],
    highlights: ['青池', '白须瀑布', '拼布之路', '四季彩之丘'],
    itinerary: [
      { time: '08:00', title: '札幌出发', detail: '包车前往美瑛富良野方向，车程较长但路线成熟，适合全天拍照打卡。' },
      { time: '10:30', title: '青池 & 白须瀑布', detail: '冬季可看雪覆蓝池与结冰溪谷，夏季是经典蓝绿色水景，全年都很上镜。' },
      { time: '12:30', title: '富良野 / 美瑛午餐', detail: '可安排汤咖喱、蛋包饭、农场餐厅或网红咖啡馆，自由度高。' },
      { time: '14:00', title: '拼布之路 / 四季彩之丘', detail: '根据季节改走丘陵、花田、孤独的树或雪地活动点，兼顾轻松与出片率。' },
      { time: '17:30', title: '返回札幌', detail: '日落前后返程，冬季沿途雪原和林道也很适合补拍风景。' },
    ],
    title: {
      zh: '美瑛富良野一日游',
      ja: '美瑛・富良野 日帰りツアー',
      en: 'Biei & Furano Day Tour',
    },
    summary: {
      zh: '参考马蜂窝“札幌-富良野-美瑛-白须瀑布”经典冬季包车线路，并结合携程常见产品补充整理。常见参考价格约 3,500-8,000 元/车，适合情侣、摄影客与第一次来北海道想集中打卡自然景观的游客。',
      ja: '青い池、白ひげの滝、美瑛の丘を一日で巡る写真映え抜群の定番プラン。季節ごとに景色の表情が変わるため、再訪でも楽しめます。',
      en: 'A photography-heavy classic linking Blue Pond, Shirahige Falls, and Biei’s rolling hills, with seasonal flexibility from flower fields to deep snow.',
    },
  },
  {
    slug: 'otaru-day-tour',
    image: '/images/otaru/01.jpg',
    duration: '1 Day',
    priceFrom: '¥38,000 起 / 车',
    season: 'All season',
    tags: ['运河', '街拍', '海港'],
    highlights: ['小樽运河', '堺町通', '天狗山', '雪景街道'],
    itinerary: [
      { time: '09:00', title: '札幌出发', detail: '约 1 小时抵达小樽，适合作为轻松不折腾的一日游或半日延长线。' },
      { time: '10:30', title: '小樽运河散策', detail: '漫步石仓群、运河边步道与港口街景，冬季尤其有电影感。' },
      { time: '12:00', title: '海鲜或甜品午餐', detail: '可自由安排寿司、海胆饭、LeTAO 甜品或咖啡馆，不被固定餐标限制。' },
      { time: '14:00', title: '堺町通自由活动', detail: '逛玻璃工艺、音乐盒堂、伴手礼商店，也可加走天狗山看海港高处视角。' },
      { time: '17:00', title: '傍晚返回札幌', detail: '若天气好可拍蓝调时刻雪街或港口灯景，再返回市区。' },
    ],
    title: {
      zh: '小樽一日游',
      ja: '小樽 日帰りツアー',
      en: 'Otaru Day Tour',
    },
    summary: {
      zh: '来自携程北海道多城串联产品和自由行常见玩法的轻松版路线，小樽运河、雪街、甜品店和天狗山是最稳定的组合。适合第一次来北海道、想走浪漫海港氛围线的游客。',
      ja: '運河、レトロな街並み、海鮮とスイーツを一日で楽しめる小樽の王道コース。初めての北海道旅行にも組み込みやすいプランです。',
      en: 'A relaxed port-city day out built around canal walks, retro streets, seafood, and winter atmosphere—easy to pair with any Sapporo stay.',
    },
  },
  {
    slug: 'noboribetsu-lake-toya-day-tour',
    image: '/images/noboribetsu-toya/01.jpg',
    duration: '1 Day',
    priceFrom: '¥52,000 起 / 车',
    season: 'All season',
    tags: ['温泉', '火山地貌', '湖景'],
    highlights: ['登别地狱谷', '洞爷湖', '温泉街', '昭和新山 / 熊牧场可选'],
    itinerary: [
      { time: '08:00', title: '札幌出发', detail: '沿道央高速南下，包车可减少换乘并更灵活控制停留时间。' },
      { time: '10:00', title: '登别地狱谷', detail: '感受火山地热、硫磺蒸汽与步道景观，是北海道最有辨识度的温泉地貌之一。' },
      { time: '12:00', title: '温泉街午餐', detail: '可安排登别温泉街和食、拉面或旅馆午餐，也可延伸到熊牧场或伊达时代村。' },
      { time: '14:30', title: '洞爷湖巡游', detail: '湖畔散步、展望台拍摄湖面与雪山倒影，天气晴朗时非常适合家庭和情侣。' },
      { time: '16:00', title: '昭和新山 / 熊牧场可选', detail: '若时间充裕，可增加昭和新山、熊牧场或有珠山缆车等机动景点。' },
      { time: '18:30', title: '返回札幌', detail: '适合作为温泉体验与自然观景结合的一条成熟一日线路。' },
    ],
    title: {
      zh: '登别洞爷一日游',
      ja: '登別・洞爺湖 日帰りツアー',
      en: 'Noboribetsu & Lake Toya Day Tour',
    },
    summary: {
      zh: '参考携程北海道 6 日 5 晚产品中“登别地狱谷 + 洞爷湖”高频组合，并吸收穷游多城线路里的温泉停留逻辑，适合想在一天内体验北海道火山地貌、温泉街和湖景的客人。',
      ja: '地獄谷の迫力ある火山景観と洞爺湖の穏やかな湖景を効率よく巡る、温泉好きに人気の貸切日帰りコースです。',
      en: 'A dramatic day route linking volcanic valleys, hot-spring town ambience, and the calm lake views of Toya, with optional add-ons like Showa Shinzan.',
    },
  },
  {
    slug: 'eastern-hokkaido-6d5n',
    image: '/images/eastern-hokkaido/01.jpg',
    duration: '6 Days 5 Nights',
    priceFrom: '¥298,000 起 / 团',
    season: 'Spring / Summer / Autumn / Winter',
    tags: ['深度游', '秘境', '野生动物'],
    highlights: ['屈斜路湖', '摩周湖', '知床', '流冰破冰船', '丹顶鹤'],
    itinerary: [
      { time: 'D1', title: '札幌 / 新千岁集合', detail: '接机后出发前往道东方向，按航班与季节安排首晚住宿。' },
      { time: 'D2', title: '阿寒湖 / 屈斜路湖', detail: '看湖景、温泉与冬季天鹅等季节性风物，节奏相对舒缓。' },
      { time: 'D3', title: '摩周湖 & 硫黄山', detail: '高能见度时安排经典观景点，也可增加硫黄山与周边地热地貌。' },
      { time: 'D4', title: '知床 / 网走方向', detail: '根据季节安排知床五湖、流冰破冰船、鄂霍次克海沿线或野生动物观察。' },
      { time: 'D5', title: '鹤居村 / 钏路湿原', detail: '冬季重点看丹顶鹤，其他季节可走湿原展望与生态摄影路线。' },
      { time: 'D6', title: '返程日', detail: '根据回程城市安排送机或回札幌，可做最后的湖景或湿原补拍。' },
    ],
    title: {
      zh: '道东6天5晚深度游',
      ja: '道東 6日5泊ディープツアー',
      en: 'Eastern Hokkaido 6D5N Journey',
    },
    summary: {
      zh: '综合携程北海道多日产品、穷游行程笔记和常见道东摄影路线整理，重点覆盖屈斜路湖、摩周湖、知床、网走与丹顶鹤等高人气目的地。适合二刷北海道、想看天鹅、流冰、野生动物和湖区雪景的客人。',
      ja: '屈斜路湖・摩周湖・知床・網走など道東の見どころをゆったり巡る長期プラン。自然写真や冬の絶景を楽しみたい方におすすめです。',
      en: 'A slower multi-day journey through Eastern Hokkaido’s lakes, wildlife zones, drift-ice areas, and remote landscapes—best for repeat visitors and photo-focused travelers.',
    },
  },
];

export const routeMap = Object.fromEntries(routes.map((route) => [route.slug, route]));
