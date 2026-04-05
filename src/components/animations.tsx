import * as React from "react"

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-up-down">
      {children}
    </div>
  )
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-up-down-wide">
      {children}
    </div>
  )
}

// Used in contact.tsx for the wave SVG animation timing string
export const waveAnimation = (length: string) => `wave ${length} linear infinite alternate`

// Exported for use in contact.tsx InnerWave path animation
export const wave = 'wave'
