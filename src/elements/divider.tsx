import React from "react"
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
    css={{
      position: `absolute`,
      width: `100%`,
      height: `100%`,
      ...(bg && { background: bg }),
      ...(fill && {
        '#contact-wave': {
          color: fill,
          fill: `currentColor`,
        },
      }),
      ...(clipPath && { clipPath }),
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
