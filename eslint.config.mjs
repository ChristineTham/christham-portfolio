import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Several components use native <img> for decorative SVG backgrounds
      // where next/image provides no optimisation benefit.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
