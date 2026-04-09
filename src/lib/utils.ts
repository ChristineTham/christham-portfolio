// CSS class applied to icons that should be hidden below 600px and shown at or above 600px
export const HIDDEN_MOBILE_CLASS = 'icon-hidden-mobile'

/**
 * Returns an inline style object that positions an icon absolutely.
 * For responsive hide/show behaviour, pass the returned className to the icon.
 * Use `HIDDEN_MOBILE_CLASS` as className for icons hidden on mobile.
 */
export function iconpos(
  size: number | string,
  left: number | string,
  top: number | string,
) {
  const resolvedSize = typeof size === 'number' ? `${size * 0.25}rem` : size

  return {
    position: 'absolute' as const,
    width: resolvedSize,
    height: resolvedSize,
    left,
    top,
  }
}
