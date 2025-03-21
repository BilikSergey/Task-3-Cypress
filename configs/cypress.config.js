const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4uhbkt",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://telnyx.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
