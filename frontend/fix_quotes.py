import os
import re

for root, _, files in os.walk(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\src\pages"):
    for f in files:
        if f.endswith(".jsx"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as file:
                content = file.read()
            
            # Fix backslash escaped quotes in style
            content = content.replace(r'style={{ fontVariationSettings: \'"FILL" 1\' }}', 'style={{ fontVariationSettings: "\'FILL\' 1" }}')
            content = content.replace(r"\'", "'")
            
            with open(p, "w", encoding="utf-8") as file:
                file.write(content)

print("Fixed escaped quotes across all JSX files.")

