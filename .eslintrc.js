module.exports = {
  plugins: ["prettier", "jest"],
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
    "prettier/prettier": "error"
  },
  extends: [
    "plugin:prettier/recommended",
    "react-app",
    "plugin:jest/recommended",
    "eslint:recommended",
    "prettier",
  ],
};
