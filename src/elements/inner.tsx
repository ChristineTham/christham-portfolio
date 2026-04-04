/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from "@emotion/react"
import React from "react"

type InnerProps = {
  className?: string
  children?: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div
    css={{
      width: '100%',
      '@media (min-width: 1600px)': { width: '66.666%' },
      textAlign: `left`,
    }}
    className={className}
  >
    {children}
  </div>
)

export default Inner
