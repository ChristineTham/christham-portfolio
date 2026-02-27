/** @jsxImportSource theme-ui */
import React from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { get, ThemeProvider, jsx } from "theme-ui"
import { Global } from "@emotion/react"
import theme from "../theme"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={(t) => ({
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
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <main className={className}>{children}</main>
  </ThemeProvider>
)

export default Layout
