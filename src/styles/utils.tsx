import { ThemeUICSSObject } from 'theme-ui'

export const hidden = [`none`, `none`, `block`]

export function iconpos(
  size: number | string,
  left: number | string,
  top: number | string,
  display: string[] = ['block']
): ThemeUICSSObject {
  return {
    position: 'absolute',
    size,
    left,
    top,
    display
  }
}
