/**
 * Returns an inline style object that positions an icon absolutely.
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

/**
 * Converts a style object (with camelCase keys) or a plain CSS string to a
 * CSS inline-style string.  Undefined / empty input returns an empty string.
 */
export function styleToString(s: Record<string, string | number> | string | undefined): string {
  if (!s) return ''
  if (typeof s === 'string') return s
  return Object.entries(s)
    .map(([k, v]) => `${k.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)}: ${v}`)
    .join('; ')
}
