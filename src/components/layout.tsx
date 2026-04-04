import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Global } from "@emotion/react"
import MdxComponents from "./mdx-components"

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={{
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: `var(--color-primary)`,
          color: `var(--color-background)`,
        },
      }}
    />
    <MDXProvider components={MdxComponents}>
      <main className={className}>{children}</main>
    </MDXProvider>
  </React.Fragment>
)

export default Layout
