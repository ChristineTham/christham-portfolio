/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
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
        icon_brightest: 'var(--color-icon-brightest)',
        icon_darker: 'var(--color-icon-darker)',
        icon_darkest: 'var(--color-icon-darkest)',
        icon_red: '#d2386c',
        icon_blue: '#919bc9',
        icon_orange: '#ec809e',
        icon_yellow: '#eada4f',
        icon_pink: '#F0047F',
        icon_purple: '#be9cc1',
        icon_green: '#64bfa4',
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
        // Add fonts if needed
      },
    },
  },
  plugins: [],
}
