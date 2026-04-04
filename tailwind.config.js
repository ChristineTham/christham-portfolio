/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './gatsby-browser.tsx',
    './gatsby-ssr.tsx',
  ],
  darkMode: 'class',
  theme: {
    // Override default breakpoints to match the project's responsive breakpoints
    screens: {
      xs: '400px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {
      colors: {
        // CSS custom properties are used at runtime for dark mode, so we
        // expose them as Tailwind utility aliases via CSS variables.
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
        heading: 'var(--color-heading)',
        background: 'var(--color-background)',
        divider: 'var(--color-divider)',
        textMuted: 'var(--color-textMuted)',
        icon: {
          brightest: 'var(--color-icon_brightest)',
          darker: 'var(--color-icon_darker)',
          darkest: 'var(--color-icon_darkest)',
          red: 'var(--color-icon_red)',
          blue: 'var(--color-icon_blue)',
          orange: 'var(--color-icon_orange)',
          yellow: 'var(--color-icon_yellow)',
          pink: 'var(--color-icon_pink)',
          purple: 'var(--color-icon_purple)',
          green: 'var(--color-icon_green)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Variable"', '"Noto Sans"', 'sans-serif'],
        mono: ['"Noto Sans Mono Variable"', '"Noto Sans Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
