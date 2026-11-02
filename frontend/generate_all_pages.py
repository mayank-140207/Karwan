import os
import re
import json

BASE_DIR = r"c:\Users\MAYANK\OneDrive\Documents\KARWAN WEB"
SRC_DIR = os.path.join(BASE_DIR, "src")
LAYOUTS_DIR = os.path.join(SRC_DIR, "components", "layout")

with open(os.path.join(BASE_DIR, "url_to_local_image.json"), "r", encoding="utf-8") as f:
    img_map = json.load(f)

# Definition of the 35 screens and their target component and layout
pages_spec = [
    {
        "id": "931ebb8140734d9482fbbce7e998f71f",
        "file": "1_931ebb8140734d9482fbbce7e998f71f.html",
        "dest": os.path.join(SRC_DIR, "pages", "LandingPage.jsx"),
        "name": "LandingPage",
        "layout": "SharedLayout",
        "title": "Karwan - Travel with the trust of a local",
        "is_custom": True
    },
    {
        "id": "7b628e06db8f48fe982e33b2744b67e5",
        "file": "2_7b628e06db8f48fe982e33b2744b67e5.html",
        "dest": os.path.join(SRC_DIR, "pages", "HomePage.jsx"),
        "name": "HomePage",
        "layout": "SharedLayout",
        "title": "Karwan - Traveler Home",
        "is_custom": False
    },
    {
        "id": "2d48569aeeab4112a5da7ba083b68176",
        "file": "3_2d48569aeeab4112a5da7ba083b68176.html",
        "dest": os.path.join(SRC_DIR, "pages", "NotFoundPage.jsx"),
        "name": "NotFoundPage",
        "layout": "SharedLayout",
        "title": "404 Not Found",
        "is_custom": False
    },
    {
        "id": "8091dcc7723045cf8985961abf95bee9",
        "file": "4_8091dcc7723045cf8985961abf95bee9.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "ImmersiveLoginPage.jsx"),
        "name": "ImmersiveLoginPage",
        "layout": "AuthLayout",
        "title": "Karwan - Immersive Login",
        "is_custom": False
    },
    {
        "id": "af66b242359048bb9fd5aeaded794b96",
        "file": "5_af66b242359048bb9fd5aeaded794b96.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "LoginPage.jsx"),
        "name": "LoginPage",
        "layout": "AuthLayout",
        "title": "Log in to Karwan",
        "is_custom": False
    },
    {
        "id": "3aeb915323374fc8a08d44c9362a2704",
        "file": "6_3aeb915323374fc8a08d44c9362a2704.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "RoleSelectionPage.jsx"),
        "name": "RoleSelectionPage",
        "layout": "AuthLayout",
        "title": "Select Your Role",
        "is_custom": False
    },
    {
        "id": "5ce3b5f8511143d98eb415cd8a0fc895",
        "file": "7_5ce3b5f8511143d98eb415cd8a0fc895.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "SignupStep1Page.jsx"),
        "name": "SignupStep1Page",
        "layout": "AuthLayout",
        "title": "Karwan - Sign Up",
        "is_custom": False
    },
    {
        "id": "dabed8bb75404028992277b550a0c261",
        "file": "8_dabed8bb75404028992277b550a0c261.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "SignupStep2Page.jsx"),
        "name": "SignupStep2Page",
        "layout": "AuthLayout",
        "title": "Sign Up Step 2 (DigiLocker)",
        "is_custom": False
    },
    {
        "id": "ec9df051594f4caa9ee5b9396706f794",
        "file": "9_ec9df051594f4caa9ee5b9396706f794.html",
        "dest": os.path.join(SRC_DIR, "pages", "auth", "OtpVerificationPage.jsx"),
        "name": "OtpVerificationPage",
        "layout": "AuthLayout",
        "title": "Verify OTP",
        "is_custom": False
    },
    {
        "id": "01a3480e62984115ae44a940b1eb04e3",
        "file": "10_01a3480e62984115ae44a940b1eb04e3.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "PlanRoutePage.jsx"),
        "name": "PlanRoutePage",
        "layout": "SharedLayout",
        "title": "Plan Trip - Route",
        "is_custom": False
    },
    {
        "id": "41c54c9b5a2c48d5acbe9c94eaa5ad16",
        "file": "11_41c54c9b5a2c48d5acbe9c94eaa5ad16.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "PlanPreferencesPage.jsx"),
        "name": "PlanPreferencesPage",
        "layout": "SharedLayout",
        "title": "Plan Trip - Preferences",
        "is_custom": False
    },
    {
        "id": "3fc1f40e6e4e455a8c7afc5e069e18b7",
        "file": "12_3fc1f40e6e4e455a8c7afc5e069e18b7.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "PlanReviewPage.jsx"),
        "name": "PlanReviewPage",
        "layout": "SharedLayout",
        "title": "Review Itinerary",
        "is_custom": False
    },
    {
        "id": "2b83e6d2d7d54ef897b22ba1acefd1ff",
        "file": "13_2b83e6d2d7d54ef897b22ba1acefd1ff.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "AdaptiveItineraryPage.jsx"),
        "name": "AdaptiveItineraryPage",
        "layout": "DetailLayout",
        "title": "Your Adaptive Itinerary",
        "is_custom": False
    },
    {
        "id": "daca15712ca1471aa72a5b5bea1e1ab6",
        "file": "14_daca15712ca1471aa72a5b5bea1e1ab6.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "LiveTrailPage.jsx"),
        "name": "LiveTrailPage",
        "layout": "DetailLayout",
        "title": "LiveTrail Transit Dashboard",
        "is_custom": False
    },
    {
        "id": "4c44889ddbd54d60b444fd645a9e9bbf",
        "file": "15_4c44889ddbd54d60b444fd645a9e9bbf.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "TrustRadarPage.jsx"),
        "name": "TrustRadarPage",
        "layout": "DetailLayout",
        "title": "TrustRadar Dashboard",
        "is_custom": False
    },
    {
        "id": "575c8a57a8754a96a3cf6187fb356460",
        "file": "16_575c8a57a8754a96a3cf6187fb356460.html",
        "dest": os.path.join(SRC_DIR, "pages", "trip", "TripCompletionPage.jsx"),
        "name": "TripCompletionPage",
        "layout": "SharedLayout",
        "title": "Trip Completion (Rate & Verify)",
        "is_custom": False
    },
    {
        "id": "4bcc0b9838fe40aca61092b819e5270d",
        "file": "17_4bcc0b9838fe40aca61092b819e5270d.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "GroundTruthDirectoryPage.jsx"),
        "name": "GroundTruthDirectoryPage",
        "layout": "SharedLayout",
        "title": "Ground Truth Directory",
        "is_custom": False
    },
    {
        "id": "da59b22755b64c218ad1d0e2575cfe0f",
        "file": "18_da59b22755b64c218ad1d0e2575cfe0f.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "PineRidgeCabinPage.jsx"),
        "name": "PineRidgeCabinPage",
        "layout": "DetailLayout",
        "title": "Pine Ridge Cabin (Stay Details)",
        "is_custom": False
    },
    {
        "id": "e9b1da3269654a3388bc6621e3d2f28b",
        "file": "19_e9b1da3269654a3388bc6621e3d2f28b.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "HeritageHaveliPage.jsx"),
        "name": "HeritageHaveliPage",
        "layout": "DetailLayout",
        "title": "The Heritage Haveli (Stay Details)",
        "is_custom": False
    },
    {
        "id": "a968a791bff24660b8c5b5a48006ecc9",
        "file": "20_a968a791bff24660b8c5b5a48006ecc9.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "MewarPalaceVillaPage.jsx"),
        "name": "MewarPalaceVillaPage",
        "layout": "DetailLayout",
        "title": "Mewar Palace Villa (Stay Details)",
        "is_custom": False
    },
    {
        "id": "35705193b2f6425c8f4f93bd3a918771",
        "file": "21_35705193b2f6425c8f4f93bd3a918771.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "RajeshGuptaGuidePage.jsx"),
        "name": "RajeshGuptaGuidePage",
        "layout": "DetailLayout",
        "title": "Rajesh Gupta (Guide Details)",
        "is_custom": False
    },
    {
        "id": "b70790ae8aec4c2a95ef4dc3a178fce1",
        "file": "22_b70790ae8aec4c2a95ef4dc3a178fce1.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "VendorDetailsPage.jsx"),
        "name": "VendorDetailsPage",
        "layout": "DetailLayout",
        "title": "Vendor Details",
        "is_custom": False
    },
    {
        "id": "87a59c96cb384cb691e48397808dbd83",
        "file": "23_87a59c96cb384cb691e48397808dbd83.html",
        "dest": os.path.join(SRC_DIR, "pages", "directory", "MarketSquareSouvenirsPage.jsx"),
        "name": "MarketSquareSouvenirsPage",
        "layout": "DetailLayout",
        "title": "Market Square Souvenirs",
        "is_custom": False
    },
    {
        "id": "e35e541363594a70aa6aab20948b9ba7",
        "file": "24_e35e541363594a70aa6aab20948b9ba7.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "TravellerDashboardPage.jsx"),
        "name": "TravellerDashboardPage",
        "layout": "SharedLayout",
        "title": "Karwan - Traveller Dashboard",
        "is_custom": False
    },
    {
        "id": "d5f8daeb63dc4328abd1ed22f6e1fac6",
        "file": "25_d5f8daeb63dc4328abd1ed22f6e1fac6.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "ProfilePage.jsx"),
        "name": "ProfilePage",
        "layout": "SharedLayout",
        "title": "Your Profile (KARWAN ID)",
        "is_custom": False
    },
    {
        "id": "33416955f2894571a4a5bce751630f99",
        "file": "26_33416955f2894571a4a5bce751630f99.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "SettingsPage.jsx"),
        "name": "SettingsPage",
        "layout": "SharedLayout",
        "title": "Karwan - Settings",
        "is_custom": False
    },
    {
        "id": "f918d220469043beabf3c3c4acc54313",
        "file": "27_f918d220469043beabf3c3c4acc54313.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "PrivacySettingsPage.jsx"),
        "name": "PrivacySettingsPage",
        "layout": "SharedLayout",
        "title": "Settings - Privacy & Verification",
        "is_custom": False
    },
    {
        "id": "f483a67e4c9240a2a317264c27602993",
        "file": "28_f483a67e4c9240a2a317264c27602993.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "NotificationsSettingsPage.jsx"),
        "name": "NotificationsSettingsPage",
        "layout": "SharedLayout",
        "title": "Settings - Notifications",
        "is_custom": False
    },
    {
        "id": "f2997b91c3554c2e9f15a94de604b56b",
        "file": "29_f2997b91c3554c2e9f15a94de604b56b.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "HelpSupportPage.jsx"),
        "name": "HelpSupportPage",
        "layout": "SharedLayout",
        "title": "Settings - Help & Support",
        "is_custom": False
    },
    {
        "id": "21073382e643497397df97f5077df154",
        "file": "30_21073382e643497397df97f5077df154.html",
        "dest": os.path.join(SRC_DIR, "pages", "dashboard", "NotificationsPage.jsx"),
        "name": "NotificationsPage",
        "layout": "SharedLayout",
        "title": "Notifications",
        "is_custom": False
    },
    {
        "id": "f42f7f8b4e6d422992fbbb3b40ac93e4",
        "file": "31_f42f7f8b4e6d422992fbbb3b40ac93e4.html",
        "dest": os.path.join(SRC_DIR, "pages", "partner", "PartnerDashboardPage.jsx"),
        "name": "PartnerDashboardPage",
        "layout": "SharedLayout",
        "title": "Karwan - Partner Dashboard",
        "is_custom": False
    },
    {
        "id": "3b59a460bf4c40df8ea71144947c5221",
        "file": "32_3b59a460bf4c40df8ea71144947c5221.html",
        "dest": os.path.join(SRC_DIR, "pages", "partner", "PartnerKycStep1Page.jsx"),
        "name": "PartnerKycStep1Page",
        "layout": "DetailLayout",
        "title": "Partner KYC - Step 1",
        "is_custom": False
    },
    {
        "id": "cd3a1736037d46c383342aa83281145a",
        "file": "33_cd3a1736037d46c383342aa83281145a.html",
        "dest": os.path.join(SRC_DIR, "pages", "partner", "PartnerKycStep2Page.jsx"),
        "name": "PartnerKycStep2Page",
        "layout": "DetailLayout",
        "title": "Partner KYC - Step 2 (Documents)",
        "is_custom": False
    },
    {
        "id": "5f4cae2f30cd44b69acdb556655292ed",
        "file": "34_5f4cae2f30cd44b69acdb556655292ed.html",
        "dest": os.path.join(SRC_DIR, "pages", "partner", "PartnerKycStep3Page.jsx"),
        "name": "PartnerKycStep3Page",
        "layout": "DetailLayout",
        "title": "Partner KYC - Step 3 (Review)",
        "is_custom": False
    },
    {
        "id": "ac4a42c1433c4884983bb0b09a49e3dc",
        "file": "35_ac4a42c1433c4884983bb0b09a49e3dc.html",
        "dest": os.path.join(SRC_DIR, "pages", "partner", "EditListingPage.jsx"),
        "name": "EditListingPage",
        "layout": "DetailLayout",
        "title": "Edit Listing (Provider)",
        "is_custom": False
    }
]

def style_to_jsx(m):
    css = m.group(1).replace('&quot;', "'").replace('"', "'")
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

def smart_target_for_link(attrs, text_snippet=""):
    full_str = (attrs + " " + text_snippet).lower()
    
    if "trustradar" in full_str:
        return "/trip/trustradar"
    if "livetrail" in full_str or "telemetry" in full_str:
        return "/trip/livetrail"
    if "auto-heal" in full_str or "itinerar" in full_str:
        return "/trip/itinerary"
    if "ground truth" in full_str or "directory" in full_str:
        return "/directory"
    if "pine ridge" in full_str:
        return "/directory/stays/pine-ridge-cabin"
    if "heritage haveli" in full_str:
        return "/directory/stays/heritage-haveli"
    if "mewar" in full_str:
        return "/directory/stays/mewar-palace-villa"
    if "rajesh" in full_str:
        return "/directory/guides/rajesh-gupta"
    if "souvenir" in full_str or "market square" in full_str:
        return "/directory/vendors/market-square-souvenirs"
    if "vendor" in full_str:
        return "/directory/vendors/details"
    if "profile" in full_str or "karwan id" in full_str or "personal info" in full_str:
        return "/profile"
    if "notifications" in full_str:
        return "/notifications"
    if "privacy" in full_str:
        return "/settings/privacy"
    if "help" in full_str or "support" in full_str or "faq" in full_str:
        return "/settings/help"
    if "setting" in full_str or "account" in full_str or "payment" in full_str:
        return "/settings"
    if "log in" in full_str or "login" in full_str or "sign in" in full_str:
        return "/auth/login"
    if "sign up" in full_str or "signup" in full_str or "register" in full_str or "create account" in full_str:
        return "/auth/signup-step-1"
    if "back to step 1" in full_str or "change phone" in full_str:
        return "/auth/signup-step-1"
    if "partner" in full_str or "provider" in full_str or "kyc" in full_str:
        return "/partner/dashboard"
    if "preference" in full_str:
        return "/trip/plan/preferences"
    if "route" in full_str or "plan" in full_str:
        return "/trip/plan/route"
    if "review" in full_str:
        return "/trip/plan/review"
    if "complete" in full_str or "rate & verify" in full_str:
        return "/trip/complete"
    if "404" in full_str:
        return "/404"
    if "home" in full_str or "dashboard" in full_str or "karwan" in full_str:
        return "/home"
    
    return "/directory"

def clean_to_jsx_body(html_content, page_name):
    # 1. Map remote images to local downloaded images
    for r_url, l_path in img_map.items():
        html_content = html_content.replace(r_url, l_path)
    
    # 2. Extract content from <main> or <body>
    main_m = re.search(r"<main[\s\S]*?</main>", html_content)
    if main_m:
        body = main_m.group(0)
    else:
        body_m = re.search(r"<body[\s\S]*?</body>", html_content)
        body = body_m.group(0) if body_m else html_content

    # Drop outer <main> or <body> tags
    body = re.sub(r"^<main[^>]*>", "", body)
    body = re.sub(r"</main>$", "", body)
    body = re.sub(r"^<body[^>]*>", "", body)
    body = re.sub(r"</body>$", "", body)
    
    # Strip script tags
    body = re.sub(r"<script[\s\S]*?</script>", "", body)
    
    # Convert standard HTML attributes to JSX:
    body = re.sub(r'\bclass="', 'className="', body)
    body = re.sub(r"\bclass='", "className='", body)
    body = re.sub(r'\bfor="', 'htmlFor="', body)
    body = re.sub(r'\btabindex="', 'tabIndex="', body)
    body = re.sub(r'\bautocomplete="', 'autoComplete="', body)
    body = re.sub(r'\bautofocus\b', 'autoFocus', body)
    body = re.sub(r'\breadonly\b', 'readOnly', body)
    
    # Form value / checked conversion for React:
    body = re.sub(r'\bvalue="([^"]*)"', r'defaultValue="\1"', body)
    body = re.sub(r"\bvalue='([^']*)'", r"defaultValue='\1'", body)
    body = re.sub(r'\bchecked="checked"', 'defaultChecked', body)
    body = re.sub(r'\bchecked=""', 'defaultChecked', body)
    body = re.sub(r'\bchecked\b', 'defaultChecked', body)
    
    # Remove HTML event handlers like onclick="...", onchange="..."
    body = re.sub(r'\bon[a-z]+="[^"]*"', '', body)
    body = re.sub(r"\bon[a-z]+='[^']*'", '', body)
    
    # Self close void tags: img, input, hr, br
    body = re.sub(r'(<img\b[^>]*?)(?<!/)>', r'\1 />', body)
    body = re.sub(r'(<input\b[^>]*?)(?<!/)>', r'\1 />', body)
    body = re.sub(r'(<hr\b[^>]*?)(?<!/)>', r'\1 />', body)
    body = re.sub(r'(<br\b[^>]*?)(?<!/)>', r'\1 />', body)
    
    # Style conversion using style_to_jsx
    body = re.sub(r'style="([^"]*)"', style_to_jsx, body)
    
    # SVG attributes:
    body = re.sub(r'\bstroke-width="', 'strokeWidth="', body)
    body = re.sub(r'\bstroke-linecap="', 'strokeLinecap="', body)
    body = re.sub(r'\bstroke-linejoin="', 'strokeLinejoin="', body)
    body = re.sub(r'\bfill-rule="', 'fillRule="', body)
    body = re.sub(r'\bclip-rule="', 'clipRule="', body)
    body = re.sub(r'\bstroke-dasharray="', 'strokeDasharray="', body)
    body = re.sub(r'\bstroke-dashoffset="', 'strokeDashoffset="', body)
    body = re.sub(r'\bclip-path="', 'clipPath="', body)
    body = re.sub(r'\bfill-opacity="', 'fillOpacity="', body)
    body = re.sub(r'\bstroke-opacity="', 'strokeOpacity="', body)
    body = re.sub(r'\bstop-color="', 'stopColor="', body)
    body = re.sub(r'\bstop-opacity="', 'stopOpacity="', body)
    
    # Replace comments:
    body = re.sub(r'<!--([\s\S]*?)-->', r'{/* \1 */}', body)
    
    # HTML entities:
    body = body.replace('&quot;', '"')
    body = body.replace('&amp;', '&')

    # Convert <a>...</a> properly to <Link to="...">...</Link>
    def link_repl(match):
        attrs = match.group(1)
        inner = match.group(2)
        
        # Check original href
        href_m = re.search(r'href=["\']([^"\']*)["\']', attrs)
        if href_m:
            href_val = href_m.group(1).strip()
            if href_val and href_val != '#' and not href_val.startswith('javascript:'):
                target_route = href_val
            else:
                target_route = smart_target_for_link(attrs, inner)
            # Remove existing href
            clean_attrs = re.sub(r'href=["\'][^"\']*["\']', '', attrs)
        else:
            target_route = smart_target_for_link(attrs, inner)
            clean_attrs = attrs
            
        clean_attrs = clean_attrs.strip()
        attrs_str = f" {clean_attrs}" if clean_attrs else ""
        return f'<Link to="{target_route}"{attrs_str}>{inner}</Link>'

    # Process all links
    body = re.sub(r'<a\b([^>]*)>([\s\S]*?)</a>', link_repl, body)

    return body

updated_count = 0
for p in pages_spec:
    if p.get("is_custom", False):
        print(f"Preserving custom page: {p['name']}")
        continue
    
    src_file = os.path.join(BASE_DIR, "raw_html", p["file"])
    with open(src_file, "r", encoding="utf-8") as f:
        html = f.read()
    
    jsx_body = clean_to_jsx_body(html, p["name"])
    layout = p["layout"]
    
    # Robust relative path calculation
    dest_dir = os.path.dirname(p["dest"])
    os.makedirs(dest_dir, exist_ok=True)
    rel_path_to_layout = os.path.relpath(os.path.join(LAYOUTS_DIR, layout), dest_dir).replace('\\', '/')
    layout_import = f"import {layout} from '{rel_path_to_layout}';"
    
    code = f"""import React, {{ useState }} from 'react';
import {{ Link, useNavigate }} from 'react-router-dom';
{layout_import}

export default function {p["name"]}() {{
  const navigate = useNavigate();

  return (
    <{layout} title="{p["title"]}">
      <div className="karwan-{p["name"].lower()}">
        {jsx_body}
      </div>
    </{layout}>
  );
}}
"""
    with open(p["dest"], "w", encoding="utf-8") as out:
        out.write(code)
    updated_count += 1

print(f"Successfully generated and updated {updated_count} pages with full JSX styles, smart links, and correct layouts.")
