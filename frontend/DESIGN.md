---
name: Karwan Heritage Tech
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4d5f7e'
  primary: '#000d23'
  on-primary: '#ffffff'
  primary-container: '#10233f'
  on-primary-container: '#798bac'
  inverse-primary: '#b5c7eb'
  secondary: '#286a46'
  on-secondary: '#ffffff'
  secondary-container: '#adf2c3'
  on-secondary-container: '#2f704b'
  tertiary: '#000e21'
  on-tertiary: '#ffffff'
  tertiary-container: '#052443'
  on-tertiary-container: '#738cb1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7eb'
  on-primary-fixed: '#071b37'
  on-primary-fixed-variant: '#364765'
  secondary-fixed: '#adf2c3'
  secondary-fixed-dim: '#92d5a8'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#065230'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#afc8f0'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#2e4869'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
  text-gray: '#5A6472'
  pure-white: '#FFFFFF'
  success-green: '#2C6E49'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is built on a "Heritage Tech" aesthetic—a fusion of established, traditional travel authority and modern, seamless technology. It is designed to evoke a sense of security, reliability, and precision, catering to travelers who value both premium service and digital efficiency.

The visual style is **Corporate / Modern** with a focus on high-clarity information architecture. It leverages generous whitespace, structured layouts, and "floating" UI elements to create an editorial feel that remains highly functional. The aesthetic is clean and professional, using soft shadows and rounded geometries to humanize the authoritative navy and green palette.

## Colors

The palette is anchored by **Primary Navy**, used for high-level branding, navigation, and primary headings to establish immediate trust. **Trust Green** is reserved for actionable elements and success states, providing a vibrant but grounded contrast that signifies growth and safety.

**Deep Navy Accent** is utilized for subtle gradients and dark-mode-style sections to add depth and sophistication without breaking the primary brand color story. The neutral palette consists of an off-white background to reduce eye strain, paired with pure white for card surfaces to create clear visual separation. Secondary copy is set in **Text Gray** to maintain a clear typographic hierarchy.

## Typography

This design system employs a dual-font strategy to balance heritage with utility. **Noto Serif** is used for display titles and major headlines, providing an established, literary quality that feels premium and trustworthy. 

**Inter** handles all UI, body copy, and metadata. Its neutral, systematic nature ensures high legibility in data-dense environments like flight details or booking forms. For mobile, headline sizes are scaled down to maintain balance, while line heights are kept generous throughout to ensure a comfortable reading experience for travel itineraries.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** for desktop, ensuring content remains centered and readable on ultra-wide displays. On mobile, the system transitions to a single-column fluid layout with 20px margins.

Spacing follows an 8px base grid, emphasizing large "Section Gaps" (80px+) to create the "Voyentra-inspired" breathability. Content blocks within cards should use consistent 24px internal padding (stack-lg) to maintain a premium, airy feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Ambient Shadows**. The base background is the neutral off-white, while interactive content lives on pure white "Floating Cards."

Shadows are extremely soft and diffused, using a Primary Navy tint at very low opacity (4-8%) to prevent a "muddy" look. 
- **Low Elevation:** Used for standard cards. 2px Y-offset, 8px blur.
- **High Elevation:** Used for floating navigation bars and active info-popups. 12px Y-offset, 24px blur.
- **Glassmorphism:** Reserved for header backgrounds during scroll, using a 12px backdrop blur with 80% white opacity.

## Shapes

The shape language is defined by "Large Rounded Geometries," directly mirroring the brand's logo mark. A standard radius of **16px to 20px** is applied to all primary containers, buttons, and input fields. This consistent rounding softens the authoritative navy palette, making the tech feel more accessible and user-friendly. Small elements like chips or badges may use full pill-rounding to distinguish them from structural components.

## Components

### Buttons
Primary buttons use a solid **Trust Green** background with white text and a 20px border radius. Hover states should darken the green slightly. Secondary buttons use a Primary Navy outline or a ghost style with Navy text.

### Cards
Cards are the core of this design system. They must feature a white background, the standard 16-20px radius, and a soft ambient shadow. For "Voyentra-style" floating cards, use a slightly larger shadow and 32px of internal padding.

### Inputs
Input fields use the neutral background color with a subtle 1px border in Text Gray. On focus, the border transitions to Primary Navy. Use 16px horizontal padding to maintain the spacious feel.

### Chips & Tags
Used for travel categories or status (e.g., "Confirmed," "Trending"). These should be pill-shaped with a light tint of the primary or secondary color (10% opacity) and high-contrast text.

### Navigation
The main navigation should be a "Floating" bar at the top of the viewport, utilizing the glassmorphism effect and anchored by the Primary Navy logo and Noto Serif typography.