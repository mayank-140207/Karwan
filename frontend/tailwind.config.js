/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core Design Tokens
        page: "#F8F9FB",
        ink: "#0B1220",
        muted: "#5A6472",
        border: "#E4E7EC",
        navy: "#10233F",
        green: {
          DEFAULT: "#2C6E49",
          hover: "#245A3C",
          light: "#E8F3ED",
          dark: "#1E4D33",
        },
        dark: {
          DEFAULT: "#070B14",
          surface: "#0B1220",
          border: "#162238",
        },

        // Semantic & Legacy mappings for backwards-compatibility
        "primary": "#10233F",
        "on-primary": "#ffffff",
        "primary-container": "#10233f",
        "on-primary-container": "#798bac",
        "inverse-primary": "#b5c7eb",

        "secondary": "#2C6E49",
        "on-secondary": "#ffffff",
        "secondary-container": "#adf2c3",
        "on-secondary-container": "#2f704b",

        "tertiary": "#000e21",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#052443",
        "on-tertiary-container": "#738cb1",

        "surface": "#f8f9fb",
        "surface-dim": "#d9dadc",
        "surface-bright": "#f8f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#edeef0",
        "surface-container-high": "#e7e8ea",
        "surface-container-highest": "#e1e2e4",
        "on-surface": "#0B1220",
        "on-surface-variant": "#5A6472",
        "inverse-surface": "#2e3132",
        "inverse-on-surface": "#f0f1f3",

        "background": "#f8f9fb",
        "on-background": "#0B1220",
        "surface-variant": "#e1e2e4",
        "surface-tint": "#4d5f7e",
        "outline": "#75777e",
        "outline-variant": "#E4E7EC",

        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#b5c7eb",
        "on-primary-fixed": "#071b37",
        "on-primary-fixed-variant": "#364765",

        "secondary-fixed": "#adf2c3",
        "secondary-fixed-dim": "#92d5a8",
        "on-secondary-fixed": "#002110",
        "on-secondary-fixed-variant": "#065230",

        "tertiary-fixed": "#d4e3ff",
        "tertiary-fixed-dim": "#afc8f0",
        "on-tertiary-fixed": "#001c39",
        "on-tertiary-fixed-variant": "#2e4869",

        "text-gray": "#5A6472",
        "pure-white": "#FFFFFF",
        "success-green": "#2C6E49",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "button": "10px",
        "card": "16px",
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      letterSpacing: {
        "tight-heading": "-0.03em",
        "mono-label": "0.08em"
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "section-gap": "80px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "24px"
      },
      maxWidth: {
        "container-max": "1280px"
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Noto Serif'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        heading: ["'Inter'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        "display-lg": ["'Inter'", "sans-serif"],
        "headline-lg": ["'Inter'", "sans-serif"],
        "headline-lg-mobile": ["'Inter'", "sans-serif"],
        "headline-md": ["'Inter'", "sans-serif"],
        "body-lg": ["'Inter'", "sans-serif"],
        "body-md": ["'Inter'", "sans-serif"],
        "label-md": ["'Inter'", "sans-serif"],
        "label-sm": ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        "ambient": "0 4px 24px -2px rgba(16, 35, 63, 0.06), 0 2px 8px -1px rgba(16, 35, 63, 0.04)",
        "floating": "0 12px 32px -4px rgba(16, 35, 63, 0.08), 0 4px 16px -2px rgba(16, 35, 63, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(11, 18, 32, 0.08), 0 4px 12px -2px rgba(11, 18, 32, 0.03)",
        "button-hover": "0 4px 14px 0 rgba(44, 110, 73, 0.25)",
        "button-secondary-hover": "0 4px 12px 0 rgba(11, 18, 32, 0.08)"
      }
    },
  },
  plugins: [],
}
