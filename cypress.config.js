module.exports ({
  e2e: {
    baseUrl: "https://www.atados.com.br/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    }
  },
  env: {
    CYPRESS_INTERNAL_API_LOG: false
  }
});
