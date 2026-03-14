#!/bin/bash
# 从Unsplash下载高质量北海道冬季图片

TEMP_DIR="/home/yangsen/lemontrip/temp-images"

# Unsplash图片ID列表 - 北海道相关
# 企鹅散步
curl -sL "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200" -o "$TEMP_DIR/asahiyama/penguin/penguin_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=1200" -o "$TEMP_DIR/asahiyama/penguin/penguin_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200" -o "$TEMP_DIR/asahiyama/penguin/penguin_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=1200" -o "$TEMP_DIR/asahiyama/penguin/penguin_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200" -o "$TEMP_DIR/asahiyama/penguin/penguin_5.jpg" &

# 北极熊
curl -sL "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200" -o "$TEMP_DIR/asahiyama/polar-bear/polar_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200" -o "$TEMP_DIR/asahiyama/polar-bear/polar_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=1200" -o "$TEMP_DIR/asahiyama/polar-bear/polar_3.jpg" &

# 青池
curl -sL "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200" -o "$TEMP_DIR/biei/blue-pond/blue_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/biei/blue-pond/blue_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200" -o "$TEMP_DIR/biei/blue-pond/blue_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/biei/blue-pond/blue_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/biei/blue-pond/blue_5.jpg" &

# 小樽运河
curl -sL "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200" -o "$TEMP_DIR/otaru/canal/canal_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200" -o "$TEMP_DIR/otaru/canal/canal_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/otaru/canal/canal_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/otaru/canal/canal_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/otaru/canal/canal_5.jpg" &

# 洞爷湖
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/toya/toya_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/toya/toya_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/toya/toya_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/toya/toya_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/toya/toya_5.jpg" &

# 摩周湖
curl -sL "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200" -o "$TEMP_DIR/mashu/mashu_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/mashu/mashu_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/mashu/mashu_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/mashu/mashu_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/mashu/mashu_5.jpg" &

# 丹顶鹤
curl -sL "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200" -o "$TEMP_DIR/crane/crane_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=1200" -o "$TEMP_DIR/crane/crane_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200" -o "$TEMP_DIR/crane/crane_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=1200" -o "$TEMP_DIR/crane/crane_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200" -o "$TEMP_DIR/crane/crane_5.jpg" &

# 阿寒湖
curl -sL "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200" -o "$TEMP_DIR/akan/akan_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/akan/akan_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/akan/akan_3.jpg" &

# 冬季公路
curl -sL "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200" -o "$TEMP_DIR/road/road_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/road/road_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/road/road_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/road/road_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/road/road_5.jpg" &

# 天狗山
curl -sL "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200" -o "$TEMP_DIR/otaru/tengu/tengu_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200" -o "$TEMP_DIR/otaru/tengu/tengu_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/otaru/tengu/tengu_3.jpg" &

# 白须瀑布
curl -sL "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200" -o "$TEMP_DIR/biei/shirahige/shirahige_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/biei/shirahige/shirahige_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/biei/shirahige/shirahige_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/biei/shirahige/shirahige_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/biei/shirahige/shirahige_5.jpg" &

# 网走破冰船
curl -sL "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200" -o "$TEMP_DIR/abashiri/abashiri_1.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/abashiri/abashiri_2.jpg" &
curl -sL "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" -o "$TEMP_DIR/abashiri/abashiri_3.jpg" &
curl -sL "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200" -o "$TEMP_DIR/abashiri/abashiri_4.jpg" &
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200" -o "$TEMP_DIR/abashiri/abashiri_5.jpg" &

wait
echo "所有图片下载完成!"
