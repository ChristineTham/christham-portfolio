import { merge } from 'theme-ui'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
  initialColorModeName: 'light',
  useCustomProperties: true,
  colors: {
    primary: '#b565a7',
    secondary: '#93a9d1',
    text: '#27272a',
    heading: '#85677b',
    background: '#f4dede',
    divider: '#93a9d1',
    textMuted: '#a49e9e',
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
    modes: {
      dark: {
        text: '#f7caca',
        heading: '#be9cc1',
        background: '#27272a',
        divider: '#93a9d1',
        textMuted: '#a49e9e',
        icon_brightest: '#f7caca',
        icon_darker: '#b0879b',
        icon_darkest: '#85677b'
      }
    }
  },
  breakpoints: ['400px', '600px', '900px', '1200px', '1600px'],
  footer: {
    textAlign: 'center',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    color: 'textMuted',
    px: [2, 3],
    py: [3, 4]
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      color: 'text',
      backgroundColor: 'background',
      a: {
        color: 'primary',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          color: 'primary',
          textDecoration: 'none'
        }
      }
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: '-0.003em',
      lineHeight: 'body',
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
      color: 'text'
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: 'medium',
        color: 'heading'
      }
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px',
      letterSpacing: 'wide',
      color: 'heading'
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: 'heading'
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: 'heading'
    },
    h4: {
      fontSize: [2, 3, 4],
      color: 'heading'
    },
    h5: {
      fontSize: [1, 2, 3],
      color: 'heading'
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: 'heading'
    }
  },
  layout: {
    container: {
      maxWidth: '5xl'
    }
  },
  buttons: {
    toggle: {
      color: 'background',
      border: 'none',
      backgroundColor: 'text',
      cursor: 'pointer',
      alignSelf: 'center',
      px: 3,
      py: 2,
      ml: 3
    }
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4]
      }
    }
  }
})

export default theme
