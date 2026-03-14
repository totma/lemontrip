export const siteConfig = {
  name: 'LemonTrip',
  domain: 'lemontrip.vercel.app',
  defaultLocale: 'zh',
  locales: ['zh', 'ja', 'en'] as const,
  heroImage:
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
  contact: {
    phone: '+81-90-1234-5678',
    email: 'hello@lemontrip.jp',
    wechat: 'LemonTrip-Hokkaido',
    line: '@lemontrip',
  },
  socialProof: {
    years: 8,
    routes: 5,
    languages: 3,
  },
};

export type Locale = (typeof siteConfig.locales)[number];

export const localeLabels: Record<Locale, string> = {
  zh: '中文',
  ja: '日本語',
  en: 'English',
};
