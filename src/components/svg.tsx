import React from "react"
import { withPrefix } from "gatsby"
import { hidden } from "../styles/utils"

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const viewBox = {
  triangle: `0 0 30 30`,
  circle: `0 0 30 30`,
  arrowUp: `0 0 30 42`,
  upDown: `0 0 30 44.58`,
  box: `0 0 30 30`,
  hexa: `0 0 30 30`,
  cross: `0 0 100 100`,
}

// Map theme color names to CSS custom property references
const colorVarMap: Record<string, string> = {
  icon_brightest: 'var(--color-icon_brightest)',
  icon_darker: 'var(--color-icon_darker)',
  icon_darkest: 'var(--color-icon_darkest)',
  icon_red: 'var(--color-icon_red)',
  icon_blue: 'var(--color-icon_blue)',
  icon_orange: 'var(--color-icon_orange)',
  icon_yellow: 'var(--color-icon_yellow)',
  icon_pink: 'var(--color-icon_pink)',
  icon_purple: 'var(--color-icon_purple)',
  icon_green: 'var(--color-icon_green)',
  primary: 'var(--color-primary)',
  text: 'var(--color-text)',
  background: 'var(--color-background)',
  heading: 'var(--color-heading)',
  textMuted: 'var(--color-textMuted)',
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => {
  const resolvedColor = colorVarMap[color as string] ?? (color as string)
  const resolvedWidth = typeof width === 'number' ? `${width * 0.25}rem` : width
  const displayCss = hiddenMobile
    ? { display: hidden[0], '@media (min-width: 600px)': { display: hidden[2] } }
    : { display: `block` }

  return (
    <svg
      css={{
        position: `absolute`,
        stroke: stroke ? `currentColor` : `none`,
        fill: stroke ? `none` : `currentColor`,
        color: resolvedColor,
        width: resolvedWidth,
        left,
        top,
        ...displayCss,
      }}
      viewBox={viewBox[icon]}
    >
      <use href={withPrefix(`/icons.svg#${icon}`)} />
    </svg>
  )
}

export default Svg
