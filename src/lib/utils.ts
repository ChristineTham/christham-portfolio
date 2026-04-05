import type { CSSProperties, FC, SVGProps } from "react"
import { createElement } from "react"

// CSS class applied to icons that should be hidden below 600px and shown at or above 600px
export const HIDDEN_MOBILE_CLASS = 'icon-hidden-mobile'

// Kept for backward compatibility; the array values represent [xs, sm, md] display values
export const hidden = [`none`, `none`, `block`]

/**
 * Returns an inline style object that positions an icon absolutely.
 * For responsive hide/show behaviour, pass the returned className to the icon.
 * Use `HIDDEN_MOBILE_CLASS` as className for icons hidden on mobile.
 */
export function iconpos(
  size: number | string,
  left: number | string,
  top: number | string,
): CSSProperties {
  const resolvedSize = typeof size === 'number' ? `${size * 0.25}rem` : size

  return {
    position: 'absolute',
    width: resolvedSize,
    height: resolvedSize,
    left: left as CSSProperties['left'],
    top: top as CSSProperties['top'],
  }
}

/**
 * Wraps an svg-react-loader SVG component to explicitly pass its viewBox as a prop.
 * This is necessary because svg-react-loader puts viewBox in `defaultProps`, but the
 * React 19 automatic JSX runtime does not apply `defaultProps` for function components
 * (only `React.createElement` does). Using React.createElement here ensures viewBox
 * is always passed, regardless of which JSX transform is in use.
 */
export function makeIcon(
  Component: FC<SVGProps<SVGSVGElement>> & { defaultProps?: { viewBox?: string } }
): FC<SVGProps<SVGSVGElement>> {
  const viewBox = Component.defaultProps?.viewBox
  const IconWrapper = (props: SVGProps<SVGSVGElement>) =>
    createElement(Component, { viewBox, ...props })
  IconWrapper.displayName = `Icon(${Component.displayName ?? Component.name ?? 'Unknown'})`
  return IconWrapper
}
