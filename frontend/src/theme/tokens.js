/**
 * KARWAN Design Tokens
 * Master source of truth for design tokens across the application.
 */

export const TOKENS = {
  colors: {
    page: '#F8F9FB',
    ink: '#0B1220',
    muted: '#5A6472',
    border: '#E4E7EC',
    navy: '#10233F',
    green: {
      DEFAULT: '#2C6E49',
      hover: '#245A3C',
      light: '#E8F3ED',
      dark: '#1E4D33',
    },
    dark: {
      DEFAULT: '#070B14',
      surface: '#0B1220',
      border: '#162238',
      glow: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(44, 110, 73, 0.18), rgba(16, 35, 63, 0.25), transparent)',
    },
    white: '#FFFFFF',
    amber: '#D97706',
    red: '#DC2626',
  },
  typography: {
    fontFamilies: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
      serifAccent: "'Noto Serif', serif",
      mono: "'JetBrains Mono', monospace",
    },
    heading: {
      fontWeight: '700',
      letterSpacing: '-0.03em',
      lineHeight: '1.15',
    },
    italicAccent: {
      fontFamily: "'Noto Serif', serif",
      fontStyle: 'italic',
      fontWeight: '400',
    },
    body: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    monoLabel: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '12px',
      lineHeight: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: '500',
    },
  },
  radii: {
    button: '10px',
    card: '16px',
    pill: '9999px',
    input: '10px',
  },
  shadows: {
    card: '0 1px 3px 0 rgba(11, 18, 32, 0.04), 0 1px 2px -1px rgba(11, 18, 32, 0.02)',
    cardHover: '0 12px 30px -4px rgba(11, 18, 32, 0.08), 0 4px 12px -2px rgba(11, 18, 32, 0.03)',
    buttonPrimaryHover: '0 4px 14px 0 rgba(44, 110, 73, 0.25)',
    buttonSecondaryHover: '0 4px 12px 0 rgba(11, 18, 32, 0.08)',
  },
  motion: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      reveal: '600ms',
    },
    stagger: '80ms',
    translateY: '16px',
    hoverLift: '-2px',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  grid: {
    size: '70px',
    lineColor: 'rgba(11, 18, 32, 0.05)',
  },
};

export default TOKENS;
