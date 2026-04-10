---
description: 'Use when creating or editing portfolio entries in src/content/Projects. Enforces project frontmatter, markdown body, draft handling, and image path conventions.'
applyTo: 'src/content/Projects/**'
---

# Portfolio Content Instructions

- Keep portfolio entries as Markdown files under `src/content/Projects`.
- Required frontmatter keys are `title`, `link`, and `image`.
- `weight` is optional.
- `draft` is optional and defaults to `false`.
- If `draft: true`, the item must not be expected to render in the projects section.
- Put descriptive project copy in the Markdown body, not in frontmatter.
- Keep `image` as a relative path to an asset in `src/assets/portfolio`.
- When generating a new item from a URL, prefer the `pnpm additem <url>` workflow.
- When refreshing existing items from URLs, use `pnpm updateitem`.
- Keep descriptions short and specific to the website being represented.