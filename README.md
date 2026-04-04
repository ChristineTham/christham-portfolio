# Chris Tham Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ebf8fae8-4b81-4c53-ac38-3684ccbd6cf1/deploy-status)](https://app.netlify.com/projects/christham-portfolio/deploys)

![screenshot](rawassets/screenshot.png)

Chris Tham Portfolio is a [Netlify](https://www.netlify.com) site built using
[Gatsby](https://www.gatsbyjs.com), originally based on
[gatsby-starter-portfolio-cara](https://cara.lekoarts.de). Rosely design theme,
with [Kawaii Flat Icons](https://www.flaticon.com/authors/kawaii/flat).

[**Website**](https://portfolio.christham.net)


## ✨ Features

- Light and dark modes
- Parallax scrolling effect powered by [Framer Motion](https://www.framer.com/motion/)
- CSS animations on Kawaii Flat Icons from freepik
- [React Typed](https://github.com/mattboldt/typed.js/) animated text in hero section
- Optimised images via [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- Inline SVG support via [gatsby-plugin-react-svg](https://www.npmjs.com/package/gatsby-plugin-react-svg)
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) and [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono) variable fonts via [Fontsource](https://fontsource.org)
- TypeScript throughout
- [Vitest](https://vitest.dev) test suite

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── backgrounds/    # Background SVG images
│   └── icons/          # Kawaii Flat Icon SVG assets and index
├── components/         # React page-section components (hero, about, projects, contact, …)
├── elements/           # Low-level layout primitives (Divider, Content, Inner)
├── hooks/              # Custom React hooks (useSiteMetadata, useColorMode)
├── pages/              # Gatsby pages (index, 404)
├── sections/           # MDX content files for each section
├── styles/             # Animation helpers and utility functions
├── templates/          # Gatsby page templates (cara layout)
├── test/               # Vitest global setup
└── theme/              # Rosely colour theme tokens
```
