import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/react'
import { fonts } from './theme/tokens'

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global
        styles={{
          ':root': {
            '--color-primary': '#8c4e80',
            '--color-secondary': '#93a9d1',
            '--color-text': '#27272a',
            '--color-heading': '#85677b',
            '--color-background': '#f4dede',
            '--color-divider': '#f4eee8',
            '--color-textMuted': '#303030',
            '--color-icon_brightest': '#be9cc1',
            '--color-icon_darker': '#b0879b',
            '--color-icon_darkest': '#85677b',
            '--color-icon_red': '#d2386c',
            '--color-icon_blue': '#919bc9',
            '--color-icon_orange': '#ec809e',
            '--color-icon_yellow': '#eada4f',
            '--color-icon_pink': '#F0047F',
            '--color-icon_purple': '#be9cc1',
            '--color-icon_green': '#64bfa4',
          } as Record<string, string>,
          '.dark': {
            '--color-primary': '#93a9d1',
            '--color-text': '#f4dede',
            '--color-heading': '#f7caca',
            '--color-background': '#27272a',
            '--color-textMuted': '#909090',
            '--color-divider': '#85677b',
            '--color-icon_brightest': '#f7caca',
            '--color-icon_darker': '#b0879b',
            '--color-icon_darkest': '#85677b',
          } as Record<string, string>,
          'html, body': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontFamily: fonts.body,
            lineHeight: 1.625,
            fontWeight: 400,
            color: 'var(--color-text)',
            backgroundColor: 'var(--color-background)',
            WebkitTextSizeAdjust: '100%',
          },
          a: {
            color: 'var(--color-primary)',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: 'var(--color-primary)',
              textDecoration: 'none',
            },
          },
          img: { borderStyle: 'none' },
          pre: { fontFamily: fonts.mono, fontSize: '1em' },
          p: {
            fontSize: '1rem',
            '@media (min-width: 400px)': { fontSize: '1.125rem' },
            letterSpacing: '-0.003em',
            lineHeight: 1.625,
            color: 'var(--color-text)',
          },
          blockquote: { marginLeft: 0 },
          'blockquote p': {
            fontSize: '1.125rem',
            '@media (min-width: 400px)': { fontSize: '1.25rem' },
            fontWeight: 500,
            color: 'var(--color-heading)',
          },
          h1: {
            fontSize: '2.25rem',
            '@media (min-width: 400px)': { fontSize: '3rem' },
            '@media (min-width: 600px)': { fontSize: '4rem' },
            marginTop: '0.5rem',
            marginBottom: '1rem',
            textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px',
            letterSpacing: '0.025em',
            color: 'var(--color-heading)',
          },
          h2: {
            fontSize: '1.5rem',
            '@media (min-width: 400px)': { fontSize: '1.875rem' },
            '@media (min-width: 600px)': { fontSize: '2.25rem' },
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            color: 'var(--color-heading)',
          },
          h3: {
            fontSize: '1.25rem',
            '@media (min-width: 400px)': { fontSize: '1.5rem' },
            '@media (min-width: 600px)': { fontSize: '1.875rem' },
            marginTop: '1rem',
            color: 'var(--color-heading)',
          },
          h4: {
            fontSize: '1.125rem',
            '@media (min-width: 400px)': { fontSize: '1.25rem' },
            '@media (min-width: 600px)': { fontSize: '1.5rem' },
            color: 'var(--color-heading)',
          },
          h5: {
            fontSize: '1rem',
            '@media (min-width: 400px)': { fontSize: '1.125rem' },
            '@media (min-width: 600px)': { fontSize: '1.25rem' },
            color: 'var(--color-heading)',
          },
          h6: {
            fontSize: '1rem',
            marginBottom: '0.5rem',
            color: 'var(--color-heading)',
          },
        }}
      />
      <MDXProvider components={{}}>
        {children}
      </MDXProvider>
    </>
  )
}

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Root>{element}</Root>
}
