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
    image: 'https://images.unsplash.com/photo-1549399542-7e82138f3f5f?auto=format&fit=crop&w=1200&q=80',
    summary: '适合家庭、情侣与小团体，乘坐舒适，冬季长途体验优秀。',
    features: ['豪华座椅', '独立空调', '大件行李空间', '适合机场接送与一日游'],
  },
  {
    slug: 'hiace',
    name: 'Toyota Hiace / 海狮',
    seats: '8-9 guests',
    luggage: '8 large suitcases',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    summary: '适合多人家庭、朋友出行与摄影团队，装载能力强，适合多日线路。',
    features: ['宽敞后备箱', '高顶空间', '滑雪装备可放置', '适合多人深度包车'],
  },
];
