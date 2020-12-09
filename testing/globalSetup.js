/*
 * Starts the dev server before all tests start
 */
const { setup: setupDevServer } = require("jest-dev-server");

module.exports = async () => {
  await setupDevServer({
    command: "yarn build && yarn serve -s build -l 3000",
    launchTimeout: 30000,
    debug: true,
    port: 3000,
  });
};
