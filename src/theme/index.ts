// Design tokens – color values only.
// Breakpoints, font sizes, spacing, sizing, and shadows use Tailwind defaults.
// Tailwind sizing: n * 0.25rem (e.g. 16 → 4rem, 48 → 12rem)

// Font stacks
export const fonts = {
  body: '"Noto Sans Variable", "Noto Sans", sans-serif',
  mono: '"Noto Sans Mono Variable", "Noto Sans Mono", monospace',
}

// Rosely palette (static – never changes between light/dark modes)
export const rosely = {
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
}

export const lightColors = {
  primary: '#8c4e80',
  secondary: '#93a9d1',
  text: '#27272a',
  heading: '#85677b',
  background: '#f4dede',
  divider: '#f4eee8',
  textMuted: '#303030',
  icon_brightest: '#be9cc1',
  icon_darker: '#b0879b',
  icon_darkest: '#85677b',
  icon_red: '#d2386c',
  icon_blue: '#919bc9',
  icon_orange: '#ec809e',
  icon_yellow: '#eada4f',
  icon_pink: '#F0047F',
  icon_purple: '#be9cc1',
  icon_green: '#64bfa4',
}

// Dark mode overrides
export const darkColors = {
  primary: '#93a9d1',
  text: '#f4dede',
  heading: '#f7caca',
  background: '#27272a',
  textMuted: '#909090',
  divider: '#85677b',
  icon_brightest: '#f7caca',
  icon_darker: '#b0879b',
  icon_darkest: '#85677b',
}
