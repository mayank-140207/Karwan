import json

with open('all_link_labels.json', encoding='utf-8') as f:
    labels = json.load(f)

for l in labels:
    print(f"- \"{l['label']}\" -> count {l['count']}, hrefs: {l['original_hrefs']}")

