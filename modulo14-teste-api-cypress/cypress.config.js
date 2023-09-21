const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    reporter: "mochawesome",
    reporterOptions: {
      "reporterOptions": {
        "reportDir": "mochawesome-report",
        "overwrite": false,
        "html": false,
        "json": true,
        "reportFilename": "[status]_[datetime]-[name]-report",
        "timestamp": "shortdate",
        "quiet": true
    }
  },
}});
