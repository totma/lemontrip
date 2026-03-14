import os, re, time, random, json
from pathlib import Path
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

BASE = Path('/home/yangsen/hokkaido-screenshots')
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'

TASKS = [
    ('asahiyama','penguin-walk','旭山动物园 企鹅散步 冬季', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('asahiyama','polar-bear','旭山动物园 北极熊馆', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('asahiyama','seal','旭山动物园 海豹馆', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('biei-furano','blue-pond','美瑛 青池 冬季 雪景', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('biei-furano','shirahige-falls','白须瀑布 冬季', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('biei-furano','patchwork-road','美瑛 拼布之路 冬季', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('biei-furano','shikisai-hill','四季彩之丘 冬季', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('otaru','canal','小樽运河 冬季 雪景', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('otaru','sakaimachi','小樽 堺町通', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('otaru','tenguyama','小樽 天狗山 展望台', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('noboribetsu-toya','lake-toya','洞爷湖 冬季 湖景', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('noboribetsu-toya','snowmobile','北海道 雪地摩托 体验', ['site:klook.com','site:tripadvisor.com','site:ctrip.com','site:mafengwo.cn']),
    ('noboribetsu-toya','jigokudani','登别 地狱谷', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('noboribetsu-toya','onsen-street','登别 温泉街', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('east-hokkaido','mashu','摩周湖 冬季 湖景', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('east-hokkaido','abashiri-icebreaker','网走 流冰 破冰船', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('east-hokkaido','red-crowned-crane','北海道 丹顶鹤', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('east-hokkaido','kussharo-swans','屈斜路湖 天鹅', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('east-hokkaido','shiretoko-goko','知床五湖', ['site:tripadvisor.com','site:klook.com','site:ctrip.com','site:mafengwo.cn']),
    ('vehicles','alphard-exterior','Toyota Alphard exterior', ['site:klook.com','site:tripadvisor.com','site:ctrip.com','site:mafengwo.cn']),
    ('vehicles','alphard-interior','Toyota Alphard interior', ['site:klook.com','site:tripadvisor.com','site:ctrip.com','site:mafengwo.cn']),
    ('vehicles','hiace-exterior','Toyota Hiace exterior', ['site:klook.com','site:tripadvisor.com','site:ctrip.com','site:mafengwo.cn']),
    ('vehicles','hiace-interior','Toyota Hiace interior', ['site:klook.com','site:tripadvisor.com','site:ctrip.com','site:mafengwo.cn']),
]

SITE_TAGS = {
    'tripadvisor.com': 'tripadvisor',
    'klook.com': 'klook',
    'ctrip.com': 'ctrip',
    'mafengwo.cn': 'mafengwo',
}


def slugify(s):
    return re.sub(r'[^a-z0-9-]+','-',s.lower()).strip('-')


def dismiss_dialogs(page):
    texts = ['Accept','I agree','同意','接受','知道了','稍后再说','Close','关闭']
    for t in texts:
        try:
            page.get_by_text(t, exact=False).first.click(timeout=1200)
            page.wait_for_timeout(500)
        except Exception:
            pass


def smart_scroll(page, steps=5):
    for i in range(steps):
        page.mouse.wheel(0, 1200)
        page.wait_for_timeout(1000 + random.randint(200, 900))


def best_image_locator(page):
    selectors = [
        'img[src*="jpg"]', 'img[src*="jpeg"]', 'img[src*="webp"]', 'img[srcset]',
        '[class*="image"] img', '[class*="photo"] img', '[class*="gallery"] img',
        'figure img', 'main img'
    ]
    for sel in selectors:
        try:
            loc = page.locator(sel)
            count = loc.count()
            if count:
                for i in range(min(count, 12)):
                    try:
                        box = loc.nth(i).bounding_box()
                        if box and box['width'] >= 240 and box['height'] >= 160:
                            return loc.nth(i)
                    except Exception:
                        continue
        except Exception:
            continue
    return None


def source_from_url(url):
    for k,v in SITE_TAGS.items():
        if k in url:
            return v
    return 'web'


def capture(page, out_path):
    loc = best_image_locator(page)
    if loc:
        try:
            loc.scroll_into_view_if_needed(timeout=2000)
            page.wait_for_timeout(1200)
            loc.screenshot(path=str(out_path))
            return 'element'
        except Exception:
            pass
    page.screenshot(path=str(out_path), full_page=True)
    return 'fullpage'


def run():
    BASE.mkdir(parents=True, exist_ok=True)
    report = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, executable_path='/usr/bin/google-chrome', args=['--disable-blink-features=AutomationControlled'])
        context = browser.new_context(user_agent=UA, viewport={'width': 1440, 'height': 2200}, locale='zh-CN')
        page = context.new_page()
        page.set_default_timeout(18000)
        for category, slug, query, preferred_sites in TASKS:
            success = False
            item = {'category': category, 'slug': slug, 'query': query, 'captures': []}
            for site in preferred_sites:
                search_url = 'https://www.google.com/search?tbm=isch&q=' + query.replace(' ', '+') + '+' + site
                try:
                    page.goto(search_url, wait_until='domcontentloaded')
                    page.wait_for_timeout(2200 + random.randint(500, 1400))
                    dismiss_dialogs(page)
                    smart_scroll(page, steps=2)
                    out = BASE / category / f'{slug}-{source_from_url(site)}-01.png'
                    mode = capture(page, out)
                    if out.exists() and out.stat().st_size > 15_000:
                        item['captures'].append({'path': str(out), 'site': source_from_url(site), 'mode': mode, 'size': out.stat().st_size, 'url': page.url})
                        success = True
                        time.sleep(2.2 + random.random())
                        if len(item['captures']) >= 1:
                            break
                except PlaywrightTimeoutError:
                    continue
                except Exception:
                    continue
            report.append(item)
        context.close()
        browser.close()
    with open(BASE / 'report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    print(str(BASE / 'report.json'))

if __name__ == '__main__':
    run()
