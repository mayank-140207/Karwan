import re
import json
import os

with open('url_to_local_image.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for f in ["raw_html/18_da59b22755b64c218ad1d0e2575cfe0f.html", "raw_html/19_e9b1da3269654a3388bc6621e3d2f28b.html", "raw_html/20_a968a791bff24660b8c5b5a48006ecc9.html"]:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    print("=" * 30, f)
    for m in re.finditer(r'<img\b[^>]*?\bsrc=["\']([^"\']+)["\']', c):
        src = m.group(1)
        if src.startswith('http'):
            local = d.get(src, 'MISSING')
            exists = os.path.exists(os.path.join('public', local.lstrip('/'))) if local != 'MISSING' else False
            print(f"SRC: {src[:40]} -> {local} (exists: {exists})")

