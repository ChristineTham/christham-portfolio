import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
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
  {
    rules: {
      // Several components use native <img> for decorative SVG backgrounds
      // where next/image provides no optimisation benefit.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
