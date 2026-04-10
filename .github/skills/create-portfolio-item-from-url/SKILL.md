# Create Portfolio Item From URL

## Purpose
Create a new project entry in the Portfolio collection from a single URL.

## Inputs
- URL of the site to add

## Behavior
1. Infer `title` from `og:title`, `twitter:title`, or `<title>`.
2. Infer markdown body content from `og:description`, `twitter:description`, `description`, or first paragraph.
3. Capture a screenshot of the URL and save it in `src/assets/portfolio`.
4. Create a new markdown file in `src/content/Projects` with frontmatter:
   - `title`
   - `link`
   - `image`

## Command
```bash
pnpm portfolio:add <url>
```

## Preview Mode
```bash
pnpm portfolio:add <url> --dry-run
```

## Notes
- Generated file names are slugified and made unique automatically.
- Screenshot files are stored as `.jpg` in `src/assets/portfolio`.
- The generated markdown body is a short paragraph.
