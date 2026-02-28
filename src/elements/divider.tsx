import React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <ParallaxLayer
    className={`absolute w-full h-full ${className}`}
    style={{
        background: bg.startsWith('linear-gradient') ? bg : (bg.startsWith('var') ? bg : (bg ? `var(--color-${bg})` : '')),
        clipPath: clipPath,
        color: fill ? (fill.startsWith('var') ? fill : `var(--color-${fill})`) : '',
        fill: 'currentColor',
    }}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
