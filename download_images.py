import json
import os
import urllib.request
import hashlib
from concurrent.futures import ThreadPoolExecutor

img_dir = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\public\images"
os.makedirs(img_dir, exist_ok=True)

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\images_list.json", "r", encoding="utf-8") as f:
    images = json.load(f)

print(f"Total images to download: {len(images)}")

mapping = {}

def download_img(url):
    # Create deterministic filename from url hash
    h = hashlib.md5(url.encode('utf-8')).hexdigest()[:12]
    filename = f"img_{h}.jpg"
    filepath = os.path.join(img_dir, filename)
    local_url = f"/images/{filename}"
    mapping[url] = local_url
    
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        return True
    
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(filepath, 'wb') as f:
                f.write(data)
        return True
    except Exception as e:
        print(f"Failed to download {url[:60]}...: {e}")
        return False

with ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(download_img, images))

print(f"Downloaded {sum(1 for r in results if r)} of {len(images)} images.")

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\url_to_local_image.json", "w", encoding="utf-8") as f:
    json.dump(mapping, f, indent=2)

