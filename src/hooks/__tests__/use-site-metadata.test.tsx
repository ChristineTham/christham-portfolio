import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import useSiteMetadata from '../use-site-metadata'

vi.mock('gatsby')

const mockSiteMetadata = {
  siteTitle: 'Chris Tham Portfolio',
  siteTitleAlt: 'Chris Tham',
  siteHeadline: 'Portfolio',
  siteUrl: 'https://christham.net',
  siteDescription: 'Chris Tham Portfolio website',
  siteImage: '/banner.jpg',
  siteLanguage: 'en',
  author: '@christham',
}

describe('useSiteMetadata', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useStaticQuery).mockReturnValue({
      site: { siteMetadata: mockSiteMetadata },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns the site metadata object', () => {
    const { result } = renderHook(() => useSiteMetadata())
    expect(result.current).toEqual(mockSiteMetadata)
  })

  it('returns siteTitle', () => {
    const { result } = renderHook(() => useSiteMetadata())
    expect(result.current.siteTitle).toBe('Chris Tham Portfolio')
  })

  it('returns siteUrl', () => {
    const { result } = renderHook(() => useSiteMetadata())
    expect(result.current.siteUrl).toBe('https://christham.net')
  })

  it('returns siteLanguage', () => {
    const { result } = renderHook(() => useSiteMetadata())
    expect(result.current.siteLanguage).toBe('en')
  })

  it('returns author', () => {
    const { result } = renderHook(() => useSiteMetadata())
    expect(result.current.author).toBe('@christham')
  })

  it('calls useStaticQuery exactly once', () => {
    renderHook(() => useSiteMetadata())
    expect(useStaticQuery).toHaveBeenCalledTimes(1)
  })
})
