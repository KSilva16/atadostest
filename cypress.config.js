module.exports = {
    e2e: {
      baseUrl: "https://www.atados.com.br/",
      chromeWebSecurity: false,
      setupNodeEvents(on, config) {
        // Add any node event setup you need here
      }
    },
    env: {
      CYPRESS_INTERNAL_API_LOG: false
    }
  }