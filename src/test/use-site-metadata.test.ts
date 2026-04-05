import { describe, it, expect } from 'vitest'
import useSiteMetadata from '@/lib/site-metadata'

describe('useSiteMetadata', () => {
  it('returns an object with siteTitle', () => {
    const metadata = useSiteMetadata()
    expect(metadata).toHaveProperty('siteTitle')
    expect(typeof metadata.siteTitle).toBe('string')
  })

  it('returns a siteUrl that starts with https', () => {
    const { siteUrl } = useSiteMetadata()
    expect(siteUrl).toMatch(/^https:\/\//)
  })

  it('returns author, siteLanguage, siteImage and siteDescription', () => {
    const metadata = useSiteMetadata()
    expect(metadata).toHaveProperty('author')
    expect(metadata).toHaveProperty('siteLanguage')
    expect(metadata).toHaveProperty('siteImage')
    expect(metadata).toHaveProperty('siteDescription')
  })

  it('returns consistent data on repeated calls', () => {
    expect(useSiteMetadata()).toEqual(useSiteMetadata())
  })
})
