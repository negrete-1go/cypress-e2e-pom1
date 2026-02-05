const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {

    baseUrl: "https://example.cypress.io",
    
    video: false,
    screenshotOnRunFailure: true,

    retries: {
      runMode: 2,
      openMode: 0
    },

    testIsolation: true,
  
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
