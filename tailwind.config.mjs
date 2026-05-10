/**
 * GTY design tokens.
 *
 * Kleurensysteem afgeleid van logo-fill #B8E3E5 (teal.200), uitgebouwd in
 * dezelfde hue (~183°) tot een werkbare schaal. Geen default Tailwind colors.
 *
 * WCAG AA contrast-verificatie (gebruikte combinaties op productie):
 *
 *   ink              #0F1B1F  op  paper  #FAFAF7   →  17.4:1   AAA  body
 *   ink-soft         #3A4B4F  op  paper  #FAFAF7   →   8.4:1   AAA  caption
 *   ink              #0F1B1F  op  cream  #F1EBDD   →  16.0:1   AAA  body op cream
 *   teal.900         #143031  op  paper  #FAFAF7   →  13.0:1   AAA  CTA button bg
 *   teal.900         #143031  op  cream  #F1EBDD   →  11.9:1   AAA  headings
 *   teal.700         #2F5D5F  op  paper  #FAFAF7   →   7.5:1   AAA  link / heading
 *   teal.700         #2F5D5F  op  cream  #F1EBDD   →   6.9:1   AAA  link op cream
 *   paper            #FAFAF7  op  teal.900 #143031  →  13.0:1  AAA  CTA button text
 *   paper            #FAFAF7  op  ink    #0F1B1F   →  17.4:1   AAA  inverse panel
 *   accent           #A53E26  op  paper  #FAFAF7   →   5.9:1   AA   accent links
 *   accent           #A53E26  op  cream  #F1EBDD   →   5.4:1   AA   accent op cream
 *
 * Originele accent #B8462E gaf 4.45:1 op cream — net onder AA. Daarom verlaagd
 * naar #A53E26 voor garantie 5:1+. teal.500 #5A9598 mag NIET als body-text op
 * paper (3.0:1, alleen UI / large text).
 */

const teal = {
  50:  '#EEF7F7',
  100: '#D5ECEC',
  200: '#B8E3E5',
  300: '#94D0D2',
  400: '#73B7B9',
  500: '#5A9598',
  600: '#447576',
  700: '#2F5D5F',
  800: '#1F4445',
  900: '#143031',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal,
      ink: '#0F1B1F',
      'ink-soft': '#3A4B4F',
      paper: '#FAFAF7',
      cream: '#F1EBDD',
      'cream-deep': '#E8DFC9',
      line: '#E2DDCF',
      'line-cool': '#D9E5E5',
      accent: '#A53E26',
      'accent-deep': '#7E2E1B',
      'signal-amber': '#C68A1A',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      display: ['"Newsreader Variable"', 'Newsreader', 'Georgia', 'serif'],
      sans: ['"Inter Variable"', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      'caption': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      'small':   ['0.875rem', { lineHeight: '1.375rem' }],
      'base':    ['1rem', { lineHeight: '1.625rem' }],
      'lead':    ['1.125rem', { lineHeight: '1.75rem' }],
      'h4':      ['1.375rem', { lineHeight: '1.875rem', letterSpacing: '-0.005em' }],
      'h3':      ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
      'h2':      ['2.375rem', { lineHeight: '2.875rem', letterSpacing: '-0.015em' }],
      'h1':      ['3.25rem', { lineHeight: '3.625rem', letterSpacing: '-0.02em' }],
      'hero':    ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.025em' }],
    },
    extend: {
      maxWidth: {
        prose: '68ch',
        container: '1180px',
        narrow: '880px',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        md: '6px',
        DEFAULT: '6px',
      },
      boxShadow: {
        edit: '0 1px 2px rgba(15,27,31,0.08), 0 0 0 1px rgba(15,27,31,0.04)',
        lift: '0 4px 14px rgba(15,27,31,0.08)',
      },
      transitionTimingFunction: {
        'ease-out-soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
