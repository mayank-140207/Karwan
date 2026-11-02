import os
import re

def preview_page(idx, filename):
    path = os.path.join(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\raw_html", filename)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract title and body
    title = re.search(r"<title>(.*?)</title>", content)
    title_str = title.group(1) if title else "No title"
    main_match = re.search(r"<main[\s\S]*?</main>", content)
    main_len = len(main_match.group(0)) if main_match else len(content)
    print(f"[{idx}] {filename} -> Title: {title_str} | Main tag length: {main_len}")

files = sorted(os.listdir(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\raw_html"), key=lambda x: int(x.split("_")[0]))
for f in files:
    idx = f.split("_")[0]
    preview_page(idx, f)

