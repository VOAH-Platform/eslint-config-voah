const eslintrc = require("./.eslintrc.js");

module.exports = Object.assign({}, eslintrc, {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
  ],
  plugins: ["react", "import", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    React: true,
  },
});
