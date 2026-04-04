import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useColorMode } from '../useColorMode'

const COLOR_MODE_KEY = 'color-mode'

describe('useColorMode', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('returns "light" as the default color mode', () => {
    const { result } = renderHook(() => useColorMode())
    expect(result.current[0]).toBe('light')
  })

  it('returns a setter function as the second tuple element', () => {
    const { result } = renderHook(() => useColorMode())
    expect(typeof result.current[1]).toBe('function')
  })

  it('switches to dark mode when the setter is called with "dark"', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('dark')
    })
    expect(result.current[0]).toBe('dark')
  })

  it('switches back to light mode when the setter is called with "light"', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => { result.current[1]('dark') })
    act(() => { result.current[1]('light') })
    expect(result.current[0]).toBe('light')
  })

  it('persists the chosen mode to localStorage', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('dark')
    })
    expect(localStorage.getItem(COLOR_MODE_KEY)).toBe('dark')
  })

  it('adds the "dark" class to <html> when dark mode is enabled', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('dark')
    })
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the "dark" class from <html> when light mode is enabled', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('light')
    })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('restores a stored "dark" preference from localStorage on mount', async () => {
    localStorage.setItem(COLOR_MODE_KEY, 'dark')
    const { result } = renderHook(() => useColorMode())
    await act(async () => {})
    expect(result.current[0]).toBe('dark')
  })

  it('ignores unrecognised values in localStorage', async () => {
    localStorage.setItem(COLOR_MODE_KEY, 'solarized')
    const { result } = renderHook(() => useColorMode())
    await act(async () => {})
    expect(result.current[0]).toBe('light')
  })
})
