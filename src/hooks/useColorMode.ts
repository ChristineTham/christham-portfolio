import { useState, useEffect } from 'react'

const COLOR_MODE_KEY = 'color-mode'

type ColorMode = 'light' | 'dark'

export function useColorMode(): [ColorMode, (mode: ColorMode) => void] {
  // Start with 'light' to avoid SSR hydration mismatches.
  // The no-flash inline script in gatsby-ssr.tsx sets the CSS class before
  // React hydrates, so the visual appearance is correct from the start.
  const [colorMode, setColorModeState] = useState<ColorMode>('light')

  // On the client, sync state with localStorage on first render.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COLOR_MODE_KEY) as ColorMode | null
      if (stored === 'dark' || stored === 'light') {
        setColorModeState(stored)
      }
    } catch {
      // localStorage may be unavailable (private browsing, etc.)
    }
  }, [])

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode)
    try {
      localStorage.setItem(COLOR_MODE_KEY, mode)
    } catch {
      // ignore
    }
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return [colorMode, setColorMode]
}
