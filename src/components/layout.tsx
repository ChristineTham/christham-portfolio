import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import MdxComponents from "./mdx-components"

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <MDXProvider components={MdxComponents}>
      <main className={className}>{children}</main>
    </MDXProvider>
  </React.Fragment>
)

export default Layout
