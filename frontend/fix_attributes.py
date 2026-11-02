import os
import re

count = 0
for root, _, files in os.walk(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\src\pages"):
    for f in files:
        if f.endswith(".jsx"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as file:
                content = file.read()
            
            new_content = re.sub(r'\bmaxlength="', 'maxLength="', content)
            new_content = re.sub(r'\bminlength="', 'minLength="', new_content)
            
            if new_content != content:
                count += 1
                with open(p, "w", encoding="utf-8") as file:
                    file.write(new_content)

print(f"Updated {count} files for maxLength / minLength.")

