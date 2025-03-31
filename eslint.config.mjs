import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const eslintPluginTypescript = require("@typescript-eslint/eslint-plugin");
const eslintParser = require("@typescript-eslint/parser");

export default [
  {
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "@typescript-eslint": eslintPluginTypescript,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "import/no-default-export": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "MemberExpression[object.meta.name='import'][object.property.name='meta'][property.name='env']",
          message:
            "The use of import.meta.env is not allowed. Use import { env } from '@/shared/lib'",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@/shared/lib/server",
              message: "Don't use server modules in client code",
            },
            {
              name: "react-router-dom",
              importNames: ["useParams"],
              message:
                "Use `import { useTypedParams } from @/shared/lib/router` instead.",
            },
          ],
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "*.css",
              group: "index",
              patternOptions: {
                matchBase: true,
              },
              position: "after",
            },
            {
              pattern: "@/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {// Автоматически определяет версию React
      },
    },
  },
];
