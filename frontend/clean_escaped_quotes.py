import glob
import re

count = 0
for f in glob.glob('src/**/*.jsx', recursive=True):
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Check for backslash before quote
    if "\\'" in content or '\\"' in content:
        print(f"Fixing escaped quotes in: {f}")
        # Clean specific fontVariationSettings backslashes
        fixed = content.replace(r"\'\"FILL\" 1\'", "\"'FILL' 1\"")
        fixed = fixed.replace(r"\'\"FILL\" 0\'", "\"'FILL' 0\"")
        fixed = fixed.replace(r"\'", "'")
        fixed = fixed.replace(r'\"', '"')
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(fixed)
        count += 1

print(f"Processed files, fixed {count} files.")

