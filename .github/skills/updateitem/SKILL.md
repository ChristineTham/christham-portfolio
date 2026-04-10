---
name: 'updateitem'
description: 'Use when asked to refresh existing portfolio entries, update project title/link/body from source websites, or regenerate screenshots for all items in src/content/Projects.'
---

# Update Portfolio Items

## Purpose
Refresh all existing project entries in the Portfolio collection by re-fetching each entry's source URL.

## Behavior
1. Read all markdown files in `src/content/Projects`.
2. For each item, read `link` and `image` from frontmatter.
3. Fetch the website and infer updated `title` and markdown body description.
4. Regenerate the screenshot to the existing `image` path in `src/assets/portfolio`.
5. Rewrite the markdown entry with refreshed values.

## Command
```bash
pnpm updateitem
```

## Preview Mode
```bash
pnpm updateitem --dry-run
```

## Notes
- The command runs the TypeScript script at `src/scripts/updateitem.ts`.
- Existing `weight` and `draft` values are preserved when present.
- This workflow updates all existing project entries, not just images.
