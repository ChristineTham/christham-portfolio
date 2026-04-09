import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Tailwind CSS linting: load the plugin with its recommended rules.
  betterTailwindcss.configs.recommended,
  {
    // Point to the Tailwind v4 CSS entry so the plugin can resolve all
    // generated utilities (including theme overrides defined in @theme {}).
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles/global.css',
      },
    },
    rules: {
      // Keep lint signal focused on correctness rather than class wrapping style.
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/no-unnecessary-whitespace': 'off',

      // Custom plain-CSS classes defined outside @layer utilities are not
      // registered in Tailwind's utility set, so the no-unknown-classes rule
      // would flag them as unknown. Ignore them explicitly.
      'better-tailwindcss/no-unknown-classes': [
        'error',
        {
          ignore: [
            'animate-up-down',
            'animate-up-down-wide',
            'contact-wave-wrapper',
            'projects-grid',
          ],
        },
      ],
    },
  },
]
