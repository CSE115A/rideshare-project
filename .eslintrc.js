module.exports = {
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-var": "error",
    "prettier/prettier": "error",
  },
  extends: [
    "plugin:prettier/recommended",
    "react-app",
    "eslint:recommended",
    "prettier",
  ],
};
