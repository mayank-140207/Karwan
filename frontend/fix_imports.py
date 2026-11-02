import os

for root, _, files in os.walk(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\src\pages"):
    for f in files:
        if f.endswith(".jsx"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as file:
                content = file.read()
            
            # Check if this file is directly in src/pages or in a subfolder like src/pages/auth
            rel = os.path.relpath(p, r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\src")
            # If rel is "pages\LandingPage.jsx", depth is 1 -> "../components/layout/..."
            # If rel is "pages\auth\LoginPage.jsx", depth is 2 -> "../../components/layout/..."
            parts = rel.split(os.sep)
            depth = len(parts) - 1 # number of directories above
            rel_prefix = "../" * depth
            
            import re
            content = re.sub(
                r"from '(\.\./)+components/layout/(SharedLayout|DetailLayout)';",
                f"from '{rel_prefix}components/layout/\\2';",
                content
            )
            
            with open(p, "w", encoding="utf-8") as file:
                file.write(content)

print("Fixed layout import paths across all JSX files.")

