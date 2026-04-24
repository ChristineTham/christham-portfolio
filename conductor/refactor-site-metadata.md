# Refactor Site Constants into `site-metadata.ts`

## Background & Motivation
The `src/components/Footer.astro` file currently contains hardcoded URLs for the GitHub repository and the author's website. Centralizing these links into `src/lib/site-metadata.ts` ensures that all site-wide constants are managed in a single place. The content files (`about.md` and `contact.md`) also contain hardcoded profile links, but per user preference, they will remain as standard markdown files and will not be updated to use the metadata variables.

## Scope & Impact
- **`src/lib/site-metadata.ts`**: Expand the `siteMetadata` object to include additional site-wide constants and profile links.
- **`src/components/Footer.astro`**: Update the component to pull the repository and author URLs from `site-metadata.ts`.

## Proposed Solution
1. **Update `src/lib/site-metadata.ts`**:
   Add the following properties to the `siteMetadata` object:
   - `repoUrl: 'https://github.com/ChristineTham/christham-portfolio'`
   - `authorUrl: 'https://hellotham.com'`
   - `authorName: 'Hello Tham Pty Ltd'`
   - A `social` object containing profile links:
     - `email: 'chris.tham@hellotham.com'`
     - `github: 'https://github.com/ChristineTham'`
     - `linkedin: 'https://www.linkedin.com/in/christham/'`
     - `facebook: 'https://www.facebook.com/chris1.tham'`

2. **Update `src/components/Footer.astro`**:
   - Import `siteMetadata` from `../lib/site-metadata`.
   - Replace the hardcoded GitHub repository URL with `siteMetadata.repoUrl`.
   - Replace the hardcoded "Hello Tham Pty Ltd" text and URL with `siteMetadata.authorName` and `siteMetadata.authorUrl`.

## Verification
- Run `pnpm check` and `pnpm lint` to ensure there are no TypeScript or linting errors.
- Run `pnpm test` to ensure existing tests (such as content-structure tests) pass successfully.
