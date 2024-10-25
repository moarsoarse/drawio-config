import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import es from "eslint-plugin-es-x";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";


export default [
    {
    ignores: ["**/serviceWorker.ts"],
},
    js.configs.recommended,
    es.configs.all,
    react.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        plugins: {
            es: es,
            tseslint: tseslint,
            react: react,
            prettier: prettierPlugin
        },
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
        "react/prop-types": 0,
    },
}, {
    files: ["**/*.ts?(x)"],

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
    },
}];