import * as React from 'react'
import { vi } from 'vitest'

export const useStaticQuery = vi.fn()
export const StaticQuery = vi.fn()
export const graphql = (strings: TemplateStringsArray, ...args: unknown[]) =>
  String.raw({ raw: strings }, ...args)
export const withPrefix = (str: string) => str
export const navigate = vi.fn()
export const Link = vi.fn().mockImplementation(
  ({ to, children, ...rest }: { to: string; children: React.ReactNode; [key: string]: unknown }) =>
    React.createElement('a', { href: to, ...rest }, children)
)
