import React from "react"
import { ParallaxLayer } from "../components/parallax"

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
}: DividerProps) => {
  const style: React.CSSProperties = {}
  if (bg) style.background = bg
  if (clipPath) style.clipPath = clipPath
  // `fill` controls the fill color of the #contact-wave SVG child.
  // We set it as `color` so the SVG can use `fill: currentColor`.
  if (fill) style.color = fill

  return (
    <ParallaxLayer
      className={`
        absolute size-full
        ${className ? `
          ${className}
        ` : ``}
      `}
      style={style}
      speed={speed}
      offset={offset}
      factor={factor}
    >
      {children}
    </ParallaxLayer>
  )
}

export default Divider
