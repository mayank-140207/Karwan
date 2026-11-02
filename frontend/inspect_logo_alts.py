import json
with open('url_to_local_image.json', 'r', encoding='utf-8') as f:
    img_map = json.load(f)

# Find where data-alt or alt mentions logo
import glob, re
for f in glob.glob('raw_html/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    for m in re.finditer(r'<img[^>]*alt=["\']([^"\']*)["\'][^>]*>', c):
        tag = m.group(0)
        if 'logo' in tag.lower():
            src_m = re.search(r'src=["\']([^"\']*)["\']', tag)
            alt_m = re.search(r'data-alt=["\']([^"\']*)["\']', tag)
            alt_val = alt_m.group(1) if alt_m else m.group(1)
            src_val = src_m.group(1) if src_m else ''
            print(f"{f[:15]} | {img_map.get(src_val, 'N/A')} | {alt_val[:90]}")

