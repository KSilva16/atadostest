const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.atados.com.br/",
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    waitForAnimations: false,
    setupNodeEvents(on, config) {
    }
  },
  env: {
    CYPRESS_INTERNAL_API_LOG: false
  }
});
