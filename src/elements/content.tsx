import React from "react"
import { ParallaxLayer } from "../components/parallax"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ speed, offset, children, className = ``, factor = 1 }: ContentProps) => (
  <ParallaxLayer
    className={`p-4 xs:p-8 md:p-16 flex flex-col items-center justify-center z-50${className ? ` ${className}` : ``}`}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
)

export default Content
