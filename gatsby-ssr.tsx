import * as React from 'react'
import { InitializeColorMode } from 'theme-ui'
import { wrapRootElement as wrap } from './src/wrap-root-element'

export const onRenderBody = ({ setPreBodyComponents }: any) => {
  setPreBodyComponents([
    <InitializeColorMode key="theme-ui-no-flash" />
  ])
}

export const wrapRootElement = wrap
