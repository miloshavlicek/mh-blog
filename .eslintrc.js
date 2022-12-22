module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
