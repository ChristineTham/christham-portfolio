import { sizes } from '../theme/tokens'

export const hidden = [`none`, `none`, `block`]

// CSS object type compatible with Emotion's css prop
type CSSStyles = Record<string, string | number | Record<string, string | number>>

export function iconpos(
  size: number | string,
  left: number | string,
  top: number | string,
  display: string[] = ['block']
): CSSStyles {
  // Resolve Tailwind size indices to rem values
  const resolvedSize = typeof size === 'number' ? (sizes[size] ?? `${size}px`) : size

  // Convert responsive display array to Emotion media-query object
  const displayStyles: CSSStyles = { display: display[0] }
  if (display[1] !== undefined && display[1] !== display[0]) {
    displayStyles['@media (min-width: 400px)'] = { display: display[1] }
  }
  if (display[2] !== undefined) {
    displayStyles['@media (min-width: 600px)'] = { display: display[2] }
  }

  return {
    position: 'absolute',
    width: resolvedSize,
    height: resolvedSize,
    left,
    top,
    ...displayStyles,
  }
}
