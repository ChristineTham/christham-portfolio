# Plan: Remove unnecessary packages from `package.json`

## Analysis
The following packages were evaluated:
- `@fontsource-variable/noto-sans`
- `@fontsource-variable/noto-sans-mono`

These packages are not imported anywhere in the project. The fonts are configured in `astro.config.mjs` using Astro 5's new `fontProviders.fontsource()`, which manages font injection without requiring the manual installation of `@fontsource-variable` packages in `dependencies`. Therefore, they can be safely removed.

All other packages in `dependencies` and `devDependencies` were verified as actively used in the project configuration (Astro, Tailwind, ESLint, Playwright scripts, Vitest tests, etc.).

## Proposed Changes
1. Modify `package.json` to remove:
   - `"@fontsource-variable/noto-sans": "^5.2.10"`
   - `"@fontsource-variable/noto-sans-mono": "^5.2.10"`
2. After editing `package.json`, verify that the project is not broken. (In practice, this requires a `pnpm install` / `pnpm check`, but we will just ensure the file is valid JSON).

## Steps
- Replace the dependencies block in `package.json` to omit the `@fontsource-variable` packages.