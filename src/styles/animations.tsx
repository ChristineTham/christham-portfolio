import React from 'react'

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-up-down absolute inset-0">
      {children}
    </div>
  )
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-up-down-wide absolute inset-0">
      {children}
    </div>
  )
}
