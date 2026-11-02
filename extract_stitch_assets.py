import json
import base64
import os

steps = [
    (444, "auth_taj_mahal.png"),
    (476, "auth_heritage_fort.png"),
    (478, "auth_stepwell_baoli.png"),
    (480, "tab_solo_explorer.png"),
    (482, "tab_family_traveller.png"),
    (484, "tab_backpacker.png"),
    (486, "tab_business_traveller.png"),
    (488, "pine_ridge_cabin_exterior.png")
]

dest_dir = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\public\images"
os.makedirs(dest_dir, exist_ok=True)

for step_id, filename in steps:
    step_path = f"C:/Users/MAYANK/.gemini/antigravity/brain/d0cb3920-5633-4c2e-96da-0a23555afc59/.system_generated/steps/{step_id}/output.txt"
    if os.path.exists(step_path):
        with open(step_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        img_b64 = data.get('image')
        if img_b64:
            img_bytes = base64.b64decode(img_b64)
            out_file = os.path.join(dest_dir, filename)
            with open(out_file, 'wb') as out_f:
                out_f.write(img_bytes)
            print(f"Extracted {filename} ({len(img_bytes)} bytes)")
    else:
        print(f"Step file not found: {step_path}")

