import React from "react"
import "../styles/global.css"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <main className={`min-h-screen ${className}`}>
    {children}
  </main>
)

export default Layout
