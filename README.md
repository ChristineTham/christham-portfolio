# Chris Tham Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ebf8fae8-4b81-4c53-ac38-3684ccbd6cf1/deploy-status)](https://app.netlify.com/projects/christham-portfolio/deploys)

![screenshot](rawassets/screenshot.png)

Chris Tham Portfolio is a [Netlify](https://www.netlify.com) site built using
[Next.js](https://nextjs.org) (App Router), originally based on
[gatsby-starter-portfolio-cara](https://cara.lekoarts.de). Rosely design theme,
with [Kawaii Flat Icons](https://www.flaticon.com/authors/kawaii/flat).

> **Migration note:** This project was migrated from [Gatsby](https://www.gatsbyjs.com) to
> [Next.js 16](https://nextjs.org) in 2025. See [Migration](#-migration-from-gatsby) below for details.

[**Website**](https://portfolio.christham.net)

## ✨ Features

- Light and dark modes
- Parallax scrolling effect powered by [Framer Motion / Motion](https://motion.dev/)
- CSS animations on Kawaii Flat Icons from freepik
- [React Typed](https://github.com/mattboldt/typed.js/) animated text in hero section
- Inline SVG icons via [@svgr/webpack](https://react-svgr.com) (Turbopack + Webpack compatible)
- Content authored in [MDX](https://mdxjs.com) via `@next/mdx`
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) and [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono) variable fonts via [Fontsource](https://fontsource.org)
- TypeScript throughout

## 🗂️ Project Structure

```
src/
├── app/                # Next.js App Router (layout, page, not-found)
├── assets/
│   ├── backgrounds/    # Background SVG images (in public/)
│   └── icons/          # Kawaii Flat Icon SVG assets and index
├── components/         # React page-section components (hero, about, projects, contact, parallax, …)
├── elements/           # Low-level layout primitives (Divider, Content, Inner)
├── hooks/              # Custom React hooks (useSiteMetadata, useColorMode)
├── sections/           # MDX content files for each section
├── styles/             # Animation helpers, utility functions and global CSS
└── theme/              # Rosely colour theme tokens
```

## 🚀 Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start the development server (with Turbopack)
npm run develop

# Build for production
npm run build

# Serve the production build locally
npm start

# Lint
npm run lint
```

## 🔄 Migration from Gatsby

This project was originally built with [Gatsby](https://www.gatsbyjs.com) and has been fully
migrated to [Next.js 16](https://nextjs.org) (App Router) with [Turbopack](https://turbo.build/pack).

### What changed

| Area | Before (Gatsby) | After (Next.js) |
|---|---|---|
| Framework | Gatsby 5 | Next.js 16 (App Router) |
| Bundler | Webpack (via Gatsby) | Turbopack (default in Next.js 16) |
| Pages | `src/pages/` + `src/templates/` | `src/app/` (App Router) |
| Routing | Gatsby file-system routing | Next.js App Router |
| MDX | `gatsby-plugin-mdx` | `@next/mdx` |
| SVG icons | `gatsby-plugin-react-svg` | `@svgr/webpack` (Turbopack + Webpack rules) |
| Images | `gatsby-plugin-image` | Native `<img>` / Next.js `<Image>` |
| Parallax | `@react-spring/parallax` | Custom `Parallax` / `ParallaxLayer` built on [Motion](https://motion.dev/) |
| Emotion CSS | `@emotion/react` / `@emotion/styled` | [Tailwind CSS v4](https://tailwindcss.com) |
| Tests | Vitest suite | Removed (to be re-added) |
| Deployment | Netlify (Gatsby adapter) | Netlify (Next.js adapter) |

### Key implementation notes

- **Custom Parallax:** Because `@react-spring/parallax` is Gatsby/React-Spring-specific, a lightweight
  `<Parallax>` and `<ParallaxLayer>` pair was built using Motion's `useScroll` and `useTransform`.
  It replicates the original offset/speed/factor API.
- **SVG icons as React components:** The Kawaii icon SVGs are imported directly as React components
  via `@svgr/webpack`, configured in `next.config.ts` for both Turbopack and Webpack.
- **Dark mode:** Implemented via a `useColorMode` hook that toggles a `data-theme` attribute on
  `<html>`, with Tailwind CSS v4 custom properties driving the colour tokens from `src/theme/`.
- **Stacking contexts:** Each `ParallaxLayer` is a Motion `motion.div` with a CSS `transform`,
  which creates its own stacking context. Icon layers are placed before content layers in the DOM
  and marked `pointer-events-none` so content is always rendered and interactive on top.
