const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4uhbkt',
  chromeWebSecurity: false,
  viewportWidth: 1200,
  viewportHeight: 1920,
  e2e: {
    baseUrl: "https://telnyx.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
