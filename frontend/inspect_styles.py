import os, glob, re

styles = set()
for f in glob.glob('raw_html/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        for m in re.finditer(r'style="([^"]*)"', fp.read()):
            styles.add(m.group(1).strip())

print(f"Total unique style attrs: {len(styles)}")
for s in sorted(styles):
    print("-", s)

