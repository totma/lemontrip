# 柠檬旅行网站图片审核报告

## 审核日期：2026-03-14

## 发现的问题图片清单

### 1. 严重不匹配（需要删除）

| 文件路径 | 问题描述 | 原因 |
|---------|---------|------|
| `/images/asahiyama/polar-bear/01.jpg` | 合成图，包含"WELCOME TO HOKKAIDO"文字 | 有水印/文字的合成图 |
| `/images/asahiyama/snow-zoo/01.jpg` | 同上，合成图 | 有水印/文字的合成图 |
| `/images/asahiyama/snow-zoo/02.jpg` | 同上，合成图 | 有水印/文字的合成图 |
| `/images/asahiyama/snow-zoo/03.jpg` | 同上，合成图 | 有水印/文字的合成图 |
| `/images/asahiyama/snow-zoo/04.jpg` | 同上，合成图 | 有水印/文字的合成图 |
| `/images/snow-scenery/01.jpg` | 同上，合成图 | 有水印/文字的合成图 |
| `/images/biei-furano/blue-pond-winter/01.jpg` | 显示的是森林小屋，不是青池 | 与景点名称不符 |
| `/images/biei-furano/shirahige-falls/01.jpg` | 合成图，包含企鹅和"北海道一日游"文字 | 有水印/文字的合成图 |
| `/images/otaru/sakaimachi/01.jpg` | 与小樽运河图片重复 | 重复图片 |
| `/images/otaru/snow-street/01.jpg` | 与小樽运河图片重复 | 重复图片 |
| `/images/otaru/snow-street/02.jpg` | 与小樽运河图片重复 | 重复图片 |
| `/images/otaru/canal/05.jpg` | 显示的是白色恋人公园（札幌），不是小樽 | 与景点名称不符 |
| `/images/noboribetsu-toya/lake-toya/01.jpg` | 显示的是夏季森林小屋，不是洞爷湖 | 与景点名称不符 |
| `/images/east-hokkaido/mashu-lake/01.jpg` | 显示的是中国杭州西湖，不是摩周湖 | 与景点名称严重不符 |
| `/images/east-hokkaido/abashiri-icebreaker/01.jpg` | 模糊夜景，不是破冰船 | 与景点名称不符，质量低 |
| `/images/east-hokkaido/red-crowned-crane/01.jpg` | 显示的是日本美食拼贴图 | 与景点名称严重不符 |
| `/images/biei-furano/patchwork-road/01.jpg` | 夏季绿色田野，但路线是冬季/全季 | 季节不匹配（有水印） |
| `/images/biei-furano/shikisai-no-oka/01.webp` | 夏季薰衣草花田，但路线是冬季 | 季节不匹配 |

### 2. 需要替换的图片

| 文件路径 | 当前内容 | 需要替换原因 |
|---------|---------|-------------|
| `/images/asahiyama/penguin-walk/01.jpg` | 单只企鹅室内照 | 需要冬季户外企鹅散步场景 |
| `/images/asahiyama/seal/01.jpg` | 企鹅散步（不是海豹） | 与文件夹名称不符 |
| `/images/otaru/canal/01.jpg` | 夏季/秋季运河（有Klook水印） | 需要冬季雪景运河 |

### 3. 可以保留的图片

| 文件路径 | 内容描述 |
|---------|---------|
| `/images/asahiyama/seal/02.jpg` | 海豹游泳 - 符合 |
| `/images/asahiyama/seal/03.jpg` | 海豹游泳 - 符合 |
| `/images/asahiyama/seal/04.jpg` | 海豹游泳 - 符合 |
| `/images/asahiyama/seal/05.jpg` | 海豹游泳 - 符合 |
| `/images/asahiyama/penguin-walk/02.jpg` | 企鹅散步冬季场景 - 符合 |
| `/images/asahiyama/penguin-walk/03.jpg` | 企鹅散步冬季场景 - 符合 |
| `/images/asahiyama/penguin-walk/04.jpg` | 企鹅散步冬季场景 - 符合 |
| `/images/asahiyama/penguin-walk/05.jpg` | 企鹅散步冬季场景 - 符合 |
| `/images/noboribetsu-toya/onsen-street/01.jpg` | 登别温泉街冬季夜景 - 符合 |
| `/images/noboribetsu-toya/jigokudani/01.jpg` | 地狱谷木质栈道 - 符合 |
| `/images/noboribetsu-toya/snowmobile/01.jpg` | 雪地摩托+洞爷湖背景 - 符合 |
| `/images/east-hokkaido/kussharo-swans/01.jpg` | 屈斜路湖天鹅 - 符合 |
| `/images/east-hokkaido/shiretoko-five-lakes/01.jpg` | 知床五湖展望台 - 符合 |
| `/images/snow-scenery/06.jpg` | 冬季温泉街夜景 - 符合 |
| `/images/snow-scenery/07.jpg` | 冬季温泉街夜景 - 符合 |

## 需要搜集的新图片清单

### 旭山动物园路线
- [ ] 冬季企鹅散步（户外雪地场景）x 5张
- [ ] 北极熊馆 x 3张
- [ ] 旭川拉面/午餐场景 x 2张

### 美瑛富良野路线
- [ ] 冬季青池雪景 x 5张
- [ ] 冬季白须瀑布 x 5张
- [ ] 冬季拼布之路雪景 x 3张
- [ ] 冬季四季彩之丘 x 3张
- [ ] 富良野午餐/汤咖喱 x 2张

### 小樽路线
- [ ] 冬季小樽运河雪景 x 5张
- [ ] 堺町通街道雪景 x 3张
- [ ] 天狗山展望台 x 3张
- [ ] 小樽海鲜/寿司午餐 x 2张

### 登别洞爷路线
- [ ] 洞爷湖冬季湖景 x 5张
- [ ] 雪地摩托体验 x 3张（已有）
- [ ] 登别地狱谷 x 3张（已有）
- [ ] 洞爷湖午餐场景 x 2张

### 道东6天5晚路线
- [ ] 摩周湖冬季湖景 x 5张
- [ ] 网走流冰破冰船 x 5张
- [ ] 丹顶鹤 x 5张
- [ ] 阿寒湖雪景 x 3张

### 通用雪景
- [ ] 北海道冬季公路雪景 x 5张
