import type React from "react"

// CSS class applied to icons that should be hidden on mobile (< 600px)
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
): React.CSSProperties {
  const resolvedSize = typeof size === 'number' ? `${size * 0.25}rem` : size

  return {
    position: 'absolute',
    width: resolvedSize,
    height: resolvedSize,
    left: left as React.CSSProperties['left'],
    top: top as React.CSSProperties['top'],
  }
}
