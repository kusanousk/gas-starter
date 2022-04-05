module.exports = {
  env: {
    es2021: true,
    node: true,
    "googleappsscript/googleappsscript": true,
    "jest/globals": true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "googleappsscript", "jest"],
  rules: {
    "no-useless-constructor": "off",
  },
};
