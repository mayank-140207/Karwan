import glob
import re
import json

with open('url_to_local_image.json', 'r', encoding='utf-8') as f:
    img_map = json.load(f)

logos = set()
for f in glob.glob('raw_html/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    for m in re.finditer(r'<img[^>]*src=["\']([^"\']*)["\'][^>]*alt=["\']Karwan Logo["\']', c, re.I):
        url = m.group(1)
        local_path = img_map.get(url, 'MISSING')
        logos.add((f, local_path, url[:40]))

for f, loc, u in sorted(logos):
    print(f"{f:30} {loc:30} {u}")

