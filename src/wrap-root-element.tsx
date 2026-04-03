import React from 'react'
import { ThemeUIProvider } from 'theme-ui'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'

import theme from './theme'

const components = {}

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeUIProvider theme={theme}>
      <MDXProvider components={useThemedStylesWithMdx(useMDXComponents(components))}>
        {children}
      </MDXProvider>
    </ThemeUIProvider>
  )
}

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Root>{element}</Root>
}
