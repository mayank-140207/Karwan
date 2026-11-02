import os
import re

raw = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\raw_html"
styles = set()
for f in os.listdir(raw):
    content = open(os.path.join(raw, f), encoding='utf-8').read()
    found = re.findall(r'style="([^"]*)"', content)
    styles.update(found)

print(f"Total unique style attributes across all screens: {len(styles)}")
for s in sorted(styles)[:25]:
    print(f"  style=\"{s}\"")

