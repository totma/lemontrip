import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'LemonTrip | 北海道包车路线展示',
  description: 'LemonTrip 北海道包车路线展示网站，包含路线列表、详情、车辆介绍与预约入口。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <body>
        <div className="min-h-screen bg-[linear-gradient(180deg,#edf7ff_0%,#f8fbfd_35%,#ffffff_100%)] text-slate-900">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
