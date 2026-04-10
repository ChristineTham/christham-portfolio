# Copilot Instructions

This is an Astro portfolio site with content collections and lightweight project scripts.

## Coding Expectations

- Keep edits small and local to the request.
- Preserve the established Astro component style and Tailwind usage.
- Update tests when changing content structure, schema, or rendering behavior.
- Avoid introducing new architectural patterns unless the task clearly requires them.

## Content Collection Expectations

- `Projects` entries live in `src/content/Projects` as Markdown files.
- Required project fields are `title`, `link`, and `image`.
- `weight` is optional.
- `draft` defaults to `false`; draft projects should not render in `src/components/Projects.astro`.

## Script Expectations

- `pnpm additem <url>` runs the TypeScript script at `src/scripts/additem.ts`.
- `pnpm updateitem` runs the TypeScript script at `src/scripts/updateitem.ts`.
- That script should infer title/content from the target page and capture a 4K 16:9 screenshot.
- Generated screenshots belong in `src/assets/portfolio`.

## Validation

- Prefer running `pnpm vitest run src/test/content-structure.test.ts` after content-model changes.
- Use `pnpm lint` for TypeScript, Astro, and script changes.