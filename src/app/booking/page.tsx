import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Reservation"
        title="预约入口页"
        description="当前为展示版预约入口，后续可接入表单服务、WhatsApp / LINE webhook 或 CRM。"
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-slate-900">建议用户提交的信息</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {['出发日期', '人数', '行李数量', '想去的路线', '上车地点', '语言需求', '联系方式', '其他备注'].map((field) => (
              <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
                {field}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-sky-50 p-5 text-sm leading-7 text-slate-600">
            这个页面现在承担“预约入口”与“信息收集说明”角色。正式上线时，可以替换为真实表单组件或第三方预约系统嵌入。
          </div>
        </section>
        <aside className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
          <p className="text-xs uppercase tracking-[0.34em] text-sky-200">Direct Contact</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
            <p>Phone: {siteConfig.contact.phone}</p>
            <p>Email: {siteConfig.contact.email}</p>
            <p>WeChat: {siteConfig.contact.wechat}</p>
            <p>LINE: {siteConfig.contact.line}</p>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-sm text-slate-200">
            推荐流程：先通过路线页筛选意向线路，再通过本页留下需求，最后由人工确认档期与报价。
          </div>
        </aside>
      </div>
    </div>
  );
}
