import json
import re

styles = [
    '',
    'background-color: rgb(225, 226, 228);',
    'background-color: rgb(44, 110, 73);',
    'background-image: url(&quot;/images/img_1.jpg&quot;);',
    'background-image: url(&quot;/images/img_2.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; width: 100%; height: 100%;',
    'font-size: 28px;',
    'font-variation-settings: &quot;FILL&quot; 0;',
    'font-variation-settings: &quot;FILL&quot; 1;',
    "font-variation-settings: 'FILL' 0;",
    "font-variation-settings: 'FILL' 1;",
    'opacity: 1;',
    'right: 0px; z-index: 1; border-color: rgb(44, 110, 73);',
    'transform: rotate(0deg);',
    'transform: rotate(180deg);',
    'width: 62%;'
]

def style_to_jsx(css_str):
    css = css_str.replace('&quot;', "'").replace('"', "'")
    props = {}
    for decl in css.split(';'):
        if ':' not in decl: continue
        k, v = (s.strip() for s in decl.split(':', 1))
        if not k: continue
        if not k.startswith('--'):
            first, *rest = k.split('-')
            k = first + ''.join(w.capitalize() for w in rest)
        props[k] = v
    if not props:
        return ""
    return 'style={{ ' + ', '.join(f'{k}: {json.dumps(v)}' for k, v in props.items()) + ' }}'

for s in styles:
    print(f"INPUT:  {s}")
    print(f"OUTPUT: {style_to_jsx(s)}")
    print("-" * 40)

