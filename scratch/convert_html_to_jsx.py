import os
import re
import json

with open(r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB\url_to_local_image.json", "r", encoding="utf-8") as f:
    img_map = json.load(f)

def clean_html_to_jsx(html_content):
    # 1. Replace image URLs with local paths
    for remote_url, local_path in img_map.items():
        html_content = html_content.replace(remote_url, local_path)
    
    # 2. Extract <main> or <body> content
    main_match = re.search(r"<main[\s\S]*?</main>", html_content)
    if main_match:
        content = main_match.group(0)
    else:
        body_match = re.search(r"<body[\s\S]*?</body>", html_content)
        content = body_match.group(0) if body_match else html_content
    
    # Remove <script> tags
    content = re.sub(r"<script[\s\S]*?</script>", "", content)
    
    # Replace class= with className=
    content = re.sub(r'\bclass="', 'className="', content)
    content = re.sub(r"\bclass='", "className='", content)
    
    # Replace for= with htmlFor=
    content = re.sub(r'\bfor="', 'htmlFor="', content)
    
    # Replace onclick with onClick
    content = re.sub(r'\bonclick="[^"]*"', '', content)
    
    # Replace tabindex with tabIndex
    content = re.sub(r'\btabindex="', 'tabIndex="', content)
    
    # Replace autocomplete with autoComplete
    content = re.sub(r'\bautocomplete="', 'autoComplete="', content)
    
    # Replace autofocus with autoFocus
    content = re.sub(r'\bautofocus\b', 'autoFocus', content)
    
    # Replace readonly with readOnly
    content = re.sub(r'\breadonly\b', 'readOnly', content)
    
    # Self-close void elements: img, input, hr, br
    content = re.sub(r'(<img\b[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<input\b[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<hr\b[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<br\b[^>]*?)(?<!/)>', r'\1 />', content)
    
    # Style attribute conversion: style="font-variation-settings: &quot;FILL&quot; 1;" -> style={{ fontVariationSettings: '"FILL" 1' }}
    content = re.sub(
        r'style="font-variation-settings:\s*(?:&quot;|")FILL(?:&quot;|")\s*1;?"',
        r'style={{ fontVariationSettings: \'"FILL" 1\' }}',
        content
    )
    content = re.sub(
        r'style="opacity:\s*1;?"',
        r'style={{ opacity: 1 }}',
        content
    )
    content = re.sub(
        r'style="transform:\s*rotate\(([^\)]+)\);?"',
        r'style={{ transform: "rotate(\1)" }}',
        content
    )
    # Generic style="..." remove any remaining style strings that cause JSX parse error
    content = re.sub(r'style="[^"]*"', '', content)
    
    # SVG attributes: stroke-width -> strokeWidth, stroke-linecap -> strokeLinecap, stroke-linejoin -> strokeLinejoin
    content = re.sub(r'\bstroke-width="', 'strokeWidth="', content)
    content = re.sub(r'\bstroke-linecap="', 'strokeLinecap="', content)
    content = re.sub(r'\bstroke-linejoin="', 'strokeLinejoin="', content)
    content = re.sub(r'\bfill-rule="', 'fillRule="', content)
    content = re.sub(r'\bclip-rule="', 'clipRule="', content)
    
    # HTML entities
    content = content.replace('&quot;', '"')
    content = content.replace('&amp;', '&')
    
    # Replace comments <!-- ... --> with {/* ... */}
    content = re.sub(r'<!--([\s\S]*?)-->', r'{/* \1 */}', content)
    
    # Convert <a href="#"> to <Link to="..."> or <a>
    content = re.sub(r'<a\b', '<a', content)
    
    return content

print("Helper defined.")

