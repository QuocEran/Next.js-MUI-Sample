module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals"],
  overrides: [],
  parserOptions: {
    project: "tsconfig.eslint.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: "18.2.0",
    },
  },
};
