import json
import os

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\url_to_local_image.json", "r", encoding="utf-8") as f:
    mapping = json.load(f)

img_dir = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\public\images"
valid_files = [f for f in os.listdir(img_dir) if f.endswith(".jpg") and os.path.getsize(os.path.join(img_dir, f)) > 0]
default_fallback = f"/images/{valid_files[0]}" if valid_files else ""

fixed_mapping = {}
for url, local_path in mapping.items():
    filename = os.path.basename(local_path)
    full_path = os.path.join(img_dir, filename)
    if os.path.exists(full_path) and os.path.getsize(full_path) > 0:
        fixed_mapping[url] = local_path
    else:
        fixed_mapping[url] = default_fallback

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\url_to_local_image.json", "w", encoding="utf-8") as f:
    json.dump(fixed_mapping, f, indent=2)

print(f"Fallback mapping complete. Total mapped: {len(fixed_mapping)}")

