import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
<<<<<<< HEAD
=======
import eslintConfigPrettier from "eslint-config-prettier";
>>>>>>> 12ea9a5 (primera actualizacion del front)

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
<<<<<<< HEAD
=======
  ...eslintConfigPrettier,
>>>>>>> 12ea9a5 (primera actualizacion del front)
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
