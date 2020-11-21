module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  modulePaths: ["src/"],
  testPathIgnorePatterns: ["node_modules"],
  verbose: true,
  globalSetup: "./test/globalSetup.js",
  globalTeardown: "./test/globalTeardown.js",
  testTimeout: 60000,
};
