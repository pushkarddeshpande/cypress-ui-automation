const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  numTestsKeptInMemory: 0,
  animationDistanceThreshold: 5,
  waitForAnimations: true,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  viewportHeight: 1200,
  viewportWidth: 1920,
  modifyObstructiveCode: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 1,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    testIsolation: false,    
    specPattern: 'cypress/e2e/**/*.js',
    experimentalWebKitSupport: true,    
    experimentalMemoryManagement: true
  },
})
