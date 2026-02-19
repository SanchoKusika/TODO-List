import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores(["node_modules", "dist", "public"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		plugins: {
			import: importPlugin,
			prettier: prettierPlugin,
			"simple-import-sort": simpleImportSort,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2025,
			},
		},
		rules: {
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"react-hooks/exhaustive-deps": "off",
			"react-hooks/set-state-in-effect": "off",
			"no-undef": "warn",
			"newline-before-return": "warn",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					vars: "all",
					args: "after-used",
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: false,
				},
			],
			"@typescript-eslint/ban-ts-comment": "warn",
			"prettier/prettier": "warn",
			"simple-import-sort/imports": "warn",
			"simple-import-sort/exports": "warn",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
		},
	},
]);
