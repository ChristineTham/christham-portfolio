import React from 'react'

const Root = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Root>{element}</Root>
}
