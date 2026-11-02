import re
for f in ["raw_html/18_da59b22755b64c218ad1d0e2575cfe0f.html", "raw_html/19_e9b1da3269654a3388bc6621e3d2f28b.html", "raw_html/20_a968a791bff24660b8c5b5a48006ecc9.html"]:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    print("=" * 40, f)
    for m in re.finditer(r'<img[^>]*src=["\']([^"\']*)["\'][^>]*alt=["\']([^"\']*)["\']', c):
        print("IMG:", m.group(2)[:30], "|", m.group(1)[:50])
    for m in re.finditer(r'background-image:\s*url\((?:&quot;|")?([^"&)]*)(?:&quot;|")?\)', c):
        print("BG: ", m.group(1)[:50])

