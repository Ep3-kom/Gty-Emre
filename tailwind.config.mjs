/**
 * GTY design tokens — monotonaal ink + teal palet.
 *
 * Primair: diep navy/ink #001F32.
 * Achtergronden: zuiver wit + koele grijzen, geen gele undertoon.
 * Accent: teal #2F5D5F — gebruikt voor links, hairlines en subtiele highlights.
 *         Geen rode/oranje accenten.
 *
 * WCAG AA (kerncombinaties):
 *
 *   ink              #001F32  op  paper  #FFFFFF   →  17.2:1   AAA  body / CTA bg
 *   ink-soft         #4A5A6A  op  paper  #FFFFFF   →   7.4:1   AAA  caption
 *   navy.700         #143F60  op  paper  #FFFFFF   →   9.6:1   AAA  link / heading
 *   paper            #FFFFFF  op  navy.900         →  17.2:1   AAA  inverse
 *   accent           #2F5D5F  op  paper  #FFFFFF   →   6.9:1   AAA  accent links
 */

const navy = {
  50:  '#F0F4F7',
  100: '#DDE7EE',
  200: '#B8CDDF',
  300: '#8AABC8',
  400: '#5485B0',
  500: '#2D6691',
  600: '#1F5077',
  700: '#143F60',
  800: '#0A2E47',
  900: '#001F32',
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
      teal: navy,
      ink: '#001F32',
      'ink-soft': '#4A5A6A',
      paper: '#FFFFFF',
      cream: '#FFFFFF',
      'cream-deep': '#F5F5F5',
      line: '#E3E3E3',
      'line-cool': '#E3E3E3',
      accent: '#2F5D5F',
      'accent-deep': '#1F4244',
      'signal-amber': '#7F57EE',
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
        edit: '0 1px 2px rgba(10,10,10,0.08), 0 0 0 1px rgba(10,10,10,0.04)',
        lift: '0 4px 14px rgba(10,10,10,0.08)',
      },
      transitionTimingFunction: {
        'ease-out-soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
