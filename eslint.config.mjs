import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    {ignores: ["node_modules", "dist", ".out", ".d.ts", "build", "coverage", "babel.config.js", "jest.config.js", "tsconfig.json"]},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
