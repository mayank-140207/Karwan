import os
import re
import json
from collections import defaultdict

raw_dir = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\raw_html"
files = sorted(os.listdir(raw_dir), key=lambda x: int(x.split('_')[0]))

links_by_label = defaultdict(list)

for f in files:
    screen_idx = f.split('_')[0]
    screen_id = f.split('_')[1].replace('.html', '')
    p = os.path.join(raw_dir, f)
    with open(p, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Find all <a ...>...</a>
    matches = re.findall(r'<a\b([^>]*)>([\s\S]*?)</a>', content, re.IGNORECASE)
    for attrs, inner in matches:
        # Clean text
        text = re.sub(r'<[^>]+>', ' ', inner).strip()
        text = ' '.join(text.split())
        href_match = re.search(r'href=["\']([^"\']*)["\']', attrs, re.IGNORECASE)
        href = href_match.group(1) if href_match else ""
        if text:
            links_by_label[text].append({
                "screen": f,
                "href": href
            })

print(f"Total unique link labels found: {len(links_by_label)}")
summary = []
for label, occ in sorted(links_by_label.items(), key=lambda x: len(x[1]), reverse=True):
    summary.append({
        "label": label,
        "count": len(occ),
        "screens": list(set(o["screen"] for o in occ))[:3],
        "original_hrefs": list(set(o["href"] for o in occ))
    })

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\all_link_labels.json", "w", encoding="utf-8") as out:
    json.dump(summary, out, indent=2)

print("Saved link labels to all_link_labels.json")

