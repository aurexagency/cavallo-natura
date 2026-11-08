import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // I testi sono in italiano: gli apostrofi nel JSX sono voluti e sicuri.
      // Restano vietati solo i caratteri che indicano davvero un errore di markup.
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
      // Consente il pattern `const { a, b, ...rest } = props` per escludere props
      "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
