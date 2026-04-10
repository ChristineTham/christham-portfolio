---
name: 'additem'
description: 'Use when asked to add a portfolio item from a URL, create a new project entry from a website link, infer title and markdown content from the page, or capture a 4K screenshot into src/assets/portfolio. For refreshing existing entries, use the updateitem skill.'
---

# Create Portfolio Item From URL

## Purpose
Create a new project entry in the Portfolio collection from a single URL.

## Inputs
- URL of the site to add

## Behavior
1. Infer `title` from `og:title`, `twitter:title`, or `<title>`.
2. Infer markdown body content from `og:description`, `twitter:description`, `description`, or first paragraph.
3. Capture a 4K 16:9 screenshot of the URL and save it in `src/assets/portfolio`.
4. Create a new markdown file in `src/content/Projects` with frontmatter:
   - `title`
   - `link`
   - `image`

## Command
```bash
pnpm additem <url>
```

## Preview Mode
```bash
pnpm additem <url> --dry-run
```

## Notes
- Generated file names are slugified and made unique automatically.
- Screenshot files are stored as `.jpg` in `src/assets/portfolio`.
- The command runs the TypeScript script at `src/scripts/additem.ts`.
- The generated markdown body is a short paragraph.

## Verification
After creating an item, verify:

1. The markdown file exists in `src/content/Projects`.
2. The screenshot exists in `src/assets/portfolio`.
3. `pnpm additem <url> --dry-run` still works for a follow-up preview.

## Related Skill

- Use `.github/skills/updateitem/SKILL.md` when you need to refresh all existing project entries from their saved source URLs.
