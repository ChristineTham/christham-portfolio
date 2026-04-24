# Update Version and Documentation

## Background
The project has undergone several recent updates, including simplifying components, migrating to Tailwind CSS v4, and refactoring site constants. We need to bump the version to 2.0.1 in `package.json` and update the documentation (`AGENTS.md` and `README.md`) to reflect these changes.

## Proposed Changes

1.  **`package.json`**:
    -   Update `"version": "2.0.0"` to `"version": "2.0.1"`.

2.  **`AGENTS.md`**:
    -   Update the "Project Structure" section to mention `src/lib/site-metadata.ts` and `src/scripts/lib/scraper.ts`.
    -   Mention Tailwind v4 usage in the "Workspace Guidance".

3.  **`README.md`**:
    -   Update the "Migration Status" to include a note about the Tailwind v4 migration.
    -   Update the "Current Project Structure" tree to reflect the new `src/scripts/lib/scraper.ts` file and the fact that `ProseLite.astro` was removed (if it was there, but it wasn't).

## Steps

I will edit `package.json`, `AGENTS.md`, and `README.md` sequentially to apply these updates.