import glob
import re
import json

urls = set()
for f in glob.glob('raw_html/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    # 1. img src
    for m in re.finditer(r'<img\b[^>]*?\bsrc=["\']([^"\']+)["\']', c):
        urls.add(m.group(1))
    
    # 2. inline background-image
    for m in re.finditer(r'url\((?:&quot;|")?([^"&)]+)(?:&quot;|")?\)', c):
        u = m.group(1).strip()
        if u.startswith('http'):
            urls.add(u)

print(f"Total unique remote image URLs found: {len(urls)}")

with open('url_to_local_image.json', 'r', encoding='utf-8') as f:
    existing_map = json.load(f)

missing = [u for u in urls if u not in existing_map]
print(f"Already mapped: {len(urls) - len(missing)}")
print(f"Missing from map: {len(missing)}")
for u in missing[:15]:
    print(" -", u[:80])

