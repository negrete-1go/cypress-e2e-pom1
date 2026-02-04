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

    baseUrl: "https://www.epam.com",
    
    video: false,
    screenshotOnRunFailure: true,

    retries: {
      runMode: 2,
      openMode: 0
    },

    testIsolation: true,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
