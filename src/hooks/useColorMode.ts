import { useState, useEffect } from 'react'

const COLOR_MODE_KEY = 'color-mode'

type ColorMode = 'light' | 'dark'

export function useColorMode(): [ColorMode, (mode: ColorMode) => void] {
  // Start with 'light' on the server to avoid SSR hydration mismatches.
  // On the client, read localStorage eagerly via the lazy initializer so we
  // don't need a setState call inside an effect.
  const [colorMode, setColorModeState] = useState<ColorMode>(() => {
    if (typeof window === 'undefined') return 'light'
    try {
      const stored = localStorage.getItem(COLOR_MODE_KEY) as ColorMode | null
      if (stored === 'dark' || stored === 'light') return stored
    } catch {
      // localStorage may be unavailable (private browsing, etc.)
    }
    return 'light'
  })

  // Keep the effect for side-effects that must run after mount (e.g. applying
  // the CSS class on initial load), but do not call setState here.
  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [colorMode])

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
