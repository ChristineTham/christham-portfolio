import React from 'react'
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
    className={`p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center justify-center z-50 ${className}`}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
)

export default Content
