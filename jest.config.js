module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  modulePaths: ["src/"],
  testPathIgnorePatterns: ["node_modules"],
  verbose: true,
  globalSetup: "./testing/globalSetup.js",
  globalTeardown: "./testing/globalTeardown.js",
  testTimeout: 60000,
};
