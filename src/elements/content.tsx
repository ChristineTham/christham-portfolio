/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from "@emotion/react"
import React from "react"
import { ParallaxLayer } from "@react-spring/parallax"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ speed, offset, children, className = ``, factor = 1 }: ContentProps) => (
  <ParallaxLayer
    css={{
      padding: '1rem',
      '@media (min-width: 400px)': { padding: '2rem' },
      '@media (min-width: 900px)': { padding: '4rem' },
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Content
