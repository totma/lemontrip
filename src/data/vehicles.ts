export type Vehicle = {
  slug: string;
  name: string;
  seats: string;
  luggage: string;
  image: string;
  summary: string;
  features: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: 'alphard',
    name: 'Toyota Alphard / 埃尔法',
    seats: '4-6 guests',
    luggage: '4 large suitcases',
    image: '/images/vehicles/alphard-exterior/01.png',
    summary: '适合家庭、情侣与小团体，第二排舒适度高，冬季长途包车体验更轻松。',
    features: ['豪华座椅', '独立空调', '大件行李空间', '适合机场接送与一日游'],
  },
  {
    slug: 'hiace',
    name: 'Toyota Hiace / 海狮',
    seats: '8-9 guests',
    luggage: '8 large suitcases',
    image: '/images/vehicles/hiace-exterior/01.png',
    summary: '适合多人家庭、朋友出行与摄影团队，装载能力强，适合多日线路与滑雪行程。',
    features: ['宽敞后备箱', '高顶空间', '滑雪装备可放置', '适合多人深度包车'],
  },
];
