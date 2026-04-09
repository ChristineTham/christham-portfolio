import betterTailwindcss from "eslint-plugin-better-tailwindcss";

const eslintConfig = [
  // Tailwind CSS linting: load the plugin with its recommended rules.
  betterTailwindcss.configs.recommended,
  {
    // Point to the Tailwind v4 CSS entry so the plugin can resolve all
    // generated utilities (including theme overrides defined in @theme {}).
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/styles/global.css",
      },
    },
    rules: {
      // Custom plain-CSS classes defined outside @layer utilities are not
      // registered in Tailwind's utility set, so the no-unknown-classes rule
      // would flag them as unknown.  Ignore them explicitly.
      "better-tailwindcss/no-unknown-classes": [
        "error",
        {
          ignore: [
            "animate-up-down",
            "animate-up-down-wide",
            "contact-wave-wrapper",
            "projects-grid",
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
