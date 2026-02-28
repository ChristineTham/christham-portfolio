import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Allow manual dark mode toggling via a class
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
        heading: 'var(--color-heading)',
        background: 'var(--color-background)',
        divider: 'var(--color-divider)',
        textMuted: 'var(--color-textMuted)',
        icon_brightest: 'var(--color-icon_brightest)',
        icon_darker: 'var(--color-icon_darker)',
        icon_darkest: 'var(--color-icon_darkest)',
        icon_red: 'var(--color-icon_red)',
        icon_blue: 'var(--color-icon_blue)',
        icon_orange: 'var(--color-icon_orange)',
        icon_yellow: 'var(--color-icon_yellow)',
        icon_pink: 'var(--color-icon_pink)',
        icon_purple: 'var(--color-icon_purple)',
        icon_green: 'var(--color-icon_green)',
        rosely0: '#27272a',
        rosely1: '#615f5f',
        rosely2: '#85677b',
        rosely3: '#a49e9e',
        rosely4: '#f7caca',
        rosely5: '#f4dede',
        rosely6: '#f4eee8',
        rosely7: '#93a9d1',
        rosely8: '#be9cc1',
        rosely9: '#b0879b',
        rosely10: '#b565a7',
        rosely11: '#d2386c',
        rosely12: '#ec809e',
        rosely13: '#eada4f',
        rosely14: '#64bfa4',
        rosely15: '#919bc9',
        jamstack: '#F0047F',
      },
      fontFamily: {
        mono: ['monospace'],
      },
      letterSpacing: {
        wide: '0.025em',
      },
      animation: {
        'up-down': 'upDown 4s ease-in-out infinite alternate',
        'up-down-wide': 'upDownWide 18s ease-in-out infinite alternate',
        wave: 'wave linear infinite alternate',
      },
      keyframes: {
        upDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(30px)' },
        },
        upDownWide: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200px)' },
        },
        wave: {
          '0%': { d: 'path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z")' },
          '50%': { d: 'path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z")' },
          '100%': { d: 'path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z")' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
