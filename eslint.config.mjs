import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: ["storybook-static/**"]
  },
  ...nextCoreWebVitals,
  ...nextTypescript
];

export default eslintConfig;
