# Tailwind v4 Migration Plan

## Background & Motivation
The project uses Tailwind CSS v4, but still contains some legacy v3 patterns, such as defining `@keyframes` outside of the `@theme` block and using arbitrary values in classes (e.g., `animate-[...]` and `text-[#...]`). To fully leverage Tailwind v4's CSS-first configuration and simplify the code, we can migrate these to use standard theme tokens and variables.

## Scope & Impact
- **`src/styles/global.css`**: Move `@keyframes` into the `@theme` block and define `--animate-up-down` and `--animate-up-down-wide` variables.
- **Astro Components** (`About.astro`, `Contact.astro`, `Hero.astro`, `Projects.astro`): Replace arbitrary animation classes with their respective theme-based animation classes.
- **`src/components/Projects.astro`**: Replace the arbitrary hex color class `text-[#f7caca]` with the mapped CSS variable `text-(--rosely4)`.

## Proposed Solution

1. **Update `src/styles/global.css`**:
   - Move the `up-down` and `up-down-wide` `@keyframes` definitions into the `@theme` block.
   - Define custom animation variables within the `@theme` block:
     ```css
     --animate-up-down: up-down 4s ease-in-out infinite alternate;
     --animate-up-down-wide: up-down-wide 18s ease-in-out infinite alternate;
     ```
   - Remove the old `@keyframes` declarations from the bottom of the file.

2. **Update Astro Components**:
   - Replace `animate-[up-down_4s_ease-in-out_infinite_alternate]` with `animate-up-down`.
   - Replace `animate-[up-down-wide_18s_ease-in-out_infinite_alternate]` with `animate-up-down-wide`.
   - In `Projects.astro`, replace `[&_h2]:text-[#f7caca]` with `[&_h2]:text-(--rosely4)`.

## Verification & Testing
- Run `pnpm check` and `pnpm lint` to ensure no syntax errors.
- Run `pnpm build` or start `pnpm dev` locally to confirm animations and colors apply correctly.
- Ensure no remaining `-[` patterns exist for sizing or colors in the `src` directory (already verified via grep).
