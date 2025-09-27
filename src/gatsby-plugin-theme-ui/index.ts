import { merge, ThemeUIStyleObject } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"

declare module "theme-ui" {
  interface Theme {
    footer?: ThemeUIStyleObject
    texts?: ThemeUIStyleObject
  }
}

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    // primary: tailwind.colors.orange[4],
    // secondary: tailwind.colors.indigo[6],
    // text: tailwind.colors.gray[3],
    // heading: tailwind.colors.white,
    // background: `#141821`,
    // divider: tailwind.colors.gray[8],
    // textMuted: tailwind.colors.gray[5],
    // icon_brightest: tailwind.colors.white,
    // icon_darker: tailwind.colors.gray[7],
    // icon_darkest: tailwind.colors.gray[8],
    // icon_red: tailwind.colors.red[6],
    // icon_blue: tailwind.colors.blue[6],
    // icon_orange: tailwind.colors.orange[5],
    // icon_yellow: tailwind.colors.yellow[5],
    // icon_pink: tailwind.colors.pink[5],
    // icon_purple: tailwind.colors.purple[6],
    // icon_green: tailwind.colors.green[5],
    // modes: {
    //   light: {
    //     text: tailwind.colors.gray[8],
    //     heading: tailwind.colors.black,
    //     primary: tailwind.colors.orange[7],
    //     background: tailwind.colors.gray[1],
    //     divider: tailwind.colors.gray[2],
    //     textMuted: tailwind.colors.gray[6],
    //     icon_brightest: tailwind.colors.gray[2],
    //     icon_darker: tailwind.colors.gray[4],
    //     icon_darkest: tailwind.colors.gray[6],
    //   },
    // },
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
        primary: '#93a9d1',
        text: '#f4dede',
        heading: '#f7caca',
        background: '#27272a',
        textMuted: '#909090',
        divider: '#85677b',
        icon_brightest: '#f7caca',
        icon_darker: '#b0879b',
        icon_darkest: '#85677b'
      }
    }
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      WebkitTextSizeAdjust: `100%`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `1em`,
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
})

export default theme
