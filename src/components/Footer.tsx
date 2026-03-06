import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">北海道プレミアムトラベル</h3>
            <p className="text-gray-300 text-sm mb-4">
              安心・安全・快適な北海道の旅
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>〒060-0000</p>
              <p>北海道札幌市中央区北X条西X丁目X-X</p>
              <p>电话: +81-11-XXX-XXXX</p>
              <p>邮箱: info@hokkaido-premium-travel.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-accent transition-colors">服务项目</Link></li>
              <li><Link href="/fleet" className="hover:text-accent transition-colors">车型价格</Link></li>
              <li><Link href="/routes" className="hover:text-accent transition-colors">热门线路</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">常见问题</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">关于我们</Link></li>
              <li><Link href="/reviews" className="hover:text-accent transition-colors">客户评价</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">旅游攻略</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">主要服务</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/airport" className="hover:text-accent transition-colors">机场接送</Link></li>
              <li><Link href="/services/sightseeing" className="hover:text-accent transition-colors">观光包车</Link></li>
              <li><Link href="/services/vip" className="hover:text-accent transition-colors">商务VIP</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">定制行程</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>LINE ID: @hokkaido-premium</p>
              <p>WhatsApp: +81-XX-XXXX-XXXX</p>
              <p>微信: HokkaidoPremium</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p className="mb-2">一般旅客自動車運送事業 北海道陸運局認可 第XXXX号</p>
          <p>&copy; 2024 北海道プレミアムトラベル株式会社 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
