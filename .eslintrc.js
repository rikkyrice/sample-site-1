module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript",
    // "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'space-before-function-paren': 'off',
    'keyword-spacing': 'off',
    indent: 'off',
    'comma-dangle': 'off',
    semi: 'off',
  },
};
