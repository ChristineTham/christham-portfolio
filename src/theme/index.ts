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
} as const

export const lightColors = {
  primary: '#8c4e80',
  secondary: rosely.rosely7,
  text: rosely.rosely0,
  heading: rosely.rosely2,
  background: rosely.rosely5,
  divider: rosely.rosely6,
  textMuted: '#303030',
  icon_brightest: rosely.rosely8,
  icon_darker: rosely.rosely9,
  icon_darkest: rosely.rosely2,
  icon_red: rosely.rosely11,
  icon_blue: rosely.rosely15,
  icon_orange: rosely.rosely12,
  icon_yellow: rosely.rosely13,
  icon_pink: rosely.jamstack,
  icon_purple: rosely.rosely8,
  icon_green: rosely.rosely14,
}

// Dark mode overrides
export const darkColors = {
  primary: rosely.rosely7,
  text: rosely.rosely5,
  heading: rosely.rosely4,
  background: rosely.rosely0,
  textMuted: '#909090',
  divider: rosely.rosely2,
  icon_brightest: rosely.rosely4,
  icon_darker: rosely.rosely9,
  icon_darkest: rosely.rosely2,
}
