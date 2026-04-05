'use client'

import * as React from "react"

type LayoutProps = {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
