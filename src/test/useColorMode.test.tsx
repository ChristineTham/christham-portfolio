import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useColorMode } from '@/hooks/useColorMode'

const COLOR_MODE_KEY = 'color-mode'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

afterEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('useColorMode', () => {
  it('defaults to light mode when localStorage is empty', () => {
    const { result } = renderHook(() => useColorMode())
    expect(result.current[0]).toBe('light')
  })

  it('reads the stored value from localStorage on initialisation', () => {
    localStorage.setItem(COLOR_MODE_KEY, 'dark')
    const { result } = renderHook(() => useColorMode())
    expect(result.current[0]).toBe('dark')
  })

  it('updates state and persists to localStorage when setColorMode is called', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('dark')
    })
    expect(result.current[0]).toBe('dark')
    expect(localStorage.getItem(COLOR_MODE_KEY)).toBe('dark')
  })

  it('adds the dark class on documentElement when switching to dark mode', () => {
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('dark')
    })
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class on documentElement when switching back to light mode', () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem(COLOR_MODE_KEY, 'dark')
    const { result } = renderHook(() => useColorMode())
    act(() => {
      result.current[1]('light')
    })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem(COLOR_MODE_KEY)).toBe('light')
  })

  it('ignores unrecognised values stored in localStorage', () => {
    localStorage.setItem(COLOR_MODE_KEY, 'purple')
    const { result } = renderHook(() => useColorMode())
    expect(result.current[0]).toBe('light')
  })
})
