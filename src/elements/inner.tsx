import React from "react"

type InnerProps = {
  className?: string
  children?: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div
    className={`
      w-full
      xl:w-2/3
      text-left${className ? `
        ${className}
      ` : ``}
    `}
  >
    {children}
  </div>
)

export default Inner
