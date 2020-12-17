/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  fill?: string
  clipPath?: string
  factor?: number
}

const HeroBG: React.FC<DividerProps> = ({ speed, offset, factor = 1, fill = ``, clipPath = ``, children = null }) => (
  <ParallaxLayer
    sx={{
      position: `absolute`,
      width: `full`,
      height: `full`,
      '#contact-wave': {
        color: fill,
        fill: `currentColor`
      },
      clipPath,
      // backgroundColor: '#f7caca80',
      background: ['#f7caca80', '/landscape.jpg'],
      // backgroundSize: 'cover',
      // backgroundRepeat: 'repeat',
      // backgroundImage: '/landscape.jpg'
    }}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
)

export default HeroBG
