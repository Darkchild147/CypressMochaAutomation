const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesom-report',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/testcases/*.cy.js',
    baseUrl: 'http://automationpractice.com',
  },
})


