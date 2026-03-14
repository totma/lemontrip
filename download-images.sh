#!/bin/bash
# 北海道景点图片下载脚本

set -e

TEMP_DIR="/home/yangsen/lemontrip/temp-images"
mkdir -p "$TEMP_DIR"

# 定义图片URL列表
# 旭山动物园 - 企鹅散步
declare -a PENGUIN_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Asahiyama_Zoo_Penguin_Walk.jpg/1280px-Asahiyama_Zoo_Penguin_Walk.jpg"
  "https://www.japan-guide.com/g18/6101_01.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/a8b5e_0004663003_1.jpg"
  "https://www.asahiyamazoo.jp/penguin-walk/images/penguin-walk-01.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
)

# 旭山动物园 - 北极熊
declare -a POLAR_BEAR_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Polar_Bear_Asahiyama_Zoo.jpg/1280px-Polar_Bear_Asahiyama_Zoo.jpg"
  "https://www.asahiyamazoo.jp/images/polar-bear.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/polar_0004663001.jpg"
)

# 青池冬季
declare -a BLUE_POND_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Blue_Pond_Biei_Hokkaido.jpg/1280px-Blue_Pond_Biei_Hokkaido.jpg"
  "https://www.biei-hokkaido.jp/wp-content/uploads/2020/01/blue-pond-winter.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/blue_0004663002.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.japan-guide.com/g18/6101_02.jpg"
)

# 白须瀑布冬季
declare -a SHIRAHIGE_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Shirahige_Falls_Biei.jpg/1280px-Shirahige_Falls_Biei.jpg"
  "https://www.biei-hokkaido.jp/wp-content/uploads/2020/01/shirahige-winter.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/shirahige_0004663003.jpg"
  "https://www.japan-guide.com/g18/6101_03.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
)

# 小樽运河冬季
declare -a OTARU_CANAL_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Otaru_Canal_Winter.jpg/1280px-Otaru_Canal_Winter.jpg"
  "https://www.japan-guide.com/g18/6101_04.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/otaru_0004663004.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.otaru.gr.jp/wp-content/uploads/2020/01/canal-winter.jpg"
)

# 天狗山展望台
declare -a TENGU_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tengu_Mountain_Otaru.jpg/1280px-Tengu_Mountain_Otaru.jpg"
  "https://www.japan-guide.com/g18/6101_05.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/tengu_0004663005.jpg"
)

# 洞爷湖冬季
declare -a TOYA_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lake_Toya_Winter.jpg/1280px-Lake_Toya_Winter.jpg"
  "https://www.japan-guide.com/g18/6101_06.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/toya_0004663006.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.town.toyako.hokkaido.jp/wp-content/uploads/2020/01/lake-winter.jpg"
)

# 摩周湖冬季
declare -a MASHU_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lake_Mashu_Winter.jpg/1280px-Lake_Mashu_Winter.jpg"
  "https://www.japan-guide.com/g18/6101_07.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/mashu_0004663007.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.akan-mashu.jp/wp-content/uploads/2020/01/mashu-winter.jpg"
)

# 网走流冰破冰船
declare -a ABASHIRI_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Abashiri_Drift_Ice.jpg/1280px-Abashiri_Drift_Ice.jpg"
  "https://www.japan-guide.com/g18/6101_08.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/abashiri_0004663008.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.abashiri-kanko.jp/wp-content/uploads/2020/01/drift-ice.jpg"
)

# 丹顶鹤
declare -a CRANE_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Red_Crowned_Crane_Hokkaido.jpg/1280px-Red_Crowned_Crane_Hokkaido.jpg"
  "https://www.japan-guide.com/g18/6101_09.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/crane_0004663009.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.turui.jp/wp-content/uploads/2020/01/crane.jpg"
)

# 阿寒湖冬季
declare -a AKAN_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lake_Akan_Winter.jpg/1280px-Lake_Akan_Winter.jpg"
  "https://www.japan-guide.com/g18/6101_10.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/akan_0004663010.jpg"
)

# 北海道冬季公路
declare -a ROAD_URLS=(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hokkaido_Winter_Road.jpg/1280px-Hokkaido_Winter_Road.jpg"
  "https://www.japan-guide.com/g18/6101_11.jpg"
  "https://cdn.jalan.jp/jalan/img/3/kuchikomi/4663/KXL/road_0004663011.jpg"
  "https://resources.matcha-jp.com/resize/720x2000/2019/03/06-72604.webp"
  "https://www.hokkaido.jp/wp-content/uploads/2020/01/winter-road.jpg"
)

# 下载函数
download_image() {
  local url="$1"
  local output="$2"
  local max_retries=3
  local retry=0
  
  while [ $retry -lt $max_retries ]; do
    if curl -sL --max-time 30 "$url" -o "$output" 2>/dev/null; then
      # 检查文件是否有效
      if [ -s "$output" ] && file "$output" | grep -qE "image|JPEG|PNG|WebP"; then
        echo "✓ Downloaded: $output"
        return 0
      fi
    fi
    retry=$((retry + 1))
    sleep 2
  done
  
  echo "✗ Failed to download: $url"
  rm -f "$output"
  return 1
}

# 下载所有图片
echo "开始下载北海道景点图片..."

# 创建目录
mkdir -p "$TEMP_DIR/asahiyama/penguin"
mkdir -p "$TEMP_DIR/asahiyama/polar-bear"
mkdir -p "$TEMP_DIR/biei/blue-pond"
mkdir -p "$TEMP_DIR/biei/shirahige"
mkdir -p "$TEMP_DIR/otaru/canal"
mkdir -p "$TEMP_DIR/otaru/tengu"
mkdir -p "$TEMP_DIR/toya"
mkdir -p "$TEMP_DIR/mashu"
mkdir -p "$TEMP_DIR/abashiri"
mkdir -p "$TEMP_DIR/crane"
mkdir -p "$TEMP_DIR/akan"
mkdir -p "$TEMP_DIR/road"

# 下载图片
counter=1
for url in "${PENGUIN_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/asahiyama/penguin/penguin_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${POLAR_BEAR_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/asahiyama/polar-bear/polar_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${BLUE_POND_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/biei/blue-pond/blue_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${SHIRAHIGE_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/biei/shirahige/shirahige_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${OTARU_CANAL_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/otaru/canal/canal_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${TENGU_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/otaru/tengu/tengu_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${TOYA_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/toya/toya_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${MASHU_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/mashu/mashu_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${ABASHIRI_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/abashiri/abashiri_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${CRANE_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/crane/crane_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${AKAN_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/akan/akan_$counter.jpg" || true
  counter=$((counter + 1))
done

counter=1
for url in "${ROAD_URLS[@]}"; do
  download_image "$url" "$TEMP_DIR/road/road_$counter.jpg" || true
  counter=$((counter + 1))
done

echo "下载完成！"
echo ""
echo "下载统计:"
find "$TEMP_DIR" -type f -name "*.jpg" | wc -l | xargs echo "总图片数:"
find "$TEMP_DIR" -type f -name "*.jpg" -exec ls -la {} \; | awk '{sum+=$5} END {print "总大小: " sum/1024/1024 " MB"}'
