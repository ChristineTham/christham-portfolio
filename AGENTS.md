# AGENTS.md

This repository uses Astro with content collections for a personal portfolio site.

## Workspace Guidance

- Prefer minimal, focused changes that preserve the current Astro and Tailwind patterns.
- Keep source files ASCII unless an existing file already requires other characters.
- Use relative imports; do not introduce path aliases unless the repo already adopts them.
- Prefer updating content collections, components, and tests together when a content model changes.

## Project Structure

- `src/content/Projects`: portfolio entries as Markdown files.
- `src/content/Sections`: Markdown content for static sections.
- `src/components`: Astro UI components.
- `src/scripts`: project scripts such as `additem.ts`, `updateitem.ts`, and `parallax.ts`.
- `src/assets/portfolio`: generated portfolio screenshots and images.

## Common Commands

Don't use npm.

- `pnpm dev`: run the Astro dev server.
- `pnpm check`: run Astro diagnostics.
- `pnpm lint`: run ESLint.
- `pnpm test`: run Vitest.
- `pnpm additem <url>`: create a portfolio item from a URL.
- `pnpm updateitem`: refresh all existing portfolio items from their source URLs.

## Content Rules

- Portfolio entries require `title`, `link`, and `image`.
- `weight` is optional.
- `draft` defaults to `false` and draft items must not render in the projects section.
- Portfolio body content lives in the Markdown body, not frontmatter.

## Automation Notes

- The URL ingestion workflow lives in `.github/skills/additem/SKILL.md`.
- The add/update item scripts capture 4K 16:9 screenshots into `src/assets/portfolio`.
- When changing content schema or rendering behavior, run the relevant tests after editing.
