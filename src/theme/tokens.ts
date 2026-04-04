// Design tokens replacing the @theme-ui/preset-tailwind-based theme

export const breakpoints = ['400px', '600px', '900px', '1200px', '1600px']

export const fontSizes = [
  '0.875rem', // 0
  '1rem',     // 1
  '1.125rem', // 2
  '1.25rem',  // 3
  '1.5rem',   // 4
  '1.875rem', // 5
  '2.25rem',  // 6
  '3rem',     // 7
  '4rem',     // 8
  '4.5rem',   // 9
]

// Tailwind spacing scale from @theme-ui/preset-tailwind (index → rem value)
export const space = [
  '0',         // 0
  '0.25rem',   // 1
  '0.5rem',    // 2
  '1rem',      // 3
  '2rem',      // 4
  '4rem',      // 5
  '8rem',      // 6
  '16rem',     // 7
  '32rem',     // 8
]

// Tailwind sizing scale (width/height) – numeric keys map to rem values
export const sizes: Record<number, string> = {
  0: '0px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

// Tailwind box-shadow tokens
export const shadows = {
  sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
  DEFAULT: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
  md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
  lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
  xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
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

// Font stacks
export const fonts = {
  body: '"Noto Sans Variable", "Noto Sans", sans-serif',
  mono: '"Noto Sans Mono Variable", "Noto Sans Mono", monospace',
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
