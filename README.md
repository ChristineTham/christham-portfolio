# Chris Tham Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ebf8fae8-4b81-4c53-ac38-3684ccbd6cf1/deploy-status)](https://app.netlify.com/projects/christham-portfolio/deploys)

![screenshot](rawassets/screenshot.png)

Chris Tham Portfolio is a personal site built with [Astro](https://astro.build),
inspired by [gatsby-starter-portfolio-cara](https://cara.lekoarts.de), using a
Rosely-inspired visual theme and [Kawaii Flat Icons](https://www.flaticon.com/authors/kawaii/flat).

[**Website**](https://portfolio.christham.net)

## Migration Status

This project has completed a multi-step migration:

1. Gatsby -> Next.js (2025)
2. Next.js -> Astro (2026)

The current codebase is Astro-first, component-driven, and uses Astro Content Collections
for structured content.

## Features

- Fast, modern portfolio site built with Astro and Tailwind
- Responsive design that works across desktop and mobile
- Light and dark mode toggle on the page
- Smooth layered scrolling effects
- Animated intro text in the hero section
- SVG icons and optimized project images
- Project and section content managed from structured content files
- Centralised colour and theme styling
- Automated checks for code quality and tests

## Current Project Structure

```text
src/
  assets/
    backgrounds/           # Section background SVG images
    icons/                 # SVG icon assets
    portfolio/             # Optimized project card images
  components/              # Astro UI sections and primitives
    About.astro
    Contact.astro
    Content.astro
    Divider.astro
    Footer.astro
    Hero.astro
    Icon.astro
    Inner.astro
    Parallax.astro
    ParallaxLayer.astro
    ProjectCard.astro
    Projects.astro
  content/
    Projects/              # Project entries (JSON)
    Sections/              # Section content (Markdown)
  content.config.ts        # Astro content collection definitions
  layouts/
    Layout.astro
  lib/
    site-metadata.ts
    utils.ts
  pages/
    404.astro
    index.astro
  scripts/
    parallax.ts
  styles/
    global.css
  test/
    content-structure.test.ts
    parallax.test.ts
    theme.test.ts
    utils.test.ts
```

## Getting Started

Prerequisites:

- Node.js 20+
- pnpm 10+

Install and run:

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` - run local development server
- `pnpm build` - create production build
- `pnpm preview` - preview production build locally
- `pnpm check` - run Astro diagnostics/type checks
- `pnpm lint` - run ESLint
- `pnpm test` - run Vitest suite
- `pnpm clean` - remove generated and dependency folders
- `pnpm refresh` - run Astro upgrade helper and update dependencies

## Content Authoring

Projects are managed as JSON entries in `src/content/Projects` and rendered by
the projects section component.

Each project entry stores `image` as a relative file reference (for example
`../../assets/portfolio/learning-jamstack.jpg`) and is validated by the
`Projects` collection schema (`image()`), enabling optimized image rendering.

About/contact copy is managed as Markdown entries in `src/content/Sections` and
rendered through the `Sections` collection.

Section background illustrations are sourced from `src/assets/backgrounds` and
imported in components as module assets.

## Styling and Interaction Notes

- Light/dark mode is toggled from the hero section and persisted with `localStorage`.
- Theme values are defined as CSS custom properties in `src/styles/global.css`.
- Parallax layers use `data-parallax-*` attributes and are updated by
  `src/scripts/parallax.ts` on scroll/resize, with an initial `requestAnimationFrame`
  pass to reduce first-paint jumps.

## How Animation Effects Are Achieved

This site uses a few focused animation techniques that work together:

- Layered parallax scrolling:
  Content sections are rendered as layers with offset/speed values.
  As you scroll, `src/scripts/parallax.ts` recalculates each layer's vertical
  position and updates `transform: translateY(...)` to create depth.

- Floating icon motion:
  Hero icons are grouped into containers that use CSS keyframes
  (`up-down` and `up-down-wide`) for gentle vertical movement.
  These are applied with Tailwind animation utility classes.

- Typed hero text:
  The role text in the hero is animated with `typed.js`, cycling through words
  using type speed, backspace speed, and delay settings.

- Blinking cursor effect:
  The typed cursor is styled globally with a custom blink keyframe
  (`typed-cursor-blink`) so it stays visually consistent with the hero text.

- First-paint stability:
  Parallax transforms are set immediately and then re-applied in
  `requestAnimationFrame` so the initial frame is positioned correctly and
  avoids visible jumps.
