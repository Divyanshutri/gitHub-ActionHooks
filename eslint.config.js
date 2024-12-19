import globals from "globals";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser, // Add browser globals
      },
    },
    rules: {
      "no-console": "warn",
      "no-eval": "error",
      "no-shadow": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      "no-duplicate-imports": "warn",
      "quote-props": "off",
      camelcase: "warn",
      "no-multi-assign": "warn",
      "no-mixed-operators": "warn",
      "new-cap": "error",
      "object-shorthand": "warn",
      "prefer-template": "warn",
      "max-params": ["warn", 4],
      "id-length": ["warn", { min: 2, max: 40 }],
      "no-else-return": "warn",
      "default-param-last": "warn",
      "no-undef": "warn",
      "no-unused-vars": "error",
      semi: ["warn", "never"],
    },
  },
];
